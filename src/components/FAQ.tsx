import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
      <div
        className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What kind of data can Xxx analyze?",
      answer: "Xxx is designed to work with a wide range of data types, including numerical data, time series, categorical data, and text. It can process data from various sources such as CSV files, databases, APIs, and more."
    },
    {
      question: "Do I need technical knowledge to use Xxx?",
      answer: "Not at all! Xxx is designed with a user-friendly interface that makes data analysis accessible to everyone. While data scientists will appreciate its advanced capabilities, business users without technical backgrounds can still derive valuable insights."
    },
    {
      question: "How secure is my data with Xxx?",
      answer: "Security is our top priority. Xxx employs enterprise-grade encryption both in transit and at rest. We are compliant with major privacy regulations including GDPR and CCPA. Your data is never used to train our models without explicit permission."
    },
    {
      question: "Can Xxx integrate with my existing tools?",
      answer: "Yes, Xxx is built with integration in mind. It can connect with popular business intelligence tools, data warehouses, CRMs, and more through our extensive API library. Custom integrations are also available for enterprise clients."
    },
    {
      question: "What makes Xxx different from other analytics tools?",
      answer: "Xxx combines the power of advanced AI with an intuitive interface. Unlike traditional analytics tools that require you to know what you're looking for, Xxx proactively identifies insights and anomalies. It also provides predictive capabilities that most standard tools lack."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with access to all features. No credit card is required to start your trial. You can upgrade to a paid plan at any time to continue using Xxx after the trial period."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about Xxx and how it can help your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;