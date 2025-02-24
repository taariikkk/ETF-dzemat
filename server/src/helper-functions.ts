import { CallbackError } from "mongoose";

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function validateEmailFormat(email: string) {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regEx.test(email);
}

async function validateUniqueUsername(username: string) {
  const user = await this.constructor.findOne({ username });
  if (user) {
    if (this.id === user.id) return true;
    else return false;
  } else return true;
}

async function validateUniqueEmail(email: string) {
  const user = await this.constructor.findOne({ email });
  if (user) {
    if (this.id === user.id) return true;
    else return false;
  } else return true;
}

function getSaveErrorMessage(err: any, type: string) {
  let errorMessage = `Error while saving the ${type}.`;
  if (err && err.errors) {
    for (let errName in err.errors) {
      if (err.errors[errName].message) {
        errorMessage = capitalizeFirstLetter(err.errors[errName].message);
        break;
      }
    }
  }
  return errorMessage;
}

export {
  capitalizeFirstLetter,
  validateEmailFormat,
  validateUniqueUsername,
  validateUniqueEmail,
  getSaveErrorMessage,
};
