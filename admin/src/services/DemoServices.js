import requests from "./httpService";

const DemoServices = {
  getAllDemos: async ({ page, limit, title, category }) => {
    const searchTitle = title || "";
    const searchCategory = category || "";
    const queryParams = new URLSearchParams({
      page: page || 1,
      limit: limit || 10
    });
    if (searchTitle) queryParams.append("title", searchTitle);
    if (searchCategory) queryParams.append("category", searchCategory);
    return requests.get(`/demos?${queryParams.toString()}`);
  },
  getDemoById: async (id) => requests.get(`/demos/${id}`),
  getDemoBySlug: async (slug) => requests.get(`/demos/slug/${slug}`),
  addDemo: async (body) => requests.post("/demos/add", body),
  updateDemo: async (id, body) => requests.patch(`/demos/${id}`, body),
  deleteDemo: async (id) => requests.delete(`/demos/${id}`)
};

export default DemoServices;

