import { getDownloadLink } from '@/app/(client)/_actions/download'
import { Button } from '@/components/ui/button'
import prisma from '@/db/prisma'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function PurchasePage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: {
      id,
      isAvailableForPurchase: true,
    },
  })

  // TODO: build authentication

  if (!product) {
    return notFound()
  }

  const downloadLink = await getDownloadLink(product.id, 'id')

  return (
    <>
      {!downloadLink ? (
        <form method="post" action="https://secure.wayforpay.com/pay" accept-charset="utf-8">
          <input name="merchantAccount" value="test_merch_n1" hidden />
          <input name="merchantAuthType" value="SimpleSignature" hidden />
          <input name="merchantDomainName" value="www.market.ua" hidden />
          <input name="orderReference" value="DH1725356599" hidden />
          <input name="orderDate" value="1415379863" hidden />
          <input name="amount" value="1547.36" hidden />
          <input name="currency" value="UAH" hidden />
          <input name="orderTimeout" value="49000" hidden />
          <input name="productName[]" value={product.name} hidden />
          <input name="productName[]" value={product.description} hidden />
          <input name="productPrice[]" value="1000" hidden />
          <input name="productPrice[]" value="547.36" hidden />
          <input name="productCount[]" value="1" hidden />
          <input name="productCount[]" value="1" hidden />
          <input name="clientFirstName" value="Вася" hidden />
          <input name="clientLastName" value="Пупкин" hidden />
          <input name="clientAddress" value="пр. Гагарина, 12" hidden />
          <input name="clientCity" value="Днепропетровск" hidden />
          <input name="clientEmail" value="some@mail.com" hidden />
          <input name="defaultPaymentSystem" value="card" hidden />
          <input name="merchantSignature" value="6dd4af3e0eca2cd3e96b2fc64507a980" hidden />
          <Button type="submit">Buy</Button>
        </form>
      ) : (
        <Button>
          <Link href={downloadLink}>Download</Link>
        </Button>
      )}
    </>
  )
}
