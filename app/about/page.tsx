import Image from "next/image"
import Values from "../components/values"
import { Fragment } from "react"

const Page = () => {
    return(
        <>
            <div className="m-auto flex flex-col gap-[52px] mb-[52px] md:mb-[60px] lg:mb-[70px] xl:mb-[80px] md:gap-[52px] lg:gap-[62px] xl:gap-[72px]">
                <header className="w-[91.5%] flex flex-col gap-6 md:w-[68.9%] max-w-[992px] m-auto mt-4 md:mt-10 text-center">
                    <h4 className="font-inter font-semibold text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] text-[#056232] md:text-[#019934] text-center leading-[33.6px] md:leading-[43.6px] lg:leading-[50.6px] xl:leading-[57.6px]">About Us</h4>
                    <p className="font-inter font-normal text-sm lg:text-base xl:text-lg text-[#344054] leading-[20.3px] lg:leading-[23.1px] xl:leading-[26.1px]">The Enugu State Gaming Commission (ESGC) is a commission established to regulate all gaming and lottery activities in Enugu state. The Commission is responsible for the issuance of licenses to proprietors of all gaming and lottery categories, registration of gaming and lottery agents, monitoring and inspection activities, as well as enforcement of compliance to the set rules and regulations</p>
                </header>
                <main className="flex flex-col gap-[52px]">
                    <section className="space-y-[48px]">
                        <article className="space-y-4">
                            <div className="flex md:hidden w-full  m-auto">
                                <Image src='/stakeholders.svg' alt="stakeholders" width={375} height={273} className="w-full h-auto"/>
                            </div>
                            <div className="nav-content w-full">
                                <Image src='/aboutLarge.svg' alt="about" width={375} height={273} className="w-full h-auto"/>
                            </div>
                            <div className="w-[91.5%] md:w-[92.7%] max-w-[1335px] mx-auto flex flex-col gap-2">
                                <h3 className="font-inter text-base lg:text-xl xl:text-[24px] font-semibold text-[#101928] md:text-[#121212] leading-[23.2px] lg:leading-[24px] xl:leading-[28.8px] md:mb-2">ESGC Story</h3>
                                <Fragment>
                                    <p className="font-inter text-sm xl:text-base font-normal text-[#101928] md:text-[#344054] leading-[20.3px] md:mb-[16px]">The Enugu State Gaming and Lotto Commission (ESGC) was established under the Revised Laws of Enugu State 2004 to regulate and promote gaming activities within the state. Recognizing the growing importance of the gaming industry as a driver of socio-economic growth, the ESGC was created to ensure a structured and sustainable environment for gaming operations. From its inception, the Commission has been at the forefront of innovation, balancing the need for economic development with the imperative to safeguard stakeholders and consumers. By setting clear guidelines, enforcing regulations, and adopting technological advancements.</p>
                                    <p className="font-inter text-sm xl:text-base font-normal text-[#101928] md:text-[#344054] leading-[20.3px]">Today, the ESGC is not just a regulatory body but a partner to operators and consumers alike. Through its dedication to integrity, accountability, and excellence, the Commission has established itself as a pillar of trust, fostering a thriving gaming culture that contributes significantly to the state’s Internally Generated Revenue (IGR, At ESGC, we are more than regulators; we are innovators, collaborators, and stewards of a vibrant gaming ecosystem in Enugu State.</p>
                                </Fragment>
                            </div>
                        </article>
                        <article className="space-y-[8px] m-auto">
                            <div className="w-full flex md:hidden">
                                <Image src='/operators.svg' alt="operators" width={375} height={273} className="w-full h-auto"/>
                            </div>
                            <div className="w-[91.5%] md:w-[92.7%] max-w-[1335px] m-auto space-y-4 md:flex justify-between items-center gap-2">
                                <div className="nav-content shrink-0 md:w-[35.43%] order-2">
                                    <Image src='/conference.svg' alt="operators" width={375} height={273} className="w-full h-auto"/>
                                </div>
                                <div className="md:w-[62.47%] flex flex-col gap-2 order-1">
                                    <h3 className="font-inter text-base lg:text-xl xl-text-[24px] font-semibold text-[#101928] md:text-[#121212] leading-[23.2px] lg:leading-[24px] xl:leading-[28.8px] md:mb-2">ESGC Culture</h3>
                                    <p className="font-inter text-sm lg:text-base xl:text-lg font-normal text-[#101928] md:text-[#344054] leading-[20.3px]">Today, the ESGC is not just a regulatory body but a partner to operators and consumers alike. Through its dedication to integrity, accountability, and excellence, the Commission has established itself as a pillar of trust, fostering a thriving gaming culture that contributes significantly to the state’s Internally Generated Revenue (IGR, At ESGC, we are more than regulators; we are innovators, collaborators, and stewards of a vibrant gaming ecosystem in Enugu State.</p>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className="space-y-[20px] md:space-y-[0px] w-[91.5%] md:w-[92.7%] max-w-[1335px] m-auto md:mt-[30px] md:flex justify-between">
                        <div className="md:w-[44.22%]">
                            <article className="flex flex-col gap-4">
                                <div>
                                    <Image src='/peter.svg' alt="peter" width={356} height={396} className="w-full h-auto rounded-[8px]"/>
                                </div>
                                <div>
                                    <h3 className="font-inter font-semibold text-[18px] md:text-sm lg:text-lg xl:text-xl text-[#101928] leading-[26.1px]">Dr. Peter Ndubuisi Mbah</h3>
                                    <p className="font-inter font-normal text-base md:text-xs lg:text-base xl:text-lg text-[#101928] leading-[23.2px]">(His Excellence) Governor, Enugu State</p>
                                </div> 
                            </article>
                        </div>
                        <div className="space-y-[20px] md:w-[53.75%] md:space-y-[0px] md:flex flex-col gap-[20px]">
                            <div className="space-y-[20px] about-style2 md:space-y-[0px]">
                                <article className="flex flex-col gap-4">
                                    <div>
                                        <Image src='/prince.svg' alt="prince" width={356} height={396} className="w-full h-auto rounded-[8px]"/>
                                    </div>
                                    <div>
                                        <h3 className="font-inter font-semibold text-[18px] md:text-sm lg:text-lg xl:text-xl text-[#101928] leading-[26.1px]">Prince Arinze Arum</h3>
                                        <p className="font-inter font-normal text-base md:text-xs lg:text-base xl:text-lg text-[#101928] leading-[23.2px]">Executive Secretary/Chief Executive Officer ESGC</p>
                                    </div>            
                                </article>
                                <article className="flex flex-col gap-4">
                                    <div>
                                        <Image src='/nathaniel.svg' alt="nathaniel" width={356} height={396} className="w-full h-auto rounded-[8px]"/>
                                    </div>
                                    <div>
                                        <h3 className="font-inter font-semibold text-[18px] md:text-sm lg:text-lg xl:text-xl text-[#101928] leading-[26.1px]">Hon. Dr. Nathaniel Urama</h3>
                                        <p className="font-inter font-normal text-base md:text-xs lg:text-base xl:text-lg text-[#101928] leading-[23.2px]">Commissioner for Finance, Enugu State</p>
                                    </div>
                                </article>
                            </div>
                            <div className="space-y-[20px] md:space-y-[0px] about-style3">
                                <article className="flex flex-col gap-4">
                                    <div>
                                        <Image src='/nwankwo.svg' alt="nwankwo" width={356} height={396} className="w-full h-auto rounded-[8px]"/>
                                    </div>
                                    <div>
                                        <h3 className="font-inter font-semibold text-[18px] md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[26.1px] md:leading-[18px]">Mrs. Ogochukwu Nwankwo</h3>
                                        <p className="font-inter font-normal text-base md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[23.2px] md:leading-[18px]">Director, Finance and Accounts</p>
                                    </div>  
                                </article>
                                <article className="flex flex-col gap-4">
                                    <div>
                                        <Image src='/andrew.svg' alt="andrew" width={356} height={396} className="w-full h-auto rounded-[8px]"/>
                                    </div>
                                    <div>
                                        <h3 className="font-inter font-semibold text-[18px] md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[26.1px] md:leading-[18px]">Barr Andrew N. Nosike</h3>
                                        <p className="font-inter font-normal text-base md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[23.2px] md:leading-[18px]">Head, Legal and Compliance</p>
                                    </div>
                                </article>
                                <article className="flex flex-col gap-4">
                                    <div>
                                        <Image src='/benson.svg' alt="benson" width={356} height={396} className="w-full h-auto  rounded-[8px]"/>
                                    </div>
                                    <div>
                                        <h3 className="font-inter font-semibold text-[18px] md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[26.1px] md:leading-[18px]">Mr. Benson Amunachugo</h3>
                                        <p className="font-inter font-normal text-base md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[23.2px] md:leading-[18px]">Head, Planning Research and Statistics</p>
                                    </div>
                                </article>
                            </div>
                            <div className="space-y-[20px] md:space-y-[0px] about-style3">
                                <article className="flex flex-col gap-4">
                                    <div>
                                        <Image src='/henry.svg' alt="henry" width={356} height={396} className="w-full h-auto rounded-[8px]"/>
                                    </div>
                                    <div>
                                        <h3 className="font-inter font-semibold text-[18px] md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[26.1px] md:leading-[18px]">Mr. Henry C. Nwobodo</h3>
                                        <p className="font-inter font-normal text-base md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[23.2px] md:leading-[18px]">Director, Administration and Supply</p>
                                    </div>
                                </article>
                                <article className="flex flex-col gap-4">
                                    <div>
                                        <Image src='/amara.svg' alt="amara" width={356} height={396} className="w-full h-auto rounded-[8px]"/>
                                    </div>
                                    <div>
                                        <h3 className="font-inter font-semibold text-[18px] md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[26.1px] md:leading-[18px]">Mrs. Amara Ugwu</h3>
                                        <p className="font-inter font-normal text-base md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[23.2px] md:leading-[18px]">Internal Auditor</p>
                                    </div>
                                </article>
                                <article className="flex flex-col gap-4">
                                    <div>
                                        <Image src='/udeh.svg' alt="udeh" width={356} height={396} className="w-full h-auto rounded-[8px]"/>
                                    </div>
                                    <div>
                                        <h3 className="font-inter font-semibold text-[18px] md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[26.1px] md:leading-[18px]">Mrs. Nwanneka Udeh</h3>
                                        <p className="font-inter font-normal text-base md:text-[13px] lg:text-base xl:text-lg text-[#101928] leading-[23.2px] md:leading-[18px]">PRO</p>
                                    </div>
                                  
                                </article>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Values/>
        </>
    )
}

export default Page