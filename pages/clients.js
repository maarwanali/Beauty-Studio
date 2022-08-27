import React, { useState } from "react";
import axios from "axios";
import { RiChatDeleteLine } from "react-icons/ri";
import { MdDoneAll } from "react-icons/md";
import { useRouter } from "next/router";
function Clients({ orders }) {
  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cmoplated, setCompalted] = useState(false);
  const router = useRouter();
  const handleDelete = async (orderId) => {
    const deleteOrder = await axios.delete(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/clinets/${orderId}`
    );

    if (deleteOrder) {
      setDone(true);
      setTimeout(() => {
        setDone(false);
      }, 2000);
    }

    router.reload();
  };

  const handleComlated = async (orderId) => {
    const complatedOrder = await axios.patch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/clinets/${orderId}`
    );

    if (complatedOrder) {
      router.reload();
    }
  };
  return (
    <div className="w-[100%]">
      <div className="mycontainer flex-col-center">
        <h3 className="font-bold text-xl my-3 text-slate-500 ">
          новых клиентов.
        </h3>

        {done && (
          <div className="bg-black bg-opacity-70 w-[100vw] h-[100vh] fixed top-0 left-0 z-20 flex-center">
            <div className="w-[200px] h-[200px] rounded-full bg-white flex-center">
              <MdDoneAll
                size={100}
                className="bg-blue-500 text-white rounded-full "
              />
            </div>
          </div>
        )}

        {orders?.map((order) => {
          return (
            <div
              key={order._id}
              className="w-[100%] flex items-center justify-between relative "
            >
              {!order.complated && (
                <div className="absolute top-10 right-[50%] translate-x-[-50%] z-10 ">
                  <button
                    onClick={() => handleComlated(order._id)}
                    className="bg-slate-400 text-white py-1 px-2 hover:bg-blue-500  "
                  >
                    Выполнено
                  </button>
                </div>
              )}

              <div
                className={`${
                  order.complated
                    ? "bg-slate-700 opacity-40"
                    : "bg-slate-700 bg-opacity-60"
                } bg-slate-700 bg-opacity-60 my-10 p-4 text-white text-lg shadow-md w-[95%] shadow-black  relative`}
              >
                <RiChatDeleteLine
                  onClick={() => handleDelete(order._id)}
                  size={20}
                  className="absolute top-1 right-1 cursor-pointer hover:scale-110"
                />

                <p className="">Я хочу делать : {order.servName}</p>
                <p> Меня зовут : {order.clientName}</p>
                <p>Мой номер телефона : {order.phoneNumber}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Clients;

export const getServerSideProps = async () => {
  const orders = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/clinets`
  );

  return {
    props: {
      orders: orders.data.orders,
    },
  };
};
