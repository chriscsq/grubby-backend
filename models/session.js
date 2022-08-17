import mongoose from "mongoose";
const { Schema } = mongoose;

const SessionSchema = new Schema({
  sessionId: {
    type: String,
    required: true,
  },
  users: {
    type: Array,
    required: false,
  },
  favorites: {
    type: Array,
    required: false,
  },
  tags: {
    type: Array,
    required: false,
  },
  price: {
    type: Array,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
});

export default mongoose.model("session", SessionSchema);
