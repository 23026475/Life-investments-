import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { useCurrency, currencies } from "../context/CurrencyContext";
import { Globe } from "lucide-react";
import { ScrollArea } from "../components/ui/scroll-area";

const WelcomeDialog = () => {
  const { showWelcome, setShowWelcome, setCurrency, currency } = useCurrency();

  const handleCurrencySelect = (selectedCurrency: typeof currencies[0]) => {
    setCurrency(selectedCurrency);
  };

  return (
    <Dialog open={showWelcome} onOpenChange={setShowWelcome}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="finance-gradient rounded-lg p-3">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <DialogTitle className="text-2xl">Welcome to WealthWise!</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            Select your country to see calculations in your local currency. You can change this anytime from the navigation bar.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-2">
            {currencies.map((curr) => (
              <button
                key={curr.code}
                onClick={() => handleCurrencySelect(curr)}
                className={`w-full p-4 rounded-lg border-2 transition-all hover:border-primary hover:shadow-md text-left ${
                  curr.code === currency.code ? "border-primary bg-primary/5" : "border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{curr.flag}</span>
                    <div>
                      <p className="font-semibold">{curr.country}</p>
                      <p className="text-sm text-muted-foreground">{curr.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{curr.symbol}</p>
                    <p className="text-xs text-muted-foreground">{curr.code}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>

        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" onClick={() => setShowWelcome(false)}>
            Skip for Now
          </Button>
          <Button onClick={() => setShowWelcome(false)} className="finance-gradient">
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
