//@ts-nocheck
import { ICDelete } from 'assets'
import { ERROR_MESSAGES } from 'common'
import { Button, Editor, Pagination, Table, TitleManager } from 'components'
import TextInput from 'components/input/TextInput'
import { useFormik } from 'formik'
import { InputTypeModel, ProductOptionTypeModel, type ProductModel } from 'models'
import { useState } from 'react'
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

const HEADERS_PRODUCT = [
  {
    label: 'Tên sản phẩm',
    field: 'name'
  },
  {
    label: 'Danh mục',
    field: 'category'
  },
  {
    label: 'Thương hiệu',
    field: 'brand'
  },
  {
    label: 'Số lượng',
    field: 'total_quantity'
  },
  {
    label: 'Giá',
    field: 'price'
  },
  {
    label: 'Trạng thái',
    field: 'status'
  },
  {
    label: 'Giảm giá',
    field: 'sale_price'
  }
]

interface IProductDetailProps {
  productDetail?: ProductModel
  productChildren?: ProductModel[]
}

interface ParamsProductDetailModel {
  id?: string
}

const ProductDetail = ({ productDetail, productChildren = [] }: IProductDetailProps) => {
  const params: ParamsProductDetailModel = useParams()
  const navigate = useNavigate()
  const [images, setImages] = useState<string[]>(productDetail.image_url ? productDetail.image_url.split(',') : [])
  const [colors, setColors] = useState(productDetail?.options?.find((option) => option.name === ProductOptionTypeModel.COLOR)?.items ?? [])
  const [sizes, setSizes] = useState(productDetail?.options?.find((option) => option.name === ProductOptionTypeModel.SIZE)?.items ?? [])

  const handleAddRowColor = (index: number) => {
    const temp = [...colors]
    temp.splice(index, 0, {
      label: '',
      value: ''
    })
    setColors(temp)
  }

  const handleRemoveRowColor = (index: number) => {
    const temp = [...colors]
    temp.splice(index, 1)
    setColors(temp)
  }

  const handleAddRowSize = (index: number) => {
    const temp = [...sizes]
    temp.splice(index, 0, {
      label: '',
      value: ''
    })
    setSizes(temp)
  }

  const handleRemoveRowSize = (index: number) => {
    const temp = [...sizes]
    temp.splice(index, 1)
    setSizes(temp)
  }

  const handleChangeColor = (index: number, field: string, value: string) => {
    const temp = [...colors]
    temp[index][field] = value
    setColors(temp)
  }

  const handleChangeSize = (index: number, field: string, value: string) => {
    const temp = [...sizes]
    temp[index][field] = value
    setSizes(temp)
  }

  const formik = useFormik({
    initialValues: {
      name: productDetail?.name ?? '',
      price: productDetail?.price ?? '',
      sale_price: productDetail?.sale_price ?? '',
      total_quantity: productDetail?.total_quantity ?? '',
      category: productDetail?.category ?? '',
      brand: productDetail?.brand ?? '',
      description: productDetail?.description ?? '',
      description2: productDetail?.description2 ?? '',
      image_url: productDetail?.image_url ?? '',
      tag: productDetail?.tag ?? '',
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
      image_url: Yup.string(),
      tag: Yup.string()
    }),
    onSubmit: async (values) => {
      try {
        if (params.id) {
          await ProductService.editProduct(params.id, {
            ...values,
            total_quantity: Number(values.total_quantity),
            sale_price: Number(values.sale_price),
            image_url: images.join(',')
          })
          toast.success('Sửa sản phẩm thành công !')
          navigate('/manager/products')
          return
        }
        await ProductService.createProduct({
          ...values,
          total_quantity: Number(values.total_quantity),
          sale_price: Number(values.sale_price),
          image_url: images.join(','),
          options: [
            {
              name: ProductOptionTypeModel.SIZE,
              type: ProductOptionTypeModel.SIZE,
              items: sizes
            },
            {
              name: ProductOptionTypeModel.COLOR,
              type: ProductOptionTypeModel.COLOR,
              items: colors
            }
          ]
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
        const tempImages = [...e.target.files]
        if (tempImages?.length > 9 - images.length) {
          toast.warn('Chỉ có thể upload 9 ảnh cho sản phẩm')
          return
        }
        handleUploadImage(tempImages)
      } catch (err) {}
    }
  }

  const handleUploadImage = async (files: any[]) => {
    try {
      let formData = new FormData()
      Array.from(files).forEach((image) => {
        formData.append('file', image)
      })
      const { url } = await UploadService.upload(formData)
      setImages([...images, ...url])
    } catch (err) {
    }
  }

  const handleRemoveImage = (index: number) => {
    const temp = [...images]
    temp.splice(index, 1)
    setImages(temp)
  }

  return (
    <div className="flex flex-col gap-5">
      <TitleManager title={params.id ? 'Chi tiết sản phẩm' : 'Thêm sản phẩm'} />
      {params.id && (
        <div className="flex flex-col gap-3">
          <p>Các sản phẩm con:</p>
          <Table headerConfigs={HEADERS_PRODUCT} data={productChildren} />
        </div>
      )}
      <div className="flex flex-row gap-x-4 items-end">
        <div className="flex flex-col gap-5">
          <p className="text-_16">Ảnh sản phẩm</p>
          <div className="w-32 h-32 border border-gray-700 rounded-md cursor-pointer flex justify-center items-center" onClick={handleUploadFile}>
            <span>+ {images.length.toString()}/ 9</span>
            <input hidden id="image" accept="image/*" multiple type="file" onChange={onSelectFile} />
          </div>
        </div>
        <div className="flex flex-row gap-x-4">
          {images.map((image, index) => {
            return (
              <div key={index} className="w-32 h-32 border border-gray-700 cursor-pointer relative">
                <img src={image} alt="image" className="w-full h-full" />
                <div className="absolute top-1 right-1" onClick={() => handleRemoveImage(index)}>
                  <ICDelete />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
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
              error={!!(touched?.[input.name] && errors?.[input.name])}
              errorMessage={errors?.[input.name] as string}
            />
          )
        })}
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col gap-5 flex-1">
          <div className="flex flex-row gap-5 items-center">
            <p className="text-_24">Colors:</p>
            {!colors.length && !params.id && <Button className="!h-10 !text-_14" label="Thêm" onClick={() => handleAddRowColor(0)} />}
          </div>
          <div className="flex flex-col gap-5">
            {colors.map((color, index) => {
              return (
                <div key={index} className="flex flex-row gap-10">
                  <div className="flex flex-row gap-5">
                    <TextInput
                      disabled={params.id}
                      label="Tên"
                      value={color.label}
                      onChange={(e) => handleChangeColor(index, 'label', e.target.value)}
                    />
                    <TextInput
                      disabled={params.id}
                      label="Giá trị"
                      value={color.value}
                      onChange={(e) => handleChangeColor(index, 'value', e.target.value)}
                    />
                  </div>
                  {!params.id && (
                    <div className="flex flex-row gap-5 items-end">
                      <Button className="!h-10 !text-_14" label="Thêm" onClick={() => handleAddRowColor(index)} />
                      <Button className="!h-10 !text-_14" label="Xóa" onClick={() => handleRemoveRowColor(index)} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <div className="flex flex-row gap-5 items-center">
            <p className="text-_24">Sizes:</p>
            {!sizes.length && !params.id && <Button className="!h-10 !text-_14" label="Thêm" onClick={() => handleAddRowSize(0)} />}
          </div>
          <div className="flex flex-col gap-5">
            {sizes.map((size, index) => {
              return (
                <div key={index} className="flex flex-row gap-10">
                  <div className="flex flex-row gap-5">
                    <TextInput
                      disabled={params.id}
                      label="Tên"
                      value={size.label}
                      onChange={(e) => handleChangeSize(index, 'label', e.target.value)}
                    />
                    <TextInput
                      disabled={params.id}
                      label="Giá trị"
                      value={size.value}
                      onChange={(e) => handleChangeSize(index, 'value', e.target.value)}
                    />
                  </div>
                  {!params.id && (
                    <div className="flex flex-row gap-5 items-end">
                      <Button className="!h-10 !text-_14" label="Thêm" onClick={() => handleAddRowSize(index)} />
                      <Button className="!h-10 !text-_14" label="Xóa" onClick={() => handleRemoveRowSize(index)} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 mt-10 mx-auto">
        <Button label="Lưu thông tin" onClick={handleSubmit} type="submit" className="!h-12 !text-_18" />
        <Button label="Quay lại" onClick={() => navigate(-1)} type="submit" className="!h-12 !text-_18" />
      </div>
    </div>
  )
}

export default ProductDetail
