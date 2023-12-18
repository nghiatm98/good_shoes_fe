import { Table, TitleManager } from 'components'
import type { HeaderTableModel, OrderModel } from 'models'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { OrderService } from 'services'

const HEADERS_ORDER = (handleConfirmOrder: (id: number | string) => void): HeaderTableModel[] => [
  {
    label: 'Mã đơn hàng',
    field: 'order_number'
  },
  {
    label: 'Trạng thái',
    field: 'status'
  },
  {
    label: 'Số lượng sản phẩm',
    field: 'total_item_qty'
  },
  {
    label: 'Tổng giá tiền',
    field: 'total_item_count'
  },
  {
    label: 'Tên người dùng',
    field: 'customer_last_name'
  },
  {
    label: 'Số điện thoại',
    field: 'customer_phone'
  },
  {
    label: 'Email',
    field: 'customer_email'
  },
  {
    label: 'Xác nhận đơn hàng',
    field: '',
    actions: [
      {
        label: 'Xác nhận',
        onClick: handleConfirmOrder
      }
    ]
  }
]

const OrderManagement = () => {
  const [orders, setOrders] = useState<OrderModel[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const onGetOrders = async () => {
    try {
      setLoading(true)
      const { items } = await OrderService.getOrders()
      setOrders(items)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    onGetOrders()
  }, [])

  const handleConfirmOrder = async (id: string | number) => {
    try {
      await OrderService.updateOrderStatus(id)
      toast.success('Đổi trạng thái thành công!')
    } catch (error) {
      toast.error('Đổi trạng thái thất bại!')
    }
  }

  const headerConfigs = useMemo(() => {
    return HEADERS_ORDER(handleConfirmOrder)
  }, [])

  return (
    <div>
      <TitleManager title="Quản lý đơn hàng" />
      <Table headerConfigs={headerConfigs} data={orders} loading={loading} />
    </div>
  )
}

export default OrderManagement
