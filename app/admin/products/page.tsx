import { Button } from '@/components/ui/button'
import PageHeader from '../_components/page-header'
import Link from 'next/link'
import ProductsTable from '../_components/products-table'

export default function AdminProductsPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href="/admin/products/new">Add product</Link>
        </Button>
      </div>
      <ProductsTable />
    </>
  )
}
