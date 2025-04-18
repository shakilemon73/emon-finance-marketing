const CaseStudyCard = ({ title, challenge, solution, results, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">The Challenge</h3>
            <p className="text-gray-600">{challenge}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Solution</h3>
            <p className="text-gray-600">{solution}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">The Results</h3>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;