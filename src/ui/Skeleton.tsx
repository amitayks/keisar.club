import { cn } from "../utils/helpers";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse bg-gray-200 rounded-md", className)} />
  );
}
