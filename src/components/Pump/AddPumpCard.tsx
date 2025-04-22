import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const AddPumpCard = () => {
  return (
    <Link to="/pump-management/create" className="block">
      <Card className="cursor-pointer transition-shadow hover:shadow-lg">
        <CardContent className="flex h-full items-center justify-center p-6">
          <div className="text-center">
            <Plus className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-2 text-sm font-medium text-muted-foreground">Add New Pump</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
