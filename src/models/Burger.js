import { Schema } from "mongoose";

export const BurgerSchema = new Schema(
  {
    name: {type: String, minlength: 2, maxLength: 100, required:true},
    price: {type: Number, min: 0, maxLength: 50, required:true}
  }
)