import { marked } from "marked";
import { useEffect } from "react";
import { privacyPolicy } from "../../constants/VISARA_PRIVACY_POLICY";

function VIsaraPrivacyPolicy() {
  useEffect(() => {
    document.title = "Visara Privacy Policy | Keisar Club";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center px-2 sm:px-6 py-10">
      <div className="w-full max-w-3xl bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100 dark:border-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Visara Privacy Policy
        </h1>
        <div
          className="portfolio-content text-gray-800 dark:text-gray-200 text-base sm:text-lg"
          dangerouslySetInnerHTML={{ __html: marked.parse(privacyPolicy) }}
        />
      </div>
    </div>
  );
}

export default VIsaraPrivacyPolicy;
