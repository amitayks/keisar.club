// Function to set the theme based on user preference
export function setTheme(isDark: boolean) {
  // Apply dark mode class to the document
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Save the preference to local storage
  localStorage.setItem("darkMode", isDark ? "true" : "false");
}

// Function to toggle the theme
export function toggleTheme() {
  const isDarkMode = document.documentElement.classList.contains("dark");
  setTheme(!isDarkMode);
}

// Function to initialize the theme based on local storage or system preference
function initializeTheme() {
  // Check if user has a saved preference
  const savedPreference = localStorage.getItem("darkMode");

  if (savedPreference !== null) {
    // Use saved preference if available
    setTheme(savedPreference === "true");
  } else {
    // Otherwise use system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark);
  }
}

// Initialize theme when page loads
document.addEventListener("DOMContentLoaded", initializeTheme);

// Example of how to use the toggle function with a button
// document.getElementById('themeToggle').addEventListener('click', toggleTheme);
