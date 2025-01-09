import { BellRing } from "lucide-react"
import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Props for the InterActiveCard component
type InterActiveCardProps = {
  className?: string

  cardTitle?: string
  cardDescription?: string
  cardContent?: React.ReactNode
  cardFooter?: React.ReactNode
} & React.ComponentProps<typeof Card>

export function InterActiveCard({
  className,
  cardContent,
  cardTitle = "New UI Component",
  cardDescription = "We will ship a beautiful interactive card component",
  ...props
}: InterActiveCardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription className="text-slate-400">
          {cardDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>{cardContent}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}
