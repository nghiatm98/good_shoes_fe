import { ICClose } from 'assets'
import { TitleManager } from 'components'
import { ModalContext } from 'contexts'
import type { OrderModel, ProductModel } from 'models'
import React, { useContext, useEffect, useState } from 'react'
import { OrderService } from 'services'

const configs = [
  {
    label: 'Mã đơn hàng',
    field: 'order_number'
  },
  {
    label: 'Trạng thái đơn hàng',
    field: 'status'
  },
  {
    label: 'Tổng số sản phẩm',
    field: 'total_item_qty'
  },
  {
    label: 'Tên khách hàng',
    field: 'customer_first_name'
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
    label: 'Tổng tiền',
    field: 'subtotal'
  },
  {
    label: 'Ghi chú',
    field: 'note'
  }
]

const productConfigs = [
  {
    label: 'Mã sản phẩm',
    field: 'product_id'
  },
  {
    label: 'Tên sản phẩm',
    field: 'name'
  },
  {
    label: 'Số lượng sản phẩm',
    field: 'qty_ordered'
  },
  {
    label: 'Giá sản phẩm',
    field: 'price'
  },
  {
    label: 'Giảm giá',
    field: 'discount_amount'
  },
  {
    label: 'Ghi chú',
    field: 'note'
  }
]

interface IOrderDetailProps {
  id: string | number
}

const OrderDetail = ({ id }: IOrderDetailProps) => {
  const { hideModal } = useContext(ModalContext)
  const [orderDetail, setOrderDetail] = useState<OrderModel>({} as OrderModel)
  const onGetOrderDetail = async () => {
    try {
      const detail = await OrderService.getOrderDetail(id)
      setOrderDetail(detail)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onGetOrderDetail()
  }, [id])
  return (
    <div className="bg-white relative flex flex-col p-6 h-[800px] w-[800px] rounded-xl">
      <div className="cursor-pointer absolute top-6 right-6" onClick={hideModal}>
        <ICClose />
      </div>
      <div className="flex flex-col gap-y-10">
        <TitleManager title="Thông tin đơn hàng" />
        <p className='text-_20 font-medium'>Đơn hàng:</p>
        <div className="grid grid-cols-2 gap-x-5 gap-y-5">
          {configs.map((config, index) => {
            return (
              <div key={index}>
                <span>{config.label}: </span>
                <span>{(orderDetail as any)[config.field as keyof OrderModel]}</span>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col gap-y-7'>
          <p className='text-_20 font-medium'>Sản phẩm:</p>
          <div className="flex flex-col gap-y-7">
            {orderDetail?.items?.map((product, index) => {
              return (
                <div key={index} className="grid grid-cols-2 gap-x-5 gap-y-5">
                  {productConfigs.map((productConfig, index) => {
                    return (
                      <div key={index}  className='grid grid-cols-2 gap-5'>
                        <span>{productConfig.label}: </span>
                        <span>{(product as any)[productConfig.field as keyof ProductModel]}</span>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
