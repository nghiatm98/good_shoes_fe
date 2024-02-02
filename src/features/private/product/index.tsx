import { pathsManager } from 'common'
import { Button, Input, Pagination, Table, TitleManager } from 'components'
import { ProductContext } from 'contexts'
import { useNavigateWithQueryParams } from 'hooks'
import type { HeaderTableModel } from 'models'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ProductService } from 'services'

const HEADERS_PRODUCT = (handleSeeMore: (id: number | string) => void, handleDeleteProduct: (id: number | string) => void): HeaderTableModel[] => [
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
  },
  {
    label: 'Xem chi tiết',
    field: '',
    actions: [
      {
        label: 'Xem',
        onClick: handleSeeMore
      },
      {
        label: 'Xóa sản phẩm',
        onClick: handleDeleteProduct
      }
    ]
  }
]

const ProductManagement = () => {
  const navigate = useNavigate()
  const { handleChangeQuery, queryParam } = useNavigateWithQueryParams()
  const [searchValue, setSearchValue] = useState(queryParam?.search ?? '')
  const { products, productsFilter, onGetAllProducts, onGetProducts } = useContext(ProductContext)

  const handleNavigateEdit = (id: string | number) => {
    navigate(pathsManager.products.detail(id.toString()))
  }

  const handleDeleteProduct = async (id: string | number) => {
    try {
      await ProductService.deleteProduct(id)
      toast.success('Xóa sản phẩm thành công!')
    } catch (error) {
      toast.error('Xóa sản phẩm thất bại!')
    }
  }

  const headerConfigs = useMemo(() => {
    return HEADERS_PRODUCT(handleNavigateEdit, handleDeleteProduct)
  }, [])

  const handleSearch = async (e: any) => {
    e?.stopPropagation()
    if (e.key === 'Enter') {
      handleChangeQuery([
        {
          field: 'search',
          path: '/manager/products',
          value: searchValue
        }
      ])
      onGetProducts(queryParam)
      onGetAllProducts(queryParam)
    }
  }

  useEffect(() => {
    onGetProducts(queryParam)
    onGetAllProducts(queryParam)
  }, [])

  return (
    <div>
      <TitleManager title="Quản lý sản phẩm">
        <Button label="Thêm sản phẩm" className="!h-10 !text-_14" onClick={() => navigate('/manager/products/new')} />
      </TitleManager>
      <div className="mb-5">
        <Input
          label="Tìm kiếm sản phẩm"
          value={searchValue}
          onKeyDown={handleSearch}
          onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)}
        />
      </div>
      <Table headerConfigs={headerConfigs} data={productsFilter} />
      <Pagination totalItems={products?.length} pageSize={10} />
    </div>
  )
}

export default ProductManagement
