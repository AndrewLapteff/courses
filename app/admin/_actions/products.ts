'use server'

import prisma from '@/db/prisma'
import { transformObject } from '@/lib/utils'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  priceInDollars: z.coerce.number().int().min(1),
  filePath: z.string().url(),
  imagePath: z.string().url(),
  isAvailableForPurchase: z
    .string()
    .refine((value) => value === 'on')
    .optional(),
})

export async function addProduct(prevState: unknown, formData: FormData) {
  const result = schema.safeParse(transformObject(formData))
  if (result.success === false) {
    return result.error.formErrors.fieldErrors
  }

  const data = result.data

  prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      priceInDollars: data.priceInDollars,
      filePath: data.filePath,
      imagePath: data.imagePath,
      isAvailableForPurchase: data.isAvailableForPurchase === 'on',
    },
  })

  redirect('/admin/products')
}
