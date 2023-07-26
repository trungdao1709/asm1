import { addProduct, deleteProduct, fetchProducts, updateProduct } from "@/action/product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";


type Props = {}

const List = (props: Props) => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products } = useSelector((state: any) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    console.log(products);
    
  return (
    <div className='mt-60'>
    <button type="button" 
    onClick={() => dispatch(addProduct({ name: "test", price:"124" }))}
    className="ml-60 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ADD</button>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-40 mr-40">
  
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
            {products.map((item:any) =>{
                return (
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"  key={item.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.name}
                    </th>
                    <td className="px-6 py-4">
                      {item.price}
                    </td>
                    <td className="px-6 py-4">
                      
                      <button type="button"
                      onClick={() => dispatch(deleteProduct(item.id))}
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    
                      <button type="button"
                      onClick={() => dispatch(updateProduct({ name: "test updated", id: item.id , price:"124"}))}
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
                    </td>
                  </tr>
                )
                
            })}
         
  
        </tbody>
      </table>
    </div>
  
  </div>
  )
}
export default List;