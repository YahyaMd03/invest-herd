'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const faqs = [
  { question: "How does InvestHerd work?", answer: "InvestHerd integrates with brokers to offer portfolio insights." },
  { question: "Is my data secure?", answer: "Yes, InvestHerd uses encryption to secure your data." },
  { question: "Can I manage multiple accounts?", answer: "Absolutely! Manage multiple family accounts in one place." },
];


const FAQSection = () => {
const router = useRouter()

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-semibold text-center">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto my-8">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-medium"
            >
              {faq.question}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg" onClick={() => router.push('/learn-more')}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
