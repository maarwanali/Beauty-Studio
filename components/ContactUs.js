import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

function ContactUs() {
  const router = useRouter();
  return (
    <div id="contact-us" className="w-[100%] my-20">
      <div className="mycontainer flex-col-center">
        <h1 className="main-title">Свяжитесь с нами</h1>
        <h2 className="text-base sm:text-lg md:text-xl my-5 text-slate-600 font-bold text-opacity-70 text-center ">
          Подписывайтесь ..
        </h2>

        <div className="flex items-center justify-between ">
          <Link href="https://www.instagram.com/rocky_studiooo/">
            <p className="w-32 flex justify-center items-center  my-2 bg-red-300 py-1 px-3 rounded-lg text-white hover:bg-red-500 cursor-pointer">
              <FiInstagram className="mx-2 " /> Instgram
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
