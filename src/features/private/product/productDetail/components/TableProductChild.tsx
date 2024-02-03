import clsx from 'clsx'
import { Button, Input } from 'components'
import type { ProductModel } from 'models'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ProductService } from 'services'
import type { StringDecoder } from 'string_decoder'

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

interface ITableProductChildProps {
  data: ProductModel[]
  parentId: string
}

export const TableProductChild = ({ data = [], parentId = '' }: ITableProductChildProps) => {
    const [dataTable, setDataTable] = useState<ProductModel[]>(data)
  const [changeQuantityValue, setChangeQuantityValue] = useState<(number | string)[]>([])

  useEffect(() => {
    const initValues = data?.map((_) => {
      return ''
    })
    setChangeQuantityValue(initValues)
  }, [data])

  const handleChangeValue = (value: string | number, index: number) => {
    const temp = [...changeQuantityValue]
    temp[index] = value
    setChangeQuantityValue(temp)
  }

  const handleAddQuantity = async(index: number) => {
    try {
        const value = Number(changeQuantityValue[index])
        await ProductService.addQuantity({
            parent_id: parentId,
            quantity: Number(changeQuantityValue[index]),
            product_id: data[index].id
        })
        const temp = [...dataTable]
        temp.splice(index, 1, {
            ...temp?.[index],
            total_quantity: Number(temp?.[index]?.total_quantity) + value
        })
        setDataTable(temp)
        toast.success('Chỉnh sửa thành công!')
    } catch (error) {
        toast.error('Chỉnh sửa thất bại!')
    }
  }

  const handleSubQuantity = async(index: number) => {
    try {
        const value = Number(changeQuantityValue[index])
        if (Number(dataTable[index].total_quantity) < value) {
            toast.error('Số lượng không đủ!')
            return
        }
        await ProductService.subQuantity({
            parent_id: parentId,
            quantity: value,
            product_id: data[index].id
        })
        const temp = [...dataTable]
        temp.splice(index, 1, {
            ...temp[index],
            total_quantity: Number(temp[index].total_quantity) - value
        })
        setDataTable(temp)
        toast.success('Chỉnh sửa thành công!')
    } catch (error) {
        toast.error('Chỉnh sửa thất bại!')
    }
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {HEADERS_PRODUCT.map((header, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3 text-center">
                  {header.label}
                </th>
              )
            })}
            <th align="center">Chỉnh sửa số lượng</th>
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((item: any, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 justify-center items-center"
              >
                {HEADERS_PRODUCT.map((header, idx) => {
                  return (
                    <td key={idx} className={clsx('px-6 py-4 text-center', {})}>
                      <div>{item[header.field]}</div>
                    </td>
                  )
                })}
                <td>
                  <div className="flex flex-row gap-2 justify-center">
                    <Input label="" classNameInput="!h-4 !w-24 !text-black !py-4 !px-2" type="number" value={changeQuantityValue[index] as string} onChange={(e) => handleChangeValue((e.target as HTMLInputElement).value, index)} />
                    <Button label="Tăng" className="!h-8 !text-_14" disabled={!(changeQuantityValue[index] as string)} onClick={() => handleAddQuantity(index)} />
                    <Button label="Giảm" className="!h-8 !text-_14" disabled={!(changeQuantityValue[index] as string)} onClick={() => handleSubQuantity(index)} />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
