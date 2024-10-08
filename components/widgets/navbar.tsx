import { ReactNode } from 'react'

export function Navbar({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-between px-4">{children}</nav>
  )
}
