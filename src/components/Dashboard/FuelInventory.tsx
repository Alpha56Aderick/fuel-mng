
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Fuel } from "lucide-react"

export const FuelInventory = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Fuel Inventory</CardTitle>
        <Fuel className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Diesel</span>
            <span>75%</span>
          </div>
          <Progress value={75} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Petrol</span>
            <span>60%</span>
          </div>
          <Progress value={60} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}
