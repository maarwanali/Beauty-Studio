import React from "react";
import Image from "next/image";

function WorkTime() {
  return (
    <div className="w-[100%] my-7 hidden md:block py-5 bg-pink-400 bg-opacity-40  relative">
      <div className="absolute top-0 right-0 left-0 bottom-0 h-[100%] bg-pink-200 bg-opacity-40  "></div>

      <div className="flex-col-center">
        <h2 className="w-[200px] mx-auto my-5 font-bold text-lg text-white z-20 ">
          рабочее время
        </h2>

        <div className=" w-[100%]  flex justify-between ">
          <div className="time-table">
            <h2>пн.</h2>
            <p className="font-normal text-sm"> 10 AM-7 PM </p>
          </div>
          <div className="time-table">
            <h2>вт.</h2>
            <p className="font-normal text-sm"> 10 AM-7 PM </p>
          </div>
          <div className="time-table">
            <h2>ср.</h2>
            <p className="font-normal text-sm"> 10 AM-7 PM </p>
          </div>
          <div className="time-table">
            <h2>чт.</h2>
            <p className="font-normal text-sm"> 10 AM-7 PM </p>
          </div>
          <div className="time-table">
            <h2>пт.</h2>
            <p className="font-normal text-sm"> 10 AM-7 PM </p>
          </div>
          <div className="time-table">
            <h2>сб.</h2>
            <p className="font-normal text-sm"> 12 AM-7 PM </p>
          </div>

          <div className="time-table">
            <h2>вс.</h2>
            <p className="font-normal text-sm"> 12 AM-7 PM </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkTime;
