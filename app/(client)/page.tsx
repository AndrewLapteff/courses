import { ProductCard } from '@/components/shared/product-card'
import { Button } from '@/components/ui/button'
import prisma from '@/db/prisma'
import { Product } from '@prisma/client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

async function getMostPopularProducts() {
  return await prisma.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { orders: { _count: 'desc' } },
    take: 6,
  })
}

async function getNewestProducts() {
  return await prisma.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { createdAt: 'desc' },
    take: 6,
  })
}

export default function HomePage() {ч
  return (
    <main className="space-y-12">
      <ProductGridSection title="Most Popular" productsFetcher={getMostPopularProducts} />
      <ProductGridSection title="Newest" productsFetcher={getNewestProducts} />
    </main>
  )
}

type ProductGridSectionProps = {
  productsFetcher: () => Promise<Product[]>
  title: string
}

async function ProductGridSection({ productsFetcher, title }: ProductGridSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Button asChild variant="outline">
          <Link href="/products" className="space-x-2">
            <span>View All</span>
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(await productsFetcher()).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
