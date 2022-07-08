import { defineDocumentType } from "contentlayer/source-files";

const Customer = defineDocumentType(() => ({
  name: "Customer",
  filePathPattern: "customer/*.md",
  fields: {
    customer: {
      type: "string",
    },
    text: {
      type: "string",
    },
    company: {
      type: "string",
      required: false,
    },
  },
}));

export { Customer };
