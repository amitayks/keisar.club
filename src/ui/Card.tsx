import { cn } from "../utils/helpers";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white shadow-md rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 w-full mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children }: CardProps) {
  return <div className={cn("p-4", className)}>{children}</div>;
}
