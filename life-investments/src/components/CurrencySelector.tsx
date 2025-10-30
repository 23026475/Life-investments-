import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useCurrency, currencies } from "@/contexts/CurrencyContext";
import { Globe } from "lucide-react";

const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currency.flag} {currency.code}</span>
          <span className="sm:hidden">{currency.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 max-h-[400px] overflow-y-auto bg-popover z-50">
        <DropdownMenuLabel>Select Your Country</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {currencies.map((curr) => (
          <DropdownMenuItem
            key={curr.code}
            onClick={() => setCurrency(curr)}
            className={`cursor-pointer ${curr.code === currency.code ? "bg-accent" : ""}`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center gap-2">
                <span className="text-xl">{curr.flag}</span>
                <span className="font-medium">{curr.country}</span>
              </span>
              <span className="text-sm text-muted-foreground">
                {curr.symbol} {curr.code}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencySelector;
