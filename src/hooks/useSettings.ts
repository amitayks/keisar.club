import { useState, useEffect } from "react";
import supabase from "../services/supabase";

// Define the shape of our settings
export interface UISettings {
  darkMode: boolean;
  primaryColor: string;
  logoUrl: string;
  siteName: string;
  navbarPosition: "left" | "right";
  // Add other UI settings as needed
}

// Default settings in case Supabase is not available
const defaultSettings: UISettings = {
  darkMode: false,
  primaryColor: "#1e293b", // stone-600
  logoUrl: "",
  siteName: "Keisar Club",
  navbarPosition: "right",
};

export function useSettings() {
  const [settings, setSettings] = useState<UISettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchSettings() {
      try {
        setLoading(true);

        // Fetch settings from Supabase
        const { data, error } = await supabase
          .from("ui_settings")
          .select("*")
          .single();

        if (error) {
          throw new Error(`Failed to fetch settings: ${error.message}`);
        }

        if (data) {
          setSettings({
            ...defaultSettings, // fallback for any missing properties
            ...data, // override with data from Supabase
          });
        }
      } catch (err) {
        console.error("Error fetching settings:", err);
        setError(err instanceof Error ? err : new Error("Unknown error"));
        // Fall back to default settings on error
      } finally {
        setLoading(false);
      }
    }

    fetchSettings();
  }, []);

  // Function to update a specific setting
  const updateSetting = async <K extends keyof UISettings>(
    key: K,
    value: UISettings[K]
  ) => {
    try {
      // Optimistically update local state
      setSettings((prev) => ({ ...prev, [key]: value }));

      // Update in Supabase
      const { error } = await supabase
        .from("ui_settings")
        .update({ [key]: value })
        .eq("id", 1); // Assuming we have a single row with id 1

      if (error) {
        throw new Error(`Failed to update setting: ${error.message}`);
      }
    } catch (err) {
      console.error("Error updating setting:", err);
      // Revert to previous state if there was an error
      fetchSettings();
    }
  };

  // Function to specifically toggle dark mode
  const toggleDarkMode = async () => {
    await updateSetting("darkMode", !settings.darkMode);
  };

  // Internal function to refresh settings
  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from("ui_settings")
        .select("*")
        .single();

      if (error) {
        throw new Error(`Failed to fetch settings: ${error.message}`);
      }

      if (data) {
        setSettings({
          ...defaultSettings,
          ...data,
        });
      }
    } catch (err) {
      console.error("Error fetching settings:", err);
    }
  };

  return {
    settings,
    loading,
    error,
    updateSetting,
    toggleDarkMode,
    refetch: fetchSettings,
  };
}
