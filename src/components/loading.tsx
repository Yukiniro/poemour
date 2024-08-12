import { Skeleton } from "@/components/ui/skeleton";

export function Loading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-[350px]" />
      <Skeleton className="h-8 w-[350px]" />
      <Skeleton className="h-8 w-[350px]" />
    </div>
  );
}
