import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Building2, Shield, TrendingUp, CreditCard, PiggyBank, Wallet, ExternalLink } from "lucide-react";
import Navigation from "../components/Navigation";
import { Button } from "../components/ui/button";

const GetStarted = () => {
  const banks = [
    {
      name: "Chase Bank",
      type: "Traditional Bank",
      features: ["High-yield savings (4.5% APY)", "No monthly fees", "24/7 customer service", "Mobile app"],
      bestFor: "Everyday banking and savings",
      rating: 4.5
    },
    {
      name: "Ally Bank",
      type: "Online Bank",
      features: ["High-yield savings (4.75% APY)", "No minimum balance", "No ATM fees", "Easy mobile deposits"],
      bestFor: "High-yield savings accounts",
      rating: 4.7
    },
    {
      name: "Marcus by Goldman Sachs",
      type: "Online Bank",
      features: ["Competitive rates (4.6% APY)", "No fees", "Easy transfers", "CD options"],
      bestFor: "Savings and CDs",
      rating: 4.6
    }
  ];

  const investmentPlatforms = [
    {
      name: "Vanguard",
      type: "Investment Platform",
      features: ["Low expense ratios", "Index funds", "Retirement accounts", "Professional advice available"],
      bestFor: "Long-term index fund investing",
      rating: 4.8,
      minInvestment: "$1,000"
    },
    {
      name: "Fidelity",
      type: "Investment Platform",
      features: ["Zero-fee index funds", "Fractional shares", "Research tools", "Retirement planning"],
      bestFor: "All-around investing",
      rating: 4.7,
      minInvestment: "$0"
    },
    {
      name: "Robinhood",
      type: "Trading App",
      features: ["Commission-free trading", "Fractional shares", "Crypto trading", "Simple interface"],
      bestFor: "Beginner traders",
      rating: 4.2,
      minInvestment: "$0"
    },
    {
      name: "Betterment",
      type: "Robo-Advisor",
      features: ["Automated investing", "Tax-loss harvesting", "Goal-based planning", "Low fees (0.25%)"],
      bestFor: "Hands-off investing",
      rating: 4.6,
      minInvestment: "$10"
    }
  ];

  const insuranceProviders = [
    {
      name: "State Farm",
      type: "Insurance",
      features: ["Life insurance", "Auto insurance", "Home insurance", "Health insurance"],
      bestFor: "Comprehensive coverage",
      rating: 4.4
    },
    {
      name: "Geico",
      type: "Insurance",
      features: ["Auto insurance", "Motorcycle insurance", "Homeowners insurance", "Competitive rates"],
      bestFor: "Affordable auto insurance",
      rating: 4.3
    },
    {
      name: "Progressive",
      type: "Insurance",
      features: ["Auto insurance", "Bundle discounts", "Name Your Price tool", "24/7 claims"],
      bestFor: "Customizable auto coverage",
      rating: 4.2
    }
  ];

  const creditCards = [
    {
      name: "Chase Sapphire Preferred",
      type: "Credit Card",
      features: ["2x points on travel/dining", "60k bonus points", "Travel insurance", "No foreign fees"],
      bestFor: "Travel rewards",
      annualFee: "$95"
    },
    {
      name: "Citi Double Cash",
      type: "Credit Card",
      features: ["2% cash back on all purchases", "Balance transfer option", "No annual fee"],
      bestFor: "Simple cash back",
      annualFee: "$0"
    },
    {
      name: "Discover it Cash Back",
      type: "Credit Card",
      features: ["5% rotating categories", "Cash back match first year", "No annual fee", "Free FICO score"],
      bestFor: "New credit builders",
      annualFee: "$0"
    }
  ];

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Started with the Right Partners</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Carefully selected banks, investment platforms, insurance providers, and credit cards to help you achieve your financial goals
            </p>
          </div>

          {/* Banks Section */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="finance-gradient rounded-lg p-3">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Recommended Banks</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {banks.map((bank) => (
                <Card key={bank.name} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{bank.name}</CardTitle>
                      <Badge variant="secondary">{bank.type}</Badge>
                    </div>
                    <div className="text-accent text-sm mb-2">{renderStars(bank.rating)}</div>
                    <CardDescription className="font-semibold text-foreground">
                      Best for: {bank.bestFor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      {bank.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" size="sm">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Investment Platforms Section */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="growth-gradient rounded-lg p-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Investment Platforms</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {investmentPlatforms.map((platform) => (
                <Card key={platform.name} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{platform.name}</CardTitle>
                      <Badge variant="secondary">{platform.type}</Badge>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-accent text-sm">{renderStars(platform.rating)}</div>
                      <div className="text-sm text-muted-foreground">Min: {platform.minInvestment}</div>
                    </div>
                    <CardDescription className="font-semibold text-foreground">
                      Best for: {platform.bestFor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" size="sm">
                      Visit Platform <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Insurance Section */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="finance-gradient rounded-lg p-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Insurance Providers</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {insuranceProviders.map((provider) => (
                <Card key={provider.name} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{provider.name}</CardTitle>
                      <Badge variant="secondary">{provider.type}</Badge>
                    </div>
                    <div className="text-accent text-sm mb-2">{renderStars(provider.rating)}</div>
                    <CardDescription className="font-semibold text-foreground">
                      Best for: {provider.bestFor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      {provider.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" size="sm">
                      Get Quote <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Credit Cards Section */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="growth-gradient rounded-lg p-3">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Top Credit Cards</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {creditCards.map((card) => (
                <Card key={card.name} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{card.name}</CardTitle>
                      <Badge variant={card.annualFee === "$0" ? "secondary" : "outline"}>
                        {card.annualFee}
                      </Badge>
                    </div>
                    <CardDescription className="font-semibold text-foreground">
                      Best for: {card.bestFor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm mb-4">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" size="sm">
                      Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Tips Section */}
          <Card className="finance-gradient text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Getting Started Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <PiggyBank className="h-5 w-5" />
                    Start with Savings
                  </h3>
                  <p className="text-white/90 text-sm">
                    Open a high-yield savings account first. Build an emergency fund covering 3-6 months of expenses before investing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Begin Investing Early
                  </h3>
                  <p className="text-white/90 text-sm">
                    Start with low-cost index funds or robo-advisors. Even small amounts invested regularly can grow significantly over time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Protect Your Assets
                  </h3>
                  <p className="text-white/90 text-sm">
                    Get adequate insurance coverage for health, auto, home, and life. Protection is a crucial part of financial planning.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Wallet className="h-5 w-5" />
                    Build Credit Wisely
                  </h3>
                  <p className="text-white/90 text-sm">
                    Choose a credit card that matches your spending habits. Pay the full balance monthly to avoid interest and build credit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GetStarted;
