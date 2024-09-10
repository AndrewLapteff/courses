import prisma from '@/db/prisma'
import { notFound } from 'next/navigation'

export async function getDownloadLink(id: string, userId: string) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  })

  if (!product) {
    return notFound()
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  const order = await prisma.order.findFirst({
    where: {
      userId,
      productId: product.id,
    },
  })

  return product.filePath
}
