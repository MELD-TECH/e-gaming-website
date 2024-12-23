'use client'

import Image from "next/image"
import Values from "./components/values"
import Link from "next/link";

export default function Home() {
  
    return(
        <>
          <div className="relative">
                <header className="relative h-[430px] md:h-[480px] lg:h-[570px] -top-[80px]">
                     <div className="relative z-20 h-full">
                    
                        <video
                        //    ref={videoRef}
                            
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover z-10"
                        >
                        <source src="/ESGC video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-50 h-full w-full top-0 left-0 bottom-0 right-0 z-30"></div>
                    </div>
                    <div className="w-[91.5%] home-head flex flex-col justify-center gap-12 absolute z-50 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 md:left-0 md:-translate-x-0 mx-auto">
                        <div className="space-y-[8px] relative z-10">
                            <h4 className="font-inter font-semibold text-[28px] text-[#F9FAFB] leading-[33.6px]">Regulating Gaming, Elevating Standards in Enugu State</h4>
                            <p className="font-inter font-normal text-sm text-[#F0F2F5] leading-[20.3px]">Committed to structured, safe, and sustainable gaming practices that drive socio-economic growth and innovation</p>
                        </div>
                        <div className="flex items-center gap-2 relative z-10">
                            <Link href="/" className="px-6 py-2 border border-[#019934] font-inter font-medium text-sm text-[#F9FAFB] leading-[20.3px] rounded">Apply As Proprietor</Link>
                            <Link href="/" className="px-6 py-2 font-inter font-medium text-sm text-[#F9FAFB] leading-[20.3px]">Apply As Agent</Link>
                        </div>
                    </div>
                </header>
                <main className="w-[91.5%] m-auto space-y-[36px] mb-[30px] home-body">
                    <section>
                        <header className="space-y-[8px] mb-[40px] md:space-y-[0px] home-body-head">
                            <h4 className="font-inter font-semibold text-center text-lg text-[#056232] leading-[26.1px]">Empowering Gaming in Enugu State</h4>
                            <p className="font-inter font-normal text-center text-sm text-[#344054] leading-[20.3px]">Creating a thriving, responsible, and regulated gaming environment for stakeholders, operators, and consumers alike</p>
                        </header>
                        <div className="flex flex-col gap-[32px]">
                            <article className="space-y-[8px]">
                                <div>
                                    <Image className="rounded w-full h-auto" src='/stakeholders.svg' alt="stakeholders" width={341} height={273}/>
                                </div>
                                <p className="body-p1 font-inter font-semibold text-base text-[#101928] leading-[23.2px]">Stakeholders</p>
                                <p className="body-p1 font-inter font-normal text-sm text-[#101928] leading-[20.3px]">Fostering a sustainable and innovative gaming ecosystem that promotes fairness, profitability, and growth for all stakeholders.</p>
                            </article>
                            <article className="space-y-[8px]">
                                <div>
                                    <Image className="rounded w-full h-auto" src='/operators.svg' alt="operators" width={341} height={273}/>
                                </div>
                                <p className="body-p1 font-inter font-semibold text-base text-[#101928] leading-[23.2px]">Operators</p>
                                <p className="body-p1 font-inter font-normal text-sm text-[#101928] leading-[20.3px]">Providing comprehensive licensing and regulatory oversight to ensure seamless and compliant operations for gaming businesses in Enugu State.</p>
                            </article>
                            <article className="space-y-[8px]">
                                <div>
                                    <Image className="rounded w-full h-auto" src='consumers.svg' alt="consumers" width={341} height={273}/>
                                </div>
                                <p className="body-p1 font-inter font-semibold text-base text-[#101928] leading-[23.2px]">Consumers</p>
                                <p className="body-p1 font-inter font-normal text-sm text-[#101928] leading-[20.3px]">Advocating for responsible gaming practices that prioritize the well-being of players while maintaining fairness and transparency.</p>
                            </article>
                        </div>
                    </section>
                    <section className="space-y-[54px]">
                        <article>
                            <div className="mb-3">
                                <Image className="rounded w-full h-auto" src='/ESGC-about.svg' alt="about" width={341} height={273}/>
                            </div>
                            <div>
                                <p className="body-p2 mb-2 md:mb-4 lg:mb-5 xl:mb-6 font-inter font-semibold text-base text-[#019934] leading-[23.2px]">About Enugu Gaming State Commission</p>
                                <p className="body-p3 mb-[22px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] font-inter font-normal text-sm text-[#101928] leading-[20.3px]">The Enugu State Gaming and Lotto Commission (ESGC), established under the Revised Laws of Enugu State 2004, is dedicated to regulating, promoting, and taxing a wide range of gaming activities, including casinos, lotteries, sports betting, pools betting, and raffles. Our mission is to create a thriving socio-economic environment by fostering a structured, innovative, and lucrative gaming culture. Through effective oversight, we ensure compliance, integrity, and fairness, contributing to increased Internally Generated Revenue (IGR) for the state while empowering stakeholders and protecting consumers</p>
                                {/* <button className="body-btn px-6 py-2 border border-[#05623280] rounded font-inter font-medium text-sm text-[#101928] leadin-[20.3px]">See More</button> */}
                            </div>
                        </article>
                        <article>
                            <div className="mb-3">
                                <Image className="rounded w-full h-auto" src='/ESGC-mission.svg' alt="mission" width={341} height={273}/>
                            </div>
                            <div>
                                <p className="body-p2 mb-2 md:mb-4 lg:mb-5 xl:mb-6 font-inter font-semibold text-base text-[#019934] leading-[23.2px]">Our Mission</p>
                                <p className="body-p3 mb-[22px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] font-inter font-normal text-sm text-[#101928] leading-[20.3px]">The Enugu State Gaming and Lotto Commission (ESGC), established under the Revised Laws of Enugu State 2004, is dedicated to regulating, promoting, and taxing a wide range of gaming activities, including casinos, lotteries, sports betting, pools betting, and raffles. Our mission is to create a thriving socio-economic environment by fostering a structured, innovative, and lucrative gaming culture. Through effective oversight, we ensure compliance, integrity, and fairness, contributing to increased Internally Generated Revenue (IGR) for the state while empowering stakeholders and protecting consumers</p>
                                {/* <button className="body-btn px-6 py-2 border border-[#05623280] rounded font-inter font-medium text-sm text-[#101928] leadin-[20.3px]">See More</button> */}
                            </div>
                        </article>
                        <article>
                            <div className="mb-3">
                                <Image className="rounded w-full h-auto" src='/ESGC-vision.svg' alt="vision" width={341} height={273}/>
                            </div>
                            <div>
                                <p className="body-p2 mb-2 md:mb-4 lg:mb-5 xl:mb-6 font-inter font-semibold text-base text-[#019934] leading-[23.2px]">Our Vision</p>
                                <p className="body-p3 mb-[22px] md:mb-[30px] lg:mb-[40px] xl:mb-[50px] font-inter font-normal text-sm text-[#101928] leading-[20.3px]">The Enugu State Gaming and Lotto Commission (ESGC), established under the Revised Laws of Enugu State 2004, is dedicated to regulating, promoting, and taxing a wide range of gaming activities, including casinos, lotteries, sports betting, pools betting, and raffles. Our mission is to create a thriving socio-economic environment by fostering a structured, innovative, and lucrative gaming culture. Through effective oversight, we ensure compliance, integrity, and fairness, contributing to increased Internally Generated Revenue (IGR) for the state while empowering stakeholders and protecting consumers</p>
                                {/* <button className="body-btn px-6 py-2 border border-[#05623280] rounded font-inter font-medium text-sm text-[#101928] leadin-[20.3px]">See More</button> */}
                            </div>
                        </article>
                    </section>
              </main>
          </div>
          <Values/>
        </>
    )
}
