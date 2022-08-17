import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSessionSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
  },
  favorites: {
    type: [],
    required: false,
  },
  date: {
    type: date,
    required: true,
  },
});

export default mongoose.model("usersession", UserSessionSchema);
