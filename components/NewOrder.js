import axios from "axios";
import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { MdDoneAll } from "react-icons/md";

function NewOrder({ setOpen, name }) {
  const [client, setClient] = useState("");
  const [phone, setPhone] = useState(0);
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  const validateForm = () => {
    if (client === "") {
      setErr("поле вашего имени пусто");

      setTimeout(() => {
        setErr("");
      }, 3000);
      return false;
    } else if (phone === 0) {
      setErr("поле вашего номера телефона пусто");
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
      const newData = {
        servName: name,
        clientName: client,
        phoneNumber: phone,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/clinets`,
        newData
      );

      if (data.status === true) {
        setDone(true);

        setTimeout(() => {
          setDone(false);
          setOpen(false);
        }, 2000);
      }
    }
  };
  return (
    <div className="bg-black bg-opacity-70 w-[100vw] h-[100vh]  fixed left-0 top-0 z-20 flex-col-center">
      <p className="text-red-400 font-bold my-1 "> {err} </p>

      {done && (
        <div flex-col-center>
          <div className="w-[200px] h-[200px] rounded-full bg-white flex-center">
            <MdDoneAll
              size={100}
              className="bg-blue-500 text-white rounded-full "
            />
          </div>
          {/* <p className="text-white text-lg mt-5 absolute  ">
            мы позвоним вам как можно скорее
          </p> */}
        </div>
      )}

      {!done && (
        <>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className=" bg-white rounded-sm border-white border-2  flex-col-center p-3">
              <h3 className="font-bold text-lg my-2 opacity-70 ">
                {" "}
                Забронировать место{" "}
              </h3>
              <form
                action=""
                method="POST"
                className="flex-col-center"
                onSubmit={handleSubmit}
              >
                {/* <BiImageAdd size={40} /> */}
                <p className="font-bold text-slate-500 t">{name}</p>

                <input
                  type="name"
                  name="client"
                  className="input"
                  placeholder="enter Your name"
                  onChange={(e) => setClient(e.target.value)}
                />
                <input
                  type="number"
                  name="phone"
                  className="input"
                  placeholder="phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />

                <input
                  type="submit"
                  className="text-white bg-red-400 py-2 px-4 rounded-md hover:bg-red-500 cursor-pointer my-5"
                />
              </form>
            </div>
          </ClickAwayListener>
        </>
      )}
    </div>
  );
}

export default NewOrder;
