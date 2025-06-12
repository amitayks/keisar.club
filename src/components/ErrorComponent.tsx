import { AlertTriangle, RefreshCw, Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ErrorComponentProps } from "../types/error";

const ErrorComponent = ({
  message = "Something went wrong",
  details,
  showRetry = false,
  onRetry,
  showNavigation = false,
  actionText,
  onAction,
  size = "md",
  fullPage = false,
}: ErrorComponentProps) => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate("/");
  const handleGoBack = () => navigate(-1);

  const sizeConfig = {
    sm: {
      container: "p-4",
      icon: "h-8 w-8",
      title: "text-lg",
      message: "text-sm",
      button: "px-3 py-1.5 text-sm",
    },
    md: {
      container: "p-6",
      icon: "h-12 w-12",
      title: "text-xl",
      message: "text-base",
      button: "px-4 py-2 text-sm",
    },
    lg: {
      container: "p-8",
      icon: "h-16 w-16",
      title: "text-2xl",
      message: "text-lg",
      button: "px-6 py-3 text-base",
    },
  };

  const config = sizeConfig[size];

  const containerClasses = fullPage
    ? `min-h-screen flex items-center justify-center bg-white dark:bg-gray-900`
    : `flex items-center justify-center ${config.container}`;

  return (
    <div className={containerClasses}>
      <div className='text-center max-w-md mx-auto'>
        {/* Error Icon */}
        <div className='flex justify-center mb-4'>
          <div className='inline-flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 p-3'>
            <AlertTriangle
              className={`${config.icon} text-red-600 dark:text-red-400`}
              aria-hidden='true'
            />
          </div>
        </div>

        {/* Error Title */}
        <h3
          className={`${config.title} font-semibold text-zinc-900 dark:text-stone-200 mb-2`}
        >
          Error
        </h3>

        {/* Error Message */}
        <p
          className={`${config.message} text-stone-600 dark:text-stone-400 mb-4`}
        >
          {message}
        </p>

        {/* Error Details */}
        {details && (
          <div className='bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-md p-3 mb-4'>
            <p className='text-sm text-red-700 dark:text-red-300 font-mono'>
              {details}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          {/* Retry Button */}
          {showRetry && onRetry && (
            <button
              onClick={onRetry}
              className={`${config.button} inline-flex items-center justify-center bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
            >
              <RefreshCw className='h-4 w-4 mr-2' />
              Try Again
            </button>
          )}

          {/* Custom Action Button */}
          {actionText && onAction && (
            <button
              onClick={onAction}
              className={`${config.button} inline-flex items-center justify-center bg-stone-600 text-white rounded-md font-medium hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition-colors`}
            >
              {actionText}
            </button>
          )}

          {/* Navigation Buttons */}
          {showNavigation && (
            <>
              <button
                onClick={handleGoBack}
                className={`${config.button} inline-flex items-center justify-center bg-stone-100 text-stone-800 border border-stone-300 rounded-md font-medium hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition-colors dark:bg-zinc-800 dark:text-stone-200 dark:border-zinc-700 dark:hover:bg-zinc-700`}
              >
                <ArrowLeft className='h-4 w-4 mr-2' />
                Go Back
              </button>

              <button
                onClick={handleGoHome}
                className={`${config.button} inline-flex items-center justify-center bg-stone-100 text-stone-800 border border-stone-300 rounded-md font-medium hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition-colors dark:bg-zinc-800 dark:text-stone-200 dark:border-zinc-700 dark:hover:bg-zinc-700`}
              >
                <Home className='h-4 w-4 mr-2' />
                Go Home
              </button>
            </>
          )}
        </div>

        {/* Contact Support Link */}
        {fullPage && (
          <p className='mt-6 text-sm text-stone-500 dark:text-stone-400'>
            If this problem persists, please{" "}
            <a
              href='/contact'
              className='text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium'
            >
              contact support
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
};

export default ErrorComponent;
