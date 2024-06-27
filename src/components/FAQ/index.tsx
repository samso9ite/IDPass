import * as React from "react";

const datas = [
  {
    id: 1,
    title: "What are some of the verification services offered by identitypass?",
    content: `We offer BVN, NIN, Voter's card verification, Phone number, Account number, Driver's License, International passport for easy onboarding of customers.`,
  },
  {
    id: 2,
    title: "Is there a Test Environment?",
    content: `Our Sandbox environment allows you to test APIs before integrating into the live environment.`,
  },
  {
    id: 3,
    title: "How long does Integration take?",
    content:
      "We have a very smooth integration process that takes about 24 hours or less to integrate with our API.",
  },
  {
    id: 4,
    title: "How do I integrate into any platform I build?",
    content: `You can integrate with our verification systems via APIs.`,
  },
  {
    id: 5,
    title: "Do we get charged for failed API calls?",
    content: `No, we do not charge for failed calls. You only get charged for successful calls.`,
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
              selectedFaq.includes(data.id) ? "bg-[#FBF7FD]" : ""
            } p-3`}
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
