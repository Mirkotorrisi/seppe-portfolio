import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface GradientIconButtonProps extends ButtonProps {}

const GradientIconButton = forwardRef<HTMLButtonElement, GradientIconButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        size="icon"
        className={cn(
          "relative overflow-hidden rounded-full border-muted-foreground/20 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] neon-glow",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    )
  },
)
GradientIconButton.displayName = "GradientIconButton"

export { GradientIconButton }
