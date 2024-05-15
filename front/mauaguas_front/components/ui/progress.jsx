"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, value, color, height,...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(`relative ${height} w-full overflow-hidden rounded-lg bg-transparent border-[3px] rotate-180`, className)}
    {...props}>
    <ProgressPrimitive.Indicator
      className={`h-full w-full flex-1 ${ color } transition-all`}
      style={{ transform: `translateY(-${100 - (value || 0)}%)` }} />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
