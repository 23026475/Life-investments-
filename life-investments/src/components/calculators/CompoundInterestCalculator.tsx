import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input (1)";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";
import { DollarSign } from "lucide-react";
import { useCurrency } from "../../context/CurrencyContext";

const CompoundInterestCalculator = () => {
  const { formatCurrency } = useCurrency();
  const [principal, setPrincipal] = useState("5000");
  const [annualRate, setAnnualRate] = useState("5");
  const [years, setYears] = useState("5");
  const [frequency, setFrequency] = useState("12"); // monthly

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(annualRate) / 100;
    const t = parseFloat(years) || 0;
    const n = parseFloat(frequency);
    
    // A = P(1 + r/n)^(nt)
    const amount = p * Math.pow(1 + r / n, n * t);
    const interest = amount - p;
    
    return {
      finalAmount: amount,
      totalInterest: interest
    };
  };

  const results = calculateCompoundInterest();

  const frequencyOptions = [
    { value: "1", label: "Annually" },
    { value: "2", label: "Semi-Annually" },
    { value: "4", label: "Quarterly" },
    { value: "12", label: "Monthly" },
    { value: "365", label: "Daily" }
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="finance-gradient rounded-lg p-2">
            <DollarSign className="h-5 w-5 text-white" />
          </div>
          <CardTitle>Compound Interest Calculator</CardTitle>
        </div>
        <CardDescription>
          See how your money grows with compound interest over time
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="ci-principal">Principal Amount</Label>
            <Input
              id="ci-principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="5000"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ci-rate">Annual Interest Rate (%)</Label>
            <Input
              id="ci-rate"
              type="number"
              step="0.1"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              placeholder="5"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ci-years">Time Period (years)</Label>
            <Input
              id="ci-years"
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="5"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ci-frequency">Compounding Frequency</Label>
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger id="ci-frequency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {frequencyOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-6 border-t space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Initial Deposit:</span>
            <span className="text-xl font-semibold">
              {formatCurrency(parseFloat(principal))}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Interest Earned:</span>
            <span className="text-xl font-semibold text-secondary">
              {formatCurrency(results.totalInterest)}
            </span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t">
            <span className="font-medium">Final Amount:</span>
            <span className="text-2xl font-bold text-primary">
              {formatCurrency(results.finalAmount)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompoundInterestCalculator;
