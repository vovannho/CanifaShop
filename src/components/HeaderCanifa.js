import React, { useState } from "react";
import { FiSearch, } from "react-icons/fi";
import { BiMap,BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";  
import DemoMarquee from "../pages/DemoMarquee";
const HeaderCanifa = () => {
    const [showGT, setShowGT] = useState(false);
    const [showUL2, setShowUL2] = useState(false);
    const [showUL3, setShowUL3] = useState(false);
    const [showUL4, setShowUL4] = useState(false);
    const [showUL5, setShowUL5] = useState(false);
    const [showUL6, setShowUL6] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [showCart, setShowCart] = useState(false);
    function scrollFunction() {
        if (document.body.scrollTop > 6 || document.documentElement.scrollTop > 6) {
            var element = document.getElementById("navbar");
            element.classList.remove("py-6");
            element.classList.add("py-0");
            var element1 = document.getElementById("marquee");
            element1.classList.remove("block");
            element1.classList.add("hidden");
            

        }
        else if  (document.body.scrollTop < 6) {
            var element = document.getElementById("navbar");
            element.classList.remove("py-0");
            element.classList.add("py-6")
            var element1 = document.getElementById("marquee");
            element1.classList.remove("hidden");
            element1.classList.add("block");
        }

    }
    
  return (
    <section className=" sticky top-0 relative z-10">
          
            <div id="navbar" className="flex justify items-center justify-between py-6 relative max-w-screen-2xl mx-20 bg-white">
                <ul className="flex justify items-center space-x-8  text-gray-600 font-normal z-10  ">
                <Link to="/HomeCanifa">
                    <li className="mr-10">
                        <img
                            className=" h-14 cursor-pointer "
                            src="/assets/images/logo-canifa.png" alt="noload">
                        </img>
                    </li>
                </Link>
                    <div className="cursor-pointer"
                    onMouseEnter={()=>setShowGT(true)}
                    onMouseLeave={()=>setShowGT(false)}
                    >   
                    <Link to="/WomenProductList">
                        <a href="" className=" hover:text-red-600 text-sm">N???</a>
                    </Link>
                        <div class= {`absolute left-0 w-full  ${showGT===true ? `` : `hidden`}`} style={{paddingTop:'70px'}}>
                            <div className="grid grid-cols-5  pt-2 text-xs px-28 pb-10 bg-white bg-opacity-90 ">
                                <ul class="">
                                    <li className="py-4 text-gray-700 font-bold "><a href="" className="">H???NG NG??Y</a></li>
                                    <li><a href="" className="">??o ph??ng <a className="text-red-600 ml-1 ">HOT</a></a></li>
                                    <li><a href="" className="">??o s??mi<a className="text-red-600 ml-1 ">HOT</a></a></li>
                                    <li><a href="" className="">??o ch???ng n???ng<a className="text-red-600 ml-1 ">HOT</a></a></li>
                                    <li><a href="" className="">??o ki???u</a></li>
                                    <li><a href="" className="">??o li???n th??n - ?????m</a></li>
                                    <li><a href="" className="">Ch??n v??y</a></li>
                                    <li><a href="" className="">Qu???n jeans<a className="text-red-600 ml-1 ">HOT</a></a></li>
                                    <li><a href="" className="">Qu???n khaki</a></li>
                                    <li><a href="" className="">Qu???n shorts</a></li>
                                    <li><a href="" className="">Qu???n v???i</a></li>
                                    <li><a href="" className="">??o d??i len</a></li>
                                    <li><a href="" className="">??o len</a></li>
                                    <li><a href="" className="">??o n???</a></li>
                                    <li><a href="" className="">??o kho??c</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">M???C NH??</a></li>
                                    <li><a href="" className="">B??? m???c nh??</a></li>
                                    <li><a href="" className="">??o m???c nh??</a></li>
                                    <li><a href="" className="">Qu???n m???c nh??</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">????? M???C B??N TRONG</a></li>
                                    <li><a href="" className="">??o m???c trong</a></li>
                                    <li><a href="" className="">Qu???n l??t</a></li>
                                    <li><a href="" className="">PH??? KI???N</a></li>
                                    <li><a href="" className="">T???t</a></li>
                                    <li><a href="" className="">Ph??? ki???n kh??c</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 text-red-600 font-bold"><a href="" className="">T???T C??? D?????I 149.000??</a></li>
                                </ul>
                                <ul className="">
                                <img
                                    className="cursor-pointer py-4  "
                                    src="/assets/images/spMoi_Nu.jpg" alt="noload">
                                </img>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer"
                    onMouseEnter={()=>setShowUL2(true)}
                    onMouseLeave={()=>setShowUL2(false)}
                    >
                    <Link to="/MenProductList">
                        <a href="" className="hover:text-red-600 text-sm">NAM</a>
                    </Link>
                        <div class={`absolute  w-full left-0 ${showUL2===true ? `` : `hidden`} `}style={{paddingTop:'70px'}}>
                            <div className="grid grid-cols-5  pt-2 px-28 text-xs bg-white bg-opacity-90">
                                <ul class="">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">H???NG NG??Y</a></li>
                                    <li><a href="" className="">??o ph??ng <a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">??o polo</a></li>
                                    <li><a href="" className="">??o s??mi<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">??o ch???ng n???ng<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">Qu???n jeans<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">Qu???n khaki</a></li>
                                    <li><a href="" className="">Qu???n shorts</a></li>
                                    <li><a href="" className="">Qu???n v???i</a></li>
                                    <li><a href="" className="">??o n???</a></li>
                                    <li><a href="" className="">??o len</a></li>
                                    <li><a href="" className="">??o kho??c</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">M???C NH??</a></li>
                                    <li><a href="" className="">B??? m???c nh??</a></li>
                                    <li><a href="" className="">??o m???c nh??</a></li>
                                    <li><a href="" className="">Qu???n m???c nh??</a></li>
                                    <li className="pt-6 text-gray-700 font-bold"><a href="" className="">LUY???N T???P</a></li>
                                    <li><a href="" className="">??o</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">????? M???C B??N TRONG</a></li>
                                    <li><a href="" className="">??o m???c trong</a></li>
                                    <li><a href="" className="">Qu???n s???p</a></li>
                                    <li className="pt-4 text-gray-700 font-bold"><a href="" className="">PH??? KI???N</a></li>
                                    <li><a href="" className="">T???t</a></li>
                                    <li><a href="" className="">Ph??? ki???n kh??c</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 pb-10 text-red-600 font-bold"><a href="" className="">T???T C??? D?????I 149.000??</a></li>
                                </ul>
                                <ul className="">
                                <img
                                    className="cursor-pointer w-10/12 m-6 "
                                    src="/assets/images/spMoi_Nam.jpg" alt="noload">
                                </img>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer"
                    onMouseEnter={()=>setShowUL3(true)}
                    onMouseLeave={()=>setShowUL3(false)}
                    >
                        <Link to="/GirlsProductList">
                        <a href="" className="hover:text-red-600 text-sm">B?? G??I</a>
                        </Link>
                        <div class={`absolute  w-full left-0 ${showUL3===true ? `` : `hidden`} `}style={{paddingTop:'70px'}}>
                            <div className="grid grid-cols-5  pt-2 px-28 text-xs bg-white bg-opacity-90">
                                <ul class="mb-10">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">H???NG NG??Y</a></li>
                                    <li><a href="" className="">??o ph??ng <a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">??o s??mi<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">??o ch???ng n???ng<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">V??y li???n</a></li>
                                    <li><a href="" className="">Ch??n v??y</a></li>
                                    <li><a href="" className="">Qu???n jeans<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">Qu???n khaki</a></li>
                                    <li><a href="" className="">Qu???n shorts<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">Qu???n v???i</a></li>
                                    <li><a href="" className="">??o d??i len</a></li>
                                    <li><a href="" className="">??o n???</a></li>
                                    <li><a href="" className="">??o len</a></li>
                                    <li><a href="" className="">??o kho??c</a></li>
                                </ul>
                                <ul className="mb-10">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">M???C NH??</a></li>
                                    <li><a href="" className="">B??? m???c nh??<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">??o m???c nh??</a></li>
                                    <li><a href="" className="">Qu???n m???c nh??</a></li>
                                    <li className="pt-6 text-gray-700 font-bold"><a href="" className="">LUY???N T???P</a></li>
                                    <li><a href="" className="">??o</a></li>
                                    <li><a href="" className="">Qu???n</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">????? M???C B??N TRONG</a></li>
                                    <li><a href="" className="">??o m???c trong</a></li>
                                    <li><a href="" className="">Qu???n l??t</a></li>
                                    <li><a href="" className="">PH??? KI???N</a></li>
                                    <li><a href="" className="">T???t</a></li>
                                    <li><a href="" className="">Ph??? ki???n kh??c</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 text-red-600 font-bold"><a href="" className="">T???T C??? D?????I 149.000??</a></li>
                                </ul>
                                <ul className="">
                                <img
                                    className="cursor-pointer w-10/12 m-6"
                                    src="/assets/images/spMoi_Girlbaby.jpg" alt="noload">
                                </img>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="cursor-pointer"
                    onMouseEnter={()=>setShowUL4(true)}
                    onMouseLeave={()=>setShowUL4(false)}
                    >
                        <Link to="/BoyProductList">
                        <a href="" className="group-hover:text-red-600 text-sm">B?? TRAI</a>
                        </Link>
                        <div class={`absolute  w-full left-0 ${showUL4===true ? `` : `hidden`} `}style={{paddingTop:'70px'}}>
                            <div className="grid grid-cols-5  pt-2 px-28 text-xs bg-white bg-opacity-90">
                                <ul class="">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">H???NG NG??Y</a></li>
                                    <li><a href="" className="">??o ph??ng <a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">??o polo</a></li>
                                    <li><a href="" className="">??o s??mi</a></li>
                                    <li><a href="" className="">??o ch???ng n???ng<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">Qu???n jeans<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">Qu???n khaki</a></li>
                                    <li><a href="" className="">Qu???n shorts<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">Qu???n v???i</a></li>
                                    <li><a href="" className="">??o n???</a></li>
                                    <li><a href="" className="">??o len</a></li>
                                    <li><a href="" className="">??o kho??c</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">M???C NH??</a></li>
                                    <li><a href="" className="">B??? m???c nh??<a className="text-red-600 ml-1 font-bold">HOT</a></a></li>
                                    <li><a href="" className="">??o m???c nh??</a></li>
                                    <li><a href="" className="">Qu???n m???c nh??</a></li>
                                    <li className="pt-4 text-gray-700 font-bold"><a href="" className="">LUY???N T???P</a></li>
                                    <li><a href="" className="">??o</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 text-gray-700 font-bold"><a href="" className="">????? M???C B??N TRONG</a></li>
                                    <li><a href="" className="">??o m???c trong</a></li>
                                    <li><a href="" className="">Qu???n s???p</a></li>
                                    <li className="pt-6 text-gray-700 font-bold"><a href="" className="">PH??? KI???N</a></li>
                                    <li><a href="" className="">T???t</a></li>
                                    <li><a href="" className="">Ph??? ki???n kh??c</a></li>
                                </ul>
                                <ul className="">
                                    <li className="py-4 text-red-600 font-bold"><a href="" className="">T???T C??? D?????I 149.000??</a></li>
                                </ul>
                                <ul className="">
                                <img
                                    className="cursor-pointer my-4 mb-10 "
                                    src="/assets/images/spMoi_Boybaby.jpg" alt="noload">
                                </img>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer"
                    onMouseEnter={()=>setShowUL5(true)}
                    onMouseLeave={()=>setShowUL5(false)}>
                        <a href="" className="text-red-600 text-sm">M???I</a>
                        <div class={`absolute  w-full left-0 ${showUL5===true ? `` : `hidden`} `}style={{paddingTop:'70px'}}>
                            <div className="grid grid-cols-5 gap-1 pt-6 px-24 text-xs bg-white bg-opacity-90">
                                <ul className="group">
                                    <li className="pb-4 text-gray-700 font-bold group-hover:text-red-600"><a href="" className="">N??? </a></li>
                                    <img
                                        className="cursor-pointer"
                                        src="/assets/images/Nu_SS2021.png" alt="noload">
                                    </img>
                                </ul>
                                <ul className="group">
                                    <li className="pb-4 text-gray-700 font-bold group-hover:text-red-600"><a href="" className="">NAM</a></li>
                                    <img
                                        className="cursor-pointer"
                                        src="/assets/images/Nam_SS2021.jpg" alt="noload">
                                    </img>
                                </ul>
                                <ul className="group">
                                    <li className="pb-4 text-gray-700 font-bold group-hover:text-red-600"><a href="" className="">B?? TRAI</a></li>
                                    <img
                                        className="cursor-pointer"
                                        src="/assets/images/beTrai_SS2021.png" alt="noload">
                                    </img>
                                </ul>
                                <ul className="group">
                                    <li className="pb-4 text-gray-700 font-bold group-hover:text-red-600"><a href="" className="">B?? G??I</a></li>
                                    <img
                                        className="cursor-pointer"
                                        src="/assets/images/beGai_SS2021.png" alt="noload">
                                    </img>
                                </ul>
                                <ul className="group">
                                <li className="pb-4 text-gray-700 font-bold group-hover:text-red-600"><a href="" className="">BST ??O PH??NG GIA ????NH</a></li>
                                <img
                                    className="cursor-pointer mb-10"
                                    src="/assets/images/bst-ao-phong-mege-menu.jpg" alt="noload">
                                </img>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <Link to="/PriceGoodProductList">
                    <div className="text-red-600 cursor-pointer text-sm">
                        GI?? T???T
                    </div>
                    </Link>
                    <div
                    onMouseEnter={()=>setShowUL6(true)}
                    onMouseLeave={()=>setShowUL6(false)}
                    >
                        <a href="" className="text-red-600 text-sm">GI???M GI??</a>
                        <div class={`absolute  w-full left-0 ${showUL6===true ? `` : `hidden`} `}style={{paddingTop:'70px'}}>
                            <div className="flex pt-8 px-24 text-xs bg-white bg-opacity-90">
                                <ul class="mb-10 w-2/12">
                                    <li className="pb-4 text-gray-700 font-bold"><a href="" >GI?? M???I</a></li>
                                    <li><a href="" className="cursor-pointer hover:text-red-600">N??? </a></li>
                                    <li><a href="" className="cursor-pointer hover:text-red-600">Nam </a></li>
                                    <li><a href="" className="cursor-pointer hover:text-red-600">B?? G??i </a></li>
                                    <li><a href="" className="cursor-pointer hover:text-red-600">B?? Trai </a></li>
                                </ul>
                                <ul className="mb-10 w-2/12">
                                    <li className="pb-4 text-red-600 font-bold"><a href="" className="cursor-pointer">S??N ??U ????I 99K</a></li>
                                    <li className="pb-4 text-red-600 font-bold"><a href="" className="cursor-pointer">S??N ??U ????I 149K</a></li>
                                    <li className="pb-4 text-red-600 font-bold"><a href="" className="cursor-pointer">S??N ??U ????I 249K</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ul>
                <ul className="flex text-2xl space-x-5 text-gray-600"
                >
                    <li className="flex">
                        <input 
                        placeholder ="T??m ki???m"
                        name="fname"
                        className="border text-xs w-80 h-6 pl-3 border-black outline-none"
                        />
                        <FiSearch
                        className="cursor-pointer"
                        />
                    </li>
                    <Link to="/StoreCanifa">
                    <li>
                        <BiMap
                        className="cursor-pointer"
                        />
                    </li>
                    </Link>
                    <li>
                        <BiUser
                        className="cursor-pointer"
                        onClick={() =>
                            setShowUser(!showUser)
                          }
                        />
                        {showUser===true && (
                        <list className="absolute w-52 text-sm bg-white space-y-2 mt-3 py-2 pl-2 pr-4 right-11 shadow-xl">
                            <p className="font-bold ">B???n ???? c?? t??i kho???n?</p>
                            <div className="flex cursor-pointer">
                                <Link to="/LoginCanifa">
                                    <p className="cursor-pointer">????ng nh???p / </p>
                                </Link>
                                <Link to="">
                                    <p className="cursor-pointer">????ng k??</p>
                                </Link>
                            </div>
                            <Link to="/LoginCanifa">
                            <p className="cursor-pointer py-2">B???n qu??n m???t kh???u ?</p>
                            </Link>
                        </list>
                        )}
                    </li>
                    <li>
                        <img
                             onClick={() =>
                                setShowCart(!showCart)
                              }
                            className="cursor-pointer pr-3" 
                            src="/assets/images/img-cart.svg" alt="noload">
                        </img>
                       
                        {showCart===true && (
                        <list className="absolute w-4/12 text-xs text-center mt-3 py-10 bg-white right-0 shadow-xl">
                            <p>B???n ch??a c?? s???n ph???m n??o trong gi??? h??ng.</p>
                            <Link to="/HomeCanifa">
                            <button 
                                className="border-2 w-11/12 py-1 border-gray-700 font-bold mt-20 ">
                                TI???P T???C MUA
                            </button>
                            </Link>
                        </list>
                        )}
                    </li>
                </ul>
            {/* <p className="bg-gray-700 h-8 text-gray-300 justify-center flex items-center text-sm relative">
                Th??m v??o gi??? h??ng 499.000?? ????? mi???n ph?? v???n chuy???n
            </p> */}
        </div>
        <div id="marquee" 
        className="bg-gray-700 h-7 px-2 text-gray-300 justify-center flex items-center text-sm 2xl:mx-20 sm:mx-0">
            <DemoMarquee/>
        </div>
        {
                window.onscroll = function() {scrollFunction()}
            }
    </section>
  );
}
export default HeaderCanifa;
