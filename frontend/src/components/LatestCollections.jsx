import React from "react";
import { collections } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const LatestCollections = () => {
  const navigate = useNavigate();
  return (
    <div className="py-12">
      {/* Title */}
      <div id="our-collections" className="text-center">
        <h1 className="font-cursiveFont sm:text-5xl text-4xl ">
          Latest Collections
        </h1>
        <p className="font-headingFont mt-2 sm:text-base text-sm">
          Explore the Finest in Traditional Fashion with Our Newest Collection
        </p>
      </div>
      {/* Display Products */}
      <div  className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:mx-auto mx-4 sm:w-[90%] gap-4 mt-8">
        {collections.slice(0, 10).map((item, index) => (
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
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button onClick={()=>{navigate('/collections'); window.scrollTo(0,0)}} className="px-4 py-2 border text-gray-400 hover:px-6 transition-all duration-300 text-sm">VIEW ALL COLLECTIONS</button>
      </div>
    </div>
  );
};

export default LatestCollections;
