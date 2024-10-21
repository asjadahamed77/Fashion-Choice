import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { collections } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const CollectionDetails = () => {
  const navigate = useNavigate()
  const {productId} = useParams()
  const [productData,setProductData] = useState(false)
 

  const fetchProductData = async ()=> {
    collections.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        return null
      }
    })
}


useEffect(()=>{
fetchProductData()
},[productId,collections])
  return productData && (
    <div className='sm:w-[90%] sm:mx-auto mx-4 flex xl:flex-row flex-col py-12'>
      {/* Left Side */}
      <div className=''>
      <div className='flex sm:items-start items-center flex-col sm:flex-row gap-8 '>
      {/* Left Image */}
      <div className='w-[350px] mx-auto sm:mx-0 '>
      <img className='object-cover' src={productData.productImage} alt="" />
      </div>
      {/* Right Details */}
      <div className='flex flex-col gap-4 w-[350px] mx-auto'>
        <h1 className='font-headingFont text-lg font-semibold'>{productData.productName}</h1>
        <div className='flex gap-6'>
        <p className='text-gray-700'>{productData.productCategory}</p>
        <p className='uppercase text-gray-400 rounded-full border text-xs px-2 py-0.5'>{productData.productType}</p>
        </div>
        <p className='w-[85%] text-gray-500'>{productData.productDescription}</p>
        <div>
          <p className='line-through text-gray-500 text-lg'>Price: Rs.{productData.productPrice}</p>
          <p className='text-red-600 font-bold text-lg mt-1'>Offer Price: Rs.{productData.productOfferPrice}</p>
        </div>
      </div>
      </div>
      {/* Related Products */}
      <div className='mt-8'>
    <RelatedProducts productCategory={productData.productCategory} />
      </div>
      </div>
      {/* Right Side */}
     
      {/* Collections */}
     <div className='sm:px-10 px-2 sm:min-w-[500px]'>
    <h1 className='text-center xl:mt-0 mt-12 mb-8 font-cursiveFont text-3xl font-semibold'>More Collections</h1>
     <div className='grid xl:grid-cols-2 lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4  '>
      
      {
        collections.slice(0,10).map((item,index)=>(
          <div
          key={index}
          onClick={() => {
            navigate(`/product/${item._id}`);
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
            <div className="flex gap-4 mb-12">
              <p className="line-through text-gray-400 sm:text-base text-sm">
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
        ))
      }
    </div>
     </div>
     
    </div>
  )
}

export default CollectionDetails
