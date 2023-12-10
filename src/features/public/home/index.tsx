import { AboutUs, ProductSuggestion, RegisterPromotion } from 'components'
import { ProductContext } from 'contexts'
import { useContext } from 'react'
import { BannerSlider, OutstandingProduct, SearchUs, TopProduct } from './components'

const HomePage = () => {
  const { products } = useContext(ProductContext)
  return (
    <div>
      <BannerSlider />
      <OutstandingProduct products={products} />
      <ProductSuggestion label="Mới Lên kệ!" products={products} />
      <TopProduct products={products} />
      <SearchUs />
      <AboutUs />
      <RegisterPromotion />
    </div>
  )
}

export default HomePage
