"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  X,
  MapPin,
  Clock,
  Users,
  Star,
  Phone,
  Plane,
  Shield,
} from "lucide-react";
import ImageWithLoader from "./ImageWithLoader";
import { TourPackage } from "../data/packages";

interface PackageDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  package: TourPackage | null;
}

const PackageDetailsModal = ({
  isOpen,
  onClose,
  package: pkg,
}: PackageDetailsModalProps) => {
  if (!pkg) return null;

  const whatsappUrl = `https://wa.me/917845818773?text=Hello,%20I%20am%20interested%20in%20the%20${encodeURIComponent(
    pkg.name
  )}%20package.%20Please%20provide%20more%20details.`;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                {/* Header */}
                <div className="relative">
                  <ImageWithLoader
                    src={pkg.image}
                    alt={pkg.name}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        pkg.type === "domestic"
                          ? "bg-green-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {pkg.type === "domestic"
                        ? "Domestic Package"
                        : "International Package"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <Dialog.Title className="text-3xl font-bold text-gray-900 font-heading mb-2">
                    {pkg.name}
                  </Dialog.Title>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{pkg.destination}</span>
                  </div>

                  {/* Rating Section */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                        <span className="text-gray-600 ml-2">(4.8/5)</span>
                      </div>
                    </div>
                  </div>

                  {/* Package Info Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-white border rounded-lg">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">{pkg.duration}</p>
                    </div>
                    <div className="text-center p-3 bg-white border rounded-lg">
                      <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Accommodation</p>
                      <p className="font-semibold">{pkg.accommodation}</p>
                    </div>
                    <div className="text-center p-3 bg-white border rounded-lg">
                      <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Transport</p>
                      <p className="font-semibold">{pkg.transport}</p>
                    </div>
                    <div className="text-center p-3 bg-white border rounded-lg">
                      <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Meals</p>
                      <p className="font-semibold">{pkg.meals}</p>
                    </div>
                  </div>

                  {/* International Requirements */}
                  {pkg.type === "international" && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Travels Requirements
                      </h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {pkg.visaRequired && (
                          <div className="flex items-center text-blue-800">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Visa required
                          </div>
                        )}
                        {pkg.passportRequired && (
                          <div className="flex items-center text-blue-800">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Valid passport required
                          </div>
                        )}
                        {pkg.currency && (
                          <div className="flex items-center text-blue-800">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Currency: {pkg.currency}
                          </div>
                        )}
                        {pkg.flightIncluded !== undefined && (
                          <div className="flex items-center text-blue-800">
                            <Plane className="w-4 h-4 mr-2" />
                            Flights:{" "}
                            {pkg.flightIncluded ? "Included" : "Not included"}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Package Highlights
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Time to Visit */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Best Time to Visit
                    </h3>
                    <p className="text-gray-700">{pkg.bestTime}</p>
                  </div>

                  {/* What's Included */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What&apos;s Included
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          ✓ Included
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Accommodation as per package</li>
                          <li>• {pkg.meals}</li>
                          <li>• {pkg.transport}</li>
                          <li>• Sightseeing as per itinerary</li>
                          <li>• Professional tour guide</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          ✗ Not Included
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Flight tickets</li>
                          <li>• Travels insurance</li>
                          <li>• Personal expenses</li>
                          <li>• Tips and gratuities</li>
                          <li>• Optional activities</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center flex items-center justify-center py-3"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Enquire on WhatsApp
                    </a>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PackageDetailsModal;
