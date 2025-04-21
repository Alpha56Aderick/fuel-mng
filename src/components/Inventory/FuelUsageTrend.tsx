
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { ChartLine } from "lucide-react"

export const FuelUsageTrend = () => {
  const data = [
    { name: "Mon", diesel: 4000, unleaded: 2400, premium: 2400 },
    { name: "Tue", diesel: 3000, unleaded: 1398, premium: 2210 },
    { name: "Wed", diesel: 2000, unleaded: 9800, premium: 2290 },
    { name: "Thu", diesel: 2780, unleaded: 3908, premium: 2000 },
    { name: "Fri", diesel: 1890, unleaded: 4800, premium: 2181 },
    { name: "Sat", diesel: 2390, unleaded: 3800, premium: 2500 },
    { name: "Sun", diesel: 3490, unleaded: 4300, premium: 2100 },
  ]

  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Fuel Usage Trends</CardTitle>
        <ChartLine className="h-5 w-5 text-blue-500" />
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[300px]" config={{}}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="diesel" stroke="#8884d8" />
            <Line type="monotone" dataKey="unleaded" stroke="#82ca9d" />
            <Line type="monotone" dataKey="premium" stroke="#ffc658" />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
