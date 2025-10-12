"use client";

import { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import PackageCard from "./PackageCard";
import PackageDetailsModal from "./PackageDetailsModal";
import { TourPackage } from "../data/packages";

interface PackagesSectionProps {
  type: "domestic" | "international";
  title: string;
  packages: TourPackage[];
}

const PackagesSection = ({ type, title, packages }: PackagesSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const regions = useMemo(() => {
    const uniqueRegions = [
      ...new Set(packages.map((pkg) => pkg.region).filter(Boolean)),
    ];
    return uniqueRegions;
  }, [packages]);

  const durations = useMemo(() => {
    const uniqueDurations = [...new Set(packages.map((pkg) => pkg.duration))];
    return uniqueDurations;
  }, [packages]);

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesSearch =
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = !selectedRegion || pkg.region === selectedRegion;
      const matchesDuration =
        !selectedDuration || pkg.duration === selectedDuration;

      return matchesSearch && matchesRegion && matchesDuration;
    });
  }, [packages, searchTerm, selectedRegion, selectedDuration]);

  const handleViewDetails = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedRegion("");
    setSelectedDuration("");
  };

  return (
    <section id={type} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing destinations with our carefully curated {type} tour
            packages. Professional service, best prices, and unforgettable
            memories guaranteed.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Region Filter */}
            {regions.length > 0 && (
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                >
                  <option value="">All Regions</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region} India
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Duration Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
              >
                <option value="">All Durations</option>
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedRegion || selectedDuration) && (
              <button
                onClick={clearFilters}
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <X className="w-5 h-5 mr-2" />
                Clear Filters
              </button>
            )}
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedRegion || selectedDuration) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">
                  Search: &quot;{searchTerm}&quot;
                </span>
              )}
              {selectedRegion && (
                <span className="px-3 py-1 bg-secondary text-white rounded-full text-sm">
                  Region: {selectedRegion}
                </span>
              )}
              {selectedDuration && (
                <span className="px-3 py-1 bg-accent text-white rounded-full text-sm">
                  Duration: {selectedDuration}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPackages.length} of {packages.length} packages
          </p>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No packages found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or clear the filters to see all
              packages.
            </p>
            <button onClick={clearFilters} className="btn-primary">
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredPackages.length > 0 && filteredPackages.length % 9 === 0 && (
          <div className="text-center mt-12">
            <button className="btn-secondary">Load More Packages</button>
          </div>
        )}
      </div>

      {/* Package Details Modal */}
      <PackageDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        package={selectedPackage}
      />
    </section>
  );
};

export default PackagesSection;
