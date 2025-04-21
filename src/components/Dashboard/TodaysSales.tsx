
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ChartBar } from "lucide-react"

export const TodaysSales = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Today's Sales</CardTitle>
        <ChartBar className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$12,456.78</div>
        <p className="text-xs text-muted-foreground">+15% from yesterday</p>
      </CardContent>
    </Card>
  )
}
