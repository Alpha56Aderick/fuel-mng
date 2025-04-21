
import { useState } from "react";
import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import type { Pump } from "@/pages/PumpManagement";

type AddPumpFormData = Omit<Pump, "id" | "health">;

interface AddPumpCardProps {
  onAddPump: (pump: Omit<Pump, "id">) => void;
}

export const AddPumpCard = ({ onAddPump }: AddPumpCardProps) => {
  const [open, setOpen] = useState(false);
  const form = useForm<AddPumpFormData>();

  const onSubmit = (data: AddPumpFormData) => {
    onAddPump({
      ...data,
      health: "good",
    });
    form.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-shadow hover:shadow-lg">
          <CardContent className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <Plus className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-sm font-medium text-muted-foreground">Add New Pump</p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Pump</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pump Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter pump name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fuelType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fuel Type</FormLabel>
                <FormControl>
                  <Input placeholder="Enter fuel type" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Initial Status</FormLabel>
                <FormControl>
                  <Input placeholder="active" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastMaintenance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Maintenance Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nextMaintenance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Next Maintenance Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Add Pump</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
