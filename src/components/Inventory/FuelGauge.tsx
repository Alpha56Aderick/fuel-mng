
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Gauge } from "lucide-react"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { PieChart, Pie, Cell } from "recharts"

export const FuelGauge = () => {
  const data = [
    { name: "Filled", value: 75 },
    { name: "Empty", value: 25 }
  ]

  const COLORS = ["#4CAF50", "#f3f4f6"]

  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Overall Capacity</CardTitle>
        <Gauge className="h-5 w-5 text-blue-500" />
      </CardHeader>
      <CardContent className="flex justify-center">
        <ChartContainer className="h-[200px] w-[200px]" config={{}}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <ChartTooltip />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className="text-center pb-4">
        <span className="text-2xl font-bold text-green-600">75%</span>
        <p className="text-sm text-muted-foreground">Total Capacity Used</p>
      </div>
    </Card>
  )
}
