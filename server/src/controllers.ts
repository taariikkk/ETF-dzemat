import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "./config.js";
import { User, Donation, ShoppingListItem, GuideSection, Activity } from "./models.js";
import { getSaveErrorMessage } from "./helper-functions.js";

const checkLoggedIn = (req: Request, res: Response) => {
  if (req.user.username) res.status(200).json({ message: req.user.username });
  else res.sendStatus(400);
};

const signup = async (req: Request, res: Response) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(201).json({ message: "Successfully signed up" });
  } catch (err) {
    return res.status(500).json({ error: getSaveErrorMessage(err, "user") });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    if (!req.body.usernameEmail || !req.body.password)
      return res.status(400).json({ error: "Please enter email and password" });

    let user;
    user = await User.findOne({ username: req.body.usernameEmail });
    if (!user) user = await User.findOne({ email: req.body.usernameEmail });

    if (!user || !(await user.checkPassword(req.body.password)))
      return res.status(404).json({ error: "Email and password do not match" });
    else {
      const loginToken = jwt.sign({ id: user._id, role: user.role }, config.secret);
      return res
        .cookie("loginToken", loginToken, {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 72),
          httpOnly: true,
        })
        .status(200)
        .json({ username: user.username, message: "Logged in" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const signout = (req: Request, res: Response) => {
  res.clearCookie("loginToken").status(200).json({ message: "Signed out" });
};

const saveActivity = async (req: Request, res: Response) => {};

const fetchActivities = async (req: Request, res: Response) => {};

const saveGuideSection = async (req: Request, res: Response) => {
  const { sectionTitle, sectionItems } = req.body;

  try {
    const guideSection = new GuideSection({
      sectionTitle: sectionTitle,
      sectionItems: sectionItems,
    });
    await guideSection.save();
    res.status(201).json({ message: "Uspješno obavljeno dodavanje nove sekcije uputstva" });
  } catch (err) {
    res.status(500).json({ error: getSaveErrorMessage(err, "guide section") });
  }
};

const fetchGuide = async (req: Request, res: Response) => {
  try {
    const guide = await GuideSection.find({});
    res.status(200).json(guide);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const saveShoppingItem = async (req: Request, res: Response) => {
  const { itemName, itemStatus } = req.body;

  try {
    const shoppingListItem = new ShoppingListItem({
      itemName: itemName,
      itemStatus: itemStatus,
    });
    await shoppingListItem.save();
    res.status(201).json({ message: "Uspješno obavljeno dodavanje potrepštine za kupiti" });
  } catch (err) {
    res.status(500).json({ error: getSaveErrorMessage(err, "shopping list item") });
  }
};

const fetchShoppingList = async (req: Request, res: Response) => {
  try {
    const shoppingList = await ShoppingListItem.find({});
    res.status(200).json(shoppingList);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const saveDonation = async (req: Request, res: Response) => {
  const { cardOwner, cardNumber, expirationDate, cvc, amount, purpose } = req.body;
  try {
    const donation = new Donation({
      userId: req.userId,
      cardOwner: cardOwner,
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      cvc: cvc,
      amount: amount,
      purpose: purpose,
    });
    await donation.save();
    res.status(201).json({ message: "Uspješno obavljena donacija" });
  } catch (err) {
    res.status(500).json({ error: getSaveErrorMessage(err, "donation") });
  }
};

const fetchDonations = async (req: Request, res: Response) => {
  try {
    const donations = await Donation.find({});
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const changePassword = async (req: Request, res: Response) => {
  if (req.body.newPassword.length < 6) res.status(400).json({ error: "Password must be 6 characters long" });
  else {
    const user = req.user;
    if (await user.checkPassword(req.body.newPassword)) {
      res.status(400).json({ error: "Password must be new" });
    } else {
      user.password = req.body.newPassword;
      try {
        await user.save();
        res.status(200).json({ message: "Password changed" });
      } catch (err) {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  }
};

const deleteProfile = async (req: Request, res: Response) => {
  try {
    // await Activity.deleteMany({ userId: req.userId });
    await User.deleteOne({ _id: req.userId });
    res.clearCookie("loginToken").status(200).json({ message: "User successfully deleted" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export {
  checkLoggedIn,
  signup,
  login,
  signout,
  saveActivity,
  fetchActivities,
  saveGuideSection,
  fetchGuide,
  saveShoppingItem,
  fetchShoppingList,
  saveDonation,
  fetchDonations,
  changePassword,
  deleteProfile,
};
