'use client';

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation';

const Navbar=()=>{
    const [showMenu, setShowMenu] = useState(false)
    const [showSupport, setShowSupport] = useState(false)
    const pathname = usePathname();
    const isContactPage = pathname === '/contact';
    const isHomePage = pathname === '/';

    // const router = useRouter();

  
    const openMenu = () => setShowMenu(true)

    const toggleSupport = () => setShowSupport(prev=>!prev)
    
    const closeMenu = () => setShowMenu(false);
    
    useEffect(() => {
        setShowMenu(false)
        setShowSupport(false)
    }, [pathname]);

    return(
        <nav className={`${isContactPage ? '' : isHomePage ? 'bg-transparent' : 'mb-[30px]'} relative z-[100] h-[80px] nav-bar`}>
            {/* Mobile menu */}
            <div className={`fixed top-0 left-0 w-full bg-white h-full transform transition-transform duration-300 ease-in-out ${showMenu ? "translate-x-0" : "-translate-x-full"
           }`}>
                <div className={`${isContactPage? '' : 'border-b-[0.5px] z-50'} w-[91.5%] m-auto border-[#667185] flex justify-between items-center h-[70px]`}>
                    <div className="w-[32px] h-[37px]">
                        <Image src='/ESGC logo.svg' alt="logo" width={32} height={37}/>
                    </div>
                    <div className="w-[32px] h-[32px] flex justify-center items-center">
                        {showMenu && <Image onClick={closeMenu} src='/close.svg' alt="close" width={24} height={13.33}/>}
                    </div>
                </div>
                <div className="px-4 py-4 z-10 bg-white flex flex-col space-y-8 border-b border-[#667185] h-[calc(100vh_-_70px)]">
                    <div className="pt-6">
                        <ul className="flex flex-col space-y-4">
                            <li className={`${pathname === '/' ? 'bg-[#37815B] bg-opacity-60 p-1 rounded-sm' : ''} font-inter text-sm font-medium text-[#1D2739]`}><Link href='/'>Home</Link></li>
                            <li className={`${pathname === '/about' ? 'bg-[#37815B] bg-opacity-60 p-1 rounded-sm' : ''} font-inter text-sm font-medium text-[#1D2739]`}><Link href='/about'>About Us</Link></li>
                            <li className={`${pathname === '/download-requirements' ? 'bg-[#37815B] bg-opacity-60 px-1' : ''} font-inter text-sm font-medium text-[#1D2739]`}><Link href='/download-requirements'>Download Requirements</Link></li>
                            <li className={`${pathname === '/contact' || pathname === '/faq' || pathname === '/complaint' ? 'bg-[#37815B] bg-opacity-60 p-1 rounded-sm' : ''} font-inter text-sm font-medium text-[#1D2739] relative flex items-center gap-[10px]`} onClick={toggleSupport}>
                            Support
                                <Image
                                    src="/dropdown.svg"
                                    alt="dropdown"
                                    width={9.5}
                                    height={4.81}
                                    className={`cursor-pointer transition-transform duration-300 ${
                                    showSupport ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                                {showSupport && (
                                    <div
                                    className={`absolute top-[100%] p-4 gap-[10px] bg-white flex flex-col items-center rounded shadow-lg w-[200px] transition-all duration-300 transform ${
                                        showSupport ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                                    }`}
                                    >
                                    <Link
                                        href="/contact"
                                        className="w-full py-2 border-b border-b-[#98A2B3] font-inter font-medium text-sm text-[#1D2739] leading-[16.94px]"
                                    >
                                        Contact Us
                                    </Link>
                                    <Link
                                        href="/faq"
                                        className="w-full py-2 border-b border-b-[#98A2B3] font-inter font-medium text-sm text-[#1D2739] leading-[16.94px]"
                                    >
                                        FAQ
                                    </Link>
                                    <Link
                                        href="/complaint"
                                        className="w-full py-2 font-inter font-medium text-sm text-[#1D2739] leading-[16.94px]"
                                    >
                                        Complaint
                                    </Link>
                                    </div>
                                )}
                            </li>
                            <li className={`${pathname === '/gallery' ? 'bg-[#37815B] bg-opacity-60 p-1 rounded-sm' : ''} font-inter text-sm font-medium text-[#1D2739]`}><Link href='/gallery'>Gallery</Link></li>
                            <li className={`${pathname === '/legislation' ? 'bg-[#37815B] bg-opacity-60 p-1 rounded-sm' : ''} font-inter text-sm font-medium text-[#1D2739]`}><Link href='legislation'>Legislation</Link></li>
                        </ul>
                    </div>
                    <button className="bg-[#056232] font-inter text-sm font-medium text-[#F9FAFB] w-[150px] py-[8px] h-[36px] rounded">Login as Admin</button>
                </div>
            </div>
           {/* Desktop menu*/}
            <div className={`${isContactPage ? '' : 'border-b-[0.5px]'} w-[91.5%] m-auto py-[12.5px] border-[#667185] flex justify-between items-center nav-inner h-full`}>
                <div className="flex items-center md:w-[80%] md:space-x-8 lg:space-x-[13.9%] lg:w-[797px]">
                    <div className="w-[32px] h-[37px]">
                        <Image src='/ESGC logo.svg' alt="logo" width={32} height={37}/>
                    </div>
                    <ul className="flex items-center nav-headers nav-content">
                        <li className={`${isHomePage ? 'text-[#F9FAFB]': 'text-[#1D2739]'} ${pathname === '/' ? 'active-desktop':''} font-inter text-sm font-medium`}><Link href='/'>Home</Link></li>
                        <li className={`${isHomePage ? 'text-[#F9FAFB]': 'text-[#1D2739]'} ${pathname === '/about' ? 'active-desktop':''} font-inter text-sm font-medium`}><Link href='/about'>About Us</Link></li>
                        <li className={`${isHomePage ? 'text-[#F9FAFB]': 'text-[#1D2739]'} ${pathname === '/download-requirements' ? 'active-desktop':''} font-inter text-sm font-medium`}><Link href='/download-requirements'>Download Requirements</Link></li>
                        <li onClick={toggleSupport} className={`${isHomePage ? 'text-[#F9FAFB]': 'text-[#1D2739]'} ${pathname === '/contact' || pathname === '/faq' || pathname === '/complaint' ? 'active-desktop':''} font-inter text-sm font-medium relative flex items-center justify-center gap-[10px] cursor-pointer`}>
                            Support <Image
                                src={isHomePage ? '/dropdown2.svg': '/dropdown.svg'} 
                                alt="dropdown" 
                                width={9.5} 
                                height={4.81}
                                className={`cursor-pointer transition-transform duration-300 ${
                                    showSupport ? "rotate-180" : "rotate-0"
                                }`}
                             />
                            {showSupport && <div className={`absolute top-[100%] md:w-[200%] p-4 gap-[10px] bg-white flex flex-col items-center rounded shadow-[4px_4px_4px_0px_#0000001A]  transition-all duration-300 transform ${
                                        showSupport ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                                    }`}>
                                    <Link href='/contact' className="w-full py-2 border-b border-b-[#98A2B3] font-inter font-medium text-sm text-[#1D2739] leading-[16.94px]">Contact Us</Link>
                                    <Link href='/faq' className="w-full py-2 border-b border-b-[#98A2B3] font-inter font-medium text-sm text-[#1D2739] leading-[16.94px]">FAQ</Link>
                                    <Link href='/complaint' className="w-full py-2 font-inter font-medium text-sm text-[#1D2739] leading-[16.94px]">Complaint</Link>
                                </div>}
                        </li>
                        <li className={`${isHomePage ? 'text-[#F9FAFB]': 'text-[#1D2739]'} ${pathname === '/gallery' ? 'active-desktop':''} font-inter text-sm font-medium`}><Link href='/gallery'>Gallery</Link></li>
                        <li className={`${isHomePage ? 'text-[#F9FAFB]': 'text-[#1D2739]'} ${pathname === '/legislation' ? 'active-desktop':''} font-inter text-sm font-medium`}><Link href='legislation'>Legislation</Link></li>
                    </ul>
                </div>
                <div className="nav-content">
                    <button className="bg-[#056232] font-inter text-sm font-medium text-[#F9FAFB] px-[18px] py-[8px] rounded nav-btn">Login as Admin</button>
                </div>
                <div className="w-[32px] h-[32px] flex justify-center items-center hide-content">
                    {!showMenu && <Image onClick={openMenu} src={isHomePage ? '/hamburger2.svg':'/hamburger.svg'} alt="menu" width={24} height={13.33}/>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar