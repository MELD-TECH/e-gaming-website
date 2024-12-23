'use client'
import Image from "next/image"
import { useState } from "react"
import { FAQs } from "./faq"

const Page = () => {
    const [openAnswer, setOpenAnswer] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        if (openAnswer === index) {
            setOpenAnswer(null)
        } else {
            setOpenAnswer(index)
        }
    }

    return (
        <div className="w-[91.5%] max-w-[789px] m-auto mb-[80px]">
            <header className="font-inter font-semibold text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] text-[#056232] md:text-[#019934] text-center leading-[33.6px] md:py-4 mt-4 md:mt-10 ">Frequently Asked Questions</header>
            <main className="mt-12 flex flex-col gap-6">
                {FAQs.map((faq) => (
                    <div key={faq.id} className="py-[10px] border-b border-[#D0D5DD]">
                        <div className="flex flex-col gap-[10px]">
                            <button className="flex justify-between items-center gap-[21px] font-inter text-base font-medium leading-[23.2px] text-[#1D2739] cursor-pointer text-left" onClick={() => toggleFaq(faq.id)}>
                                {faq.faq}
                                {openAnswer === faq.id ? (
                                    <div className="w-[16px] h-[2.5px] flex-shrink-0">
                                        <Image src='/minus.svg' alt="minus" width={16} height={2.5} />
                                    </div>
                                ) : (
                                    <div className="w-[13.33px] h-[13.33px] flex-shrink-0">
                                        <Image src='/plus.svg' alt="plus" width={13.33} height={13.33} />
                                    </div>
                                )}
                            </button>

                            {/* FAQ Answer with transition */}
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    openAnswer === faq.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                {openAnswer === faq.id && (
                                    <>
                                        <p className="font-inter text-sm font-normal leading-[20.3px] text-[#344054]">{faq.answer}</p>
                                        {faq.extAnswer && (
                                            <ul className="list-disc list-inside">
                                                {faq.extAnswer.map((answer, index) => (
                                                    <li key={index} className="font-inter text-sm font-normal leading-[20.3px] text-[#344054]">{answer}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Page
