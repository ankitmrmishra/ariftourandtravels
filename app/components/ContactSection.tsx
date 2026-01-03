"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Arif Tour and Travel,

I am interested in your tour packages. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${formData.destination}
Travel Date: ${formData.travelDate}
Number of Travelers: ${formData.travelers}
Budget: ${formData.budget}

Message: ${formData.message}

Please provide more information about suitable packages.`;

    const whatsappUrl = `https://wa.me/917845818773?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 78458 18773",
      link: "tel:+917845818773",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@clholidays.com",
      link: "mailto:info@clholidays.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "View on Google Maps",
      link: "https://maps.app.goo.gl/H7BpsTV93B61nv1NA",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Sat: 09:30 AM - 07:00 PM",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to plan your next adventure? Contact us today for personalized
            travel consultation and let us create the perfect itinerary for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
                <h4 className="text-lg font-semibold text-green-900">
                  Quick Response via WhatsApp
                </h4>
              </div>
              <p className="text-green-700 mb-4">
                Get instant answers to your travel questions and quick booking
                assistance.
              </p>
              <a
                href="https://wa.me/917845818773?text=Hello%20Arif%20Tour%20and%20Travel,%20I%20would%20like%20to%20inquire%20about%20your%20tour%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select destination</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Goa">Goa</option>
                    <option value="Kashmir">Kashmir</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Bali">Bali</option>
                    <option value="Europe">Europe</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="travelDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Travel Date
                  </label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="travelers"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Number of Travelers
                  </label>
                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select travelers</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-4">3-4 People</option>
                    <option value="5-6">5-6 People</option>
                    <option value="7+">7+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Budget Range (per person)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="Under ₹15,000">Under ₹15,000</option>
                  <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
                  <option value="₹25,000 - ₹40,000">₹25,000 - ₹40,000</option>
                  <option value="₹40,000 - ₹60,000">₹40,000 - ₹60,000</option>
                  <option value="₹60,000+">₹60,000+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your travel preferences, special requirements, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center py-3"
              >
                <Send className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
