import { afterAll, beforeAll, describe } from "@jest/globals";
import "dotenv/config";
import mongoose from "mongoose";

describe("SESSION_TEST", () => {
  let connection;
  let db;

  const session = mongoose.model(
    "test_sessions",
    mongoose.Schema({
      sessionId: String,
      users: Array,
      favorites: Array,
      tags: Array,
      price: Array,
    })
  );

  beforeAll(async () => {
    connection = await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@grubby.yretr.mongodb.net/test?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    db = mongoose.connection;
    const collection = "test_sessions";
    await db.createCollection(collection);
  });

  afterAll(async () => {
    const collection = "test_sessions";
    await db.dropCollection(collection);
    await db.close();
  });

  test("POST create session", async () => {
    const expectedResponse = await session.create({
      sessionId: "TESTID1",
      users: [],
      favorites: [],
      tags: [],
      price: [],
    });
    await expectedResponse.save();
    expect(expectedResponse.toJSON()).toMatchObject({
      __v: expect.anything(),
      _id: expect.anything(),
      sessionId: "TESTID1",
      users: [],
      favorites: [],
      tags: [],
      price: [],
    });
  });

  test("GET sessions", async () => {
    const sessions = await session.find();
    const mockSessionToExpect = sessions[0];
    expect(mockSessionToExpect.toJSON()).toMatchObject({
      __v: expect.anything(),
      _id: expect.anything(),
      sessionId: "TESTID1",
      users: [],
      favorites: [],
      tags: [],
      price: [],
    });
  });
});
