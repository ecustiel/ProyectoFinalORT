import { createContext, useState } from "react";
import { publicationData } from "../Pages/RegisterProduct/DataPublications";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [publication, setPublication] = useState(publicationData);
  const [user, setUser] = useState(null);

  const contextValue = {
    user,
    publication,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
