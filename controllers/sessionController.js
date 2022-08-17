import Session from "../models/session.js";

// @route GET api/session
// @description Gets all sessions
// @access Public
const getSessions = async (req, res) => {
  try {
    console.log("get sessions");
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
  const session = new Session({
    sessionId: req.body.sessionId,
    users: req.body.users,
    favorites: req.body.favorites,
    tags: req.body.tags,
    price: req.body.price,
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
