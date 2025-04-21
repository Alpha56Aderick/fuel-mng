
import { TodaysSales } from "@/components/Dashboard/TodaysSales"
import { FuelInventory } from "@/components/Dashboard/FuelInventory"
import { PumpMonitor } from "@/components/Dashboard/PumpMonitor"
import { SystemAlerts } from "@/components/Dashboard/SystemAlerts"
import { RecentTransactions } from "@/components/Dashboard/RecentTransactions"

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Fuel Station Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TodaysSales />
          <FuelInventory />
          <PumpMonitor />
          <SystemAlerts />
          <div className="md:col-span-2">
            <RecentTransactions />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
