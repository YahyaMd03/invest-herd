import Image from 'next/image';

const DashboardOverview = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 my-12 px-8 md:px-16 bg-black min-h-screen">
      <div className="relative w-full md:w-1/2">
        <div className="relative h-72 w-80">
          <Image src="/dashboard1.png" alt="Dashboard Preview 1" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
        </div>
        <div className="absolute top-10 left-10 h-60 w-80">
          <Image src="/dashboard1.png" alt="Dashboard Preview 2" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-3xl font-semibold">Powerful Analytics Dashboard</h2>
        <p className="text-lg text-gray-700">InvestHerd offers in-depth analytics to help you manage portfolios across family accounts. Gain insights, visualize performance, and identify potential overlaps in your holdings with ease.</p>
      </div>
    </section>
  );
};

export default DashboardOverview;
