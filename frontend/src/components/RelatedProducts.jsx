import React, {  useEffect, useState } from 'react'
import { collections } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const RelatedProducts = ({productCategory}) => {
    const navigate = useNavigate()
    const [related,setRelated] = useState([])
    useEffect(()=>{
        if(collections.length>0){
            let productsCopy = collections.slice()
            productsCopy = productsCopy.filter((item)=>productCategory===item.productCategory)
            
            setRelated(productsCopy.slice(0,5))
        }
    },[collections])
  return (
    <div>
        <h1 className='text-center text-3xl font-cursiveFont font-semibold'>Related Products</h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 sm:mx-auto mx-4 sm:w-[90%] gap-4 mt-8">
        {related.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/collections/${item._id}`);
              window.scrollTo(0, 0);
            }}
            className="border border-gray-600 cursor-pointer group relative"
          >
            <div className="h-[85%] w-full">
              <img className="w-full h-full " src={item.productImage} alt="" />
            </div>
            <div className="p-2">
              <p className="font-headingFont sm:text-base text-sm font-medium w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {item.productName}
              </p>
              <div className="flex gap-4">
                <p className="line-through text-gray-400">
                  Rs.{item.productPrice}
                </p>
                <p className="text-red-600 font-semibold">
                  Rs.{item.productOfferPrice}
                </p>
              </div>
            </div>
            <div className="hidden absolute inset-0 group-hover:flex justify-center items-center bg-black bg-opacity-50 transition-all duration-500 ">
              <p className="text-white font-headingFont border px-4 py-2 hover:bg-white hover:text-black transition-all duration-500">
                View Product
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
