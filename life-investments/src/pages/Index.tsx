import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calculator, CreditCard, PiggyBank, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-finance.jpg";

const Index = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Investment Guidance",
      description: "Learn about different investment options, risk levels, and expected returns to build a diversified portfolio.",
      link: "/investments",
      gradient: "growth-gradient"
    },
    {
      icon: CreditCard,
      title: "Credit & Loans",
      description: "Understand credit scores, improve your creditworthiness, and explore various loan options with competitive rates.",
      link: "/credit-loans",
      gradient: "finance-gradient"
    },
    {
      icon: Calculator,
      title: "Financial Calculators",
      description: "Access powerful tools to calculate investments, loans, compound interest, and plan your retirement effectively.",
      link: "/calculators",
      gradient: "growth-gradient"
    }
  ];

  const benefits = [
    { icon: PiggyBank, title: "Smart Savings", description: "Optimize your savings strategy" },
    { icon: Shield, title: "Risk Management", description: "Understand and mitigate financial risks" },
    { icon: BarChart3, title: "Growth Tracking", description: "Visualize your financial progress" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 finance-gradient opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Take Control of Your Financial Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Smart tools and expert guidance to help you invest wisely, manage credit, and plan for retirement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg" className="text-lg">
                <Link to="/get-started">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/calculators">Try Calculators</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive financial tools and resources in one place
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {features.map((feature, index) => (
            <Link 
              key={feature.title} 
              to={feature.link}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className={`${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto font-semibold">
                    Explore →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid gap-6 md:grid-cols-3 mt-20">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center p-6 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <benefit.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="growth-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of users who are making smarter financial decisions every day
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/get-started">Get Started Free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 WealthWise. Your partner in financial success.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
