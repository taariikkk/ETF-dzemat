import { Router } from "express";
import { validateSignUpFields, authenticate, getUser } from "./middlewares.js";
import {
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
} from "./controllers.js";

const router = Router();

router
  .get("/api/check-login", authenticate, getUser, checkLoggedIn)
  .post("/api/signup", validateSignUpFields, signup)
  .post("/api/login", login)
  .get("/api/signout", signout)
  .post("/api/donation", authenticate, saveActivity)
  .get("/api/donation", authenticate, fetchActivities)
  .post("/api/donation", authenticate, saveGuideSection)
  .get("/api/donation", authenticate, fetchGuide)
  .post("/api/donation", authenticate, saveShoppingItem)
  .get("/api/donation", authenticate, fetchShoppingList)
  .post("/api/donation", authenticate, saveDonation)
  .get("/api/donation", authenticate, fetchDonations)
  .patch("/api/change-password", authenticate, getUser, changePassword)
  .delete("/api/delete-profile", authenticate, deleteProfile);

export default router;
