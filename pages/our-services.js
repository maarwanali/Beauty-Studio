import React, { useState } from "react";
import Service from "../components/Service";
import { MdAddModerator } from "react-icons/md";
import AddServ from "../components/AddServ";
import { useSelector } from "react-redux";
import { selectAdmin } from "../slices/AdminSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { PuplishServ } from "../slices/Services";

function Services({ services }) {
  const [openForm, setOpenForm] = useState(false);
  const admin = useSelector(selectAdmin);

  return (
    <div className="w-[100%] mt-9">
      {openForm && <AddServ closeLayout={setOpenForm} />}

      <div className="mycontainer flex-col-center  relative  ">
        <h1 className="main-title ">услуги </h1>
        <div className=" flex justify-center items-center flex-wrap gap-10">
          {services?.map((serv) => {
            return (
              <Service
                key={serv._id}
                name={serv.servName}
                imgsrc={serv.image}
                price={serv.price}
                servId={serv._id}
              />
            );
          })}
        </div>
        {admin.admin === `${process.env.NEXT_PUBLIC_ADMIN}` && (
          <div
            className=" fixed bottom-[670px] right-5 sm:bottom-10 sm:right-10 group  "
            onClick={() => setOpenForm(!openForm)}
          >
            <MdAddModerator
              size={30}
              className="p-1 bg-pink-700 text-white rounded-full hover:bg-pink-900 cursor-pointer"
            />{" "}
            <p className="text-xs bg-white w-[80px] rounded-md px-2 py-1 ml-5 hidden group-hover:block absolute left-[-100px] bottom-[-25px] ">
              Добавить услугу{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;

export const getServerSideProps = async () => {
  const allData = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/services`
  );

  return {
    props: {
      services: allData.data.allServices,
    },
  };
};
