import { Link } from 'react-router-dom';

const Partnerships = () => {
  const partners = [
    {
      name: "Google Ads",
      description: "We manage high-spend Google Ads accounts with proven ROI across multiple verticals.",
      requirements: [
        "Minimum $50,000 monthly ad spend",
        "Compliance with Google's advertising policies",
        "Quality score above average"
      ]
    },
    {
      name: "Microsoft Ads",
      description: "Our expertise in Bing and Microsoft Audience Network delivers exceptional performance.",
      requirements: [
        "Minimum $20,000 monthly ad spend",
        "Valid business verification",
        "Clean compliance history"
      ]
    },
    {
      name: "System1",
      description: "We drive high-intent traffic that converts for your publishers and advertisers.",
      requirements: [
        "Quality traffic sources",
        "Transparent traffic reporting",
        "Compliance with privacy regulations"
      ]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Partnership Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join forces with Emon Finance Ltd. to access premium traffic, maximize your revenue, and grow your business.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">For Advertising Platforms</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Consistent, high-quality traffic that meets your standards</li>
                <li>Full compliance with all advertising policies and regulations</li>
                <li>Transparent reporting and communication</li>
                <li>Dedicated account management for optimal performance</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">For Publishers</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Higher RPMs through optimized ad placements</li>
                <li>Access to premium advertisers in finance and other verticals</li>
                <li>Regular payments and reliable partnership</li>
                <li>Custom solutions tailored to your audience</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Partner Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-800 mb-3">{partner.name}</h3>
                <p className="text-gray-700 mb-4">{partner.description}</p>
                <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {partner.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Partner With Us?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you're an advertising platform looking for quality traffic or a publisher seeking better monetization, we'd love to discuss how we can work together.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-700 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Contact Our Partnership Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;