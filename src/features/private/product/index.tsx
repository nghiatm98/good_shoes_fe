import { NUMBER_OF_PAGE, pathsManager } from 'common'
import { Button, Pagination, Table, TitleManager } from 'components'
import type { HeaderTableModel, ProductModel, ProductParamsModel } from 'models'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductService } from 'services'
import qs from 'query-string'
import { ProductContext } from 'contexts'
import { toast } from 'react-toastify'

const HEADERS_ORDER = (handleSeeMore: (id: number | string) => void, handleDeleteProduct: (id: number | string) => void): HeaderTableModel[] => [
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
  const { products: productList } = useContext(ProductContext)
  const [products, setProducts] = useState<ProductModel[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const onGetProducts = async (params: ProductParamsModel = {}) => {
    try {
      setLoading(true)
      const { items } = await ProductService.getProducts({ params: {
        ...params
      } })
      setProducts(items)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    onGetProducts()
  }, [])

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
    return HEADERS_ORDER(handleNavigateEdit, handleDeleteProduct)
  }, [])

  const queryParam = qs.parse(location.search)
  const page = Number(queryParam?.page) || 1

  useEffect(() => {
    onGetProducts({
      page,
      limit: NUMBER_OF_PAGE
    })
  }, [page])

  return (
    <div>
      <TitleManager title="Quản lý sản phẩm">
        <Button label='Thêm sản phẩm' className="!h-10 !text-_14" onClick={() => navigate('/manager/products/new')} />
      </TitleManager>
      <Table headerConfigs={headerConfigs} data={products} loading={loading} />
      <Pagination totalItems={productList?.length} pageSize={20} />
    </div>
  )
}

export default ProductManagement
