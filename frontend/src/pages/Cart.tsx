import { FC } from "react";
import { IoClose } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const Cart: FC = () => {
  const {
    products,
    cart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  } = useCart();

  return (
    <section className="py-4 px-2 w-full xl:max-w-7xl xl:mx-auto">
      {getTotalCartItems() === 0 ? (
        <div className="flex items-center justify-center mt-20">
          <h2 className="text-neutral-500 text-3xl">Your cart is empty.</h2>
        </div>
      ) : (
        <>
          <div className="cart-container-format mt-6 text-lg font-semibold">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr className="h-[3px] bg-[#e2e2e2] border-0" />
          {products.map((product) => {
            if (cart[product.id] > 0) {
              return (
                <div key={product.id}>
                  <div className="cart-container-format text-base font-normal">
                    <img
                      src={product.image}
                      alt=""
                      className="carticon-product-icon h-16"
                    />
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <button className=" border-2 border-[#ebebeb] bg-white">
                      {cart[product.id]}
                    </button>
                    <p>${product.price * cart[product.id]}</p>
                    <div className="flex items-center justify-center cursor-pointer">
                      <IoClose
                        size={22}
                        onClick={() => removeFromCart(product.id)}
                      />
                    </div>
                  </div>

                  <hr />
                </div>
              );
            }

            return null;
          })}
          <div className="cartItems-down flex my-[100px]">
            <div className="cartItems-total flex-1 flex flex-col mr-[200px] gap-5">
              <h1 className="text-2xl font-semibold">Cart Total</h1>

              <div>
                <div className="cart-total-item flex justify-between py-[15px]">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>

                <hr />

                <div className="cart-total-item flex justify-between py-[15px]">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>

                <hr />

                <div className="cart-total-item flex justify-between py-[15px] font-semibold">
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
              </div>

              <button className="w-[262px] h-[58px] outline-none border-none bg-[#FFAE5D] text-base font-semibold cursor-pointer">
                Proceed to Checkout
              </button>
            </div>

            <div className="cartItems-promocode flex-1 text-base font-medium">
              <p className="text-[#555]">
                If you have a promo code, Enter it here
              </p>

              <div className="cartItems-promobox w-[504px] h-[58px] flex justify-between bg-[#eaeaea] mt-4 pl-[20px] ">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="border-none outline-none bg-transparent text-base w-[330px] h-[58px]"
                />
                <button className="w-[150px] h-[58px] cursor-pointer text-base bg-black text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </section>
  );
};

export default Cart;
