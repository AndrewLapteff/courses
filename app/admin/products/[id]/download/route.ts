import prisma from '@/db/prisma'
import { notFound } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, { params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id },
    select: { filePath: true },
  })

  if (product == null) return notFound()
    
  return new NextResponse()
}
