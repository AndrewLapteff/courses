import { formatCurrency } from '@/lib/formaters'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

type ProductCardTypes = {
  id: string
  name: string
  priceInDollars: number
  description: string
  imagePath: string
}

export function ProductCard({
  id,
  name,
  priceInDollars,
  description,
  imagePath,
}: ProductCardTypes) {
  return (
    <Card className="flex overflow-hidden flex-col">
      <div className="relative w-full h-auto aspect-video">
        <Image src={imagePath} fill alt={name} />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatCurrency(priceInDollars / 100)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-growf">
        <p className="line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/products/${id}/purchase`}>Purchase</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
