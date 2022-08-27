import Reservation from "../../../../models/ClientsModel";

import ConnectDB from "../../../../db/ConnectToDb";

export default async function clinets(req, res) {
  if (req.method === "POST") {
    try {
      await ConnectDB();

      const { servName, clientName, phoneNumber } = req.body;

      const newOrder = await Reservation.create({
        servName: servName,
        clientName: clientName,
        phoneNumber: phoneNumber,
        complated: false,
      });

      if (!newOrder) {
        return res.json(400).json({
          msg: "something wrong happend please try again",
          status: false,
        });
      }

      return res.json({ newOrder, status: true });
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  }

  if (req.method === "GET") {
    try {
      await ConnectDB();

      const orders = await Reservation.find({});

      if (!orders) {
        return res.json({ msg: "нет новых клиентов" });
      }

      return res.status(200).json({ orders });
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  }
}
