import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { addProduct } from '../../_actions/products'

export default function ProductForm() {
  return (
    <form action={addProduct} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          type="text"
          name="price"
          id="price"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <Label htmlFor="image">Image</Label>
        <Input
          type="file"
          name="image"
          id="image"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <Label htmlFor="available-for-purchase">Available</Label>
        <Input
          type="checkbox"
          name="available-for-purchase"
          id="available-for-purchase"
          className="mt-1 block"
        />
      </div>
      <div>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}
