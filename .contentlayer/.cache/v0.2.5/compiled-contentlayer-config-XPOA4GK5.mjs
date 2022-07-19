// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";

// types/legal.ts
import { defineDocumentType } from "contentlayer/source-files";
var Legal = defineDocumentType(() => ({
  name: "Legal",
  filePathPattern: "legal/*.md",
  fields: {
    title: {
      type: "string"
    },
    slug: {
      type: "string"
    }
  }
}));

// contentlayer.config.ts
import { Customer } from "types/customer";
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  contentDirExclude: ["setting", "page", "category", "animal"],
  documentTypes: [Legal, Customer]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XPOA4GK5.mjs.map
