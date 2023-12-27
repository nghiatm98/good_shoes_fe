import { Table, TitleManager } from 'components'
import { OrderStatusModel, type HeaderTableModel, type OrderModel } from 'models'
import { useContext, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { OrderService } from 'services'
import OrderDetail from './orderDetail'
import { ModalContext } from 'contexts'

const HEADERS_ORDER = (handleConfirmOrder: (id: number | string, status: OrderStatusModel) => void, setElementModal: Function): HeaderTableModel[] => [
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
    label: 'Email',
    field: 'customer_email'
  },
  {
    label: 'Xem chi tiết',
    field: '1',
    actions: [
      {
        label: 'Xem chi tiết',
        onClick: (id: string | number) => setElementModal(<OrderDetail id={id} />)
      }
    ]
  },
  {
    label: 'Thay đổi trạng thái',
    field: '',
    actions: [
      {
        label: '',
        list: [
          {
            label: 'Xác nhận',
            path: '',
            onClick: (id: string | number) => handleConfirmOrder(id, OrderStatusModel.CONFIRMED)
          },
          {
            label: 'Đang tiến hành',
            path: '',
            onClick: (id: string | number) => handleConfirmOrder(id, OrderStatusModel.PROCESSING)
          },
          {
            label: 'Hoàn thành',
            path: '',
            onClick: (id: string | number) => handleConfirmOrder(id, OrderStatusModel.COMPLETED)
          },
          {
            label: 'Hủy',
            path: '',
            onClick: (id: string | number) => handleConfirmOrder(id, OrderStatusModel.CANCELED)
          },
        ]
      }
    ]
  }
]

const OrderManagement = () => {
  const { setElementModal } = useContext(ModalContext)
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

  const handleConfirmOrder = async (id: string | number, status: OrderStatusModel) => {
    try {
      await OrderService.updateOrderStatus(id, {
        status
      })
      
      toast.success('Đổi trạng thái thành công!')
    } catch (error) {
      toast.error('Đổi trạng thái thất bại!')
    }
  }

  const headerConfigs = useMemo(() => {
    return HEADERS_ORDER(handleConfirmOrder, setElementModal)
  }, [])

  return (
    <div>
      <TitleManager title="Quản lý đơn hàng" />
      <Table headerConfigs={headerConfigs} data={orders} loading={loading} />
    </div>
  )
}

export default OrderManagement
