import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input (1)";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { currencies } from "../../context/CurrencyContext";
import { ArrowRightLeft } from "lucide-react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("ZAR");
  const [result, setResult] = useState<number | null>(null);

  // Simplified exchange rates (USD as base)
  const exchangeRates: { [key: string]: number } = {
    USD: 1,
    ZAR: 18.50,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 149.50,
    CNY: 7.24,
    INR: 83.12,
    AUD: 1.52,
    CAD: 1.36,
    CHF: 0.88,
    BRL: 4.97,
    MXN: 17.08,
    NGN: 1420,
    KES: 129.50,
    EGP: 30.90,
    AED: 3.67,
    SAR: 3.75,
    SGD: 1.34,
    HKD: 7.83,
    NZD: 1.67,
  };

  const handleConvert = () => {
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum)) return;

    // Convert from source currency to USD, then to target currency
    const inUSD = amountNum / exchangeRates[fromCurrency];
    const converted = inUSD * exchangeRates[toCurrency];
    setResult(converted);
  };

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setResult(null);
  };

  const fromCurrencyData = currencies.find(c => c.code === fromCurrency);
  const toCurrencyData = currencies.find(c => c.code === toCurrency);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Currency Converter</CardTitle>
        <CardDescription>Convert between different currencies using live exchange rates</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>From Currency</Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {currencies.map((curr) => (
                  <SelectItem key={curr.code} value={curr.code}>
                    {curr.flag} {curr.code} - {curr.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>To Currency</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {currencies.map((curr) => (
                  <SelectItem key={curr.code} value={curr.code}>
                    {curr.flag} {curr.code} - {curr.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Amount</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <Button variant="outline" size="icon" onClick={handleSwap}>
              <ArrowRightLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button onClick={handleConvert} className="w-full">
          Convert
        </Button>

        {result !== null && (
          <div className="mt-6 p-6 rounded-lg finance-gradient text-white">
            <div className="text-center space-y-2">
              <p className="text-sm opacity-90">
                {parseFloat(amount).toLocaleString()} {fromCurrencyData?.symbol} {fromCurrency}
              </p>
              <div className="text-3xl font-bold">
                {result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {toCurrencyData?.symbol}
              </div>
              <p className="text-sm opacity-90">{toCurrency}</p>
              <p className="text-xs opacity-75 mt-4">
                1 {fromCurrency} = {(exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4)} {toCurrency}
              </p>
            </div>
          </div>
        )}

        <div className="text-xs text-muted-foreground">
          <p>* Exchange rates are approximate and for educational purposes only.</p>
          <p>* For actual transactions, please check with your bank or financial institution.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
