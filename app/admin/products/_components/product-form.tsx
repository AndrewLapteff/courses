'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { addProduct, updateProduct } from '../../_actions/products'
import { useFormState, useFormStatus } from 'react-dom'
import { Product } from '@prisma/client'

export default function ProductForm({ product }: { product?: Product | null }) {
  const [error, action] = useFormState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {}
  )

  return (
    <form action={action} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          defaultValue={product?.name || ''}
          type="text"
          name="name"
          id="name"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {error.name && <p className="text-destructive">{error.name}</p>}
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          defaultValue={product?.priceInDollars || ''}
          type="text"
          name="priceInDollars"
          id="price"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {error.priceInDollars && <p className="text-destructive">{error.priceInDollars}</p>}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <textarea
          defaultValue={product?.description || ''}
          id="description"
          name="description"
          rows={4}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {error.description && <p className="text-destructive">{error.description}</p>}
      </div>
      <div>
        <Label htmlFor="file">File</Label>
        <Input
          defaultValue={product?.filePath || ''}
          type="text"
          name="filePath"
          id="file"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {error.filePath && <p className="text-destructive">{error.filePath}</p>}
      </div>
      <div>
        <Label htmlFor="image">Image</Label>
        <Input
          defaultValue={product?.imagePath || ''}
          type="text"
          name="imagePath"
          id="image"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {error.imagePath && <p className="text-destructive">{error.imagePath}</p>}
      </div>
      <div>
        <Label htmlFor="available-for-purchase">Available</Label>
        <Input
          type="checkbox"
          name="isAvailableForPurchase"
          id="available-for-purchase"
          className="mt-1 block"
          checked={product?.isAvailableForPurchase}
        />
        {error.isAvailableForPurchase && (
          <p className="text-destructive">{error.isAvailableForPurchase}</p>
        )}
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Saving...' : 'Save'}
    </Button>
  )
}
