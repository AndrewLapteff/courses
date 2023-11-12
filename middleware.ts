import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: [ '/', '/courses', '/eBooks', '/pricing', '/about' ],
})

export const config = {
  matcher: [ '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)' ],
}
