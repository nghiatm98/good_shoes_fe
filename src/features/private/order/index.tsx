import { Input, Table, TitleManager } from 'components'
import { OrderStatusModel, type HeaderTableModel, type OrderModel } from 'models'
import { useContext, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { OrderService } from 'services'
import OrderDetail from './orderDetail'
import { ModalContext } from 'contexts'
import { formatNumberDot } from 'common'
import { useNavigateWithQueryParams } from 'hooks'

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
    field: 'grand_total'
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
  const { handleChangeQuery, queryParam } = useNavigateWithQueryParams()
  const [searchValue, setSearchValue] = useState(queryParam?.search ?? '')
  const onGetOrders = async () => {
    try {
      setLoading(true)
      const { items } = await OrderService.getOrders({ page: 1, limit: 999999999 })
      const dataMapping = items.map((item) => ({
        ...item,
        grand_total: formatNumberDot(item.grand_total) + ' VNĐ'
      }))
      setOrders(dataMapping)
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

  const handleSearch = async(e: any) => {
    e?.stopPropagation()
    if (e.key === 'Enter') {
      handleChangeQuery([
        {
          field: 'search',
          path: '/manager/orders',
          value: searchValue
        }
      ])
    }
  }

  return (
    <div>
      <TitleManager title="Quản lý đơn hàng" />
      <div className="mb-5">
        <Input label="Tìm kiếm đơn hàng" value={searchValue} onKeyDown={handleSearch} onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)} />
      </div>
      <Table headerConfigs={headerConfigs} data={orders} loading={loading} />
    </div>
  )
}

export default OrderManagement
