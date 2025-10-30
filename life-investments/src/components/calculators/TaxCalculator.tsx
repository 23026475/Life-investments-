import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";

interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
  fixed?: number;
}

interface CountryTax {
  name: string;
  flag: string;
  currency: string;
  brackets: TaxBracket[];
  standardDeduction?: number;
}

const taxSystems: { [key: string]: CountryTax } = {
  ZA: {
    name: "South Africa",
    flag: "🇿🇦",
    currency: "ZAR",
    brackets: [
      { min: 0, max: 237100, rate: 0.18, fixed: 0 },
      { min: 237101, max: 370500, rate: 0.26, fixed: 42678 },
      { min: 370501, max: 512800, rate: 0.31, fixed: 77362 },
      { min: 512801, max: 673000, rate: 0.36, fixed: 121475 },
      { min: 673001, max: 857900, rate: 0.39, fixed: 179147 },
      { min: 857901, max: 1817000, rate: 0.41, fixed: 251258 },
      { min: 1817001, max: null, rate: 0.45, fixed: 644489 },
    ],
  },
  US: {
    name: "United States",
    flag: "🇺🇸",
    currency: "USD",
    standardDeduction: 13850,
    brackets: [
      { min: 0, max: 11000, rate: 0.10, fixed: 0 },
      { min: 11001, max: 44725, rate: 0.12, fixed: 1100 },
      { min: 44726, max: 95375, rate: 0.22, fixed: 5147 },
      { min: 95376, max: 182100, rate: 0.24, fixed: 16290 },
      { min: 182101, max: 231250, rate: 0.32, fixed: 37104 },
      { min: 231251, max: 578125, rate: 0.35, fixed: 52832 },
      { min: 578126, max: null, rate: 0.37, fixed: 174238 },
    ],
  },
  GB: {
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP",
    standardDeduction: 12570,
    brackets: [
      { min: 0, max: 12570, rate: 0, fixed: 0 },
      { min: 12571, max: 50270, rate: 0.20, fixed: 0 },
      { min: 50271, max: 125140, rate: 0.40, fixed: 7540 },
      { min: 125141, max: null, rate: 0.45, fixed: 37488 },
    ],
  },
  CA: {
    name: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    standardDeduction: 15000,
    brackets: [
      { min: 0, max: 53359, rate: 0.15, fixed: 0 },
      { min: 53360, max: 106717, rate: 0.205, fixed: 8004 },
      { min: 106718, max: 165430, rate: 0.26, fixed: 18942 },
      { min: 165431, max: 235675, rate: 0.29, fixed: 34207 },
      { min: 235676, max: null, rate: 0.33, fixed: 54578 },
    ],
  },
  AU: {
    name: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    brackets: [
      { min: 0, max: 18200, rate: 0, fixed: 0 },
      { min: 18201, max: 45000, rate: 0.19, fixed: 0 },
      { min: 45001, max: 120000, rate: 0.325, fixed: 5092 },
      { min: 120001, max: 180000, rate: 0.37, fixed: 29467 },
      { min: 180001, max: null, rate: 0.45, fixed: 51667 },
    ],
  },
  IN: {
    name: "India",
    flag: "🇮🇳",
    currency: "INR",
    standardDeduction: 50000,
    brackets: [
      { min: 0, max: 250000, rate: 0, fixed: 0 },
      { min: 250001, max: 500000, rate: 0.05, fixed: 0 },
      { min: 500001, max: 1000000, rate: 0.20, fixed: 12500 },
      { min: 1000001, max: null, rate: 0.30, fixed: 112500 },
    ],
  },
};

const TaxCalculator = () => {
  const { formatCurrency } = useCurrency();
  const [country, setCountry] = useState<string>("ZA");
  const [income, setIncome] = useState<string>("500000");
  const [taxOwed, setTaxOwed] = useState<number | null>(null);
  const [effectiveRate, setEffectiveRate] = useState<number | null>(null);

  const calculateTax = () => {
    const incomeNum = parseFloat(income);
    if (isNaN(incomeNum) || incomeNum < 0) return;

    const taxSystem = taxSystems[country];
    const taxableIncome = incomeNum - (taxSystem.standardDeduction || 0);

    if (taxableIncome <= 0) {
      setTaxOwed(0);
      setEffectiveRate(0);
      return;
    }

    let tax = 0;

    for (const bracket of taxSystem.brackets) {
      if (taxableIncome <= bracket.min) break;

      if (bracket.max === null || taxableIncome > bracket.max) {
        const bracketIncome = bracket.max ? bracket.max - bracket.min + 1 : taxableIncome - bracket.min;
        tax = (bracket.fixed || 0) + bracketIncome * bracket.rate;
      } else {
        const bracketIncome = taxableIncome - bracket.min;
        tax = (bracket.fixed || 0) + bracketIncome * bracket.rate;
        break;
      }
    }

    setTaxOwed(tax);
    setEffectiveRate((tax / incomeNum) * 100);
  };

  const selectedTaxSystem = taxSystems[country];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Income Tax Calculator</CardTitle>
        <CardDescription>Calculate your income tax for different countries</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Select Country</Label>
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(taxSystems).map(([code, system]) => (
                <SelectItem key={code} value={code}>
                  {system.flag} {system.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Annual Income ({selectedTaxSystem.currency})</Label>
          <Input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter annual income"
          />
        </div>

        {selectedTaxSystem.standardDeduction && (
          <div className="text-sm text-muted-foreground">
            <p>Standard Deduction: {selectedTaxSystem.currency} {selectedTaxSystem.standardDeduction.toLocaleString()}</p>
          </div>
        )}

        <Button onClick={calculateTax} className="w-full">
          Calculate Tax
        </Button>

        {taxOwed !== null && (
          <div className="mt-6 space-y-4">
            <div className="p-6 rounded-lg finance-gradient text-white space-y-4">
              <div>
                <p className="text-sm opacity-90">Tax Owed</p>
                <p className="text-3xl font-bold">
                  {selectedTaxSystem.currency} {taxOwed.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <div>
                <p className="text-sm opacity-90">Effective Tax Rate</p>
                <p className="text-2xl font-semibold">{effectiveRate?.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-sm opacity-90">After-Tax Income</p>
                <p className="text-2xl font-semibold">
                  {selectedTaxSystem.currency} {(parseFloat(income) - taxOwed).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Tax Brackets for {selectedTaxSystem.name}</h4>
              <div className="space-y-2 text-sm">
                {selectedTaxSystem.brackets.map((bracket, index) => (
                  <div key={index} className="flex justify-between">
                    <span>
                      {bracket.min.toLocaleString()} - {bracket.max ? bracket.max.toLocaleString() : '∞'}
                    </span>
                    <span className="font-medium">{(bracket.rate * 100).toFixed(0)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-xs text-muted-foreground">
          <p>* Tax calculations are simplified and for educational purposes only.</p>
          <p>* Actual tax may vary based on deductions, credits, and other factors.</p>
          <p>* Consult a tax professional for accurate tax advice.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxCalculator;
