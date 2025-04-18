import CaseStudyCard from '../components/CaseStudyCard';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Financial Services Client",
      challenge: "A fintech startup needed to acquire high-value customers for their new investment platform while maintaining strict compliance with financial advertising regulations.",
      solution: "We developed a multi-channel campaign combining targeted PPC with content marketing and retargeting, with all creatives reviewed by legal counsel.",
      results: [
        "63% increase in qualified leads",
        "35% lower CPA than industry average",
        "100% compliance with financial regulations"
      ],
      image: "/images/case-studies/finance-client.jpg"
    },
    {
      title: "E-commerce Platform",
      challenge: "An online retailer was struggling to monetize their traffic effectively, with low RPMs and poor ad placement optimization.",
      solution: "We implemented header bidding with premium demand partners and optimized ad layouts through A/B testing.",
      results: [
        "142% increase in ad revenue",
        "Improved page load speed by 28%",
        "Higher user engagement metrics"
      ],
      image: "/images/case-studies/ecommerce-client.jpg"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we've helped clients and partners achieve exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              title={study.title}
              challenge={study.challenge}
              solution={study.solution}
              results={study.results}
              image={study.image}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Interested in Working With Us?</h2>
          <a 
            href="/contact" 
            className="inline-block bg-blue-700 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;