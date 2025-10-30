import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, Clock, PiggyBank, Building2, Wallet } from "lucide-react";
import Navigation from "@/components/Navigation";

const Investments = () => {
  const investmentTypes = [
    {
      icon: TrendingUp,
      title: "Stocks",
      returns: "8-12% annually",
      risk: "High",
      timeline: "5+ years",
      description: "Ownership shares in companies with potential for high growth and dividend income.",
      gradient: "growth-gradient"
    },
    {
      icon: Shield,
      title: "Bonds",
      returns: "3-5% annually",
      risk: "Low to Medium",
      timeline: "1-10 years",
      description: "Fixed-income securities that provide regular interest payments with lower risk.",
      gradient: "finance-gradient"
    },
    {
      icon: Building2,
      title: "Mutual Funds",
      returns: "6-10% annually",
      risk: "Medium",
      timeline: "3-5 years",
      description: "Professionally managed portfolios that pool money from multiple investors.",
      gradient: "growth-gradient"
    },
    {
      icon: PiggyBank,
      title: "High-Yield Savings",
      returns: "4-5% annually",
      risk: "Very Low",
      timeline: "Anytime",
      description: "FDIC-insured savings accounts offering higher interest rates than traditional savings.",
      gradient: "finance-gradient"
    },
    {
      icon: Clock,
      title: "Retirement Accounts",
      returns: "7-10% annually",
      risk: "Low to Medium",
      timeline: "10+ years",
      description: "Tax-advantaged accounts like 401(k) and IRA designed for long-term retirement savings.",
      gradient: "growth-gradient"
    },
    {
      icon: Wallet,
      title: "Index Funds",
      returns: "8-11% annually",
      risk: "Medium",
      timeline: "5+ years",
      description: "Passively managed funds that track market indexes with low fees and broad diversification.",
      gradient: "finance-gradient"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Options</h1>
          <p className="text-xl text-muted-foreground">
            Explore different investment vehicles to grow your wealth and achieve your financial goals
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {investmentTypes.map((investment, index) => (
            <Card 
              key={investment.title} 
              className="hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`${investment.gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                  <investment.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{investment.title}</CardTitle>
                <CardDescription>{investment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Returns:</span>
                    <span className="font-semibold text-secondary">{investment.returns}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Risk Level:</span>
                    <span className="font-semibold">{investment.risk}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-semibold">{investment.timeline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Strategy Section */}
        <Card className="finance-gradient text-white mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Investment Strategy Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Diversification</h3>
                <p className="text-white/90">Spread your investments across different asset types to minimize risk.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dollar-Cost Averaging</h3>
                <p className="text-white/90">Invest fixed amounts regularly to reduce the impact of market volatility.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Long-Term Focus</h3>
                <p className="text-white/90">Stay invested for the long haul to benefit from compound growth.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Risk Tolerance</h3>
                <p className="text-white/90">Match your investments to your comfort level with market fluctuations.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Examples Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Real-World Investment Examples</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PiggyBank className="h-5 w-5 text-secondary" />
                  Conservative Portfolio (Age 55+)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Asset Allocation:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 40% Bonds - Stable income generation</li>
                    <li>• 30% Index Funds - Moderate growth</li>
                    <li>• 20% High-Yield Savings - Emergency fund</li>
                    <li>• 10% Real Estate Investment Trusts</li>
                  </ul>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm"><span className="font-semibold">Expected Return:</span> 5-7% annually</p>
                  <p className="text-sm"><span className="font-semibold">Risk Level:</span> Low</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This portfolio prioritizes capital preservation while generating steady income for retirement.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Aggressive Growth Portfolio (Age 25-35)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Asset Allocation:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 60% Growth Stocks - High potential returns</li>
                    <li>• 25% International Stocks - Diversification</li>
                    <li>• 10% Bonds - Stability cushion</li>
                    <li>• 5% Cryptocurrency - Speculative investment</li>
                  </ul>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm"><span className="font-semibold">Expected Return:</span> 10-15% annually</p>
                  <p className="text-sm"><span className="font-semibold">Risk Level:</span> High</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Designed for long-term wealth building with time to recover from market downturns.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment Scenarios */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Investment Scenarios Explained</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scenario 1: Starting with $10,000</CardTitle>
                <CardDescription>Monthly contributions of $500 for 20 years at 8% annual return</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
                    <p className="text-2xl font-bold">$130,000</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Investment Growth</p>
                    <p className="text-2xl font-bold text-secondary">$177,457</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Final Value</p>
                    <p className="text-2xl font-bold text-secondary">$307,457</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This example shows the power of consistent investing. Your contributions more than double through compound growth over two decades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scenario 2: Emergency Fund First</CardTitle>
                <CardDescription>Building security before aggressive investing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <p className="font-semibold mb-1">Save 3-6 months of expenses in high-yield savings</p>
                      <p className="text-muted-foreground">Example: $30,000 in an account earning 4.5% APY = $1,350/year in interest</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <p className="font-semibold mb-1">Max out employer 401(k) match</p>
                      <p className="text-muted-foreground">If employer matches 5%, contribute at least 5% to get free money</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <p className="font-semibold mb-1">Start index fund investing</p>
                      <p className="text-muted-foreground">Invest remaining savings in diversified, low-cost index funds</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Risk vs Return Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Understanding Risk vs. Return</CardTitle>
            <CardDescription>Different investments offer varying risk-reward profiles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "High-Yield Savings", risk: "Very Low", return: "4-5%", volatility: "None", description: "FDIC insured, stable returns, immediate access" },
                { type: "Bonds", risk: "Low", return: "3-6%", volatility: "Low", description: "Fixed income, moderate risk, predictable payments" },
                { type: "Index Funds", risk: "Medium", return: "8-11%", volatility: "Medium", description: "Diversified, long-term growth, market exposure" },
                { type: "Individual Stocks", risk: "High", return: "10-15%+", volatility: "High", description: "High potential returns, significant risk, research required" },
                { type: "Cryptocurrency", risk: "Very High", return: "Variable", volatility: "Extreme", description: "Highly speculative, potential for huge gains or losses" }
              ].map((investment, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center gap-3 p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="md:w-1/4">
                    <p className="font-semibold">{investment.type}</p>
                  </div>
                  <div className="md:w-1/4 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Risk</p>
                      <p className="font-semibold">{investment.risk}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Return</p>
                      <p className="font-semibold text-secondary">{investment.return}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-sm text-muted-foreground">{investment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Investments;
