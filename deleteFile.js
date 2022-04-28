import fs from "fs";

export const deleteFile = () => {
  fs.unlink("names.txt", (err) => {
    if (err) console.log(err);
    else {
      console.log("Archivo borrado: names.txt");
    }
  });
};
