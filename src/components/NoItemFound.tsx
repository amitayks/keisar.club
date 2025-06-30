import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NoItemFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate("/portfolio")}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </button>
      </div>
    </div>
  );
}

export default NoItemFound;
