import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collections } from "../assets/assets";
import Search from "../components/Search";
import { AppContext } from "../context/AppContext";

const Collections = () => {
  const navigate = useNavigate();
  const { productCategory } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productType, setProductType] = useState("All");
  const {showSearch,search} = useContext(AppContext)

  // Apply both category and product type filters
  const applyFilters = () => {
    let filtered = collections;

    if(search){
      filtered = filtered.filter(
        (product) => product.productName.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (productCategory) {
      filtered = filtered.filter(
        (product) => product.productCategory === productCategory
      );
    }

    if (productType !== "All") {
      filtered = filtered.filter((product) => product.productType === productType);
    }

    setFilteredProducts(filtered);
  };

  // Reapply filters when category or type changes
  useEffect(() => {
    applyFilters();
  }, [productCategory, productType,search]);

  return (
    <div className="sm:w-[90%] sm:mx-auto mx-4 py-8">
      <div>
        {
          showSearch && <Search />
        }
      </div>
      {/* Filter Section */}
      <div className="flex justify-between">
        {/* Filter by Category */}
        
        <div className="sm:flex gap-2 sm:flex-wrap grid grid-cols-2">
          <p
            onClick={() => navigate("/collections")}
            className={`text-xs lg:text-sm px-2 py-1 border cursor-pointer hover:text-white hover:bg-black transition-all duration-300 ${
              !productCategory ? "bg-black text-white" : ""
            }`}
          >
            All
          </p>
          {["Work Attire", "Party Dresses", "Bridal Wear", "Summer Dresses", "Winter Collection", "Casual Wear", "Traditional Wear"].map((category) => (
            <p
              key={category}
              onClick={() =>
                navigate(productCategory === category ? "/collections" : `/collections/${category}`)
              }
              className={`text-xs lg:text-sm px-2 py-1 border cursor-pointer hover:text-white hover:bg-black transition-all duration-300 ${
                productCategory === category ? "bg-black text-white" : ""
              }`}
            >
              {category}
            </p>
          ))}
        </div>

        {/* Filter by Type */}
        <select
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          className="border py-1 px-2 max-h-8 text-sm cursor-pointer"
        >
          <option value="All">All Types</option>
          <option value="kid">Kids</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>

      {/* Products Section */}
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/product/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="border border-gray-600 cursor-pointer group relative"
            >
              <div className="h-[85%] w-full">
                <img
                  className="w-full h-full object-cover"
                  src={item.productImage}
                  alt={item.productName}
                />
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
              <div className="hidden absolute inset-0 group-hover:flex justify-center items-center bg-black bg-opacity-50 transition-all duration-500">
                <p className="text-white font-headingFont border px-4 py-2 hover:bg-white hover:text-black transition-all duration-500">
                  View Product
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Collections;
