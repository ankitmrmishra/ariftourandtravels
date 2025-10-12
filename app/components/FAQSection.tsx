"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book a tour package?",
      answer:
        "You can book a tour package by contacting us via WhatsApp at +91 93053 96179 or by filling out our inquiry form. We will provide you with detailed information about the package, pricing, and booking process. You can also visit our office for in-person consultation.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Our cancellation policy varies depending on the package and timing. Generally, cancellations made 30 days before departure receive a 90% refund, 15-30 days before receive a 70% refund, and 7-15 days before receive a 50% refund. Cancellations within 7 days are non-refundable. Please check the specific terms for your chosen package.",
    },
    {
      question: "Are flights included in international packages?",
      answer:
        "Most of our international packages do not include flight tickets to keep costs competitive and give you flexibility in choosing your preferred airlines. However, we can assist you in booking flights at competitive rates. Some premium packages may include flights - please check the package details.",
    },
    {
      question: "Can I customize a tour package?",
      answer:
        "Yes, we offer customizable tour packages to match your preferences, budget, and travel dates. You can modify the itinerary, accommodation, activities, or duration. Our travel experts will work with you to create a personalized experience. Additional charges may apply for customizations.",
    },
    {
      question: "What documents do I need for international tours?",
      answer:
        "For international tours, you need a valid passport (minimum 6 months validity), visa (if required), travel insurance, and any destination-specific documents. We provide visa assistance and guidance for required documents. Some countries may require additional documentation like vaccination certificates.",
    },
    {
      question: "What is the best time to visit different destinations?",
      answer:
        "The best time varies by destination. For domestic tours: Kerala (October-March), Himachal (April-June, Sept-Nov), Rajasthan (October-March), Goa (November-March). For international: Dubai (November-March), Thailand (November-April), Singapore (year-round), Europe (May-September). We provide detailed seasonal information for each package.",
    },
    {
      question: "Is travel insurance included?",
      answer:
        "Travel insurance is not included in our packages but is highly recommended, especially for international tours. We can help you arrange comprehensive travel insurance that covers medical emergencies, trip cancellations, and other unforeseen circumstances.",
    },
    {
      question: "How much advance booking is required?",
      answer:
        "We recommend booking at least 30-45 days in advance for domestic tours and 60-90 days for international tours to secure the best prices and availability. However, we can arrange last-minute bookings subject to availability. Peak season bookings should be made even earlier.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including bank transfers, UPI, credit/debit cards, and cash. For international tours, we may require advance payment to secure bookings. Payment terms and schedules are clearly communicated during the booking process.",
    },
    {
      question: "Do you provide group discounts?",
      answer:
        "Yes, we offer attractive group discounts for bookings of 6 or more people. Discounts vary based on group size, destination, and package type. We also have special rates for corporate groups, family packages, and repeat customers. Contact us for detailed group pricing.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our tour packages and
            services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our travel experts are here to help you plan your perfect trip.
            </p>
            <a
              href="https://wa.me/919305396179?text=Hello%20Arif%20Tour%20and%20Travel,%20I%20have%20some%20questions%20about%20your%20tour%20packages.%20Please%20help%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
