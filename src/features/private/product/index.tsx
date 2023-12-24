import { pathsManager } from 'common'
import { Button, Pagination, Table, TitleManager } from 'components'
import { ProductContext } from 'contexts'
import type { HeaderTableModel } from 'models'
import { useContext, useMemo } from 'react'
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
  const { products, productsFilter } = useContext(ProductContext)

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

  return (
    <div>
      <TitleManager title="Quản lý sản phẩm">
        <Button label='Thêm sản phẩm' className="!h-10 !text-_14" onClick={() => navigate('/manager/products/new')} />
      </TitleManager>
      <Table headerConfigs={headerConfigs} data={productsFilter} />
      <Pagination totalItems={products?.length} pageSize={10} />
    </div>
  )
}

export default ProductManagement
