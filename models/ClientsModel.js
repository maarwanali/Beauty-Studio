import { Schema, model, models } from "mongoose";

const clientSchema = new Schema({
  servName: {
    type: String,
  },
  clientName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },

  complated: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Reservation = models.Reservation || model("Reservation", clientSchema);

export default Reservation;
