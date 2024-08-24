import { ProductCard, ProductCardSkeleton } from '@/components/shared/product-card'
import prisma from '@/db/prisma'
import { Suspense } from 'react'

function getProducts() {
  return prisma.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { createdAt: 'desc' },
  })
}

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Suspense
        fallback={
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        }
      >
        <ProductSuspense />
      </Suspense>
    </div>
  )
}

async function ProductSuspense() {
  const products = await getProducts()
  return products.map((product) => <ProductCard key={product.id} {...product} />)
}
