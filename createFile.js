import faker from "faker";
import fs from "fs";

export const createFile = (numUsers) => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    users.push(firstName + " " + lastName);
  }
  fs.appendFile("names.txt", JSON.stringify(users, null, "\t"), (err) => {
    if (err) console.log(err);
    else {
      console.log("Contenido agregado");
    }
  });
};
