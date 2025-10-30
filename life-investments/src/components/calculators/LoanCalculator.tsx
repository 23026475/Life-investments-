import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Calculator } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

const LoanCalculator = () => {
  const { formatCurrency } = useCurrency();
  const [loanAmount, setLoanAmount] = useState("200000");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState("30");

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount) || 0;
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;
    
    // Monthly payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;
    
    return {
      monthlyPayment: isFinite(monthlyPayment) ? monthlyPayment : 0,
      totalPayment: isFinite(totalPayment) ? totalPayment : 0,
      totalInterest: isFinite(totalInterest) ? totalInterest : 0
    };
  };

  const results = calculateLoan();

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="finance-gradient rounded-lg p-2">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <CardTitle>Loan / EMI Calculator</CardTitle>
        </div>
        <CardDescription>
          Calculate your monthly payments and total interest for any loan
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="loan-amount">Loan Amount</Label>
            <Input
              id="loan-amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="200000"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interest">Annual Interest Rate (%)</Label>
            <Input
              id="interest"
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="6.5"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="term">Loan Term (years)</Label>
            <Input
              id="term"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="30"
            />
          </div>
        </div>

        <div className="pt-6 border-t space-y-3">
          <div className="flex justify-between items-center py-3 px-4 bg-secondary/10 rounded-lg">
            <span className="font-medium">Monthly Payment (EMI):</span>
            <span className="text-2xl font-bold text-primary">
              {formatCurrency(results.monthlyPayment)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Principal:</span>
            <span className="text-lg font-semibold">
              {formatCurrency(parseFloat(loanAmount))}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Interest:</span>
            <span className="text-lg font-semibold text-destructive">
              {formatCurrency(results.totalInterest)}
            </span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t">
            <span className="font-medium">Total Amount Payable:</span>
            <span className="text-xl font-bold">
              {formatCurrency(results.totalPayment)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;
