import axios from "axios";
import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { BiImageAdd } from "react-icons/bi";
import { MdDoneAll } from "react-icons/md";

function AddServ({ closeLayout }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const form = e.currentTarget;
      const fileInput = Array.from(form.elements).find(
        ({ name }) => name === "image"
      );
      console.log(fileInput);
      const formData = new FormData();

      for (const file of fileInput.files) {
        formData.append("file", file);
      }

      formData.append("upload_preset", "my-uploads");

      const image = await axios.post(
        `${process.env.NEXT_PUBLIC_CLOUD_IMAGE}`,
        formData
      );
      const finalImage = image.data;

      console.log(finalImage.secure_url);

      const newData = {
        image: finalImage.secure_url,
        servName: name,
        price: price,
      };

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/v1/services`,
        newData
      );

      if (data.status === true) {
        setDone(true);
        setTimeout(() => {
          setDone(false);
          closeLayout(false);
        }, 2000);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleClickAway = () => {
    closeLayout(false);
  };

  return (
    <div className="bg-black bg-opacity-70 w-[100vw] h-[100vh] fixed top-0 z-20 flex-center">
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
            <div className=" bg-white rounded-sm border-white border-2 flex-col-center">
              <h3 className="font-bold text-lg my-2 opacity-70 ">
                Add Service
              </h3>
              <form
                action=""
                method="POST"
                className="flex-col-center"
                onSubmit={handleSubmit}
              >
                {/* <BiImageAdd size={40} /> */}
                <input
                  type="file"
                  name="image"
                  className="w-[70%] h-[40px]  p-2 outline-none my-2"
                />
                <input
                  type="name"
                  name="nameSer"
                  className="input"
                  placeholder="Name of service"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  name="price"
                  className="input"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                />

                <input
                  type="submit"
                  className="text-white bg-red-400 py-2 px-4 rounded-md hover:bg-red-500 cursor-pointer my-5"
                />
              </form>

              {loading && <div className="dot-flashing mb-3"></div>}
            </div>
          </ClickAwayListener>
        </>
      )}
    </div>
  );
}

export default AddServ;
