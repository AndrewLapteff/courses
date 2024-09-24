import { auth, signIn, signOut } from '@/auth'
import { Navlink } from '@/components/shared/nav-link'
import { Navbar } from '@/components/widgets/navbar'
import SignIn from '@/components/widgets/signin'
import SignOut from '@/components/widgets/signout'

export const dynamic = 'force-dynamic'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  console.log(session)
  return (
    <>
      <Navbar>
        <div className="flex items-center">
          <Navlink href="/">Home</Navlink>
          <Navlink href="/products">Products</Navlink>
          <Navlink href="/orders">Orders</Navlink>
        </div>
        <div className="flex items-center">
          <div className="ml-4">{session ? <SignOut /> : <SignIn />}</div>
        </div>
      </Navbar>
      <div className="container my-6">{children}</div>
    </>
  )
}
