import Image from "next/image"

const Page = () => {
    return(
        <div className="w-[91.5%] m-auto max-w-[1337px] mt-4 md:mt-10">
            <header className="flex flex-col gap-2">
                <h4 className="font-inter font-semibold text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] text-[#056232] md:text-[#019934] md:text-center leading-[33.6px]">Gallery</h4>
                <p className="font-inter font-normal text-lg text-[#344054] leading-[26.1px] md:text-center">ESGC Events at a glimpse</p>
            </header>
            <main className="mt-[32px] md:mt-[40px] lg:mt-[50px] xl:mt-[60px] mb-[60px]">
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:gap-2 lg:gap-3 xl-gap-4">
                        <p className="font-inter text-lg md:text-base lg:text-xl font-semibold text-[#121212] leading-[26.1px]">Highlights from the Enugu State Gaming Conference!</p>
                        <p className="font-inter font-normal text-base md:text-sm lg:text-base text-[#414141] leading-[23.2px]">Capturing moments of insight, innovation, and excitement</p>
                    </div>
                    <div><Image src='/image 18.svg' alt="conference photo" className=" w-full h-auto hide-content" width={344} height={372}/><Image src='/image 188.svg' alt="conference photo" className=" w-full h-auto nav-content" width={344} height={372}/></div>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className=" w-full"><Image src='/image 19.svg' alt="conference photo" className=" w-full h-auto" width={344} height={372}/></div>
                        <div className=" w-full"><Image src='/image 20.svg' alt="conference photo" className=" w-full h-auto" width={344} height={372}/></div>
                        <div className=" w-full"><Image src='/image 21.svg' alt="conference photo" className=" w-full h-auto" width={344} height={372}/></div>
                    </div>
                </section>
                <section className="mt-[32px] flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:gap-2 lg:gap-3 xl-gap-4">
                        <p className="font-inter text-lg md:text-base lg:text-xl font-semibold text-[#121212] leading-[26.1px]">Highlights from the Enugu State Gaming Conference!</p>
                        <p className="font-inter font-normal text-base md:text-sm lg:text-base text-[#414141] leading-[23.2px]">Capturing moments of insight, innovation, and excitement</p>
                    </div>
                    <div><Image src='/image 22.svg' alt="conference photo" className=" w-full h-auto hide-content" width={344} height={372}/><Image src='/image 222.svg' alt="conference photo" className=" w-full h-auto nav-content" width={344} height={372}/></div>
                    <div className="flex flex-col gap-4 md:flex-row xl:gap-[34px]">
                        <div className=" w-full"><Image src='/image 23.svg' alt="conference photo" className=" w-full h-auto" width={344} height={372}/></div>
                        <div className=" w-full"><Image src='/image 24.svg' alt="conference photo" className=" w-full h-auto" width={344} height={372}/></div>
                        <div className=" w-full"><Image src='/image 25.svg' alt="conference photo" className=" w-full h-auto" width={344} height={372}/></div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Page