import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { validateUniqueUsername, validateUniqueEmail } from "./helper-functions.js";
const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Username is required"],
        validate: [validateUniqueUsername, "Username already exists"],
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Email is required"],
        validate: [validateUniqueEmail, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    created: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        default: "basic_user",
    },
});
UserSchema.pre("save", async function (next) {
    if (this.password && this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});
UserSchema.methods.checkPassword = async function (enteredPassword) {
    let match = await bcrypt.compare(enteredPassword, this.password);
    return match;
};
const DonationSchema = new Schema({
    userId: String,
    cardOwner: {
        type: String,
        required: [true, "Ime vlasnika kartice je obavezno"],
    },
    cardNumber: {
        type: String,
        required: [true, "Broj kartice je obavezan"],
    },
    expirationDate: {
        type: String,
        required: [true, "Datum isteka važenja kartice je obavezan"],
    },
    cvc: {
        type: String,
        required: [true, "CVC broj je obavezan"],
    },
    amount: {
        type: String,
        required: [true, "Iznos je obavezan"],
    },
    purpose: String,
    date: {
        type: Date,
        default: Date.now,
    },
});
const ShoppingListItemSchema = new Schema({
    itemName: String,
    itemStatus: String,
    date: {
        type: Date,
        default: Date.now,
    },
});
const GuideSectionSchema = new Schema({
    sectionTitle: {
        type: String,
        required: [true, "Naslov sekcije je obavezan"],
    },
    sectionItems: [{ text: String }],
});
const ActivitySchema = new Schema({
    activityTitle: {
        type: String,
        required: [true, "Naslov aktivnosti je obavezan"],
    },
});
const User = model("User", UserSchema);
const Donation = model("Donation", DonationSchema);
const ShoppingListItem = model("ShoppingListItem", ShoppingListItemSchema);
const GuideSection = model("GuideSection", GuideSectionSchema);
const Activity = model("Activity", ActivitySchema);
export { User, Donation, ShoppingListItem, GuideSection, Activity };
