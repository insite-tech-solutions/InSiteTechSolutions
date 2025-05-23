import Image from "next/image";

export default function LocationImageSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-900">
      <h3 className="text-2xl font-semibold text-medium-blue mb-4">Our Reach</h3>
      {/* You can replace the div below with an actual Image component once you have an image */}
      {/* For example: <Image src="/path/to/your/wny-map-image.png" alt="Serving WNY and the Globe" width={500} height={300} className="rounded-md mb-4" /> */}
      <div className="w-full h-64 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
        <p className="text-gray-500">Placeholder for WNY/Global Image</p>
      </div>
      <p className="text-lg text-gray-700">
        Proudly serving <span className="font-semibold text-medium-blue">Western New York</span> locally,
        and the <span className="font-semibold text-medium-blue">globe</span> remotely.
      </p>
    </div>
  );
} 