import Image from "next/image";

export default function LocationImageSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-900">
      <h3 className="text-2xl font-semibold text-medium-blue mb-4">Our Reach</h3>
      <Image
        src="/wny-map.png"
        alt="Serving WNY and the Globe"
        width={800}
        height={400}
        className="rounded-md mb-4 object-cover"
      />
      <p className="text-lg text-gray-700">
        Proudly serving <span className="font-semibold text-medium-blue">Western New York</span> locally,
        and the <span className="font-semibold text-medium-blue">globe</span> remotely.
      </p>
    </div>
  );
} 