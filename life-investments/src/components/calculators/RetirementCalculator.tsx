import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PiggyBank } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

const RetirementCalculator = () => {
  const { formatCurrency } = useCurrency();
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("65");
  const [currentSavings, setCurrentSavings] = useState("50000");
  const [retirementGoal, setRetirementGoal] = useState("1000000");
  const [expectedReturn, setExpectedReturn] = useState("7");

  const calculateRetirement = () => {
    const age = parseFloat(currentAge) || 0;
    const retireAge = parseFloat(retirementAge) || 0;
    const savings = parseFloat(currentSavings) || 0;
    const goal = parseFloat(retirementGoal) || 0;
    const returnRate = parseFloat(expectedReturn) / 100;
    
    const yearsToRetirement = retireAge - age;
    
    if (yearsToRetirement <= 0) {
      return { monthlyRequired: 0, totalContributions: 0, growthFromSavings: 0 };
    }
    
    // Future value of current savings
    const futureValueOfSavings = savings * Math.pow(1 + returnRate, yearsToRetirement);
    
    // Amount needed from contributions
    const amountNeeded = goal - futureValueOfSavings;
    
    // Calculate monthly contribution needed
    const monthlyRate = returnRate / 12;
    const months = yearsToRetirement * 12;
    
    // PMT formula: Required = AmountNeeded * monthlyRate / ((1 + monthlyRate)^months - 1)
    const monthlyRequired = amountNeeded * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalContributions = monthlyRequired * months;
    
    return {
      monthlyRequired: isFinite(monthlyRequired) && monthlyRequired > 0 ? monthlyRequired : 0,
      totalContributions: isFinite(totalContributions) ? totalContributions : 0,
      growthFromSavings: futureValueOfSavings
    };
  };

  const results = calculateRetirement();
  const yearsToRetirement = parseFloat(retirementAge) - parseFloat(currentAge);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="growth-gradient rounded-lg p-2">
            <PiggyBank className="h-5 w-5 text-white" />
          </div>
          <CardTitle>Retirement Planner</CardTitle>
        </div>
        <CardDescription>
          Calculate how much you need to save monthly to reach your retirement goals
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="current-age">Current Age</Label>
            <Input
              id="current-age"
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              placeholder="30"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="retirement-age">Retirement Age</Label>
            <Input
              id="retirement-age"
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              placeholder="65"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="current-savings">Current Savings</Label>
            <Input
              id="current-savings"
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              placeholder="50000"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="retirement-goal">Retirement Goal</Label>
            <Input
              id="retirement-goal"
              type="number"
              value={retirementGoal}
              onChange={(e) => setRetirementGoal(e.target.value)}
              placeholder="1000000"
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="expected-return">Expected Annual Return (%)</Label>
            <Input
              id="expected-return"
              type="number"
              step="0.1"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              placeholder="7"
            />
          </div>
        </div>

        {yearsToRetirement > 0 ? (
          <div className="pt-6 border-t space-y-3">
            <div className="text-center py-4 px-4 bg-secondary/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Monthly Savings Required</p>
              <p className="text-3xl font-bold text-secondary">
                {formatCurrency(results.monthlyRequired)}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-muted-foreground mb-1">Years to Retirement</p>
                <p className="text-xl font-bold">{yearsToRetirement}</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-muted-foreground mb-1">Total Contributions</p>
                <p className="text-xl font-bold">
                  {formatCurrency(results.totalContributions)}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-muted-foreground">Growth from Current Savings:</span>
              <span className="font-semibold text-secondary">
                {formatCurrency(results.growthFromSavings)}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-6">
            Please ensure retirement age is greater than current age
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RetirementCalculator;
