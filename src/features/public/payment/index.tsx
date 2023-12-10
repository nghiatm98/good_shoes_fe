import React, { useMemo } from 'react'
import qs from 'query-string'
import { ICPaymentError, ICPaymentSuccess } from 'assets'
import { Button } from 'components'
import { useNavigate } from 'react-router'

interface IQueriesParams {
  type?: 'success' | 'error'
  orderId?: string
}

const PaymentPage = () => {
  const queryParam: IQueriesParams = qs.parse(location.search)
  const navigate = useNavigate()

  const detail = useMemo(() => {
    if (queryParam?.type === 'error')
      return {
        icon: <ICPaymentError />,
        content: <p>Đơn hàng đã thành toán không thành công.</p>
      }
    return {
      icon: <ICPaymentSuccess />,
      content: (
        <p>
          Đơn hàng {queryParam?.orderId} đã thành toán thành công.
          <br />
          Xin cảm ơn.
        </p>
      )
    }
  }, [queryParam])

  return (
    <div className="flex flex-col gap-y-14 text-center justify-center items-center h-[calc(100vh_-_120px)]">
      {detail?.icon}
      {detail?.content}
      <Button className="!h-[51px] !rounded-md !text-_16 !font-normal" label="Quay lại trang chủ" onClick={() => navigate('/')} />
    </div>
  )
}

export default PaymentPage
