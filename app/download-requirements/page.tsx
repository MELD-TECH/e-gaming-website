"use client";
import Image from "next/image"

const Page = () => {
    return(
        <div className="w-[91.5%] m-auto flex flex-col gap-[52px] mb-[52px]">
            <header className="flex flex-col gap-6 md:w-[70%] md:m-auto mt-4 md:mt-10 text-center max-w-[900px]">
                <h4 className="font-inter font-semibold text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] text-[#056232] md:text-[#019934] text-center leading-[33.6px]">Gaming Requirements</h4>
                <p className="font-inter font-normal text-sm text-[#344054] leading-[20.3px]">The Enugu State Gaming Commission (ESGC) is a commission established to regulate all gaming and lottery activities in Enugu state. The Commission is responsible for the issuance of licenses to proprietors of all gaming and lottery categories, registration of gaming and lottery agents, monitoring and inspection activities, as well as enforcement of compliance to the set rules and regulations</p>
            </header>
            <main className="max-w-[500px] m-auto md:w-[70%]">
                <ol className="list-decimal w-[91.5%] m-auto space-y-[24px]">
                    <div className="flex flex-row justify-between items-center gap-[31px] font-normal font-inter text-base md:text-sm lg:text-base leading-[23.2px] text-[#1D2739]"><li className="">Casino and Gaming Machine Licensee Requirement</li><a className="shrink-0" href="/CASINO_AND_GAMING_MACHINE[1].pdf" download="CASINO_AND_GAMING_MACHINE[1].pdf"><Image src='/download-circle-02.svg' alt="download" width={16} height={16}/></a></div>
                    <div className="flex flex-row justify-between items-center gap-[31px] font-normal font-inter text-base md:text-sm lg:text-base leading-[23.2px] text-[#1D2739]"><li>Gaming Machine License Requirement</li><a className="shrink-0" href="/GAMING_MACHINE_REQUIREMENT_cc[1].pdf" download="GAMING_MACHINE_REQUIREMENT_cc[1].pdf"><Image src='/download-circle-02.svg' alt="download" width={16} height={16}/></a></div>
                    <div className="flex flex-row justify-between items-center gap-[31px] font-normal font-inter text-base md:text-sm lg:text-base leading-[23.2px] text-[#1D2739]"><li>Lotto public and Online Games</li><a className="shrink-0" href="/LOTTO_PUBLIC_ONLINE_GAME[1].pdf" download="LOTTO_PUBLIC_ONLINE_GAME[1].pdf"><Image src='/download-circle-02.svg' alt="download" width={16} height={16}/></a></div>
                    <div className="flex flex-row justify-between items-center gap-[31px] font-normal font-inter text-base md:text-sm lg:text-base leading-[23.2px] text-[#1D2739]"><li>Pools Betting License Requirement</li><a className="shrink-0" href="/POOLS_BETTING[2].pdf" download="POOLS_BETTING[2].pdf"><Image src='/download-circle-02.svg' alt="download" width={16} height={16}/></a></div>
                    <div className="flex flex-row justify-between items-center gap-[31px] font-normal font-inter text-base md:text-sm lg:text-base leading-[23.2px] text-[#1D2739]"><li>Requirement for Promotional Lottery/Competition</li><a className="shrink-0" href="/REQUIREMENT_FORM FOR PROMOTIONAL GAMES[1].pdf" download="REQUIREMENT_FORM FOR PROMOTIONAL GAMES[1].pdf"><Image src='/download-circle-02.svg' alt="download" width={16} height={16}/></a></div>
                    <div className="flex flex-row justify-between items-center gap-[31px] font-normal font-inter text-base md:text-sm lg:text-base leading-[23.2px] text-[#1D2739]"><li>Requirement for Scratch Card and Interactive Games</li><a className="shrink-0" href="/SCRACTCH_CARD[1].pdf" download="SCRACTCH_CARD[1].pdf"><Image src='/download-circle-02.svg' alt="download" width={16} height={16}/></a></div>
                    <div className="flex flex-row justify-between items-center gap-[31px] font-normal font-inter text-base md:text-sm lg:text-base leading-[23.2px] text-[#1D2739]"><li>Requirement for Sports Betting License</li><a className="shrink-0" href="/SPORTS_BETTING[1].pdf" download="SPORTS_BETTING[1].pdf"><Image src='/download-circle-02.svg' alt="download" width={16} height={16}/></a></div>
                </ol>
            </main>
        </div>
    )
}

export default Page