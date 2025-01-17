import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const ContinueButton = ({
  name = "Continue",
  type,
  variant,
  disabled,
  size,
  className,
  onClick,
}: {
  name?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
  size?: "default" | "xs" | "sm" | "lg" | "icon" | null | undefined;
  onClick?: () => void;
}) => {
  return (
    <Button
      disabled={disabled}
      variant={variant}
      size={size}
      type={type}
      className={`transition-all duration-500 ease-in-out group ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <span>{name}</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-in-out transform translate-x-1 group-hover:translate-x-2 mx-1" />
      </div>
    </Button>
  );
};
