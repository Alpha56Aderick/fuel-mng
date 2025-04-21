
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText } from "lucide-react"

export const DeliveryLogForm = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Log Delivery</CardTitle>
        <FileText className="h-5 w-5 text-blue-500" />
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tank">Select Tank</Label>
            <select id="tank" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
              <option value="tank1">Tank 1 - Diesel</option>
              <option value="tank2">Tank 2 - Unleaded</option>
              <option value="tank3">Tank 3 - Premium</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (Liters)</Label>
            <Input id="amount" type="number" placeholder="Enter amount" />
          </div>
          <Button className="w-full">Log Delivery</Button>
        </form>
      </CardContent>
    </Card>
  )
}
