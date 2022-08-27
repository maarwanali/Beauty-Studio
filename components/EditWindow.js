import axios from "axios";
import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { MdDoneAll } from "react-icons/md";
import { useRouter } from "next/router";

function EditWindow({ setEdit, servId, nameServ, oldprice }) {
  const [name, setName] = useState(nameServ);
  const [price, setPrice] = useState(oldprice);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newData = {
        servName: name,
        price: price,
      };

      const EditedServ = await axios.patch(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/services/${servId}`,
        newData
      );

      if (EditedServ) {
        setLoading(false);
        setDone(true);
        setTimeout(() => {
          setDone(false);
          setEdit(false);
        }, 2000);
      }

      router.reload();
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  };

  const handleClickAway = () => {
    setEdit(false);
  };
  return (
    <div className="bg-black bg-opacity-80 w-[100vw] h-[100vh]  fixed left-0 top-0 z-20 flex-col-center">
      {done && (
        <div className="w-[200px] h-[200px] rounded-full bg-white flex-center">
          <MdDoneAll
            size={100}
            className="bg-blue-500 text-white rounded-full "
          />
        </div>
      )}

      {!done && (
        <>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="flex-col-center">
              <form
                action="Patch"
                className="flex-col-center border-2 border-white p-3"
                onSubmit={handleSubmit}
              >
                <h1 className=" my-2  text-slate-50"> Редактировать {name} </h1>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="price"
                  className="input"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />

                <button
                  type="submit"
                  className="text-white bg-red-400 py-2 px-4 rounded-md hover:bg-red-500 cursor-pointer my-5"
                >
                  редактировать
                </button>
              </form>
              {loading && <div className="dot-flashing mb-3"></div>}
            </div>
          </ClickAwayListener>
        </>
      )}
    </div>
  );
}

export default EditWindow;
