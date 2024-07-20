import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export interface DashboardCardProps {
  title: string
  description: string
  content: string
}

export default function DashboardCard({ title, description, content }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  )
}
