import prisma from '@/db/prisma'
import PageHeader from '../../../_components/page-header'
import ProductForm from '../../_components/product-form'

export default async function EditProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({ where: { id } })

  return (
    <>
      <PageHeader>Edit Product</PageHeader>
      <ProductForm product={product} />
    </>
  )
}
