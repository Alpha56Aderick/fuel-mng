
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Bell } from "lucide-react"

export const SystemAlerts = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">System Alerts</CardTitle>
        <Bell className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center text-destructive">
            <span className="text-sm">⚠️ Low fuel level in Tank 2</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <span className="text-sm">⚠️ Maintenance due for Pump 4</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
