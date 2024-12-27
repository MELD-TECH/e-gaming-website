import { NextResponse } from 'next/server';
import { Client } from 'postmark';

const client = new Client(process.env.POSTMARK_API_KEY as string);

// Maximum file size allowed: 10 MB
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// POST route handler
export async function POST(req: Request) {
  try {
    // Parse the form data
    const formData = await req.formData();
    const fields = Object.fromEntries(formData.entries());
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ message: 'No file uploaded.' }, { status: 400 });
    }

    if (!(file instanceof File)) {
      return NextResponse.json({ message: 'Uploaded file is not valid.' }, { status: 400 });
    }

    // Convert the file blob to a Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    if (buffer.byteLength > MAX_FILE_SIZE) {
      return NextResponse.json({ message: 'File size exceeds the maximum limit of 10 MB.' }, { status: 400 });
    }

    // Construct the email HTML content
    const emailContent = `
      <html>
        <head>
          <style>
            body {
              height: 100vh;
              font-family: Arial, sans-serif;
              color: #333;
              margin: 0;
              padding: 0;
              display: flex;
              align-items: center;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              text-align: center;
              margin-bottom: 20px;
            }
            .header h4 {
              margin-left: 2rem;
            }
            .content {
              margin: 20px 0;
              padding: 15px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .content p {
              margin: 10px 0;
            }
            .footer {
              text-align: center;
              font-size: 12px;
              color: #777;
              margin-top: 20px;
            }
            @media (max-width: 600px) {
              .container {
                padding: 10px;
              }
              .header h4 {
                font-size: 24px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://prince-arinze.github.io/esgc-logo/logo.png" alt="ESGC Logo"/>
              <h4>Complaint Submission</h4>
            </div>
            <div class="content">
              <p><strong>First Name:</strong> ${fields.first_name}</p>
              <p><strong>Email:</strong> ${fields.email}</p>
              <p><strong>Phone:</strong> ${fields.phone}</p>
              <p><strong>State:</strong> ${fields.state}</p>
              <p><strong>Address:</strong> ${fields.address}</p>
              <p><strong>Operator Name:</strong> ${fields.operator_name}</p>
              <p><strong>Complaint:</strong> ${fields.complaint}</p>
            </div>
            <div class="footer">
              <p>Complaint received on ${fields.date} at ${fields.time}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const userEmail =
      typeof fields.email === 'string' && fields.email.trim() !== ''
        ? fields.email
        : (process.env.POSTMARK_TO as string);

    // Send email via Postmark
    await client.sendEmail({
      From: process.env.POSTMARK_FROM as string,
      To: process.env.POSTMARK_TO as string,
      Subject: `Complaint from ${userEmail}`,
      HtmlBody: emailContent,
      TextBody: `Complaint from ${userEmail}`,
      MessageStream: "outbound",
      Attachments: [
        {
          Name: file.name || 'attachment',
          Content: buffer.toString('base64'),
          ContentType: file.type || 'application/octet-stream',
          ContentID: `attachment-${Date.now()}`, // Add a unique ContentID
        },
      ],
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: (error as Error).message || 'Unknown error' }, { status: 500 });
  }
}
