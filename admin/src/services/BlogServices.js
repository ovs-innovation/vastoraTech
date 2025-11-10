import requests from "./httpService";

const BlogServices = {
  getAllBlogs: async ({ page, limit, category, title, status, search, sortBy, sortOrder }) => {
    const searchCategory = category !== null ? category : "";
    const searchTitle = title !== null ? title : "";
    const searchStatus = status !== null ? status : "";
    const searchQuery = search !== null ? search : "";
    const sortByParam = sortBy !== null ? sortBy : "";
    const sortOrderParam = sortOrder !== null ? sortOrder : "";

    const queryParams = new URLSearchParams({
      page: page || 1,
      limit: limit || 10,
    });

    if (searchCategory) queryParams.append("category", searchCategory);
    if (searchTitle) queryParams.append("title", searchTitle);
    if (searchStatus) queryParams.append("status", searchStatus);
    if (searchQuery) queryParams.append("search", searchQuery);
    if (sortByParam) queryParams.append("sortBy", sortByParam);
    if (sortOrderParam) queryParams.append("sortOrder", sortOrderParam);

    return requests.get(`/blogs?${queryParams.toString()}`);
  },

  getBlogById: async (id) => {
    return requests.get(`/blogs/${id}`);
  },

  getBlogBySlug: async (slug) => {
    return requests.get(`/blogs/slug/${slug}`);
  },

  getPublishedBlogs: async () => {
    return requests.get("/blogs/published/all");
  },

  addBlog: async (body) => {
    return requests.post("/blogs/add", body);
  },

  addAllBlogs: async (body) => {
    return requests.post("/blogs/all", body);
  },

  updateBlog: async (id, body) => {
    return requests.patch(`/blogs/${id}`, body);
  },

  updateManyBlogs: async (body) => {
    return requests.patch("/blogs/update/many", body);
  },

  updateStatus: async (id, body) => {
    return requests.put(`/blogs/status/${id}`, body);
  },

  deleteBlog: async (id) => {
    return requests.delete(`/blogs/${id}`);
  },

  deleteManyBlogs: async (body) => {
    return requests.patch("/blogs/delete/many", body);
  },
};

export default BlogServices;

