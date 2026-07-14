import Image from 'next/image';
import React from 'react'

const ValidateOperators = () => {
  const categories = [
    {
      title: "SPORT BETTING",
      data: [
        { name: "Pendulum Gaming Solutions", date: "25th June, 2026" },
        { name: "Techplay Limited", date: "13th October, 2026" },
      ]
    },
    {
      title: "LOTTO - LOTTERY",
      data: [
        { name: "Premier Lotto Limited", date: "18th November, 2026" },
        { name: "Winners Golden Chance", date: "December 2026" },
        { name: "Power Play Gaming Limited", date: "9th February, 2027" },
        { name: "Whean Nigeria Limited", date: "25th July, 2026" },
      ]
    },
    {
      title: "SLOT MACHINE / ARCADE GAMES",
      data: [
        { name: "Sax Innovative Network Ltd", date: "December 2026" },
        { name: "Yanga Games Technologies Ltd", date: "7th August, 2026" },
        { name: "Leader Games 247 Ltd", date: "February 2027 (2025 Pending)" },
      ]
    },
    {
      title: "ONLINE GAMING / EARNINGS / POOL BETTING",
      data: [
        { name: "Hammer Games Limited", date: "24th October, 2026" },
        { name: "Fastlink It Multi Services", date: "27th October, 2026" },
        { name: "Wimbf Technology Limited", date: "15th January, 2027" },
        { name: "Marsbet365 Ltd (Pool Betting)", date: "January 2027" },
      ]
    }
  ];

  return (
    <div className="w-[91.5%] m-auto max-w-[1337px] pb-4 md:pt-4 space-y-8 md:space-y-12 transition-colors duration-300">
      <header className="flex flex-col md:gap-1.5">
        <h4 className="font-inter font-semibold text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] text-[#056232] md:text-[#019934] md:text-center leading-[33.6px]">
          Valid Operators
        </h4>
        <p className="font-inter font-normal text-sm text-[#344054] dark:text-gray-400 leading-[26.1px] md:text-center">
          Below is the list of Operators and their License validity;
        </p>
      </header>

      <div className="space-y-10">
        {categories.map((category, idx) => (
          <section key={idx} className="space-y-4">
            <h3 className="text-[#101928] dark:text-[#F9FAFB] font-inter font-semibold text-lg border-l-4 border-[#019934] pl-3">
              {category.title}
            </h3>
            
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-white/10 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-gray-50 dark:bg-white/5">
                  <tr>
                    <th className="px-6 py-4 font-inter font-semibold text-sm text-[#344054] dark:text-gray-300">S/N</th>
                    <th className="px-6 py-4 font-inter font-semibold text-sm text-[#344054] dark:text-gray-300">OPERATORS</th>
                    <th className="px-6 py-4 font-inter font-semibold text-sm text-[#344054] dark:text-gray-300 text-right">VALID TILL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white dark:bg-transparent">
                  {category.data.map((row, i) => (
                    <tr 
                      key={i} 
                      className="transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-white/5"
                    >
                      <td className="px-6 py-4 font-inter text-sm text-gray-500 dark:text-gray-400">{i + 1}</td>
                      <td className="px-6 py-4 font-inter text-sm font-medium text-[#101928] dark:text-gray-200">{row.name}</td>
                      <td className="px-6 py-4 font-inter text-sm text-gray-600 dark:text-gray-400 text-right">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
      <div className='w-full flex flex-col justify-center items-end space-y-2.5'>
          
          <Image src={'/ESGC logo.svg'} alt="ESGC Logo" height={80} width={80} className='h-[80px]'/>
          <span className='text-xs text-black dark:text-white font-bold'>10-04-2026</span>
      </div>
    </div>
  )
}

export default ValidateOperators