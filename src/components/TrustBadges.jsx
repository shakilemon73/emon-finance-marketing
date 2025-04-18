const TrustBadges = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Trusted By Industry Leaders
          </h3>
          <h2 className="text-2xl font-bold text-gray-800">
            Our Advertising Partners
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <img 
            src="/images/partners/google-ads.png" 
            alt="Google Ads Partner" 
            className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/partners/microsoft-ads.png" 
            alt="Microsoft Ads Partner" 
            className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/images/partners/system1.png" 
            alt="System1 Partner" 
            className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <div className="bg-gray-100 px-6 py-3 rounded-lg">
            <span className="font-medium text-gray-700">IAB Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;