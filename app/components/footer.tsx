"use client"
import Image from "next/image"
import Link from "next/link";


const Footer=()=>{
    return(
        <div className="bg-[#121212] md:space-y-[40px]">
            <div className="pt-[37.41px] text-center md:max-w-[337px] md:m-auto md:pt-[64px]">
                <p className="font-inter text-center font-semibold text-xs text-[#F7F9FC] leading-[14.4px] tracking-wider">REACH OUT TO US</p>
                <h4 className="font-inter text-center font-semibold text-xl text-white mt-[8px] leading-[24px] footer-h4">Enugu State Gaming and Lotto Commission</h4>
                <button className="bg-[#056232] py-[8px] px-[47px] text-[#F9FAFB] font-inter font-medium text-sm mt-[24px] md:mt-[32px] mb-[26px] rounded h-[47px] leading-[20.3px]"><Link rel="noopener noreferrer" href='/contact'>Contact Us</Link></button>
            </div>
            <div className="pt-[37.41px] flex flex-col items-center justify-center gap-4 border-t border-[#667185] footer-bottom">
                <Link rel="noopener noreferrer" href="/" className="w-[40px] h-[56.59px]">
                    <Image src='/ESGC logo.svg' alt="logo" width={40} height={56.59}/>
                </Link>
                <p className="font-inter text-center text-[#667185] font-normal text-base leading-[23.2px]">&copy; {new Date().getFullYear()} ESGC. All rights reserved.</p>
                <div className="flex flex-row items-center justify-center gap-2 mb-[8px]">
                    <Link rel="noopener noreferrer" target="_blank" href='https://www.facebook.com/profile.php?id=61558497656512&mibextid=LQQJ4d' className="flex items-center justify-center bg-[#00987F33] rounded-full w-8 h-8"><Image src='/facebook.svg' alt="facebook" width={12} height={12}/></Link>
                    <Link rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/enugustategamingcommission?igsh=MW5yOWx6cWs0dDlvYg==' className="flex items-center justify-center bg-[#00987F33] rounded-full w-8 h-8"><Image src='/instagram.svg' alt="instagram" width={12.45} height={12.45}/></Link>
                    <Link rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/company/enugu-state-gaming-commission/' className="flex items-center justify-center bg-[#00987F33] rounded-full w-8 h-8"><Image src='linkedin.svg' alt="linkedin" width={12} height={12}/></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer