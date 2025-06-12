export interface ErrorComponentProps {
  /** Main error message to display */
  message?: string;
  /** Additional details about the error */
  details?: string;
  /** Whether to show a retry button */
  showRetry?: boolean;
  /** Retry function to call when retry button is clicked */
  onRetry?: () => void;
  /** Whether to show navigation buttons (home, back) */
  showNavigation?: boolean;
  /** Custom action button text */
  actionText?: string;
  /** Custom action function */
  onAction?: () => void;
  /** Size variant of the error component */
  size?: "sm" | "md" | "lg";
  /** Whether this is a full page error or inline error */
  fullPage?: boolean;
}
