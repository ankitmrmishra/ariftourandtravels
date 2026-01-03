"use client";

import { Shield, Users, Award, Clock, Heart, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Reliable",
      description:
        "Your safety is our priority with verified accommodations and experienced guides.",
    },
    {
      icon: Users,
      title: "Professional Guides",
      description:
        "Expert local guides with deep knowledge of destinations and cultures.",
    },
    {
      icon: Award,
      title: "Best Price Guarantee",
      description:
        "Competitive pricing with no hidden costs and transparent pricing structure.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist you throughout your journey.",
    },
    {
      icon: Heart,
      title: "Customizable Packages",
      description:
        "Tailored itineraries to match your preferences and Travel style.",
    },
    {
      icon: Globe,
      title: "Years of Experience",
      description:
        "Trusted Travel partner with extensive experience in domestic and international tours.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">
            Why Choose Country Link Holidays?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing exceptional Travel experiences with
            professional service, competitive pricing, and personalized
            attention to every detail.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-heading">
                5000+
              </div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-heading">
                150+
              </div>
              <div className="text-gray-600">Tour Packages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-heading">
                25+
              </div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-heading">
                10+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
              About Country Link Holidays
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Country Link Holidays has been your trusted travel companion for
              over a decade, specializing in creating unforgettable domestic and
              international Travel experiences. Our team of Travel experts is
              dedicated to providing personalized service, competitive pricing,
              and seamless travel arrangements.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From the serene backwaters of Kerala to the bustling streets of
              Dubai, from the royal palaces of Rajasthan to the pristine beaches
              of Thailand, we curate experiences that create lasting memories.
              Our commitment to quality, safety, and customer satisfaction has
              made us a preferred choice for travelers seeking authentic and
              enriching journeys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
