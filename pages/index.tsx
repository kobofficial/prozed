import Image from "next/image";






export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-stone-50">


      <div className="flex flex-row w-full justify-between py-1 bg-stone-200">

        <div className="flex bg-slate-500/20    px-2 m-2 rounded-md">

          <div className="flex bg-slate-500/20    px-2 m-2 rounded-md">
            {/*  */}
          </div>
          <div className="flex bg-slate-500/20    px-2 m-2 rounded-md">
            {/*  */}
          </div>

        </div>

        <div className="flex bg-slate-500/20   py-1 px-12 m-2 rounded-md">
          {/*  */}
        </div>

        <div className="flex bg-slate-500/20   py-1 px-2 m-2 rounded-md">
          {/*  */}
        </div>

      </div>


      <div className="flex flex-row w-full justify-between py-3 ">

        <div className="flex   py-1 px-2 m-2 rounded-md">

          <div className="text-stone-900 font-extrabold text-xl ">Prozed<span className="text-red-800 ml-1">+</span> </div>

        </div>


        <div className="flex flex-row flex-grow items-center justify-end bg-slate-500/20   py-1 px-3 m-2 mx-8 rounded-md">


          {/* SVG search icon*/}
          <div className="text-stone-900  font-semibold  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>

        </div>

        <div className="flex flex-row   gap-2  py-1 px-2 m-2 rounded-md">


          <div className="text-stone-900  font-semibold  ">

            {/* <div className="">sign in</div> */}

            {/* SVG account icon*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

          </div>

          {/* SVG cart icon*/}
          <div className="text-stone-900  font-semibold  ">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>


          </div>


        </div>

      </div>


      {/* The black banner */}
      <div className="flex flex-row w-full justify-around py-1 text-white bg-stone-950 ">


        <div className="flex bg-stone-100   py-1 px-4 m-2 rounded-md">
          {/*  */}
        </div>

        <div className="flex bg-stone-100   py-1 px-4 m-2 rounded-md">
          {/*  */}
        </div>

        <div className="flex bg-stone-100   py-1 px-4 m-2 rounded-md">
          {/*  */}
        </div>


      </div>


      {/* Hero image */}
      <div className="">

        <img src="https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.167/on/demandware.static/-/Sites-GNC2-Library/default/dw8aa950f2/homepage/2024/Q3/Storewide%20BOGO50%20Refresh/2448983_Oct24BOGO50StorewideCreativeRefresh_US_Ecomm_HPH_DSK.jpg?yocs=2c_" alt="" />
      </div>


      {/*  product categories cards */}
      <div className="flex flex-row gap-4 p-5">


        {[1, 2, 3, 4, 5].map((i, j) =>
          <BasicCard  key={j}/>
        )}


      </div>


      {/*  buttons */}
      <div className="flex flex-row gap-4 p-5">


        {["Best Sellers",
          "New & Buzzworthy",
          "Vitamins & Supplements",
          "Protien & Fitness",
          "Food & Drink",
          "Herbs"].map((i) =>


            <div key={i} className="rounded-md border-2 border-stone-900 text-stone-900 font-semibold px-4 py-1 hover:bg-slate-400/10 hover:cursor-pointer">
              {i}
            </div>

          )}


      </div>


    </div>
  );
}




// import React from 'react'

export const BasicCard = () => {
  return (
    <div className="flex-flex-col items-center text-center justify-normal">

      {/* image */}
      <div className="">
        <img className="w-48 " src="https://cdn-fsly.yottaa.net/5b9fc7760b534475fab84ce9/www.gnc.com/v~4b.167/on/demandware.static/-/Sites-GNC2-Library/default/dw99cad102/homepage/2024/Q3/Storewide%20BOGO50%20Refresh/2448983_Oct24BOGO50StorewideCreativeRefresh_US_Ecomm_Scroller_1.jpg?yocs=2c_2f_2g_" alt="" />
      </div>

      {/*  text */}
      <div className="text-stone-950 text-lg font-bold pt-3"> Protien</div>

      {/*  subtext */}
      <div className="text-red-600 text-xs font-extrabold pt-1"> BUY 1, GET 1 50% OFFˇ</div>


    </div>
  )
}

