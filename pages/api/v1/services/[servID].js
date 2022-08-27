import Service from "../../../../models/Service";
import ConnectDB from "../../../../db/ConnectToDb";

export default async function singleServ(req, res) {
  if (req.method === "GET") {
    try {
      await ConnectDB();

      const { servID } = req.query;

      const serv = await Service.findOne({ _id: servID });

      if (!serv) {
        return res.status(400).json({ msg: "service does not excect" });
      }

      return res.status(200).json({ serv });
    } catch (err) {
      res.status(404).json({ msg: err });
    }
  } else if (req.method === "DELETE") {
    try {
      await ConnectDB();
      const { servID } = req.query;

      const deletedServ = await Service.findOneAndDelete({ _id: servID });

      if (!deletedServ) {
        return res
          .status(400)
          .json({ msg: "service that u want to delete does not there" });
      }

      return res.status(200).json({ deletedServ });
    } catch (err) {
      res.status(404).json({ msg: err });
    }
  } else if (req.method === "PATCH") {
    try {
      await ConnectDB();
      const { servID } = req.query;
      const newdata = req.body;
      const updatedServ = await Service.findOneAndUpdate(
        { _id: servID },
        newdata,
        { new: true, runValidators: true }
      );

      if (!updatedServ) {
        return res
          .status(400)
          .json({ msg: "user that u want to update does not there" });
      }

      return res.status(200).json({ updatedServ });
    } catch (err) {
      res.status(404).json({ msg: err });
    }
  }
}
