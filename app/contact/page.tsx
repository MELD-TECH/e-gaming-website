'use client'

import Image from "next/image"
import ContactCard from "../components/contactCard"
import MapComponent from "../components/Map";

const Page = () => {
    return(
        <div>
            <header className="relative h-[352px] md:h-[400px] lg:h-[500px] xl:h-[577px] m-auto">
                <Image src='young-african.svg' alt="young-african" className="w-full h-full hide-content" width={375} height={351} style={{objectFit: 'cover'}}/>
                <Image src='young-african2.svg' alt="young-african" className="w-full h-full nav-content" width={375} height={351} style={{objectFit: 'cover'}}/>
                <div className="w-[94%] min-w-[260px] max-w-[400px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[433px] m-auto left-[3.15%] md:left-[4.1%] absolute top-[33%] md:top-[30%] lg:top-[33%] xl:top-[36%]"><ContactCard/></div>
            </header>
            <main className="mt-[130px] pt-[50px] pb-[25px] md:mt-[0px] md:pt-[0px]">
                <div className="w-[94%] md:w-[50.3%] lg:w-[53.3%] xl:w-[57.3%] max-w-[825px]  ml-auto mr-auto md:ml-[46.1%] lg:ml-[43.1%] xl:ml-[39.1%] md:mr-0  h-[348px] md:h-[500px] lg:h-[600px] xl:h-[765px]">
                    <MapComponent/>
                </div>
            </main>
        </div>
    )
}

export default Page