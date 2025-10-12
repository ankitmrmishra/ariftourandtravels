"use client";

import { useState } from "react";
import { MapPin, Clock, Users, Star, Phone, Eye } from "lucide-react";
import { TourPackage } from "../data/packages";

interface PackageCardProps {
  package: TourPackage;
  onViewDetails: (pkg: TourPackage) => void;
}

const PackageCard = ({ package: pkg, onViewDetails }: PackageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/919305396179?text=Hello,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
    pkg.name
  )}%20package.%20Please%20provide%20more%20details.`;

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              pkg.type === "domestic"
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {pkg.type === "domestic" ? "Domestic" : "International"}
          </span>
        </div>
        {pkg.originalPrice && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              Save ₹
              {(
                parseInt(pkg.originalPrice.replace(/[^\d]/g, "")) -
                parseInt(pkg.price.replace(/[^\d]/g, ""))
              ).toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 font-heading line-clamp-2">
            {pkg.name}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{pkg.destination}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{pkg.duration}</span>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            <span className="text-sm text-gray-600 ml-1">(4.8)</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary font-heading">
              {pkg.price}
            </span>
            {pkg.originalPrice && (
              <span className="text-lg text-gray-500 line-through ml-2">
                {pkg.originalPrice}
              </span>
            )}
            <span className="text-sm text-gray-600 ml-2">per person</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Highlights:
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {pkg.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Package Info */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-600">
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            <span>{pkg.accommodation}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{pkg.transport}</span>
          </div>
        </div>

        {/* International Package Info */}
        {pkg.type === "international" && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <div className="text-xs text-blue-800 space-y-1">
              {pkg.visaRequired && <div>• Visa required</div>}
              {pkg.passportRequired && <div>• Valid passport required</div>}
              {pkg.currency && <div>• Currency: {pkg.currency}</div>}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(pkg)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-center flex items-center justify-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
