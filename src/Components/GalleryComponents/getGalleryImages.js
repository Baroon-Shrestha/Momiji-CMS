// src/utils/getGalleryImages.js
import matter from "gray-matter";

function importAll(r) {
  return r.keys().map((fileName) => {
    const file = r(fileName);
    const slug = fileName.replace(/^.*[\\/]/, "").replace(".md", "");
    const { data } = matter(file.default);
    return {
      ...data,
      slug,
    };
  });
}

const gallery = importAll(
  import.meta.glob("/src/content/gallery/*.md", { eager: true })
);

export default gallery;
