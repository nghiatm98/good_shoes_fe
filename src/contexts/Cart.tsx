import { formatNumberDot } from 'common'
import type { CartItemModel, ProductModel } from 'models'
import { ReactNode, createContext, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

interface CartState {
  cart: CartItemModel[]
  handleAddItemCart: (item: ProductModel) => void
  handleRemoveItemCart: (index: number) => void
  handleClearAllCart: () => void
  totalPrice: number | string
  totalQuantity: number
}

export const CartContext = createContext<CartState>({
  cart: [],
  handleAddItemCart: () => {},
  handleRemoveItemCart: () => {},
  handleClearAllCart: () => {},
  totalPrice: 0,
  totalQuantity: 0,
})

interface ICartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: ICartProviderProps) {
  const [cart, setCart] = useState<CartItemModel[]>([])

  const handleAddItemCart = (item: ProductModel) => {
    const temp = [...cart]
    const index = temp.findIndex((cartItem) => {
      return cartItem.id === item.id
    })
    if (index < 0) {
      setCart([
        ...temp,
        {
          ...item,
          qty_ordered: 1
        }
      ])
    } else {
      const newCart = temp.map((cartItem, idx) => {
        if (idx === index)
          return {
            ...cartItem,
            qty_ordered: cartItem.qty_ordered + 1
          }
  
        return cartItem
      })
      setCart(newCart)
    }
    toast.success('Thêm sản phẩm thành công!')
  }

  const handleRemoveItemCart = (index: number) => {
    const temp = [...cart]
    if (temp[index].qty_ordered === 1) {
      temp.splice(index, 1)
      setCart(temp)
      return
    }
    const newCart = temp.map((cartItem, idx) => {
      if (idx === index)
        return {
          ...cartItem,
          qty_ordered: cartItem.qty_ordered - 1
        }

      return cartItem
    })
    setCart(newCart)
  }

  const handleClearAllCart = () => {
    setCart([]) 
  }

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, curr) => acc + ((curr.sale_price ? curr.sale_price : curr.price) as number) * curr.qty_ordered, 0)
  }, [cart])

  const totalQuantity = useMemo(() => {
    return cart.reduce((acc, curr) => acc + curr.qty_ordered, 0)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItemCart,
        handleRemoveItemCart,
        totalPrice,
        totalQuantity,
        handleClearAllCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
