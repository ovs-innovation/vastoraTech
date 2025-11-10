import requests from "./httpService";

const BlogCategoryServices = {
  getAllCategories: async () => requests.get("/blog-categories/"),
  getPublicCategories: async () => requests.get("/blog-categories/public"),
};

export default BlogCategoryServices;


