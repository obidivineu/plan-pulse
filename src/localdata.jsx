import menu from "./assets/menu.png";
import menuColor from "./assets/menu-color.png";
import group from "./assets/group (3).png";
import groupColor from "./assets/group-color.png";
import list from "./assets/list.png";
import listColor from "./assets/list-color.png";
import user from "./assets/user.png";
import userC from "./assets/user-color.png";
import batch from "./assets/upload.png";
import batchColor from "./assets/upload-color.png";

export const data = [
  {
    id: 1,
    title: "Dashboard",
    clicked: false,
    img: menu,
    img2: menuColor,
  },
  {
    id: 2,
    title: "Batch-Upload",
    clicked: false,
    img: batch,
    img2: batchColor,
  },
  {
    id: 3,
    title: "All Member",
    clicked: false,
    img: group,
    img2: groupColor,
  },
  {
    id: 4,
    title: "Plan Category",
    clicked: false,
    img: list,
    img2: listColor,
  },
  {
    id: 5,
    title: "Account",
    clicked: false,
    img: user,
    img2: userC,
  },
];

export const cardData = [
  { status: "Total Member", number: 5, color: "white" },
  { status: "Active Member", number: 5, color: "white" },
  { status: "Not-Active", number: 5, color: "white" },
  { status: "1-Month-Plan", number: 5, color: "white" },
  { status: "2-Month-Plan", number: 5, color: "white" },
  { status: "3-Month-Plan", number: 5, color: "white" },
];

export const users = [
  {
    name: "ken",
    date: "2022-5-09",
    id: 1,
    plan: "1-month",
    status: "active",
    toremove: "remove",
  },
  {
    name: "ken",
    date: "2022-5-09",
    id: 1,
    plan: "1-month",
    status: "active",
    toremove: "remove",
  },
  {
    name: "ken",
    date: "2022-5-09",
    id: 1,
    plan: "1-month",
    status: "active",
    toremove: "remove",
  },
  {
    name: "ken",
    date: "2022-5-09",
    id: 1,
    plan: "1-month",
    status: "active",
    toremove: "remove",
  },
  {
    name: "ken",
    date: "2022-5-09",
    id: 1,
    plan: "1-month",
    status: "active",
    toremove: "remove",
  },
];
