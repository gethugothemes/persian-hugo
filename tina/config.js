import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "382fc8bd-deb6-43b0-bdb5-b3ee75da56fd",
  // Get this from tina.io
  token: "1e79e1bfb52537db8c57d0011f9f6fe3815de19d",

  build: {
    outputFolder: "exampleSite/public",
    publicFolder: "exampleSite/public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "exampleSite/public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "posts",
        label: "Posts",
        path: "exampleSite/content/post",
        match: {
          include: "*",
        },
        frontmatterDelimiters: ["+++"],
        frontmatterFormat: "toml",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "exampleSite/content",
        match: { exclude: "**/post/**" },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "image",
            name: "about_image",
            nameOverride: "about-image",
            label: "About Image",
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
          },
        ],
      },
    ],
  },
});
