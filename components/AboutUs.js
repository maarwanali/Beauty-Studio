import React from "react";
import Image from "next/image";
import image1 from "../public/aboutImgs/Screenshot 2022-08-24 185301.png";

import image2 from "../public/aboutImgs/Screenshot 2022-08-24 185409.png";

import image3 from "../public/aboutImgs/Screenshot 2022-08-24 185515.png";

import image4 from "../public/aboutImgs/Screenshot 2022-08-24 185637.png";
function AboutUs() {
  return (
    <div
      id="about-us"
      className="w-[100vw] border-b-2 border-slate-600 border-opacity-10  shadow-sm shadow-white "
    >
      <div className="mycontainer  flex flex-col justify-between items-center">
        <h2 className="main-title">О нас</h2>
        <div className="flex  justify-center items-center mb-20  flex-col lg:flex-row lg:justify-between">
          <div className=" flex  mb-7 ">
            <div className="bg-black flex flex-col">
              <Image
                src={image1}
                alt=""
                width="150px"
                height="150px"
                className="opacity-80"
              />
              <Image
                src={image2}
                alt=""
                width="150px"
                height="150px"
                className="opacity-80"
              />
            </div>
            <div className="bg-black flex flex-col">
              <Image
                src={image3}
                alt=""
                width="150px"
                height="150px"
                className="opacity-80"
              />
              <Image
                src={image4}
                alt=""
                width="150px"
                height="150px"
                className="opacity-80"
              />
            </div>
          </div>

          <div className="opacity-70 w-[100%] md:w-[50%] mb-[30px] text-sm sm:text-base">
            <p className="font-bold text-lg uppercase "> Почему rocky ?.</p>{" "}
            Sonu Haircut offers a full range of salon treatments and styling
            services provided by a team of professional stylists, all in a clean
            environment. We carry high quality professional hair products
            designed to ensure our guests look their best, both in the salon and
            at home.
          </div>
        </div>
        <div></div>
        <div className="flex  justify-center items-center mb-20  flex-col lg:flex-row lg:justify-between">
          <div className="opacity-70 w-[100%] md:w-[50%] mb-[30px] text-sm sm:text-base">
            <p className="font-bold text-lg uppercase ">о rocky..</p> Enhancing
            beauty since 1997, Sonu Haircut has developed a familiar and
            reliable industry brand. We are Surrey and Delta &apos;s go-to
            beauty salon for waxing, Laser,Dermalase facials threading, hair
            styling, make-up and all kind Bridal and Non Bridal services, and so
            much more. We do all kind Home Services for Bridal. Rest assured you
            will walk out of Sonu Haircut feeling confident, looking beautiful,
            and party ready.
          </div>

          <div className="bg-black sticky top-0 rounded-xl hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1614438865362-9137f7e3036e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
              width="500px"
              height="400px"
              className="opacity-70 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
