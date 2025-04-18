import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "PPC Campaign Management",
      description: "We design and optimize pay-per-click campaigns across Google Ads, Microsoft Advertising, and social platforms with a focus on financial services compliance and performance.",
      icon: "📈",
      features: [
        "Keyword research and bid strategy",
        "Ad copy optimization",
        "Landing page testing",
        "ROI-focused campaign management"
      ]
    },
    {
      title: "Traffic Monetization",
      description: "Maximize revenue from your existing traffic through our network of premium advertisers and optimized ad placements.",
      icon: "💰",
      features: [
        "Header bidding implementation",
        "Programmatic direct deals",
        "Ad layout optimization",
        "Real-time performance analytics"
      ]
    },
    {
      title: "Lead Generation",
      description: "Acquire high-intent leads through targeted campaigns that deliver qualified prospects for financial products and services.",
      icon: "🎯",
      features: [
        "Lead scoring and qualification",
        "Multi-channel attribution",
        "Compliant data collection",
        "CRM integration"
      ]
    },
    {
      title: "Programmatic Advertising",
      description: "Leverage our DSP partnerships and proprietary bidding algorithms to reach your ideal audience at scale.",
      icon: "🤖",
      features: [
        "Audience segmentation",
        "Cross-device targeting",
        "Real-time bidding optimization",
        "Fraud prevention"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive marketing solutions designed to drive performance and maximize your advertising ROI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <span className="text-4xl mr-6">{service.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Whether you're looking to acquire customers or monetize your traffic, we have the expertise to deliver results.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-800 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;