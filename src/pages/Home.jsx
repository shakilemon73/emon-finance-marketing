import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      title: "PPC Campaign Management",
      description: "Maximize your ad spend with our data-driven PPC strategies across all major platforms.",
      icon: "📈"
    },
    {
      title: "Traffic Monetization",
      description: "Turn your website traffic into revenue with our optimized ad placements and partnerships.",
      icon: "💰"
    },
    {
      title: "Lead Generation",
      description: "Acquire high-quality leads with targeted campaigns that deliver measurable results.",
      icon: "🎯"
    },
    {
      title: "Programmatic Advertising",
      description: "Leverage AI-driven bidding to reach your ideal audience at the optimal price.",
      icon: "🤖"
    }
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      <TrustBadges />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Emon Finance Ltd.?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine financial expertise with cutting-edge marketing technology to deliver exceptional results for our partners. Our team has years of experience in both finance and digital marketing, giving us unique insights into what drives performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">High-Quality Traffic</h3>
                <p className="text-gray-700">We source and deliver premium traffic that converts, meeting the strictest platform requirements.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Compliance Focused</h3>
                <p className="text-gray-700">All our campaigns adhere to GDPR, CCPA, and platform-specific advertising policies.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Transparent Reporting</h3>
                <p className="text-gray-700">Get real-time access to campaign performance data through our custom dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;