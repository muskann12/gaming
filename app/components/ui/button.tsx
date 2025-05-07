// src/components/ui/button.tsx
import * as React from "react";
import { Loader2, ChevronLeft, ShoppingCart, Check } from "lucide-react";

type ButtonVariant = 
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "pink";

type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "underline-offset-4 hover:underline text-primary",
  pink: "bg-game-pink text-white hover:bg-game-pink/90", // Your custom variant
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 py-2 px-4",
  sm: "h-9 px-3 rounded-md",
  lg: "h-11 px-8 rounded-md",
  icon: "h-10 w-10",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={`
          inline-flex items-center justify-center rounded-md text-sm font-medium
          transition-colors focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-ring focus-visible:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none ring-offset-background
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : leftIcon ? (
          <span className="mr-2">{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

// Pre-built button components for your specific use cases
export const BackButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, "variant" | "leftIcon">>(
  (props, ref) => (
    <Button ref={ref} variant="outline" leftIcon={<ChevronLeft className="h-4 w-4" />} {...props}>
      Back
    </Button>
  )
);

export const AddToCartButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, "variant" | "leftIcon">>(
  ({ isLoading, ...props }, ref) => (
    <Button 
      ref={ref} 
      variant="pink" 
      leftIcon={<ShoppingCart className="h-4 w-4" />} 
      isLoading={isLoading}
      {...props}
    >
      Add to Cart
    </Button>
  )
);

export default Button;