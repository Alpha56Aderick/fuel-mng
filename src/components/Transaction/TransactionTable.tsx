
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDistanceToNow } from "date-fns";

export interface Transaction {
  id: string;
  customer: string;
  fuelType: string;
  pumpUsed: string;
  amount: number;
  timestamp: Date;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable = ({ transactions }: TransactionTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Fuel Type</TableHead>
            <TableHead>Pump Used</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date & Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.customer}</TableCell>
              <TableCell>{transaction.fuelType}</TableCell>
              <TableCell>{transaction.pumpUsed}</TableCell>
              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
              <TableCell>{formatDistanceToNow(transaction.timestamp, { addSuffix: true })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
