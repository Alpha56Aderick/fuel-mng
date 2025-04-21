
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Download, Table as TableIcon } from "lucide-react";
import { TransactionTable, type Transaction } from "@/components/Transaction/TransactionTable";

const TransactionManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      customer: "John Doe",
      fuelType: "Diesel",
      pumpUsed: "Pump 1",
      amount: 75.50,
      timestamp: new Date("2025-04-20T10:30:00")
    },
    {
      id: "2",
      customer: "Jane Smith",
      fuelType: "Unleaded",
      pumpUsed: "Pump 2",
      amount: 45.75,
      timestamp: new Date("2025-04-20T11:15:00")
    },
    {
      id: "3",
      customer: "Bob Johnson",
      fuelType: "Premium",
      pumpUsed: "Pump 3",
      amount: 65.25,
      timestamp: new Date("2025-04-20T12:00:00")
    }
  ]);

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.fuelType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.pumpUsed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExport = () => {
    const headers = ["Customer,Fuel Type,Pump Used,Amount,Date & Time\n"];
    const csvData = filteredTransactions.map(t => 
      `${t.customer},${t.fuelType},${t.pumpUsed},$${t.amount},${t.timestamp.toLocaleString()}`
    ).join("\n");
    
    const blob = new Blob([headers + csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Transaction Management</h1>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link to="/">Back to Dashboard</Link>
            </Button>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm">
          <TransactionTable transactions={filteredTransactions} />
        </div>
      </div>
    </div>
  );
};

export default TransactionManagement;
