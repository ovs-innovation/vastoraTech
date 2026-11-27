import requests from "./httpService";

const WorkServices = {
  getAllWorks: async ({ page, limit, title, category, status } = {}) => {
    const queryParams = new URLSearchParams({
      page: page || 1,
      limit: limit || 50,
    });
    if (title) queryParams.append("title", title);
    if (category) queryParams.append("category", category);
    if (status) queryParams.append("status", status);

    return requests.get(`/works?${queryParams.toString()}`);
  },

  getWorkById: async (id) => requests.get(`/works/${id}`),

  addWork: async (body) => requests.post("/works/add", body),

  updateWork: async (id, body) => requests.patch(`/works/${id}`, body),

  deleteWork: async (id) => requests.delete(`/works/${id}`),

  updateManyWorks: async (body) => requests.patch("/works/update/many", body),

  uploadImage: async (body) => requests.post("/works/upload", body),
};

export default WorkServices;
