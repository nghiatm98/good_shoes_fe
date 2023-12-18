import { ICCartEmpty } from 'assets'
import { Button } from 'components/button'
import { Slider } from 'components/slider'
import { CartContext, ProductContext } from 'contexts'
import { useContext } from 'react'
import { EffectFade } from 'swiper/modules'
import { CardItem } from './CardItem'
import { CardProductSuggestion } from './CardProductSuggestion'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const navigate = useNavigate()
  const { products } = useContext(ProductContext)
  const { cart, totalPrice, totalQuantity } = useContext(CartContext)
  return (
    <div className="absolute flex flex-col items-center top-full right-0 h-0 overflow-x-hidden transition-all duration-500 rounded-xl group-hover:h-[80vh] w-[400px] group-hover:p-5 bg-white text-black whitespace-nowrap shadow-xl">
      {cart?.length ? (
        <>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row gap-4 items-center">
              <span className="font-semibold leading-[19.2px]">Giỏ hàng</span>
              <div className="font-gilroy text-white w-5 h-5 rounded-[50%] bg-black flex justify-center items-center">{totalQuantity}</div>
            </div>
            {/* <div className="flex flex-col gap-4">
              <span className="text-_14">
                Mua thêm <b>341.000₫</b> để được miễn phí vận chuyển
              </span>
              <div className="rounded-[1px] h-0.5 bg-_d9d w-full relative">
                <div className="rounded-[1px] h-0.5 bg-black w-4/5 absolute top-0 left-0"></div>
              </div>
            </div> */}
          </div>
          <div className="my-6 h-[calc(80vh_-_300px)] flex flex-col gap-5 text-_14 w-full">
            <div className="flex flex-col gap-y-3 ">
              {cart.map((product, index) => {
                return <CardItem key={product.id} detail={product} index={index} />
              })}
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold">Thường mua thêm</p>
              <div>
                <Slider
                  list={products.map((product) => {
                    return <CardProductSuggestion key={product.id} detail={product} />
                  })}
                  spaceBetween={20}
                  modules={[EffectFade]}
                />
              </div>
            </div>
          </div>
          <div className="py-6 flex flex-col gap-y-12 w-full">
            <div className="h-[1px] bg-_d9d w-[calc(100%_+_48px)] -translate-x-6"></div>
            <div className="flex flex-row justify-between font-semibold">
              <span>Tổng</span>
              <span>{totalPrice} VNĐ</span>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <Button label="Thanh toán" className="!h-12 !text-_12" onClick={() => navigate('/payment')} />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-y-4 justify-center items-center h-full">
          <div className="relative flex justify-center items-center">
            <ICCartEmpty />
            <span className="absolute bottom-1.5">0</span>
          </div>
          <span>Không có hàng trong giỏ</span>
          <Button label="Tiếp tục mua hàng" className="!text-_12 !h-12" onClick={() => navigate('/products')} />
        </div>
      )}
    </div>
  )
}
