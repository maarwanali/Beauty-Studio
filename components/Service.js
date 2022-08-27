import Image from "next/image";
import React, { useState } from "react";
import NewOrder from "./NewOrder";
import { BiDotsHorizontal } from "react-icons/bi";
import ClickAwayListener from "react-click-away-listener";
import axios from "axios";
import { useRouter } from "next/router";
import EditWindow from "./EditWindow";
import { useSelector } from "react-redux";
import { selectAdmin } from "../slices/AdminSlice";

function Service({ name, imgsrc, price, servId }) {
  const [openWindw, setOpenWindow] = useState(false);
  const [option, setOption] = useState(false);
  const [edit, setEdit] = useState(false);
  const admin = useSelector(selectAdmin);
  const router = useRouter();

  const handleClickAway = () => {
    setOption(false);
  };

  const handleEdite = () => {
    setEdit(true);
  };

  const handleDelete = async () => {
    const deletedServ = await axios.delete(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/services/${servId}`
    );

    if (deletedServ) {
      router.reload();
    }
  };

  return (
    <div className="flex-col-center bg-white shadow-md shadow-slate-400 relative ">
      {openWindw && <NewOrder setOpen={setOpenWindow} name={name} />}
      {edit && (
        <EditWindow
          setEdit={setEdit}
          servId={servId}
          nameServ={name}
          oldprice={price}
        />
      )}

      {admin.admin === `${process.env.NEXT_PUBLIC_ADMIN}` && (
        <>
          <BiDotsHorizontal
            size={20}
            className="absolute top-0 right-1 opacity-40 hover:opacity-70 cursor-pointer"
            onClick={() => setOption(!option)}
          />
          {option && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <>
                <div className="bg-slate-400 text-white absolute top-5 right-2 w-[150px]   z-20">
                  <p
                    onClick={handleEdite}
                    className="py-1 px-1 transition-all hover:bg-slate-500 cursor-pointer "
                  >
                    редактировать
                  </p>
                  <p
                    onClick={handleDelete}
                    className="py-1 px-1 transition-all hover:bg-slate-500 cursor-pointer"
                  >
                    Удалить
                  </p>
                </div>
              </>
            </ClickAwayListener>
          )}
        </>
      )}

      <h4 className="my-2 py-1 px-3 font-bold text-xl opacity-80 text-slate-500">
        {name}
      </h4>

      <Image src={imgsrc} alt="" width="250" height="250px" />

      <p className="font-bold text-sm text-red-500 relative my-3">
        от {price}{" "}
        <small className="absolute top-[-2px] right-[-10px]">P</small>
      </p>

      <button
        className="py-1 px-2 my-3 font-bold opacity-60 border-2 border-white bg-black bg-opacity-50 shadow-lg shadow-gray-500 text-white hover:bg-green-500 hover:text-white transition-all duration-300"
        onClick={() => setOpenWindow(true)}
      >
        Запись
      </button>
    </div>
  );
}

export default Service;
