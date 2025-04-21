
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FuelTanks } from "@/components/Inventory/FuelTanks"
import { FuelGauge } from "@/components/Inventory/FuelGauge"
import { ThresholdAlerts } from "@/components/Inventory/ThresholdAlerts"
import { DeliveryLogForm } from "@/components/Inventory/DeliveryLogForm"
import { FuelUsageTrend } from "@/components/Inventory/FuelUsageTrend"

const InventoryMonitoring = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Fuel Inventory Monitoring</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <FuelTanks />
          </div>
          <div>
            <FuelGauge />
          </div>
          <div>
            <ThresholdAlerts />
          </div>
          <div>
            <DeliveryLogForm />
          </div>
          <div className="lg:col-span-3">
            <FuelUsageTrend />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventoryMonitoring

