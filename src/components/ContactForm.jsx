const ContactForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="partnership-type" className="block text-sm font-medium text-gray-700 mb-1">
          I'm interested in (select one)
        </label>
        <select
          id="partnership-type"
          name="partnership-type"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="ad-platform">Advertising Platform Partnership</option>
          <option value="publisher">Publisher Partnership</option>
          <option value="client">Becoming a Client</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="privacy-policy"
            name="privacy-policy"
            type="checkbox"
            required
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="privacy-policy" className="font-medium text-gray-700">
            I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </label>
        </div>
      </div>
      
      <div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;