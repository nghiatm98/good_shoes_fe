// @ts-nocheck
import { ERROR_MESSAGES } from 'common'
import { Button, Editor, TitleManager } from 'components'
import TextInput from 'components/input/TextInput'
import { CartContext } from 'contexts'
import { useFormik } from 'formik'
import { InputTypeModel, OrderStatusModel } from 'models'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { OrderService } from 'services'
import * as Yup from 'yup'

const inputConfigs = [
  {
    label: 'Tên',
    name: 'customer_first_name',
    type: 'text',
    placeholder: 'Nhập tên',
    required: false
  },
  {
    label: 'Email',
    name: 'customer_email',
    type: 'text',
    placeholder: 'Nhập email',
    required: false
  },
  {
    label: 'Số điện thoại',
    name: 'customer_phone',
    type: 'text',
    placeholder: 'Nhập số điện thoại',
    required: false
  },
  {
    label: 'Địa chỉ',
    name: 'address',
    type: 'text',
    placeholder: 'Nhập địa chỉ',
    required: false
  },
  {
    label: 'Ghi chủ',
    name: 'note',
    type: 'text',
    placeholder: 'Nhập ghi chú',
    required: false,
    inputType: InputTypeModel.EDITOR
  }
]

const PaymentPage = () => {
  const navigate = useNavigate()
  const { cart, totalQuantity, handleClearAllCart, totalPrice } = useContext(CartContext)

  const formik = useFormik({
    initialValues: {
      customer_first_name: '',
      customer_email: '',
      customer_phone: '',
      address: '',
      note: ''
    },
    validationSchema: Yup.object({
      customer_first_name: Yup.string().required(ERROR_MESSAGES.required),
      customer_email: Yup.string().required(ERROR_MESSAGES.required).email(ERROR_MESSAGES.email),
      customer_phone: Yup.string().required(ERROR_MESSAGES.required),
      address: Yup.string().required(ERROR_MESSAGES.required),
      note: Yup.string()
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          ...values,
          items: cart,
          total_item_qty: totalQuantity,
          grand_total: totalPrice,
          status: OrderStatusModel.NEW
        }
        const response = await OrderService.createOrder(data)
        handleClearAllCart()
        navigate('/payment-result?type=success&orderId=' + response?.order_id)
      } catch (error) {
        navigate('/payment-result?type=error')
      }
    }
  })

  const { values, handleChange, handleSubmit, touched, errors, setFieldValue } = formik

  const handleCheckCart = () => {
    if (totalQuantity) return
    toast.warning('Vui lòng chọn sản phẩm trước khi thanh toán!')
    navigate('/products')
  }

  useEffect(() => {
    handleCheckCart()
  }, [])

  return (
    <div className="flex flex-col gap-5 p-10 w-[600px]">
      <TitleManager title="Thanh toán đơn hàng" />
      <div className="text-_20 text-red-400">
        Vui lòng điền thông tin thanh toán! <span className="text-red-600 ml-1 -translate-y-[6px]">*</span>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {inputConfigs.map((input, index) => {
          if (input?.inputType === InputTypeModel.EDITOR) {
            return (
              <Editor
                value={values?.[input.name]}
                onChange={setFieldValue}
                error={Boolean(touched[input.name] && errors[input.name])}
                errorMessage={errors?.[input.name]}
                label={input.label}
                field={input.name}
                key={index}
              />
            )
          }
          return (
            <TextInput
              value={values?.[input.name]}
              key={index}
              field={input.name}
              placeholder={input.placeholder}
              onChange={handleChange}
              label={input.label}
              type={input.type}
              error={Boolean(touched[input.name] && errors[input.name])}
              errorMessage={errors?.[input.name]}
            />
          )
        })}
      </div>
      <div className="flex flex-row gap-5 mt-10 mx-auto">
        <Button label="Lưu thông tin" onClick={handleSubmit} type="submit" className="!h-12 !text-_16" />
        <Button label="Quay lại" onClick={() => navigate(-1)} type="submit" className="!h-12 !text-_16" />
      </div>
    </div>
  )
}

export default PaymentPage
