import React from "react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { useRouter } from "next/router";
import { FaTelegram } from "react-icons/fa";

function Footer({ services }) {
  const router = useRouter();
  console.log(services);
  return (
    <div className="w-[100%]  relative">
      <div className="absolute top-0 right-0 left-0 bottom-0 h-[100%] bg-black bg-opacity-20  "></div>

      <div className="mycontainer flex-col-center ">
        <div className="flex-col-center mb-3 mt-2 text-white z-20 my-2">
          {/* <Image src /> */}
          <h1 className="font-bold text-4xl uppercase">Rocky</h1>
          <p className="mt-1 ">Студия Красоты</p>
        </div>

        <div className="text-white z-10 flex justify-between items-center w-[100%]">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold">услуги</h2>
            {services?.map((serv) => {
              return <p key={serv._id}> {serv.servName}</p>;
            })}
          </div>

          <div className="flex-col-center">
            <h2 className="uppercase font-bold">rockey</h2>

            <p>+375333813627</p>
            <p
              onClick={() => {
                router.push("https://www.instagram.com/rocky_studiooo");
              }}
            >
              <BsInstagram
                size={20}
                className="hover:bg-red-700 cursor-pointer"
              />
            </p>
          </div>
        </div>
        <div className="flex-col-center my-5 text-white  z-20">
          <p className="text-sm">
            made by-
            <Link href="https://www.instagram.com/marv_3li/">
              <span className="text-bold  cursor-pointer"> Marwan Ali</span>
            </Link>
            @copyrights 2022
          </p>
          <p className="flex-center flex-wrap text-sm">
            Общение с программистом : <FaTelegram className="mx-1" />{" "}
            <span className="font-bold"> +375256123097</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
