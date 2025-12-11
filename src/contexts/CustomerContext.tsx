import React, { createContext, useContext, useState, ReactNode } from "react";

export type DealStage = "discovery" | "demo" | "evaluation" | "negotiation" | "closed";

interface CustomerProfile {
  companyName: string;
  industry: string;
  companySize: string;
  contactName: string;
  contactRole: string;
  contactEmail: string;
  logoUrl?: string;
}

interface CustomerContextType {
  profile: CustomerProfile;
  dealStage: DealStage;
  setDealStage: (stage: DealStage) => void;
  updateProfile: (updates: Partial<CustomerProfile>) => void;
}

const defaultProfile: CustomerProfile = {
  companyName: "Acme Corp",
  industry: "Technology",
  companySize: "500-1000",
  contactName: "Jane Smith",
  contactRole: "VP of Engineering",
  contactEmail: "jane@acmecorp.com",
};

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export const CustomerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<CustomerProfile>(defaultProfile);
  const [dealStage, setDealStage] = useState<DealStage>("discovery");

  const updateProfile = (updates: Partial<CustomerProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  return (
    <CustomerContext.Provider value={{ profile, dealStage, setDealStage, updateProfile }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useCustomer must be used within a CustomerProvider");
  }
  return context;
};

export default CustomerContext;
