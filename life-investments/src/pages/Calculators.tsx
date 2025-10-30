import Navigation from "../components/Navigation";
import InvestmentCalculator from "../components/calculators/InvestmentCalculator";
import CompoundInterestCalculator from "../components/calculators/CompoundInterestCalculator";
import LoanCalculator from "../components/calculators/LoanCalculator";
import RetirementCalculator from "../components/calculators/RetirementCalculator";
import CurrencyConverter from "../components/calculators/CurrencyConverter";
import TaxCalculator from "../components/calculators/TaxCalculator";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const Calculators = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Calculators</h1>
          <p className="text-xl text-muted-foreground">
            Interactive tools to help you plan your financial future and make informed decisions
          </p>
        </div>

        <Tabs defaultValue="finance" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="finance">General Finance</TabsTrigger>
            <TabsTrigger value="currency">Currency</TabsTrigger>
            <TabsTrigger value="tax">Tax</TabsTrigger>
          </TabsList>

          {/* General Finance Calculators */}
          <TabsContent value="finance" className="space-y-8">
            <div className="space-y-8 mb-12">
              <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <InvestmentCalculator />
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <CompoundInterestCalculator />
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <LoanCalculator />
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <RetirementCalculator />
              </div>
            </div>

            {/* How to Use Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">How to Use These Calculators</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Investment Calculator</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="font-semibold">Perfect for planning long-term wealth building:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Enter your starting investment amount</li>
                      <li>• Set realistic monthly contributions you can afford</li>
                      <li>• Use 7-8% for conservative stock returns, 10-12% for aggressive</li>
                      <li>• Plan for at least 5-10 years for meaningful growth</li>
                    </ul>
                    <p className="text-xs text-muted-foreground pt-2">
                      <strong>Tip:</strong> Even small monthly contributions add up significantly over time thanks to compound interest.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Compound Interest Calculator</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="font-semibold">Ideal for understanding savings growth:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Compare different savings accounts and rates</li>
                      <li>• See impact of compounding frequency (daily vs monthly)</li>
                      <li>• Use 4-5% for high-yield savings accounts</li>
                      <li>• Visualize the "interest on interest" effect</li>
                    </ul>
                    <p className="text-xs text-muted-foreground pt-2">
                      <strong>Tip:</strong> Daily compounding yields slightly more than monthly - ask your bank about their compounding frequency.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Loan/EMI Calculator</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="font-semibold">Essential for understanding borrowing costs:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Calculate mortgage, auto, or personal loan payments</li>
                      <li>• Compare different loan terms (15-year vs 30-year mortgage)</li>
                      <li>• See total interest you'll pay over the loan's life</li>
                      <li>• Determine if monthly payments fit your budget</li>
                    </ul>
                    <p className="text-xs text-muted-foreground pt-2">
                      <strong>Tip:</strong> Shorter loan terms mean higher monthly payments but much less total interest paid.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Retirement Planner</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="font-semibold">Plan your retirement savings strategy:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Set your target retirement age and savings goal</li>
                      <li>• Factor in your current savings and investments</li>
                      <li>• Use 7% for a balanced portfolio expected return</li>
                      <li>• Adjust monthly contributions to reach your goal</li>
                    </ul>
                    <p className="text-xs text-muted-foreground pt-2">
                      <strong>Tip:</strong> Starting early makes a huge difference. 10 years earlier can cut required monthly contributions in half.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Example Scenarios */}
            <Card className="finance-gradient text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Real-Life Calculator Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">First Home Buyer</h3>
                    <p className="text-white/90 text-sm mb-3">
                      Use the Loan Calculator to determine if you can afford that $350,000 house. Compare 15-year vs 30-year terms.
                    </p>
                    <p className="text-xs text-white/70">Monthly payment for $350k at 6.5% for 30 years: ~$2,212</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Young Professional</h3>
                    <p className="text-white/90 text-sm mb-3">
                      Use the Investment Calculator to see how investing $500/month starting at age 25 can grow to over $1M by retirement.
                    </p>
                    <p className="text-xs text-white/70">$500/month for 40 years at 8% = $1.55M</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Mid-Career Professional</h3>
                    <p className="text-white/90 text-sm mb-3">
                      Use the Retirement Planner at age 45 to catch up on retirement savings. See what monthly amount gets you to your goal.
                    </p>
                    <p className="text-xs text-white/70">Goal: $1M in 20 years, need ~$1,850/month at 7%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Currency Calculator */}
          <TabsContent value="currency">
            <div className="max-w-2xl mx-auto">
              <CurrencyConverter />
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Why Use a Currency Converter?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">International Investments</h4>
                    <p className="text-muted-foreground">
                      When investing in foreign markets or companies, understand the real value of your investments in your home currency.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Travel Planning</h4>
                    <p className="text-muted-foreground">
                      Budget effectively for international trips by converting expenses to your local currency.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cross-Border Transactions</h4>
                    <p className="text-muted-foreground">
                      Whether sending money abroad or receiving payments in foreign currency, know exactly how much you're dealing with.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Currency Exchange Timing</h4>
                    <p className="text-muted-foreground">
                      Track exchange rate fluctuations to make informed decisions about when to exchange currencies.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tax Calculator */}
          <TabsContent value="tax">
            <div className="max-w-2xl mx-auto">
              <TaxCalculator />
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Understanding Income Tax</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Progressive Tax Systems</h4>
                    <p className="text-muted-foreground">
                      Most countries use progressive tax brackets, meaning higher income is taxed at higher rates. You don't pay the top rate on all your income - only on the portion that falls within each bracket.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Effective vs. Marginal Tax Rate</h4>
                    <p className="text-muted-foreground">
                      Your marginal rate is the highest bracket you reach, while your effective rate is the average percentage of tax you actually pay on all your income. The effective rate is usually much lower.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tax Planning Strategies</h4>
                    <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Maximize deductions and tax-advantaged accounts</li>
                      <li>Consider timing of income and expenses</li>
                      <li>Understand capital gains vs. ordinary income rates</li>
                      <li>Plan for retirement contributions to reduce taxable income</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Country-Specific Considerations</h4>
                    <p className="text-muted-foreground">
                      Each country has unique tax rules, deductions, and credits. The calculator provides a simplified overview. Always consult local tax professionals for accurate advice.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Calculators;
