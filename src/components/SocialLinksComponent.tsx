import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Twitter,
  Youtube,
} from "lucide-react";

// Social link type definition
export interface SocialLink {
  label: string;
  value: string;
  ariaLabel?: string;
}

// Component props interface
interface SocialLinksComponentProps {
  socialLinks: SocialLink[];
  variant?: "outline" | "filled";
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  className?: string;
  showLabels?: boolean;
  iconClassName?: string;
  linkClassName?: string;
}

// Icon mapping for different social platforms
const getSocialIcon = (label: string, className: string = "w-5 h-5") => {
  const normalizedLabel = label.toLowerCase().trim();

  switch (normalizedLabel) {
    case "github":
      return <Github className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "instagram":
      return <Instagram className={className} />;
    case "twitter":
    case "x":
      return <Twitter className={className} />;
    case "youtube":
      return <Youtube className={className} />;
    case "email":
    case "mail":
      return <Mail className={className} />;
    case "whatsapp":
      return <MessageCircle className={className} />;
    case "phone":
      return <PhoneCall className={className} />;
    case "tel":
    case "telephone":
      return <Phone className={className} />;
    case "location":
    case "address":
      return <MapPin className={className} />;
    default:
      return <Mail className={className} />; // Default fallback
  }
};

// Helper function to format href based on label
const formatHref = (label: string, value: string): string => {
  const normalizedLabel = label.toLowerCase().trim();

  // If value already contains protocol, return as is
  if (
    value.startsWith("http") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:")
  ) {
    return value;
  }

  switch (normalizedLabel) {
    case "email":
    case "mail":
      return `mailto:${value}`;
    case "phone":
    case "tel":
    case "telephone":
      return `tel:${value}`;
    case "whatsapp":
      // Extract number if it's a full URL, otherwise format as WhatsApp link
      if (value.includes("wa.me")) return value;
      return `https://wa.me/${value.replace(/\D/g, "")}`; // Remove non-digits
    default:
      return value;
  }
};

const SocialLinksComponent = ({
  socialLinks,
  variant = "outline",
  size = "md",
  orientation = "horizontal",
  className = "",
  showLabels = false,
  iconClassName,
  linkClassName,
}: SocialLinksComponentProps) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      container: "gap-2",
      icon: "w-4 h-4",
      padding: "p-2",
      text: "text-xs",
    },
    md: {
      container: "gap-3",
      icon: "w-4 h-4",
      padding: "p-3",
      text: "text-sm",
    },
    lg: {
      container: "gap-4",
      icon: "w-6 h-6",
      padding: "p-3",
      text: "text-base",
    },
  };

  // Variant configurations
  const variantConfig = {
    outline: {
      base: "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors",
      filled:
        "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700",
    },
    filled: {
      base: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-lg transition-all duration-200",
      filled:
        "bg-gray-800 text-white hover:bg-blue-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200",
    },
  };

  const config = sizeConfig[size];
  const styles = variantConfig[variant];

  // Container classes based on orientation
  const containerClasses = `
    flex ${orientation === "horizontal" ? "flex-row" : "flex-col"} 
    ${config.container} 
    ${orientation === "horizontal" ? "justify-center" : "items-center"}
    ${className}
  `.trim();

  // Link classes
  const baseLinkClasses = `
    ${config.padding} 
    ${variant === "filled" ? styles.filled : styles.base}
    ${linkClassName || ""}
  `.trim();

  return (
    <div className={containerClasses}>
      {socialLinks.map((link, index) => {
        const href = formatHref(link.label, link.value);
        const isExternal = href.startsWith("http");
        const iconSize = iconClassName || config.icon;

        return (
          <a
            key={index}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={baseLinkClasses}
            aria-label={link.ariaLabel || `${link.label} link`}
            title={link.ariaLabel || link.label}
          >
            <div
              className={`flex items-center ${
                showLabels && orientation === "horizontal" ? "gap-2" : ""
              } ${orientation === "vertical" ? "flex-col gap-1" : ""}`}
            >
              {getSocialIcon(link.label, iconSize)}
              {showLabels && (
                <span className={`${config.text} font-medium capitalize`}>
                  {link.label}
                </span>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinksComponent;

// Example usage:
/*
const socialLinksData: SocialLink[] = [
  { label: "github", value: "https://github.com/amitayks", ariaLabel: "GitHub Profile" },
  { label: "linkedin", value: "https://linkedin.com/in/amitaykeisar" },
  { label: "email", value: "amiteyk3@gmail.com" },
  { label: "whatsapp", value: "https://wa.me/972526471797" },
  { label: "instagram", value: "https://instagram.com/amitay.ks" },
  { label: "facebook", value: "https://www.facebook.com/profile.php?id=100086721472400" },
];

// Basic usage
<SocialLinksComponent socialLinks={socialLinksData} />

// Filled variant with labels
<SocialLinksComponent 
  socialLinks={socialLinksData} 
  variant="filled" 
  showLabels={true}
  size="lg"
/>

// Vertical orientation with custom styling
<SocialLinksComponent 
  socialLinks={socialLinksData} 
  orientation="vertical"
  className="bg-gray-50 p-4 rounded-lg"
  linkClassName="hover:scale-110"
/>
*/
