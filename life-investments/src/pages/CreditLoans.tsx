import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Home, Car, GraduationCap, TrendingUp, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const CreditLoans = () => {
  const loanTypes = [
    {
      icon: CreditCard,
      title: "Personal Loans",
      rate: "7-36% APR",
      description: "Unsecured loans for various personal expenses with flexible terms.",
      uses: ["Debt consolidation", "Home improvements", "Major purchases"]
    },
    {
      icon: Car,
      title: "Auto Loans",
      rate: "4-10% APR",
      description: "Secured loans specifically for purchasing new or used vehicles.",
      uses: ["New car purchase", "Used car purchase", "Refinancing existing auto loans"]
    },
    {
      icon: Home,
      title: "Mortgages",
      rate: "6-8% APR",
      description: "Long-term loans for purchasing or refinancing real estate property.",
      uses: ["Home purchase", "Refinancing", "Home equity lines"]
    },
    {
      icon: GraduationCap,
      title: "Student Loans",
      rate: "4-14% APR",
      description: "Educational loans with various repayment options and potential forgiveness.",
      uses: ["Tuition fees", "Books & supplies", "Living expenses"]
    }
  ];

  const creditScoreRanges = [
    { range: "800-850", rating: "Exceptional", color: "text-secondary" },
    { range: "740-799", rating: "Very Good", color: "text-secondary/80" },
    { range: "670-739", rating: "Good", color: "text-accent" },
    { range: "580-669", rating: "Fair", color: "text-muted-foreground" },
    { range: "300-579", rating: "Poor", color: "text-destructive" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Credit & Loans</h1>
          <p className="text-xl text-muted-foreground">
            Understanding credit scores and loan options to make informed borrowing decisions
          </p>
        </div>

        {/* Credit Score Section */}
        <Card className="mb-12 animate-slide-up">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-secondary" />
              Understanding Credit Scores
            </CardTitle>
            <CardDescription>
              Your credit score is a key factor in determining loan eligibility and interest rates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-3">What Affects Your Credit Score?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <span className="font-medium text-foreground">Payment History (35%)</span> - On-time payments</li>
                    <li>• <span className="font-medium text-foreground">Credit Utilization (30%)</span> - Amount owed vs. available credit</li>
                    <li>• <span className="font-medium text-foreground">Credit History Length (15%)</span> - Age of accounts</li>
                    <li>• <span className="font-medium text-foreground">Credit Mix (10%)</span> - Variety of credit types</li>
                    <li>• <span className="font-medium text-foreground">New Credit (10%)</span> - Recent credit inquiries</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Credit Score Ranges</h3>
                  <div className="space-y-2">
                    {creditScoreRanges.map((score) => (
                      <div key={score.range} className="flex justify-between items-center">
                        <span className="text-sm font-medium">{score.range}</span>
                        <span className={`text-sm font-semibold ${score.color}`}>{score.rating}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="growth-gradient text-white">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Tips to Improve Your Credit Score
                  </h3>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li>✓ Pay all bills on time, every time</li>
                    <li>✓ Keep credit utilization below 30%</li>
                    <li>✓ Don't close old credit accounts</li>
                    <li>✓ Limit new credit applications</li>
                    <li>✓ Monitor your credit report regularly</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Loan Types Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Loans</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {loanTypes.map((loan, index) => (
              <Card 
                key={loan.title} 
                className="hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="finance-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <loan.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{loan.title}</CardTitle>
                  <CardDescription>{loan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground">Interest Rate Range: </span>
                    <span className="font-semibold text-secondary">{loan.rate}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Common Uses:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {loan.uses.map((use) => (
                        <li key={use}>• {use}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Loan Calculation Examples */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Loan Examples & Calculations</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-secondary" />
                  30-Year Mortgage Example
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount:</span>
                    <span className="font-semibold">$300,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate:</span>
                    <span className="font-semibold">6.5% APR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Term:</span>
                    <span className="font-semibold">30 years</span>
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Monthly Payment:</span>
                    <span className="text-xl font-bold text-secondary">$1,896</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Interest Paid:</span>
                    <span className="font-semibold text-destructive">$382,633</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Amount:</span>
                    <span className="font-semibold">$682,633</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                  Over 30 years, you'll pay more in interest than the original loan amount. Consider making extra payments to reduce interest.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  5-Year Auto Loan Example
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount:</span>
                    <span className="font-semibold">$35,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate:</span>
                    <span className="font-semibold">7.5% APR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Term:</span>
                    <span className="font-semibold">5 years</span>
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Monthly Payment:</span>
                    <span className="text-xl font-bold text-secondary">$701</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Interest Paid:</span>
                    <span className="font-semibold text-destructive">$7,060</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Amount:</span>
                    <span className="font-semibold">$42,060</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                  Auto loans typically have higher rates than mortgages but shorter terms. A larger down payment reduces monthly costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Credit Score Impact Examples */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How Credit Score Affects Loan Rates</h2>
          <Card>
            <CardHeader>
              <CardTitle>Interest Rate by Credit Score - $250,000 Mortgage</CardTitle>
              <CardDescription>See how your credit score directly impacts what you pay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { score: "760-850", rate: "6.2%", monthly: "$1,532", totalInterest: "$301,520", savings: "Baseline" },
                  { score: "700-759", rate: "6.5%", monthly: "$1,580", totalInterest: "$318,800", savings: "-$17,280" },
                  { score: "660-699", rate: "7.0%", monthly: "$1,663", totalInterest: "$348,680", savings: "-$47,160" },
                  { score: "620-659", rate: "7.8%", monthly: "$1,795", totalInterest: "$396,200", savings: "-$94,680" },
                  { score: "580-619", rate: "8.5%", monthly: "$1,922", totalInterest: "$441,920", savings: "-$140,400" }
                ].map((tier, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col md:flex-row md:items-center gap-3 p-4 rounded-lg ${
                      idx === 0 ? "bg-secondary/10 border-2 border-secondary" : "bg-muted"
                    }`}
                  >
                    <div className="md:w-1/5">
                      <p className="font-semibold">Score: {tier.score}</p>
                    </div>
                    <div className="md:w-1/5">
                      <p className="text-sm text-muted-foreground">Rate</p>
                      <p className="font-bold text-lg">{tier.rate}</p>
                    </div>
                    <div className="md:w-1/5">
                      <p className="text-sm text-muted-foreground">Monthly</p>
                      <p className="font-semibold">{tier.monthly}</p>
                    </div>
                    <div className="md:w-1/5">
                      <p className="text-sm text-muted-foreground">Total Interest</p>
                      <p className="font-semibold text-destructive">{tier.totalInterest}</p>
                    </div>
                    <div className="md:w-1/5 text-right">
                      <p className="text-sm font-semibold text-destructive">{tier.savings}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                A higher credit score can save you over $140,000 in interest over the life of a mortgage. Building good credit is one of the best financial investments you can make.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Debt Payoff Strategies */}
        <Card className="growth-gradient text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Debt Payoff Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Avalanche Method</h3>
                <p className="text-white/90 text-sm mb-2">
                  Pay off debts with the highest interest rates first while making minimum payments on others.
                </p>
                <p className="text-white/80 text-xs">
                  <strong>Best for:</strong> Minimizing total interest paid. Most mathematically efficient approach.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Snowball Method</h3>
                <p className="text-white/90 text-sm mb-2">
                  Pay off smallest debts first regardless of interest rate. Build momentum with quick wins.
                </p>
                <p className="text-white/80 text-xs">
                  <strong>Best for:</strong> Psychological motivation. See debts eliminated quickly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Debt Consolidation</h3>
                <p className="text-white/90 text-sm mb-2">
                  Combine multiple debts into one loan with a lower interest rate. Simplifies payments.
                </p>
                <p className="text-white/80 text-xs">
                  <strong>Best for:</strong> Multiple high-interest debts. Good credit score required.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Balance Transfer</h3>
                <p className="text-white/90 text-sm mb-2">
                  Move credit card debt to a 0% APR card. Pay off during promotional period.
                </p>
                <p className="text-white/80 text-xs">
                  <strong>Best for:</strong> Credit card debt. Disciplined payoff plan essential.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CreditLoans;
