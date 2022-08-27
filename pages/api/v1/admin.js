// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }
import ConnectDB from "../../../db/ConnectToDb";
import Admin from "../../../models/AdminModel";

export default async function admin(req, res) {
  if (req.method === "POST") {
    try {
      await ConnectDB();

      const { admin, password } = req.body;

      // const newAdmin =
      const checkAdmin = await Admin.findOne({ admin });
      console.log(checkAdmin.username);

      if (!checkAdmin) {
        return res.json({
          msg: "неправильное имя администратора",
          status: false,
        });
      }

      if (password !== checkAdmin.password) {
        return res.json({ msg: "Неправильное пароль", status: false });
      }

      delete checkAdmin.password;

      return res.json({ checkAdmin, status: true });
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  }
}
