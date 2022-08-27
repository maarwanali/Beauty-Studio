import Image from "next/image";
import React from "react";
import landingImg from "../public/averie-woodard-4nulm-JUYFo-unsplash.jpg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
function Landing() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <Image src={landingImg} alt="" layout="fill" objectFit="cover" />
      <div className="absolute top-0 right-0 left-0 bottom-0  bg-pink-400 bg-opacity-40  "></div>
      <div className="mycontainer flex-col-center relative h-[100%] ">
        <div className="flex-col-center">
          <h3 className="text-white font-bold text-xs sm:text-xl md:text-2xl text-opacity-80">
            Отличный сервис по конкурентоспособным ценам
          </h3>
          <p className="text-white font-bold text-xs sm:text-lg md:text-xl text-opacity-80">
            Чего ждете, забронируйте место сейчас
          </p>
          <p className="text-white font-bold text-lg text-opacity-70">
            Ждём вас
          </p>
        </div>
        <IoIosArrowDropdownCircle
          size={30}
          className="text-white animate-bounce mt-10"
        />
      </div>
    </div>
  );
}

export default Landing;
