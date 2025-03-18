import { Outlet } from "react-router-dom";
import { createContext, useEffect } from "react";
import Navbar from "./navBar/Navbar";
import Footer from "./footer/Footer";
import { useSettings, UISettings } from "../hooks/useSettings";

// Create a context to share settings across components
export const SettingsContext = createContext<{
  settings: UISettings;
  toggleDarkMode: () => Promise<void>;
  updateSetting: <K extends keyof UISettings>(
    key: K,
    value: UISettings[K]
  ) => Promise<void>;
} | null>(null);

function AppLayout() {
  const { settings, toggleDarkMode, updateSetting, loading } = useSettings();

  // Apply dark mode to the HTML element when settings change
  useEffect(() => {
    // This is the key change - apply to HTML element, not just a local div
    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Optional: Also add as a data attribute for additional styling options
    document.documentElement.setAttribute(
      "data-theme",
      settings.darkMode ? "dark" : "light"
    );

    // Log to verify the class is being applied
    console.log(
      "Dark mode applied:",
      settings.darkMode,
      document.documentElement.classList.contains("dark")
    );
  }, [settings.darkMode]);

  // Apply any other global styles from settings
  useEffect(() => {
    // Create a style element for custom CSS variables
    let style = document.getElementById("theme-vars") as HTMLStyleElement;
    if (!style) {
      style = document.createElement("style");
      style.id = "theme-vars";
      document.head.appendChild(style);
    }

    // Set CSS variables based on settings
    // These can then be used in your Tailwind config or directly in components
    style.innerHTML = `
      :root {
        --primary-color: ${settings.primaryColor};
        --text-color: ${settings.darkMode ? "#f3f4f6" : "#1f2937"};
        --bg-color: ${settings.darkMode ? "#1f2937" : "#ffffff"};
      }
    `;
  }, [settings]);

  // if (loading) {
  //   return (
  //     <div className='flex items-center justify-center h-screen'>
  //       Loading settings...
  //     </div>
  //   );
  // }

  return (
    <SettingsContext.Provider
      value={{ settings, toggleDarkMode, updateSetting }}
    >
      {/* Don't add dark class here - it's on the HTML element now */}
      <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200'>
        <Navbar />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </SettingsContext.Provider>
  );
}

export default AppLayout;
