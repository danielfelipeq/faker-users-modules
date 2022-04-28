if (fileExists()) {
  deleteFile();
  createFile(10);
} else {
  createFile(10);
}

import { createFile } from "./createFile.js";
import { fileExists } from "./fileExists.js";
import { deleteFile } from "./deleteFile.js";
