import requests from './httpService';

const LeadServices = {
  // Get all leads with pagination and filtering
  getAllLeads: async (params = {}) => {
    const queryParams = new URLSearchParams();

    if (params.page) queryParams.append('page', params.page);
    if (params.limit) queryParams.append('limit', params.limit);
    if (params.status) queryParams.append('status', params.status);
    if (params.source) queryParams.append('source', params.source);
    if (params.search) queryParams.append('search', params.search);
    if (params.sortBy) queryParams.append('sortBy', params.sortBy);
    if (params.sortOrder) queryParams.append('sortOrder', params.sortOrder);

    return requests.get(`/leads?${queryParams.toString()}`);
  },

  // Get lead by ID
  getLeadById: async (id) => {
    return requests.get(`/leads/${id}`);
  },

  // Create new lead
  createLead: async (leadData) => {
    return requests.post('/leads', leadData);
  },

  // Update lead
  updateLead: async (id, leadData) => {
    return requests.put(`/leads/${id}`, leadData);
  },

  // Delete lead
  deleteLead: async (id) => {
    return requests.delete(`/leads/${id}`);
  },

  // Get lead statistics
  getLeadStats: async () => {
    return requests.get('/leads/stats');
  },

  // Bulk update leads
  bulkUpdateLeads: async (leadIds, updateData) => {
    return requests.put('/leads/bulk/update', {
      leadIds,
      updateData
    });
  }
};

export default LeadServices; 