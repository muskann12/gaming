import React from 'react';
import { useGameStore, CurrencyType, currencySymbols } from '../contexts/GameStoreContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'

const CurrencySwitcher = () => {
  const { currency, setCurrency } = useGameStore();
  
  const handleCurrencyChange = (value: string) => {
    setCurrency(value as CurrencyType);
  };
  
  return (
    <div className="currency-switcher">
      <Select value={currency} onValueChange={handleCurrencyChange}>
        <SelectTrigger className="w-[90px]">
          <SelectValue placeholder={currencySymbols[currency]} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="USD">$ USD</SelectItem>
          <SelectItem value="GBP">£ GBP</SelectItem>
          <SelectItem value="EUR">€ EUR</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CurrencySwitcher;