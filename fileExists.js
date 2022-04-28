import fs from "fs";

export const fileExists = () => {
  if (fs.existsSync("./names.txt")) {
    return true;
  } else {
    return false;
  }
};
