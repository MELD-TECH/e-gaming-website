'use client'

import Image from "next/image"
import Link from "next/link";

const ContactCard=()=>{
    return(
        <div className="bg-[#056232] py-[25px] rounded-2xl">
            <div className="w-[88.7%] m-auto space-y-[16px]">
                <h3 className="font-inter font-medium text-lg md:text-base lg:text-xl xl:text-2xl text-center text-white leading-[26.1px]">Contact Us</h3>
                <div>
                    <Link rel="noopener noreferrer" className="font-inter font-medium text-sm md:text-xs lg:text-base xl:text-lg text-white leading-[20.3px] underline flex items-center gap-[10px] py-2 break-all" target="_blank" href='mailto:Gamingcommission@enugustate.gov.ng'><p className="w-[13.5px] h-[10.5px] shrink-0"><Image src='/mail.svg' alt="mail" width={13.5} height={10.5}/></p>Gamingcommission@enugustate.gov.ng</Link>
                    <div className="font-inter font-medium text-sm md:text-xs lg:text-base xl:text-lg text-white leading-[20.3px] flex items-center gap-[10px] py-2"><p className="w-[16.13px] h-[16.13px] shrink-0"><Image src='/telephone.svg' alt="telephone" width={16.13} height={16.13}/></p>0805 732 2877</div>
                    <div className="font-inter font-medium text-sm md:text-xs lg:text-base xl:text-lg text-white leading-[20.3px] flex items-start gap-[10px] py-2"><p className="w-[11.63px] h-[16.13px] shrink-0"><Image src='/location.svg' alt="location" width={11.63} height={16.13}/></p>Located in: Old CCB Building <br/>Address: First Floor, Old CCB Building, Left Wing, 28 Okpara Avenue, Enugu 400102, Enugu</div>
                </div>
                <div>
                    <Link rel="noopener noreferrer" className="font-inter font-medium text-sm md:text-xs lg:text-base xl:text-lg text-white leading-[20.3px] underline flex gap-[10px] py-2 break-all" target="_blank" href='https://www.linkedin.com/company/enugu-state-gaming-commission/'><div className="w-[20px] h-[20px] shrink-0"><Image src='/linkedin2.svg' alt="linkedin" width={20} height={20}/></div>linkedin.com/ESGC</Link>
                    <Link rel="noopener noreferrer" className="font-inter font-medium text-sm md:text-xs lg:text-base xl:text-lg text-white leading-[20.3px] underline flex gap-[10px] py-2" target="_blank" href='https://www.facebook.com/profile.php?id=61558497656512&mibextid=LQQJ4d'><div className="w-[22] h-[21.87px] shrink-0"><Image src='/facebook2.svg' alt="facebook" width={22} height={21.87}/></div>@Enugu State Gaming Commission </Link>
                    <Link rel="noopener noreferrer" className="font-inter font-medium text-sm md:text-xs lg:text-base xl:text-lg text-white leading-[20.3px] underline flex gap-[10px] py-2 break-all" target="_blank" href='https://www.instagram.com/enugustategamingcommission?igsh=MW5yOWx6cWs0dDlvYg=='><div className="w-[20.5px] h-[20.5px] shrink-0"><Image src='/instagram2.svg' alt="instagram" width={20.5} height={20.5}/></div>@enugustategamingcommission</Link>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;