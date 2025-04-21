
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Bell } from "lucide-react"

export const ThresholdAlerts = () => {
  const alerts = [
    {
      id: 1,
      title: "Low Fuel Alert",
      description: "Tank 2 (Unleaded) is below 20% capacity",
      variant: "destructive" as const,
    },
    {
      id: 2,
      title: "Maintenance Required",
      description: "Tank 1 requires scheduled inspection",
      variant: "default" as const,
    }
  ]

  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Threshold Alerts</CardTitle>
        <Bell className="h-5 w-5 text-blue-500" />
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <Alert key={alert.id} variant={alert.variant}>
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertDescription>{alert.description}</AlertDescription>
          </Alert>
        ))}
      </CardContent>
    </Card>
  )
}
