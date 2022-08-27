import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ClickAwayListener from "react-click-away-listener";
import Sginin from "./Sginin";
import { useDispatch, useSelector } from "react-redux";
import { PuplishAdmin, selectAdmin } from "../slices/AdminSlice";
import { useRouter } from "next/router";
import { RiAdminFill } from "react-icons/ri";

function Navbar() {
  const [user, setUser] = useState(null);

  const [drop, setDrop] = useState(false);
  const [windowSize, setWindowSize] = useState();
  const [signin, setSignin] = useState(false);
  const dispatch = useDispatch();
  const admin = useSelector(selectAdmin);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowSize(e.currentTarget.innerWidth);
    });
  }, [windowSize]);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("AdminInfo");
    if (data) {
      const finalUserData = JSON.parse(data);

      dispatch(PuplishAdmin({ admin: finalUserData?.username }));
    }
  }, []);

  const handleClickAway = () => {
    setDrop(false);
  };

  const handleLougout = () => {
    localStorage.removeItem("AdminInfo");
    setUser(null);
    setDrop(false);
    router.reload();
  };

  return (
    <div className="w-[100vw] h-[80px] lg:h-[120px] flex justify-between items-center  bg-pink-400 bg-opacity-40 text-white ">
      {signin && (
        <Sginin openWindow={setSignin} user={user} setUser={setUser} />
      )}
      <div className="mycontainer flex flex-col justify-between items-center z-10 relative">
        <div className="flex-col-center mb-3 mt-2 text-white">
          {/* <Image src /> */}
          <h1 className="font-bold text-4xl uppercase">Rocky</h1>
          <p className="mt-1 ">Студия Красоты</p>
        </div>

        <div
          onClick={() => setDrop(!drop)}
          className="absolute top-10 right-5 cursor-pointer animate-bounce lg:hidden"
        >
          {drop ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </div>

        {windowSize < 1024 ? (
          <>
            {drop && (
              <ClickAwayListener onClickAway={handleClickAway}>
                <ul className=" absolute top-20 w-[200px]  right-3 bg-slate-800 bg-opacity-50 lg:top-0  lg:w-[60%] lg:mx-auto  lg:bg-transparent  lg:relative lg:flex lg:justify-between">
                  <Link href="/">
                    <li className="link">главная</li>
                  </Link>
                  <Link href="#about-us">
                    <li className="link">О нас</li>
                  </Link>
                  <Link href="#contact-us">
                    <li className="link"> Свяжитесь с нами</li>
                  </Link>
                  <Link href="/our-services">
                    <li className="link">Наши услуги </li>
                  </Link>
                  {admin ? (
                    <li className="link" onClick={handleLougout}>
                      выйти
                    </li>
                  ) : (
                    <li className="link" onClick={() => setSignin(true)}>
                      Aдминистратор
                    </li>
                  )}
                </ul>
              </ClickAwayListener>
            )}
          </>
        ) : (
          <ul className=" absolute top-20 w-[200px]  right-3 bg-slate-800 bg-opacity-50 lg:top-0  lg:w-[60%] lg:mx-auto  lg:bg-transparent  lg:relative lg:flex lg:justify-between">
            <Link href="/">
              <li className="link">главная</li>
            </Link>
            <Link href="#about-us">
              <li className="link">О нас</li>
            </Link>
            <Link href="#contact-us">
              <li className="link"> Свяжитесь с нами</li>
            </Link>
            <Link href="/our-services">
              <li className="link">Наши услуги </li>
            </Link>
            {admin ? (
              <li className="link" onClick={handleLougout}>
                выйти
              </li>
            ) : (
              <li className="link" onClick={() => setSignin(true)}>
                Aдминистратор
              </li>
            )}
          </ul>
        )}

        {admin.admin === `${process.env.NEXT_PUBLIC_ADMIN}` && (
          <div
            className="fixed bottom-[60px]  left-5 sm:bottom-10 sm:left-10 group "
            onClick={() => router.push("/clients")}
          >
            <RiAdminFill
              size={30}
              className="p-1 bg-pink-700 text-white rounded-full hover:bg-pink-900 cursor-pointer"
            />
            <p className="text-xs bg-white w-[80px]  text-black rounded-md px-2 py-1 ml-5 hidden group-hover:block absolute">
              новые клиенты
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
