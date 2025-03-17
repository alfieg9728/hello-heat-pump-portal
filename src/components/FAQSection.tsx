
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from './SectionTitle';

const faqs = [
  {
    question: "What is an air source heat pump?",
    answer: "An air source heat pump is a renewable heating system that extracts heat from the outside air and transfers it into your home. It works like a refrigerator in reverse and can provide both heating and hot water for your property."
  },
  {
    question: "How much can I save on energy bills?",
    answer: "Homeowners typically save 30-50% on heating bills compared to traditional systems. The exact savings depend on your current heating system, home insulation, and energy usage patterns."
  },
  {
    question: "Are there any government incentives available?",
    answer: "Yes, various government incentives are available to help offset the installation costs of heat pumps, including grants and rebate programs. Our team can provide you with the most up-to-date information on available incentives in your area."
  },
  {
    question: "How long does installation take?",
    answer: "A typical installation takes 2-3 days, depending on the complexity of your property and whether you need additional work such as radiator upgrades or improved insulation."
  },
  {
    question: "What maintenance is required?",
    answer: "Air source heat pumps require minimal maintenance. We recommend an annual check-up by a qualified engineer to ensure optimal performance, similar to a boiler service."
  },
  {
    question: "Will it work in cold weather?",
    answer: "Yes, modern air source heat pumps are designed to work efficiently even in temperatures as low as -25°C, though efficiency may decrease in extreme cold. They are designed for year-round operation in various climates."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="section-container">
      <SectionTitle 
        preTitle="Common Questions"
        title="Frequently Asked Questions"
        description="Everything you need to know about air source heat pumps and our service."
      />
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
