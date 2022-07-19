// types/category.ts
import { defineDocumentType } from "contentlayer/source-files";
var Category = defineDocumentType(() => ({
  name: "Category",
  filePathPattern: "category/*.json",
  fields: {
    title: {
      type: "string"
    }
  }
}));

// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";

// types/animal.ts
import { defineDocumentType as defineDocumentType2 } from "contentlayer/source-files";
var Animal = defineDocumentType2(() => ({
  name: "Animal",
  filePathPattern: "animal/*.md",
  fields: {
    title: {
      type: "string"
    },
    slug: {
      type: "string"
    },
    image: {
      type: "string"
    },
    excerpt: {
      type: "string"
    },
    category: {
      type: "string"
    }
  }
}));

// types/legal.ts
import { defineDocumentType as defineDocumentType3 } from "contentlayer/source-files";
var Legal = defineDocumentType3(() => ({
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
import { defineDocumentType as defineDocumentType4 } from "contentlayer/source-files";
var Customer = defineDocumentType4(() => ({
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
  documentTypes: [Legal, Customer, Animal, Category]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-6FOHCERD.mjs.map
