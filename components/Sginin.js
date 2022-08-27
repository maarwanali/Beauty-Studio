import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

function Sginin({ openWindow, user, setUser }) {
  const [err, setErr] = useState("");
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    let USERDATA;
    if (user !== null) {
      USERDATA = JSON.stringify(user);
    }

    if (USERDATA) {
      localStorage.setItem("AdminInfo", USERDATA);
    }
  }, []);

  const validateForm = () => {
    if (admin === "") {
      setErr("поле имени пользователя администратора пусто");

      setTimeout(() => {
        setErr("");
      }, 3000);
      return false;
    } else if (password === "") {
      setErr("поле пароля пустое");
      setTimeout(() => {
        setErr("");
      }, 3000);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const SendingData = {
        admin: admin,
        password: password,
      };

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/admin`,
        SendingData
      );

      if (data.status === false) {
        setErr(data.msg);

        setTimeout(() => {
          setErr("");
        }, 3000);
      }

      if (data.status === true) {
        console.log(data.checkAdmin);
        localStorage.setItem("AdminInfo", JSON.stringify(data.checkAdmin));
        setUser(data.checkAdmin);
        openWindow(false);
        router.reload();
      }
    }
  };

  const handleClickAway = () => {
    openWindow(false);
  };
  return (
    <div className="fixed bg-black bg-opacity-70 w-[100vw] h-[100vh] top-0 z-40 flex-col-center ">
      <p className="text-red-400 font-bold my-1 "> {err} </p>

      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="border-white w-[300px] border-2 p-1 flex-col-center relative">
          <form
            action="POST"
            className="flex-col-center mt-5"
            onSubmit={handleSubmit}
            onChange={(e) => setAdmin(e.target.value)}
            value={admin}
          >
            <input type="text" className="input" placeholder="Admin Username" />
            <input
              type="password"
              className="input"
              placeholder="Admin Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="submit"
              className=" border-white border-2 shadow-sm py-1 px-2 my-3 shadow-white cursor-pointer hover:bg-white hover:bg-opacity-50"
            />
          </form>
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default Sginin;
