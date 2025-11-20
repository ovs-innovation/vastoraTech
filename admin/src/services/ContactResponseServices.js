import requests from "./httpService";

const ContactResponseServices = {
  getAll: async (params = {}) => {
    const queryParams = new URLSearchParams();

    if (params.page) queryParams.append("page", params.page);
    if (params.limit) queryParams.append("limit", params.limit);
    if (params.status) queryParams.append("status", params.status);
    if (params.search) queryParams.append("search", params.search);
    if (params.sortBy) queryParams.append("sortBy", params.sortBy);
    if (params.sortOrder) queryParams.append("sortOrder", params.sortOrder);

    const queryString = queryParams.toString();
    return requests.get(`/contact-submissions${queryString ? `?${queryString}` : ""}`);
  },

  updateStatus: async (id, status, notes) => {
    return requests.patch(`/contact-submissions/${id}/status`, {
      status,
      notes,
    });
  },
};

export default ContactResponseServices;
