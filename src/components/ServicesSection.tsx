import Image from "next/image";

const services = [
    { title: "Real-Time Analytics", image: "/analytics.png", description: "Monitor your investments with live updates." },
    { title: "Portfolio Management", image: "/portfolio.png", description: "Manage multiple accounts and family portfolios seamlessly." },
    // Add more services as needed
  ];
  
  const ServicesSection = () => {
    return (
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Our Services</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/5 p-4 text-center">
              <Image src="/dashboard1.png" alt={service.title} width={80} height={80} />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  