import Reservation from "../../../../models/ClientsModel";

import ConnectDB from "../../../../db/ConnectToDb";

export default async function singleOrder(req, res) {
  if (req.method === "GET") {
    try {
      await ConnectDB();

      const { ClinetId } = req.query;

      const clinet = await Reservation.findOne({ _id: ClinetId });

      if (!clinet) {
        return res.status(400).json({ msg: "Client does not excect" });
      }

      return res.status(200).json({ clinet });
    } catch (err) {
      res.status(404).json({ msg: err });
    }
  } else if (req.method === "DELETE") {
    try {
      await ConnectDB();
      const { ClinetId } = req.query;

      const deletedClinet = await Reservation.findOneAndDelete({
        _id: ClinetId,
      });

      if (!deletedClinet) {
        return res
          .status(400)
          .json({ msg: "Client that u want to delete does not there" });
      }

      return res.status(200).json({ deletedClinet });
    } catch (err) {
      res.status(404).json({ msg: err });
    }
  } else if (req.method === "PATCH") {
    try {
      await ConnectDB();
      const { ClinetId } = req.query;

      const newData = {
        complated: true,
      };

      const deletedClinet = await Reservation.findOneAndUpdate(
        { _id: ClinetId },
        newData,
        { new: true, runValidators: true }
      );

      if (!deletedClinet) {
        return res
          .status(400)
          .json({ msg: "Client that u want to delete does not there" });
      }

      return res.status(200).json({ deletedClinet });
    } catch (err) {
      res.status(404).json({ msg: err });
    }
  }
}
