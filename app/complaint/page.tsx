'use client';

import {useState, useEffect, Fragment, ChangeEvent} from "react";

import { Toaster, toast } from 'sonner';


    // Define the expected response type
    interface ApiResponse {
        message: string;
      }

const Page = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        phone: '',
        state: '',
        date: '',
        time: '',
        address: '',
        operator_name: '',
        complaint: '',
    });
    const [betSlip, setBetSlip] = useState<File | null>(null);
    const [betSlipName, setBetSlipName] = useState<string>('');
    const [loading, setLoading] = useState(false); // Loading state
    const [isSuccess, setIsSuccess] = useState(false);
    const {
        first_name,
        email,
        phone,
        state,
        date,
        time,
        address,
        operator_name,
        complaint } = formData

    const selectFile = () => {
        document.getElementById('bet_slip')?.click();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            const file = e.target.files[0];
            setBetSlip(file);
            setBetSlipName(file.name);
        }
    };

  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const toastId = toast.loading("Sending your message, please wait...");
        setLoading(true);
    
        const data = new FormData();
    
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });
        
        if (betSlip) {
            data.append('file', betSlip);
        }

        if(!first_name || !email || !phone || !state || !date || !time || !address || !operator_name || !complaint){
            toast.error("Please make sure all input values are filled.", {
                id: toastId,
            });
            setLoading(false)
            return;
        }

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                body: data,
            });
    
            // Ensure the response is typed
            const result: ApiResponse = await response.json();
    
            if (!response.ok) {
                throw new Error(result.message || "Failed to send email");
            }
    
            toast.success(result.message || 'Email sent successfully!', {
                id: toastId,
            });
            setIsSuccess(true);
        } catch (error: unknown) {
            let errorMessage = "There was an error sending your message, please try again later!";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            toast.error(errorMessage, {
                id: toastId,
            });
            setIsSuccess(false);
        } finally {
            setLoading(false);
            setBetSlipName('');
            setBetSlip(null);
        }
    };
    useEffect(() => {
        if(isSuccess){
            // Clear form data after successful submission
            setFormData({
                first_name: '',
                email: '',
                phone: '',
                state: '',
                date: '',
                time: '',
                address: '',
                operator_name: '',
                complaint: '',
            });
            
            // Clear bet slip name as well
            setBetSlipName('');
            // Clear file
            setBetSlip(null)
            // Reset success state after a timeout
            const timeout = setTimeout(() => setIsSuccess(false), 4000);
            return () => clearTimeout(timeout);
        }
    }, [isSuccess]);

    return(
        <Fragment>
            <Toaster richColors={true}/>
                <div className="w-[91.5%] max-w-[662px] m-auto flex flex-col gap-6 mb-[80px] mt-4 md:mt-4">
                <header className="font-inter font-semibold text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] text-[#056232] md:text-[#019934] text-center leading-[33.6px] mb-2 md:mb-2">Complaint</header>
                <main>
                    <form onSubmit={handleSubmit} className="bg-[#F7F9FC] flex flex-col items-start gap-4 p-4 rounded-[5px] max-w-[662px] md:m-auto md:w-[70.2%] lg:w-[60.2%] xl:w-[55.2%]">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="font-inter text-sm font-medium text-[#101928] leading-[20.3px]" htmlFor="first_name">First Name</label>
                            <input onChange={handleChange} value={first_name} className="py-2 px-3 rounded-md border border-[#D0D5DD] font-inter text-sm font-medium text-[#101928] placeholder-[#98A2B3] leading-[20.3px]" type="text" id="first_name" name="first_name" placeholder="First Name"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="font-inter text-sm font-medium text-[#101928] leading-[20.3px]" htmlFor="email">Email Address</label>
                            <input value={email} onChange={handleChange} className="py-2 px-3 rounded-md border border-[#D0D5DD] font-inter text-sm font-medium text-[#101928] placeholder-[#98A2B3] leading-[20.3px]" type="email" id="email" name="email" placeholder="Email Address"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="font-inter text-sm font-medium text-[#101928] leading-[20.3px]" htmlFor="phone">Phone Number</label>
                            <input value={phone} onChange={handleChange} className="py-2 px-3 rounded-md border border-[#D0D5DD] font-inter text-sm font-medium text-[#101928] placeholder-[#98A2B3] leading-[20.3px]" type="text" id="phone" name="phone" placeholder="Phone Number"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="font-inter text-sm font-medium text-[#101928] leading-[20.3px]" htmlFor="state">State of Resident</label>
                            <input value={state} onChange={handleChange} className="py-2 px-3 rounded-md border border-[#D0D5DD] font-inter text-sm font-medium text-[#101928] placeholder-[#98A2B3] leading-[20.3px]" type="text" id="state" name="state" placeholder="State of Resident"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="font-inter text-sm font-medium text-[#101928] leading-[20.3px]" htmlFor="date">Date of Incident</label>
                            <input value={date} onChange={handleChange} className="cursor-pointer py-2 px-3 rounded-md border border-[#D0D5DD] font-inter text-sm font-medium text-[#101928] placeholder-[#98A2B3] leading-[20.3px]" type="date" id="date" name="date" placeholder="Date of incident"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="font-inter text-sm font-medium text-[#101928] leading-[20.3px]" htmlFor="time">Time of Incident</label>
                            <input value={time} onChange={handleChange} className="cursor-pointer py-2 px-3 rounded-md border border-[#D0D5DD] font-inter text-sm font-medium text-[#101928] placeholder-[#98A2B3] leading-[20.3px]" type="time" id="time" name="time" placeholder="Time of incident"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="font-inter text-sm font-medium text-[#101928] leading-[20.3px]" htmlFor="address">Address</label>
                            <textarea value={address} onChange={handleChange} className="max-h-[208px] py-2 px-3 rounded-md border border-[#D0D5DD] font-inter text-sm font-medium text-[#101928] placeholder-[#98A2B3] leading-[20.3px]" id="address" name="address" rows={8} placeholder="Enter address"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="font-inter text-sm font-medium text-[#101928] leading-[20.3px]" htmlFor="operator_name">Name of Operator</label>
                            <input value={operator_name} onChange={handleChange} className="py-2 px-3 rounded-md border border-[#D0D5DD] font-inter text-sm font-medium text-[#101928] placeholder-[#98A2B3] leading-[20.3px]" type="text" id="operator_name" name="operator_name" placeholder="First Name"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="font-inter text-sm font-medium text-[#101928] leading-[20.3px]" htmlFor="complaint">Complaint</label>
                            <textarea value={complaint} onChange={handleChange} className="max-h-[208px] py-2 px-3 rounded-md border border-[#D0D5DD] font-inter text-sm font-medium text-[#101928] placeholder-[#98A2B3] leading-[20.3px]" id="complaint" name="complaint" rows={8} placeholder="Complaint"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="font-inter text-sm font-medium text-[#101928] leading-[20.3px]" htmlFor="bet_slip">Bet Slip</label>
                            <input type="file" id="bet_slip" hidden name="bet_slip" accept='.pdf,.jpg,.jpeg,.png' onChange={handleFileChange}/>
                            <div className="cursor-pointer py-2 px-3 flex items-center gap-[10px] rounded-md border border-[#D0D5DD] font-inter text-xs font-medium text-[#344054] bg-white leading-[17.4px]" onClick={selectFile}>
                                <div className="px-[10px] py-1 border border-[#D0D5DD] rounded font-inter text-xs font-medium text-[#344054] leading-[17.4px]">Upload</div>
                                <span>
                                  {betSlipName ? betSlipName : "Choose File"}
                                </span>
                            </div>
                        </div>
                        <button disabled={loading} className="bg-[#056232] py-[8px] px-[40px] text-[#F9FAFB] font-inter font-medium text-sm mt-[10px] mb-[26px] rounded leading-[20.3px]">{loading ? "Submitting" : "Submit"}</button>
                    </form>
                </main>
            </div>
        </Fragment>
       
    )
}

export default Page