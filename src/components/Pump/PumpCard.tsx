
import { Battery, Calendar, Wrench } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Pump } from "@/pages/PumpManagement";

interface PumpCardProps {
  pump: Pump;
  onStatusChange: (status: Pump["status"]) => void;
}

const healthIcons = {
  good: <Battery className="h-5 w-5 text-green-500" />,
  warning: <Battery className="h-5 w-5 text-yellow-500" />,
  critical: <Battery className="h-5 w-5 text-red-500" />
};

export const PumpCard = ({ pump, onStatusChange }: PumpCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="cursor-pointer transition-shadow hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">{pump.name}</CardTitle>
            {healthIcons[pump.health]}
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status:</span>
                <span className={`text-sm font-medium ${
                  pump.status === "active" ? "text-green-600" :
                  pump.status === "maintenance" ? "text-yellow-600" :
                  "text-red-600"
                }`}>
                  {pump.status.charAt(0).toUpperCase() + pump.status.slice(1)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Fuel Type:</span>
                <span className="text-sm font-medium">{pump.fuelType}</span>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => onStatusChange(pump.status === "disabled" ? "active" : "disabled")}
                >
                  {pump.status === "disabled" ? "Enable" : "Disable"}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1"
                  onClick={() => onStatusChange("maintenance")}
                >
                  Maintenance
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{pump.name} Details</h4>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Last Maintenance: {pump.lastMaintenance}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            <span className="text-sm">Next Maintenance: {pump.nextMaintenance}</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
