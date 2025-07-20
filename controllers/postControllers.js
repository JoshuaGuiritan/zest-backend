import userDB from "../models/userModel.js";
import postDB from "../models/postModels.js";

export const getAccounts = async (req, res) => {
  try {
    const userAccounts = await userDB.find();
    if (!userAccounts) {
      return res.status(404).json([]);
    }
    res.status(200).json(userAccounts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await postDB.find();
    if (!posts) {
      return res.status(404).json([]);
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const signin = async (req, res) => {
  try {
    const userSignIn = new userDB(req.body);
    const username = userSignIn.username;
    const password = userSignIn.password;
    const accountVerify = await userDB.findOne({
      username: username,
      password: password,
    });
    if (!accountVerify) {
      return res.status(404).json({ verify: false });
    }
    res
      .status(200)
      .json({
        username: accountVerify.username,
        id: accountVerify._id,
        verify: true,
      });
  } catch (err) {
    res.status(500).json({ verify: false });
  }
};

export const signup = async (req, res) => {
  try {
    const userSignUp = new userDB(req.body);
    const username = userSignUp.username;
    const accountVerify = await userDB.findOne({ username: username });
    if (accountVerify) {
      return res.status(404).json({ verify: false });
    }
    const savedAccount = await userSignUp.save();
    res.status(201).json({ verify: true });
  } catch (err) {
    res.status(500).json({ verify: false });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = new postDB(req.body);
    const savedAccount = newPost.save();
    res.status(201).json({ verify: true });
  } catch (err) {
    res.status(500).json({ verify: false });
  }
};
