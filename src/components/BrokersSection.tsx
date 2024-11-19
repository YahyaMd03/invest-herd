import Image from "next/image";

const brokers = ["/dhan-logo.png"];

const BrokersSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-8">Supported Brokers</h2>
      <div className="flex flex-row items-center space-x-8 px-8">
        {brokers.map((broker, index) => (
          <div key={index} className="w-24 h-24 flex-shrink-0">
            <Image src={broker} alt={`Broker ${index + 1}`} width={96} height={96} className="rounded-md shadow" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrokersSection;
