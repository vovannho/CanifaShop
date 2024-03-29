import React, { useState, useEffect } from "react";
import { apiCodeby } from "../../configs/apiCodeby";
import FilterProduct from "../../components/FilterProduct";
import FooterCanifa from "../../components/FooterCanifa";
import HeaderCanifa from "../../components/HeaderCanifa";
import { Link } from "react-router-dom";

const WomenProductList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showList, setShowList] = useState(true);
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //     async function fetchMyAPI() {
  //         const products = await apiCodeby.getData('/products', {search:'sex,Female'})
  //         console.log('products, ', products)
  //         setProducts(products)
  //     }

  //     fetchMyAPI()
  // }, [])
  return (
    <section className="max-w-screen-2xl mx-auto ">
      <HeaderCanifa />
      <p className="px-2 xl:px-20 pt-5 text-xs">
        Trang chủ /Nữ /Danh mục sản phẩm
      </p>
      <section className="xl:flex text-xs px-2 xl:px-20">
        <section className="w-12/12 xl:w-2/12">
          <ul className="space-y-2 sticky top-20">
            <li className="font-bold mt-5 mb-2 cursor-pointer hover:text-red-600">
              Nữ
            </li>
            <Link to="/NewProductWomen">
              <li className="font-bold cursor-pointer hover:text-red-600">
                Sản phẩm mới
              </li>
            </Link>
            <li
              onClick={() => setShowList(!showList)}
              className="font-bold text-red-600 cursor-pointer"
            >
              Danh mục sản phẩm
            </li>
            {showList === true && (
              <div>
                <li className="cursor-pointer hover:text-red-600">Áo phông</li>
                <li className="cursor-pointer hover:text-red-600">Áo Polo</li>
                <li className="cursor-pointer hover:text-red-600">
                  Áo nỉ chui đầu
                </li>
                <li className="cursor-pointer hover:text-red-600">Áo len</li>
                <li className="cursor-pointer hover:text-red-600">Áo sơ mi</li>
                <li className="cursor-pointer hover:text-red-600">Áo khoác</li>
                <li className="cursor-pointer hover:text-red-600">
                  Quần jeans
                </li>
                <li className="cursor-pointer hover:text-red-600">
                  Quần khaki
                </li>
                <li className="cursor-pointer hover:text-red-600">
                  Quần shorts
                </li>
                <li className="cursor-pointer hover:text-red-600">Quần vải</li>
                <li className="cursor-pointer hover:text-red-600">
                  Đồ mặc nhà
                </li>
                <li className="cursor-pointer hover:text-red-600">
                  Quần áo thể thao
                </li>
                <li className="cursor-pointer hover:text-red-600">
                  Áo mặc trong
                </li>
                <li className="cursor-pointer hover:text-red-600">Quần lót</li>
                <li className="cursor-pointer hover:text-red-600">Phụ kiện</li>
                <li className="cursor-pointer hover:text-red-600">
                  Đồ mặc bên trong
                </li>
                <br />
                <li className="font-bold cursor-pointer hover:text-red-600">
                  Sản phẩm đặc biệt
                </li>
                <li className="cursor-pointer hover:text-red-600">
                  Áo khoác gió
                </li>
                <li className="cursor-pointer hover:text-red-600">
                  Chống thấm nước
                </li>
                <li className="cursor-pointer hover:text-red-600">
                  Len lông cừu Úc
                </li>
                <br />
                <li className="font-bold cursor-pointer hover:text-red-600">
                  Hướng dẫn chọn size
                </li>
              </div>
            )}
          </ul>
        </section>
        <section className="w-12/12 xl:w-10/12">
          <img
            className="cursor-pointer w-full "
            src="/assets/images/san-pham-nu-listing.jpg"
            alt="noload"
          ></img>

          <section>
            <section className="text-xs text-gray-700">
              <div className="flex py-2 relative">
                <div
                  className="flex"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <img
                    className="cursor-pointer"
                    src="/assets/images/icon-lookin.svg"
                    alt="noload"
                  ></img>
                  <p className="font-bold ml-3">LỌC SẢN PHẨM</p>
                </div>
                <img
                  className="cursor-pointer absolute right-0"
                  src="/assets/images/load.svg"
                  alt="noload"
                ></img>
              </div>
              {showFilter === true && (
                <div className="grid grid-cols-3 animate__animated  animate__fadeIn animate__delay-2s">
                  <div className="col-span-3 xl:col-span-1 mb-2 border border-gray-200  pb-5 ">
                    <p className="pl-3 bg-gray-200 py-2 font-bold">ĐƠN GIÁ</p>
                    <ul className="space-y-3 mx-5 mt-3">
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          className="w-6 h-6 text-black bg-white mr-2"
                        ></input>
                        0đ-200.000đ
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          className="w-6 h-6 text-black bg-white mr-2"
                        ></input>
                        200.000đ - 400.000đ
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          className="w-6 h-6 text-black bg-white mr-2"
                        ></input>
                        400.000đ - 600.000đ
                      </li>
                      <li className="flex items-center">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          className="w-6 h-6 text-black bg-white mr-2"
                        ></input>
                        600.000đ - 800.000đ
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-3 xl:col-span-1 mb-2 border border-gray-200 pb-5">
                    <p className="pl-3 bg-gray-200 py-2 font-bold">
                      CHỌN KÍCH CỠ
                    </p>
                    <div className="grid grid-cols-5 gap-3 text-center mt-3 mx-5 ">
                      <p className="bg-gray-200">0</p>
                      <p className="bg-gray-200">000</p>
                      <p className="bg-gray-200">XS</p>
                      <p className="bg-gray-200">S</p>
                      <p className="bg-gray-200">M</p>
                      <p className="bg-gray-200">L</p>
                      <p className="bg-gray-200">XL</p>
                      <p className="bg-gray-200">26</p>
                      <p className="bg-gray-200">27</p>
                      <p className="bg-gray-200">28</p>
                      <p className="bg-gray-200">29</p>
                    </div>
                  </div>
                  <div className="col-span-3 xl:col-span-1 mb-2 border border-gray-200 pb-5">
                    <p className="pl-3 bg-gray-200 py-2 font-bold">
                      MÀU SẮC CHÍNH
                    </p>
                    <div className="grid grid-cols-5 gap-3 text-center mt-3 mx-5">
                      <p className="bg-red-500"></p>
                      <p className="bg-yellow-500 border h-6"></p>
                      <p className="bg-yellow-800 border h-6"></p>
                      <p className="bg-yellow-100 border h-6"></p>
                      <p className="bg-yellow-300 border h-6"></p>
                      <p className="bg-green-500 border h-6"></p>
                      <p className="bg-blue-800 border h-6"></p>
                      <p className="bg-blue-500 border h-6"></p>
                      <p className="bg-indigo-500 border h-6"></p>
                      <p className="bg-pink-400 border h-6"></p>
                      <p className="bg-white border h-6"></p>
                      <p className="bg-gray-400 border h-6"></p>
                      <p className="bg-black border h-6"></p>
                      <img
                        className="cursor-pointer border h-6 w-full"
                        src="/assets/images/icon_hoa_tiet.svg"
                        alt="noload"
                      ></img>
                      <img
                        className="cursor-pointer border h-6 w-full"
                        src="/assets/images/icon_ke_ngang-08.svg"
                        alt="noload"
                      ></img>
                      <img
                        className="cursor-pointer border h-6 w-full"
                        src="/assets/images/icon_cham_bi.svg"
                        alt="noload"
                      ></img>
                      <img
                        className="cursor-pointer border h-6 w-full"
                        src="/assets/images/icon-caro.svg"
                        alt="noload"
                      ></img>
                    </div>
                  </div>
                </div>
              )}
            </section>
            <section className="grid grid-cols-2 xl:grid-cols-5 gap-1">
              {/* {products.map((item, key) => ( */}
              <div className=" text-lg col-span-1 text-gray-600">
                <img
                  className="cursor-pointer"
                  src="/assets/images/img-product.jpg"
                  alt="noload"
                ></img>
                <div className="mt-3 mb-5 space-y-1 text-xs">
                  <div className="flex space-x-1">
                    <p className="w-4 h-4 bg-gray-300"></p>
                    <p className="w-4 h-4 bg-red-500"></p>
                    <p className="w-4 h-4 bg-blue-300"></p>
                  </div>
                  {/* <p className="">{item.name}</p> */}
                  <div className="flex">
                    {/* <p className="line-through mr-2">{item.old_price}</p> */}
                    <p className="font-black text-red-600">
                      {/* {item.special_price} */}
                    </p>
                  </div>
                  <p className="text-red-600">Giảm 30%</p>
                </div>
              </div>
              {/* ))} */}
            </section>
          </section>

          <p className="text-center text-gray-700 font-bold text-xl">
            DANH MỤC SẢN PHẨM
          </p>
        </section>
      </section>
      <p className="w-full border-b mt-10"></p>
      <FooterCanifa />
    </section>
  );
};

export default WomenProductList;
