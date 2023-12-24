import { PriceFilter, SwitchButton } from 'components';
import { ProductContext } from 'contexts';
import { useNavigateWithQueryParams } from 'hooks';
import { useContext, useEffect, useState } from 'react';
import { Select } from './Select';

const MIN_PRICE_DEFAULT = 0;
const MAX_PRICE_DEFAULT = 20000000;
const STEP_PRICE_DEFAULT = 100000;

export const FilterProduct = () => {
  const { categoriesRouter, brandsRouter } = useContext(ProductContext)
  const { handleChangeQuery, queryParam } = useNavigateWithQueryParams()
  const [minPriceChoose, setMinPriceChoose] = useState(MIN_PRICE_DEFAULT)
  const [maxPriceChoose, setMaxPriceChoose] = useState(MAX_PRICE_DEFAULT)

  const onChangeFilterPrice = ({ min, max }: any) => {
    setMinPriceChoose(Number(min))
    setMaxPriceChoose(Number(max))
  }

  useEffect(() => {
    setMaxPriceChoose(Number(queryParam.max_price))
    setMinPriceChoose(Number(queryParam.min_price))
  }, [])

  const onSearch = () => {
    handleChangeQuery([
      {
        field: 'min_price',
        path: '/products',
        value: minPriceChoose
      },
      {
        field: 'max_price',
        path: '/products',
        value: maxPriceChoose
      }
    ])
  }

  return (
    <div className="flex flex-row gap-10 items-center">
      <SwitchButton label="In stock only" />
      <PriceFilter
        type="price"
        title="Giá"
        minValue={minPriceChoose}
        maxValue={maxPriceChoose}
        min={MIN_PRICE_DEFAULT}
        max={MAX_PRICE_DEFAULT}
        step={STEP_PRICE_DEFAULT}
        onChange={onChangeFilterPrice}
        onSearch={onSearch}
      />
      <Select label="Danh mục sản phẩm" list={categoriesRouter} field="category" />
      <Select label="Thương hiệu" list={brandsRouter} field="brand" />
    </div>
  )
}
