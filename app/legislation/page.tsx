import Image from "next/image"

const Page=()=>{
    return(
        <div className="w-[91.5%] m-auto max-w-[992px] mt-4 md:mt-10">
            <div className="flex flex-col gap-6 text-center">
                <h4 className="font-inter font-semibold text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] text-[#056232] md:text-[#019934] text-center leading-[33.6px]">Legislation</h4>
                <p className="font-inter font-normal text-sm lg:text-base xl:text-lg text-[#344054] leading-[20.3px]">The Enugu State Gaming Commission (ESGC) is a commission established to regulate all gaming and lottery activities in Enugu state. The Commission is responsible for the issuance of licenses to proprietors of all gaming and lottery categories, registration of gaming and lottery agents, monitoring and inspection activities, as well as enforcement of compliance to the set rules and regulations</p>
            </div>
            <a href="/ESGC LAW.pdf" download="ESGC LAW.pdf" className="font-inter flex gap-[10px] items-center justify-center my-[52px] font-semibold text-lg md:text-base lg:text-lg xl:text-xl leading-[26.1px]">
                Download Gaming Law <Image src='/download-circle-02.svg' alt="download" width={16} height={16}/>
            </a>
        </div>
    )
}

export default Page