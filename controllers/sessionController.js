import Session from "../models/session.js";
import randomstring from "randomstring";
// @route GET api/session
// @description Gets all sessions
// @access Public
const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @route get api/books
// @description add/save book
// @access Public
const createSession = async (req, res) => {
  const SESSION_STRING_LENGTH = 7;
  const randomSessionId = randomstring.generate(SESSION_STRING_LENGTH);
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
  createSession,
};
