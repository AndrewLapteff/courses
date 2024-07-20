import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function ProductsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available For Purchase</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Available For Purchase</span>
          </TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  )
}
