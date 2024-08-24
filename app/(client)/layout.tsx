import { Navlink } from '@/components/shared/nav-link'
import { Navbar } from '@/components/widgets/navbar'

export const dynamic = 'force-dynamic'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar>
        <Navlink href="/">Home</Navlink>
        <Navlink href="/products">Products</Navlink>
        <Navlink href="/orders">Orders</Navlink>
      </Navbar>
      <div className="container my-6">{children}</div>
    </>
  )
}
