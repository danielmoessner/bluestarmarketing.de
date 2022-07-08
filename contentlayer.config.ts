// import { Category } from "./types/category";
import { makeSource } from "contentlayer/source-files";
// import { Animal } from "./types/animal";
import { Legal } from "./types/legal";
import { Customer } from "./types/customer";

export default makeSource({
  contentDirPath: "content",
  contentDirExclude: ["setting", "page", "category", "animal"],
  documentTypes: [Legal, Customer],
});
