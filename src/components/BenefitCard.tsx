
import React from 'react';
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  className
}) => {
  return (
    <div className={cn(
      'glass-card p-6 h-full flex flex-col hover:shadow-medium transition-all duration-300',
      className
    )}>
      <div className="mb-4 text-heat-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm flex-grow">{description}</p>
    </div>
  );
};

export default BenefitCard;
