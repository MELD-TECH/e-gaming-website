"use client";
import Image from "next/image";

const Values = () => {
    return (
        <div className="bg-[#056232] flex flex-col items-center py-6 md:py-[32px] lg:py-[45px] xl:py-[57px] values-cover">
            <header className="font-inter font-semibold text-xl md:text-[24px] lg:text-[28px] xl:text-[32px] text-center text-[#F9FAFB] leading-[24px] mb-[40px]">Our Core Values</header>
            <main className="flex flex-col gap-[40px] md:gap-[50px] lg:gap-[72px] xl:gap-[94px] w-[91.5%] max-w-[1334px] md:w-[92.6%] m-auto md:flex-row items-start">
                <section className="flex flex-col items-center md:items-start">
                    <div className="mb-6 w-[48px] h-[47.98px]">
                        <Image src='/Love.svg' alt="love" width={48} height={47.98}/>
                    </div>
                    <p className="text-center md:text-left font-inter font-semibold text-base md:text-xs lg:text-sm xl:text-base text-[#E4E7EC] leading-[23.2px] mb-2">Integrity</p>
                    <p className="text-center md:text-left font-inter font-normal text-base md:text-xs lg:text-sm xl:text-base text-[#D0D5DD] leading-[23.2px]">We uphold the highest ethical standards, ensuring fairness, transparency, and honesty in all our operations and interactions.</p>
                </section>
                <section className="flex flex-col items-center md:items-start">
                    <div className="mb-6 w-[48px] h-[46.93px]">
                        <Image src='/handshake.svg' alt="handshake" width={48} height={46.93}/>
                    </div>
                    <p className="text-center md:text-left font-inter font-semibold text-base md:text-xs lg:text-sm xl:text-base text-[#E4E7EC] leading-[23.2px] mb-2">Teamwork</p>
                    <p className="text-center md:text-left font-inter font-normal text-base md:text-xs lg:text-sm xl:text-base text-[#D0D5DD] leading-[23.2px]">We foster collaboration and unity among stakeholders, partners, and our team to achieve shared goals effectively.</p>
                </section>
                <section className="flex flex-col items-center md:items-start">
                    <div className="mb-6 w-[48px] h-[48.01px]">
                        <Image src='/Lifting.svg' alt="lifting" width={48} height={48.01}/>
                    </div>
                    <p className="text-center md:text-left font-inter font-semibold text-base md:text-xs lg:text-sm xl:text-base text-[#E4E7EC] leading-[23.2px] mb-2">Accountability</p>
                    <p className="text-center md:text-left font-inter font-normal text-base md:text-xs lg:text-sm xl:text-base text-[#D0D5DD] leading-[23.2px]">We take responsibility for our actions and decisions, ensuring they align with our mission to promote a regulated and profitable gaming environment.</p>
                </section>
                <section className="flex flex-col items-center md:items-start">
                    <div className="mb-6 w-[48px] h-[48.19px]">
                        <Image src='/empowerment.svg' alt="empowerment" width={48} height={48.19}/>
                    </div>
                    <p className="text-center md:text-left font-inter font-semibold text-base md:text-xs lg:text-sm xl:text-base text-[#E4E7EC] leading-[23.2px] mb-2">Excellence</p>
                    <p className="text-center md:text-left font-inter font-normal text-base md:text-xs lg:text-sm xl:text-base text-[#D0D5DD] leading-[23.2px]">We strive for continuous improvement, setting high standards in service delivery and regulatory practices to exceed expectations.</p>
                </section>
            </main>
        </div>
    )
}

export default Values;