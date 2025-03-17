
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  icon?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'default',
  size = 'default',
  className,
  icon = true
}) => {
  const buttonContent = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  const buttonClasses = cn(
    'transition-all duration-300 font-medium shadow-soft hover:shadow-glow',
    variant === 'default' && 'bg-heat-600 hover:bg-heat-700',
    className
  );

  if (href) {
    return (
      <Button 
        variant={variant} 
        size={size} 
        className={buttonClasses} 
        asChild
      >
        <a href={href}>{buttonContent}</a>
      </Button>
    );
  }

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={onClick} 
      className={buttonClasses}
    >
      {buttonContent}
    </Button>
  );
};

export default CTAButton;
