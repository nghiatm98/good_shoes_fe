//@ts-nocheck
import { ERROR_MESSAGES } from 'common'
import { Button, Editor, TitleManager } from 'components'
import TextInput from 'components/input/TextInput'
import { FieldArray, FormikProvider, useFormik } from 'formik'
import { InputTypeModel, ProductCreateRequestModel, type ProductModel } from 'models'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ProductService } from 'services'
import { UploadService } from 'services/upload'
import * as Yup from 'yup'

const inputConfigs = [
  {
    label: 'Tên',
    name: 'name',
    type: 'text',
    placeholder: 'Nhập tên sản phẩm',
    required: false
  },
  {
    label: 'Mã hàng',
    name: 'sku',
    type: 'text',
    placeholder: 'Nhập mã hàng',
    required: false
  },
  {
    label: 'Giá',
    name: 'price',
    type: 'number',
    placeholder: 'Nhập giá sản phẩm',
    required: false
  },
  {
    label: 'Giá giảm',
    name: 'sale_price',
    type: 'price',
    placeholder: 'Nhập giá giảm',
    required: false
  },
  {
    label: 'Số lượng',
    name: 'total_quantity',
    type: 'price',
    placeholder: 'Nhập số lượng sản phẩm',
    required: false
  },
  {
    label: 'Danh mục',
    name: 'category',
    type: 'text',
    placeholder: 'Nhập danh mục sản phẩm',
    required: false
  },
  {
    label: 'Thương hiệu',
    name: 'brand',
    type: 'text',
    placeholder: 'Nhập thương hiệu sản phẩm',
    required: false
  },
  {
    label: 'Thẻ',
    name: 'tag',
    type: 'text',
    placeholder: 'Nhập thẻ sản phẩm',
    required: false
  },
  {
    label: 'Mô tả 1',
    name: 'description',
    type: 'text',
    placeholder: 'Nhập mô tả (1) sản phẩm',
    required: false,
    inputType: InputTypeModel.EDITOR
  },
  {
    label: 'Mô tả 2',
    name: 'description2',
    type: 'text',
    placeholder: 'Nhập mô tả (2) sản phẩm',
    required: false,
    inputType: InputTypeModel.EDITOR
  }
]

interface IProductDetailProps {
  productDetail?: ProductModel
}

interface ParamsProductDetailModel {
  id?: string
}

const ProductDetail = ({ productDetail }: IProductDetailProps) => {
  const params: ParamsProductDetailModel = useParams()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: ({ ...productDetail } as any) ?? {
      name: '',
      price: '',
      sale_price: '',
      total_quantity: '',
      category: '',
      brand: '',
      description: '',
      description2: '',
      image_url: '',
      tag: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required(ERROR_MESSAGES.required),
      price: Yup.string().required(ERROR_MESSAGES.required),
      sale_price: Yup.string().required(ERROR_MESSAGES.required),
      total_quantity: Yup.string().required(ERROR_MESSAGES.required),
      category: Yup.string().required(ERROR_MESSAGES.required),
      brand: Yup.string().required(ERROR_MESSAGES.required),
      description: Yup.string(),
      description2: Yup.string(),
      image_url: Yup.string().required(ERROR_MESSAGES.required),
      tag: Yup.string()
    }),
    onSubmit: async (values) => {
      try {
        if (params.id) {
          await ProductService.editProduct(params.id, {
            ...values,
            total_quantity: Number(values.total_quantity),
            sale_price: Number(values.sale_price),
          })
          toast.success('Sửa sản phẩm thành công !')
          return
        }
        await ProductService.createProduct({
          ...values,
          total_quantity: Number(values.total_quantity),
          sale_price: Number(values.sale_price),
        })
        toast.success('Tạo sản phẩm thành công !')
        navigate('/manager/products')
      } catch (error) {
        if (params.id) return toast.error('Sửa sản phẩm thất bại !')
        toast.error('Tạo sản phẩm thất bại !')
      }
    }
  })

  const { values, handleChange, handleSubmit, setFieldValue, touched, errors } = formik

  const handleUploadFile = () => {
    const cvElement = document.getElementById('image')
    if (!cvElement) return
    cvElement.click()
  }

  const onSelectFile = async (e: any) => {
    if (e?.target?.files && e.target.files.length > 0) {
      try {
        let formData = new FormData()
        formData.append('file', e?.target?.files[0])
        const { url } = await UploadService.upload(formData)
        setFieldValue('image_url', url)
      } catch (err) {}
    }
  }
  return (
    <div className="flex flex-col gap-5">
      <TitleManager title={params.id ? 'Chi tiết sản phẩm' : 'Thêm sản phẩm'} />
      <div className="flex flex-col gap-5">
        <p className="text-_16">Ảnh sản phẩm</p>
        <div className="w-32 h-32 border border-gray-700 rounded-md cursor-pointer" onClick={handleUploadFile}>
          <img src={values.image_url} alt="image" className="w-full h-full" />
          <input hidden id="image" accept="image/*" type="file" onChange={onSelectFile} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {inputConfigs.map((input, index) => {
          if (input?.inputType === InputTypeModel.EDITOR) {
            return (
              <Editor
                value={values?.[input.name]}
                onChange={handleChange}
                error={Boolean(touched[input.name] && errors[input.name])}
                errorMessage={errors?.[input.name]}
                label={input.label}
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
              error={!!(touched?.[input.name] && errors?.[input.name])}
              errorMessage={errors?.[input.name] as string}
            />
          )
        })}
      </div>
      {/* <div>
        <p>Các tùy chon:</p>
        <div>
          <p>Màu sắc:</p>
          <div>
            <FormikProvider value={formik}>
              <FieldArray
                validateOnChange={false}
                name="colorOptions"
                render={(helpers) => (
                  <div>
                    {
                      <div>
                        {values.colorOptions.map((_: any, index: number) => {
                          return (
                            <div className="flex flex-row gap-x-5" key={index}>
                              <TextInput
                                field={`colorOptions.${index}.label`}
                                onChange={handleChange}
                                label="Mã màu"
                                placeholder="Nhập mã màu"
                                required={false}
                                value={formik.values.colorOptions[index].label}
                              />
                              <TextInput
                                field={`colorOptions.${index}.value`}
                                onChange={handleChange}
                                label="Giá trị"
                                placeholder="Nhập giá trị"
                                required={false}
                                value={formik.values.colorOptions[index].value}
                              />
                              <Button
                                label="- Xóa"
                                onClick={() => {
                                  helpers.remove(index)
                                }}
                              />
                              <Button
                                label="+ Thêm"
                                onClick={(e) => {
                                  e.preventDefault()
                                  helpers.insert(index + 1, {
                                    label: '',
                                    value: ''
                                  })
                                }}
                              />
                            </div>
                          )
                        })}
                        <Button label="+ Thêm" />
                      </div>
                    }
                  </div>
                )}
              ></FieldArray>
            </FormikProvider>
          </div>
        </div>
      </div> */}
      <div className="flex flex-row gap-5 mt-10 mx-auto">
        <Button label="Lưu thông tin" onClick={handleSubmit} type="submit" className="!h-12 !text-_18" />
        <Button label="Quay lại" onClick={() => navigate(-1)} type="submit" className="!h-12 !text-_18" />
      </div>
    </div>
  )
}

export default ProductDetail
