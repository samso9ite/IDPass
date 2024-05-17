import * as React from "react";

const datas = [
  {
    id: 1,
    title: "What is IdentityRadar?",
    content: `Identity Radar is a leading provider of identity verification and authentication solutions. Radar offers innovative technology to help businesses combat fraud and streamline customer onboarding processes.`,
  },
  {
    id: 2,
    title: "How does Radar work?",
    content:
      "Radar’s solutions utilize advanced AI and machine learning algorithms to verify the authenticity of government-issued IDs, passports, driver's licenses, Names, Phone numbers, and other identity documents to further enhance security. ",
  },
  {
    id: 3,
    title: "What industries does Radar serve?",
    content: `Radar serves a wide range of industries, including financial services, healthcare, e-commerce, and more. Any industry that requires identity verification and fraud prevention solutions can benefit from radar’s technology.`,
  },
  {
    id: 4,
    title: "What are the benefits of using Radar?",
    content: `Using Radar’s solutions helps businesses reduce fraud, improve compliance with regulations such as KYC (Know Your Customer) and AML (Anti-Money Laundering), enhance user experience, and streamline onboarding processes.`,
  },
  {
    id: 5,
    title: "Is Radar compliant with data privacy regulations?",
    content: `Yes, Radar takes data privacy and security seriously and ensures compliance with regulations such as GDPR (General Data Protection Regulation) and others. Radar employs robust security measures to protect sensitive information.`,
  },
];

type Props = {
  handleToggleRequest: () => void;
};

const FAQ: React.FC<Props> = ({ handleToggleRequest }) => {
  const [selectedFaq, setSelectedFaq] = React.useState<any>([]);

  const handleClick = (id: number) => {
    if (selectedFaq.includes(id)) {
      const newArr = selectedFaq.filter((faq: any) => faq !== id);
      setSelectedFaq(newArr);
    } else {
      setSelectedFaq([...selectedFaq, id]);
    }
  };

  return (
    <div
      className="flex flex-col items-start justify-between w-[90%] mx-auto mt-16 md:mt-32 md:w-[85%] md:flex-row gap-2"
      id="faq"
    >
      <div className="w-full mb-8 md:w-[50%] md:mr-20">
        <p className="text-xl md:text-2xl text-[#0B0A0A] font-extrabold">
          Have Questions?
        </p>
        <h5 className="font-semibold text-4xl md:text-5xl w-[80%] mt-2 mb-8">
          Our Experts Have Answers
        </h5>
        <button
          className="bg-[#251169] hover:bg-[#432f81] px-8 py-4 rounded-lg mt-2 text-base  md:mt-3 md:text-xl text-white"
          onClick={handleToggleRequest}
        >
          Speak to expert
        </button>
      </div>
      <div className="w-full md:w-[50%]">
        {datas.map((data: any) => (
          <div
            key={data.id}
            className={`mb-3 md:mb-8 ${
              selectedFaq.includes(data.id) ? "bg-[#f9f9f9]" : ""
            } p-2`}
          >
            <div
              key={data.title}
              className="flex items-center justify-between mb-3 cursor-pointer"
              onClick={() => handleClick(data.id)}
            >
              <p className="text-[#0B0A0A] text-base md:text-lg font-extrabold">
                {data.title}
              </p>
              <div className="text-xl">
                {selectedFaq === data.id ? "-" : "+"}
              </div>
            </div>
            {selectedFaq.includes(data.id) && (
              <p className="w-[95%] text-sm leading-relaxed">{data.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
