'use client'
import React from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  label, 
  onChange,
  onCheckedChange,
  className = '',
  ...props 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
  };

  return (
    <label className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleChange}
          {...props}
        />
        <div className="w-5 h-5 rounded border-2 border-gray-300 peer-checked:border-pink-500 peer-checked:bg-pink-500 group-hover:border-pink-400 transition-colors flex items-center justify-center">
          <svg 
            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {label && <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{label}</span>}
    </label>
  );
};