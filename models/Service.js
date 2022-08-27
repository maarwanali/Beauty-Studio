import { Schema, model, models } from "mongoose";

const serviceSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  servName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Service = models.Service || model("Service", serviceSchema);

export default Service;
