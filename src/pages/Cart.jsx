import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";




const Cart = () => {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="w-[960px] mx-auto ">
      {
        cart.length > 0 ?
          // Product Available in cart
          (<div className="flex gap-x-6 ">
            <div className="p-4 mt-20">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                  // agar hm return nhi likhna chahte h to curly braces ->{} ki jagah  ye->() use krna pdega
                })
              }
            </div>


            {/* Cart Summary wala section/Checkout */}

            <div className="flex flex-col justify-between gap-y-8 w-[450px] h-screen max-h-max fixed top-[50px] right-[100px] ">
              <div className="flex flex-col mt-14 ">
                <div className="text-green-700 text-2xl font-semibold uppercase ">Your Cart</div>
                <div className="text-green-700 text-5xl font-extrabold uppercase">Summary</div>
                <p className="mt-3">
                  <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="flex flex-col mb-20">
                <p className="text-gray-700 font-semibold text-normal">Total Amount <span className="font-bold text-xl">: ${totalAmount.toFixed(3)}</span> </p>
                <button
                  className="border-2 py-2 px-6 mt-1 border-green-500 rounded-md text-white
                 bg-green-600  font-semibold w-full ripple">
                  Checkout Now
                </button>

              </div>

            </div>


          </div>) :


          // Cart Empty wala code 
          (<div className="flex flex-col justify-center items-center  w-full  gap-y-3 h-screen">
            <h1 className="font-semibold"> Your cart is empty!</h1>
            <Link to={"/"} >
              <button
                className="border-2 py-2 px-4 border-green-500 rounded-md text-green-600
              hover:bg-green-600 hover:text-white transition duration-200 "
              >
                Shop Now
              </button>
            </Link>
          </div >
          )
      }
    </div >
  )
};

export default Cart;
