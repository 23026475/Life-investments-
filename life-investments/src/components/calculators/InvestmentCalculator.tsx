import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input (1)";
import { Label } from "../ui/label";
import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { useCurrency } from "../../context/CurrencyContext";

const InvestmentCalculator = () => {
  const { formatCurrency } = useCurrency();
  const [principal, setPrincipal] = useState("10000");
  const [monthlyContribution, setMonthlyContribution] = useState("500");
  const [annualRate, setAnnualRate] = useState("8");
  const [years, setYears] = useState("10");

  const calculateInvestment = () => {
    const p = parseFloat(principal) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const rate = parseFloat(annualRate) / 100;
    const time = parseFloat(years) || 0;
    
    // Future value with monthly contributions
    const monthlyRate = rate / 12;
    const months = time * 12;
    
    // FV of initial investment
    const futureValuePrincipal = p * Math.pow(1 + rate, time);
    
    // FV of monthly contributions (annuity)
    const futureValueContributions = monthly * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    
    const totalFutureValue = futureValuePrincipal + futureValueContributions;
    const totalContributed = p + (monthly * months);
    const totalEarnings = totalFutureValue - totalContributed;
    
    return {
      futureValue: totalFutureValue,
      totalContributed,
      totalEarnings
    };
  };

  const results = calculateInvestment();

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="growth-gradient rounded-lg p-2">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <CardTitle>Investment Calculator</CardTitle>
        </div>
        <CardDescription>
          Calculate the future value of your investments with regular contributions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="principal">Initial Investment</Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="10000"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="monthly">Monthly Contribution</Label>
            <Input
              id="monthly"
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              placeholder="500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="rate">Annual Return Rate (%)</Label>
            <Input
              id="rate"
              type="number"
              step="0.1"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              placeholder="8"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="years">Investment Period (years)</Label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="10"
            />
          </div>
        </div>

        <div className="pt-6 border-t space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Contributed:</span>
            <span className="text-xl font-semibold">
              {formatCurrency(results.totalContributed)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Earnings:</span>
            <span className="text-xl font-semibold text-secondary">
              {formatCurrency(results.totalEarnings)}
            </span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t">
            <span className="font-medium">Future Value:</span>
            <span className="text-2xl font-bold text-primary">
              {formatCurrency(results.futureValue)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentCalculator;
