import DashboardCard from '@/components/shared/dashboard-card'
import prisma from '@/db/prisma'
import { formatCurrency, formatNumber } from '@/lib/formaters'

async function getTotalSalesData() {
  const data = await prisma.order.aggregate({
    _sum: {
      pricePaidInDollars: true,
    },
    _count: true,
  })

  return {
    totalSales: data._sum.pricePaidInDollars || 0,
    totalOrders: data._count,
  }
}

async function getUsersData() {
  const [data, totalUsers] = await Promise.all([
    prisma.order.aggregate({ _sum: { pricePaidInDollars: true } }),
    prisma.user.count(),
  ])

  return {
    totalUsers,
    averageValuePerUser: data._sum.pricePaidInDollars || 0 / totalUsers || 0,
  }
}

async function getProductData() {
  const [availableTotal, unavailableTotal] = await Promise.all([
    prisma.product.count({ where: { isAvailableForPurchase: true } }),
    prisma.product.count({ where: { isAvailableForPurchase: false } }),
  ])

  return {
    availableTotal,
    unavailableTotal,
  }
}

export default async function AdminDashboard() {
  const [salesData, usersData, productData] = await Promise.all([
    getTotalSalesData(),
    getUsersData(),
    getProductData(),
  ])
  const { totalSales, totalOrders } = salesData
  const { totalUsers, averageValuePerUser } = usersData
  const { availableTotal, unavailableTotal } = productData

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        description={`Total sales: ${formatCurrency(totalSales)}`}
        content={`Total orders: ${formatNumber(totalOrders)}`}
      />
      <DashboardCard
        title="Users"
        description={`Average value per user: ${formatCurrency(averageValuePerUser)}`}
        content={`Total users: ${formatNumber(totalUsers)}`}
      />
      <DashboardCard
        title="Products"
        description={`Available: ${formatNumber(availableTotal)}`}
        content={`Unavailable: ${formatNumber(unavailableTotal)}`}
      />
    </div>
  )
}
