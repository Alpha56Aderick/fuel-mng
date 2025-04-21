
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

export const RecentTransactions = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Recent Transactions</CardTitle>
        <Clock className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between border-b pb-2 last:border-0">
              <div className="text-sm">
                <p className="font-medium">Transaction #{2023001 + i}</p>
                <p className="text-muted-foreground">Diesel - Pump 2</p>
              </div>
              <div className="text-sm text-right">
                <p className="font-medium">$85.00</p>
                <p className="text-muted-foreground">5 mins ago</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
