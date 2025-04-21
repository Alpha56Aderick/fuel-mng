
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gauge } from "lucide-react"

export const PumpMonitor = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Pump Station Monitor</CardTitle>
        <Gauge className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Pump 1</span>
            <Badge variant="default" className="bg-green-500">Active</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Pump 2</span>
            <Badge variant="default" className="bg-green-500">Active</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Pump 3</span>
            <Badge variant="secondary">Idle</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Pump 4</span>
            <Badge variant="destructive">Error</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
