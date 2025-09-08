import { createContext } from "react";

export const RouteContext = createContext();

export function RoutesProvider({ children }) {
  const routes = {
    home: "/react-starter",
    panel: "/react-starter/panel",
    register: "/react-starter/register",
  };

  return (
    <RouteContext.Provider value={routes}>{children}</RouteContext.Provider>
  );
}
