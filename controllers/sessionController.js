import Session from "../models/session.js";
import randomstring from "randomstring";
import socket from "../socket.js";

const SESSION_ID_LENGTH = 7;

const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSession = async (req, res) => {
  const sessionId = req.query.sessionId;
  try {
    const session = await Session.findOne({ sessionId: sessionId });
    res.json(session);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateSession = async (req, res) => {
  const sessionId = req.body.sessionId;
  try {
    const session = await Session.findOneAndUpdate(
      { sessionId: sessionId },
      {
        users: req.body.users,
        favorites: req.body.favorites,
        tags: req.body.tags,
        price: req.body.price,
      },
      { new: true }
    );
    console.log(session);

    res.json(session);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};
const createSession = async (req, res) => {
  const randomSessionId = randomstring.generate(SESSION_ID_LENGTH);

  const session = new Session({
    sessionId: randomSessionId,
    users: req.body.users,
    favorites: [],
    tags: [],
    price: [],
  });
  try {
    const newSession = await session.save();
    res.status(201).json(newSession);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default {
  getSessions,
  getSession,
  createSession,
  updateSession,
};
