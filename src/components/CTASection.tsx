import { Link } from "react-router-dom";

function CTASection({ style }: { style: string }) {
  return (
    <section className={`py-20 ${style}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Let's Create Something Amazing Together
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Whether you have a project in mind or just want to connect, I'm always open to discussing
          new opportunities and collaborations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View My Portfolio
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
