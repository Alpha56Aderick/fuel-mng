
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Fuel } from "lucide-react"

export const FuelTanks = () => {
  const tanks = [
    { id: 1, name: "Tank 1", fuelType: "Diesel", capacity: 20000, current: 15000 },
    { id: 2, name: "Tank 2", fuelType: "Unleaded", capacity: 15000, current: 8000 },
    { id: 3, name: "Tank 3", fuelType: "Premium", capacity: 10000, current: 7500 },
  ]

  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Fuel Tanks Status</CardTitle>
        <Fuel className="h-5 w-5 text-blue-500" />
      </CardHeader>
      <CardContent className="space-y-6">
        {tanks.map((tank) => {
          const percentage = (tank.current / tank.capacity) * 100
          return (
            <div key={tank.id}>
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-medium">{tank.name}</h3>
                  <p className="text-sm text-muted-foreground">{tank.fuelType}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{tank.current.toLocaleString()}L</p>
                  <p className="text-sm text-muted-foreground">of {tank.capacity.toLocaleString()}L</p>
                </div>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
