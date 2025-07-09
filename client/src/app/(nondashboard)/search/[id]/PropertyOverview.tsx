import { useGetPropertyQuery } from "@/state/api";
import { MapPin, Star } from "lucide-react";
import React from "react";

const PropertyOverview = ({ propertyId }: PropertyOverviewProps) => {
  const {
    data: property,
    isError,
    isLoading,
  } = useGetPropertyQuery(propertyId);

  if (isLoading) return <>Loading...</>;
  if (isError || !property) {
    return <>Property not Found</>;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">
          {property.location?.country} / {property.location?.state} /{" "}
          <span className="font-semibold text-gray-600">
            {property.location?.city}
          </span>
        </div>
        <h1 className="text-3xl font-bold my-5">{property.name}</h1>
        <div className="flex justify-between items-center">
          <span className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1 text-gray-700" />
            {property.location?.city}, {property.location?.state},{" "}
            {property.location?.country}
          </span>
          <div className="flex justify-between items-center gap-3">
            <span className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {property.averageRating.toFixed(1)} ({property.numberOfReviews}{" "}
              Reviews)
            </span>
            <span className="text-green-600">Verified Listing</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="border border-primary-200 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center gap-4 px-5">
          <div>
            <div className="text-sm text-gray-500">Monthly Rent</div>
            <div className="font-semibold">
              ${property.pricePerMonth.toLocaleString()}
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bedrooms</div>
            <div className="font-semibold">{property.beds} bd</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bathrooms</div>
            <div className="font-semibold">{property.baths} ba</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Square Feet</div>
            <div className="font-semibold">
              {property.squareFeet.toLocaleString()} sq ft
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="my-16">
        <h2 className="text-xl font-semibold mb-5">About {property.name}</h2>
        <p className="text-gray-500 leading-7">
          {property.description}
          Experience resort-style luxury living at Seaview Constanța, where the sea and city blend in perfect harmony.
          Our newly developed residential community features refined two- and three-bedroom apartments, each equipped 
          with high-end designer finishes, quartz countertops, modern stainless steel appliances, a dedicated office nook,
          and an in-unit washer and dryer. Find your personal escape at home with stunning swimming pools and relaxing spas,
          complete with elegant poolside cabanas.Enjoy your very own oasis surrounded by beautifully landscaped gardens and
          indoor/outdoor lounge spaces, perfect for social moments or peaceful solitude. During the day, unwind in the
          open-air BBQ area while taking in breathtaking views of the Black Sea and Tomis Marina, or admire the city
          lights twinkling along the seafront at night.
          Start or end your day with a workout in our fully equipped fitness center and yoga studio, reserved exclusively
          for residents. Save valuable time and hold important meetings in our business center s private conference room,
          adjacent to the internet and coffee lounge.
          Our premium location is just minutes from Constanța s most beautiful beaches, with easy access to Mamaia Resort,
          the city center, the tourist port, and major roads. You ll be close to top shopping destinations like City Park
          Mall and VIVO!, as well as leading medical centers such as Constanța County Hospital, OCH Private Hospital, and
          Euromaterna.Contact us today for a private tour and embrace the Seaview Constanța lifestyle as your own.
          Seaview Constanța Apartments is a premium residential community located in the heart of Constanța, well connected
           to the city s main transportation and urban services.
        </p>
      </div>
    </div>
  );
};

export default PropertyOverview;
