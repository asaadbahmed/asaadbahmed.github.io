import { cn } from "@/lib/utils";

export type TileProps = {
  className?: string;
  children: React.ReactNode;
};

export const Tile = ({ className, children }: TileProps) => (
  <div
    className={cn(
      "rounded-3xl p-8 gap-4 transition-all duration-100 ease-linear flex bg-[rgb(247,247,249)]",
      className
    )}
  >
    {children}
  </div>
);

export type TileTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const TileTitle = ({ children, className }: TileTitleProps) => (
  <div className={cn("text-3xl md:text-4xl font-semibold", className)}>
    {children}
  </div>
);

export type TileContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const TileContent = ({ children, className }: TileContentProps) => (
  <div className={className}>{children}</div>
);

export type TileGridProps = {
  children: React.ReactNode;
  className?: string;
};

export const TileGrid = ({ children, className }: TileGridProps) => (
  <div
    className={cn(
      "grid gap-4 grid-cols-1 lg:grid-cols-4 lg:grid-rows-2",
      className
    )}
  >
    {children}
  </div>
);
