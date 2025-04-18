import TeamMember from '../components/TeamMember';

const About = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      bio: "With over 15 years in digital marketing and finance, John leads our strategic vision and partnerships.",
      image: "/images/team/ceo.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      bio: "Sarah specializes in performance marketing with expertise in financial services customer acquisition.",
      image: "/images/team/marketing-director.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Michael oversees our technology stack and data infrastructure, ensuring optimal campaign performance.",
      image: "/images/team/cto.jpg"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Emon Finance Ltd.</h1>
          <p className="text-xl text-gray-600">
            We combine financial expertise with cutting-edge marketing technology to deliver exceptional results for our partners.
          </p>
        </div>
        
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2018, Emon Finance Ltd. began as a specialized marketing agency focused on the financial services sector. 
                  We recognized a gap in the market for performance-driven marketing that truly understood the compliance requirements 
                  and customer behaviors unique to finance.
                </p>
                <p>
                  Today, we've expanded our expertise to serve clients across multiple verticals while maintaining our core focus 
                  on delivering measurable ROI through data-driven strategies.
                </p>
                <p>
                  Our partnerships with major advertising platforms are built on a foundation of trust, transparency, and consistent 
                  delivery of high-quality traffic.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/images/team/office-meeting.jpg" 
                alt="Emon Finance team meeting" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Transparency</h3>
              <p className="text-gray-700">
                We believe in clear communication and honest reporting with all our partners and clients.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Performance</h3>
              <p className="text-gray-700">
                Every campaign is optimized to deliver measurable results and maximum ROI.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Compliance</h3>
              <p className="text-gray-700">
                We adhere strictly to all advertising policies and financial regulations.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;