import { Link } from "react-router-dom";
import { FiUpload, FiEdit, FiDownload, FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold  mb-4">
            Merge & Arrange PDFs with Ease
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combine multiple PDF files and rearrange pages in seconds. Our free
            online tool helps you organize documents exactly how you need them.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FiUpload size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload PDFs</h3>
            <p className="text-gray-600">
              Drag and drop your PDF files or select them from your device.
              Multiple files supported.
            </p>
          </div>

          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FiEdit size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Arrange Pages</h3>
            <p className="text-gray-600">
              Reorder pages with simple drag and drop. Delete or rotate pages as
              needed.
            </p>
          </div>

          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-indigo-600 mb-4">
              <FiDownload size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Download Result</h3>
            <p className="text-gray-600">
              Get your perfectly merged PDF with one click. No watermarks, no
              registration.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className=" rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold  mb-2">
                  Ready to merge your PDFs?
                </h2>
                <p className="text-gray-600">
                  Join thousands of users who organize their documents with our
                  free tool.
                </p>
              </div>
              <Link
                to="/merge-pdf"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Start Merging Now
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold  mb-8">
            Trusted by Professionals Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "This tool saved me hours of work merging contracts. Super intuitive!",
                name: "Sarah K., Legal Assistant",
              },
              {
                quote:
                  "I use it weekly to combine reports. The page arranging feature is perfect.",
                name: "Michael T., Financial Analyst",
              },
              {
                quote:
                  "As a teacher, this helps me organize study materials quickly.",
                name: "David P., Educator",
              },
            ].map((testimonial, index) => (
              <div key={index} className=" p-6 rounded-lg shadow">
                <p className="italic  mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-medium text-gray-900">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
