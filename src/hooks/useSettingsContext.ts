import { useContext } from "react";
import { SettingsContext } from "../ui/AppLayout";

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      "useSettingsContext must be used within a SettingsContext.Provider"
    );
  }
  return context;
};
