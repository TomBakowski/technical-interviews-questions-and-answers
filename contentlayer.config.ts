// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const Url = defineNestedType(() => ({
  name: "Url",
  fields: {
    label: { type: "string", required: true },
    url: { type: "string", required: true },
  },
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", required: true, of: { type: "string" } },
    urls: {
      type: "list",
      of: Url,
    },
  },
  contentType: "mdx",
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/docs",
  documentTypes: [Doc],
});
