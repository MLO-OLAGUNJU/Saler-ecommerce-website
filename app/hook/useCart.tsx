import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";

import { CartProductType } from "../product/[productId]/ProductDetails";

type CartContextType = {
  cartTotalAmount: number;
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [PropName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  console.log("qty", cartTotalQty);
  console.log("amount", cartTotalAmount);

  useEffect(() => {
    const cartItems: any = localStorage.getItem("Salerbymlo");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);

    setCartProducts(cProducts);
  }, []);

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.qauntity;
            acc.total += itemTotal;
            acc.qty += item.qauntity;

            return acc;
          },
          {
            total: 0,
            qty: 0,
          }
        );

        setCartTotalQty(qty);
        setCartTotalAmount(total);
      }
    };
    getTotals();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }

      toast.success("You have successfully added a new product from your cart");
      localStorage.setItem("Salerbymlo", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      //let updatedCart;
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });

        setCartProducts(filteredProducts);
        toast.success("You have successfully removed a product from your cart");
        localStorage.setItem("Salerbymlo", JSON.stringify(filteredProducts));
      }
    },
    [cartProducts]
  );

  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      if (product.qauntity === 99) {
        return toast.error(
          "You have reached the maximum number of quantity for this product"
        );
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].qauntity = ++updatedCart[existingIndex]
            .qauntity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("Salerbymlo", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      if (product.qauntity === 1) {
        return toast.error(
          "You have reached the minimum number of quantity for this product"
        );
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].qauntity = --updatedCart[existingIndex]
            .qauntity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("Salerbymlo", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
<<<<<<< HEAD
    toast.success("Your cart has been cleared successfully");
    localStorage.setItem("Salerbymlo", JSON.stringify(null));
=======

    localStorage.setItem("SalerCartItems", JSON.stringify(null));
>>>>>>> df9f436bbe5c534c165dc9c71e1271c40e987bde
  }, [cartProducts]);

  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within the CartContextProvider");
  }
  return context;
};
