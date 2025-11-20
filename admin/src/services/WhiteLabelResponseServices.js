import requests from "./httpService";

const WhiteLabelResponseServices = {
  getAll: async (params = {}) => {
    const queryParams = new URLSearchParams();

    if (params.page) queryParams.append("page", params.page);
    if (params.limit) queryParams.append("limit", params.limit);
    if (params.status) queryParams.append("status", params.status);
    if (params.demoSlug) queryParams.append("demoSlug", params.demoSlug);
    if (params.sortBy) queryParams.append("sortBy", params.sortBy);
    if (params.sortOrder) queryParams.append("sortOrder", params.sortOrder);

    const queryString = queryParams.toString();
    return requests.get(
      `/white-label-queries${queryString ? `?${queryString}` : ""}`
    );
  },

  updateStatus: async (id, status) =>
    requests.patch(`/white-label-queries/${id}/status`, { status }),

  delete: async (id) => requests.delete(`/white-label-queries/${id}`),
};

export default WhiteLabelResponseServices;
