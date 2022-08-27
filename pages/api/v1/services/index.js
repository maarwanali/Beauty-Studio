import Service from "../../../../models/Service";

import ConnectDB from "../../../../db/ConnectToDb";

export default async function services(req, res) {
  if (req.method === "POST") {
    try {
      await ConnectDB();

      const { image, servName, price } = req.body;

      const newOrder = await Service.create({
        image: image,
        servName: servName,
        price: price,
      });

      if (!newOrder) {
        return res.json({
          msg: "something wrong happend please try again",
          status: false,
        });
      }

      return res.status(200).json({ newOrder, status: true });
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  }

  if (req.method === "GET") {
    try {
      await ConnectDB();
      const allServices = await Service.find({});

      if (!allServices) {
        return res.status(400).json({ msg: "DB is empty" });
      }

      return res.status(200).json({ allServices });
    } catch (err) {
      return res.status(400).json({ msg: err });
    }
  }
}
