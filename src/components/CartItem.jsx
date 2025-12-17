import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";



const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex  items-center gap-x-10  mb-10 border-b-2 border-b-gray-500 py-8 ">

      <div>
        <img src={item.image} alt="pic" className="h-[177px] w-[150px]" />
      </div>

      <div className="flex flex-col gap-y-4 w-[400px] px-4 box-border">
        <h1 className="font-semibold">{item.title}</h1>
        <h1 className="text-gray-700">{item.description.split(" ").splice(0, 15).join(" ") + ("...")}</h1>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-green-600">${item.price}</p>
          <div className="flex items-center gap-2">
          <p className="text-gray-400 text-sm font-semibold">Remove item</p>
          <div
          className="bg-red-200 p-3 rounded-full cursor-pointer"
          onClick={removeFromCart}
          >
             <MdDelete className="text-red-700" />

          </div>
          </div>
          

        </div>

      </div>

    </div>
  );
};

export default CartItem;
