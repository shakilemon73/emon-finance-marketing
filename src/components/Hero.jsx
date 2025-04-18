const Hero = () => {
  return (
    <section className="relative bg-blue-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with Emon Finance Ltd. for Performance-Driven Marketing
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Drive high-quality traffic and maximize ROI with our advertising solutions in the financial sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/partnerships" 
              className="bg-white text-blue-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Explore Partnership Opportunities
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white hover:text-blue-800 transition-colors text-center"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-blue-900 to-transparent opacity-20 -z-10"></div>
    </section>
  );
};

export default Hero;