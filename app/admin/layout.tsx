import { Navlink } from '@/components/shared/nav-link'
import { Navbar } from '@/components/widgets/navbar'

export const dynamic = 'force-dynamic'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar>
        <Navlink href="/admin">Dashboard</Navlink>
        <Navlink href="/admin/products">Products</Navlink>
        <Navlink href="/users">Users</Navlink>
        <Navlink href="/orders">Orders</Navlink>
      </Navbar>
      <div className="container my-6">{children}</div>
    </>
  )
}
