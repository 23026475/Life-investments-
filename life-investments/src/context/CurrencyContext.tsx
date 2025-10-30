import React, { createContext, useContext, useState, useEffect } from "react";

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  country: string;
  flag: string;
}

export const currencies: Currency[] = [
  { code: "USD", symbol: "$", name: "US Dollar", country: "United States", flag: "🇺🇸" },
  { code: "ZAR", symbol: "R", name: "South African Rand", country: "South Africa", flag: "🇿🇦" },
  { code: "EUR", symbol: "€", name: "Euro", country: "European Union", flag: "🇪🇺" },
  { code: "GBP", symbol: "£", name: "British Pound", country: "United Kingdom", flag: "🇬🇧" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen", country: "Japan", flag: "🇯🇵" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan", country: "China", flag: "🇨🇳" },
  { code: "INR", symbol: "₹", name: "Indian Rupee", country: "India", flag: "🇮🇳" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", country: "Australia", flag: "🇦🇺" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar", country: "Canada", flag: "🇨🇦" },
  { code: "CHF", symbol: "Fr", name: "Swiss Franc", country: "Switzerland", flag: "🇨🇭" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real", country: "Brazil", flag: "🇧🇷" },
  { code: "MXN", symbol: "$", name: "Mexican Peso", country: "Mexico", flag: "🇲🇽" },
  { code: "NGN", symbol: "₦", name: "Nigerian Naira", country: "Nigeria", flag: "🇳🇬" },
  { code: "KES", symbol: "KSh", name: "Kenyan Shilling", country: "Kenya", flag: "🇰🇪" },
  { code: "EGP", symbol: "E£", name: "Egyptian Pound", country: "Egypt", flag: "🇪🇬" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "SAR", symbol: "﷼", name: "Saudi Riyal", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar", country: "Singapore", flag: "🇸🇬" },
  { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar", country: "Hong Kong", flag: "🇭🇰" },
  { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar", country: "New Zealand", flag: "🇳🇿" },
];

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatCurrency: (amount: number) => string;
  showWelcome: boolean;
  setShowWelcome: (show: boolean) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(currencies[0]); // Default to USD
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if user has selected a currency before
    const savedCurrency = localStorage.getItem("selectedCurrency");
    if (savedCurrency) {
      const parsedCurrency = JSON.parse(savedCurrency);
      setCurrencyState(parsedCurrency);
    } else {
      // Show welcome dialog on first visit
      setShowWelcome(true);
    }
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("selectedCurrency", JSON.stringify(newCurrency));
    setShowWelcome(false);
  };

  const formatCurrency = (amount: number): string => {
    return `${currency.symbol}${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatCurrency, showWelcome, setShowWelcome }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
