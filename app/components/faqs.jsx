"use client"
import React, { useState } from "react";

export default function FAQs() {
  // State to keep track of the open FAQ item
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Updated FAQ data specific to PHRO's areas of focus
  const faqs = [
    {
      question: "What is PHRO's mission?",
      answer:
        "PHRO is dedicated to protecting human rights, with a focus on areas such as gender equality, climate change resilience, child protection, education, and skill development for youth. Our mission is to foster a more just and equal society where everyone's rights are upheld.",
    },
    {
      question: "How does PHRO address Gender-Based Violence (GBV)?",
      answer:
        "PHRO works to prevent and address GBV through community education, awareness campaigns, and support services. Our programs aim to empower individuals, promote gender equality, and build safe environments for all.",
    },
    {
      question: "What initiatives does PHRO offer for youth skill development?",
      answer:
        "We provide various training programs to help young people develop essential skills for employment and entrepreneurship, ensuring they have the tools to succeed and contribute positively to their communities.",
    },
    {
      question: "How can I support PHRO’s work in climate change resilience?",
      answer:
        "You can support our climate change initiatives by volunteering, donating, or spreading awareness. Our programs focus on educating communities about sustainable practices to mitigate climate impact.",
    },
    {
      question: "How does PHRO promote child protection?",
      answer:
        "PHRO is committed to safeguarding children through advocacy, community outreach, and support services aimed at creating safe environments and protecting the rights and well-being of children.",
    },
  ];

  // Function to toggle FAQ open state
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-y-12 md:grid md:grid-flow-row md:grid-cols-2 md:gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl">
              Learn more about our mission, focus areas, and how you can support PHRO.
            </p>
          </div>
          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex-col items-stretch justify-start border-b border-gray-200"
              >
                <div
                  className="flex cursor-pointer items-center justify-between px-4 py-4 md:pb-7 md:pt-3"
                  onClick={() => toggleFaq(index)}
                >
                  <p className="text-lg font-medium md:text-xl select-none">
                    {faq.question}
                  </p>
                  <div className="ml-6 flex h-6 w-7 self-start md:w-6">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-transform ${openFaqIndex === index ? "rotate-360" : "rotate-180"}`}
  >
    <path
      d="M12 20l8-8 8 8"  // Adjusted path to create an upward-pointing arrow
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>

                </div>
                {openFaqIndex === index && (
                  <div className="px-4 sm:px-8 py-4">
                    <p className="text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
