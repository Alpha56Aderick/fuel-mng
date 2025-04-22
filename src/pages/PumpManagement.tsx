import { useState, useEffect } from "react";
import { PumpCard } from "@/components/Pump/PumpCard";
import { AddPumpCard } from "@/components/Pump/AddPumpCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

export interface Pump {
  id: string;
  name: string;
  fuelType: string;
  status: "active" | "disabled" | "maintenance";
  health: "good" | "warning" | "critical";
  lastMaintenance: string;
  nextMaintenance: string;
}

const PumpManagement = () => {
  const [pumps, setPumps] = useState<Pump[]>([]);

  // Load pumps from localStorage on mount
  useEffect(() => {
    const storedPumps = localStorage.getItem('pumps');
    if (storedPumps) {
      setPumps(JSON.parse(storedPumps));
    }
  }, []);

  // Update localStorage whenever pumps state changes
  useEffect(() => {
    localStorage.setItem('pumps', JSON.stringify(pumps));
  }, [pumps]);

  const handleAddPump = (newPump: Omit<Pump, "id">) => {
    const pump: Pump = {
      ...newPump,
      id: (pumps.length + 1).toString()
    };
    setPumps([...pumps, pump]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Pump Management</h1>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link to="/">Back to Dashboard</Link>
            </Button>
            <Button variant="default" asChild>
              <Link to="/pump-management/create">
                <Plus className="mr-2 h-4 w-4" /> Add New Pump
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pumps.map((pump) => (
            <PumpCard 
              key={pump.id} 
              pump={pump}
              onStatusChange={(status) => {
                setPumps(pumps.map(p => 
                  p.id === pump.id ? { ...p, status } : p
                ));
              }}
            />
          ))}
          <AddPumpCard onAddPump={handleAddPump} />
        </div>
      </div>
    </div>
  );
};

export default PumpManagement;
