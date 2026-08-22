export const APP_NAME = "actorsparadise9 Pass";
export const ID_PREFIX = "AP";

export const DEFAULT_UPI = {
  id: "tharak4321@slc",
  name: "Manoj Kumar H",
  qrSrc: "https://i.ibb.co/PG1wLPMj/UPI-QR-Manoj-Kumar-H-1.jpg",
};

export const PLANS = [
  {
    key: "normal",
    label: "Normal",
    price: 600,
    duration: "2 months",
    features: [
      "Full channel access",
      "All media viewing",
      "No download option",
      "No forward option",
    ],
  },
  {
    key: "super",
    label: "Super",
    price: 1000,
    duration: "2 months",
    features: [
      "Content posted first",
      "Save & download option",
      "Forward option",
      "Priority access",
    ],
  },
];

export const ADMIN = {
  id: "Manoj",
  password: "Manoj4321@",
};

export const TELEGRAM = {
  chatId: "7657045982",
  botToken: "8653348546:AAFb900FrkqzHwVk3R-wy7EN_6CXlO8pC9U",
  username: "dragonbreath1",
};

export function makeUniqueId() {
  const part = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${ID_PREFIX}-${part}`;
}
