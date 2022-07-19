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

// types/customer.ts
import { defineDocumentType as defineDocumentType2 } from "contentlayer/source-files";
var Customer = defineDocumentType2(() => ({
  name: "Customer",
  filePathPattern: "customer/*.md",
  fields: {
    customer: {
      type: "string"
    },
    text: {
      type: "string"
    },
    company: {
      type: "string",
      required: false
    }
  }
}));

// contentlayer.config.ts
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  contentDirExclude: ["setting", "page", "category", "animal"],
  documentTypes: [Legal, Customer]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PNZM5TBV.mjs.map
