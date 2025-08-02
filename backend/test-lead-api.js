// Test file for Lead Generation API
// Run this file to test the API endpoints

const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api/leads';

// Test data based on your requirements
const testLeadData = {
  name: "Angad Kumar",
  emailId: "angadkumar70676@gmail.com",
  phoneNumber: "9625348008",
  businessName: "",
  location: "noida",
  service: "other",
  customService: "edkfdkjf"
};

// Function to test creating a lead
async function testCreateLead() {
  try {
    console.log('Testing Lead Creation...');
    const response = await axios.post(BASE_URL, testLeadData);
    console.log('✅ Lead created successfully:', response.data);
    return response.data.data._id; // Return the lead ID for further testing
  } catch (error) {
    console.error('❌ Error creating lead:', error.response?.data || error.message);
  }
}

// Function to test getting all leads
async function testGetAllLeads() {
  try {
    console.log('\nTesting Get All Leads...');
    const response = await axios.get(BASE_URL, {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE' // Replace with actual token
      }
    });
    console.log('✅ Leads retrieved successfully:', response.data);
  } catch (error) {
    console.error('❌ Error getting leads:', error.response?.data || error.message);
  }
}

// Function to test getting lead by ID
async function testGetLeadById(leadId) {
  try {
    console.log('\nTesting Get Lead by ID...');
    const response = await axios.get(`${BASE_URL}/${leadId}`, {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE' // Replace with actual token
      }
    });
    console.log('✅ Lead retrieved successfully:', response.data);
  } catch (error) {
    console.error('❌ Error getting lead:', error.response?.data || error.message);
  }
}

// Function to test updating a lead
async function testUpdateLead(leadId) {
  try {
    console.log('\nTesting Update Lead...');
    const updateData = {
      status: 'contacted',
      notes: 'Customer contacted via phone'
    };
    const response = await axios.put(`${BASE_URL}/${leadId}`, updateData, {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE' // Replace with actual token
      }
    });
    console.log('✅ Lead updated successfully:', response.data);
  } catch (error) {
    console.error('❌ Error updating lead:', error.response?.data || error.message);
  }
}

// Function to test getting lead statistics
async function testGetLeadStats() {
  try {
    console.log('\nTesting Get Lead Statistics...');
    const response = await axios.get(`${BASE_URL}/stats`, {
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN_HERE' // Replace with actual token
      }
    });
    console.log('✅ Lead statistics retrieved successfully:', response.data);
  } catch (error) {
    console.error('❌ Error getting lead stats:', error.response?.data || error.message);
  }
}

// Main test function
async function runTests() {
  console.log('🚀 Starting Lead Generation API Tests...\n');
  
  // Test 1: Create a lead (public endpoint - no auth required)
  const leadId = await testCreateLead();
  
  // Test 2: Get all leads (requires authentication)
  await testGetAllLeads();
  
  // Test 3: Get lead by ID (requires authentication)
  if (leadId) {
    await testGetLeadById(leadId);
  }
  
  // Test 4: Update lead (requires authentication)
  if (leadId) {
    await testUpdateLead(leadId);
  }
  
  // Test 5: Get lead statistics (requires authentication)
  await testGetLeadStats();
  
  console.log('\n✨ All tests completed!');
}

// Run the tests
runTests().catch(console.error);

// API Documentation
console.log(`
📚 Lead Generation API Documentation:

🔗 Base URL: ${BASE_URL}

📝 Endpoints:

1. POST /api/leads/ - Create a new lead (Public)
   Body: {
     "name": "string",
     "emailId": "string",
     "phoneNumber": "string",
     "businessName": "string" (optional),
     "location": "string" (optional),
     "service": "string" (optional, default: "other"),
     "customService": "string" (optional),
     "source": "string" (optional, default: "website"),
     "notes": "string" (optional)
   }

2. GET /api/leads/ - Get all leads (Protected)
   Query Parameters:
   - page: number (default: 1)
   - limit: number (default: 10)
   - status: string (filter by status)
   - source: string (filter by source)
   - search: string (search in name, email, phone, business, location)
   - sortBy: string (default: "createdAt")
   - sortOrder: "asc" | "desc" (default: "desc")

3. GET /api/leads/stats - Get lead statistics (Protected)

4. GET /api/leads/:id - Get lead by ID (Protected)

5. PUT /api/leads/:id - Update lead (Protected)
   Body: Any lead fields to update

6. DELETE /api/leads/:id - Delete lead (Protected, soft delete)

7. PUT /api/leads/bulk/update - Bulk update leads (Protected)
   Body: {
     "leadIds": ["id1", "id2", ...],
     "updateData": { field: value }
   }

🔐 Authentication:
- Public endpoints: No authentication required
- Protected endpoints: Require Bearer token in Authorization header

📊 Lead Status Options:
- "new" (default)
- "contacted"
- "qualified"
- "converted"
- "lost"

💡 Example Usage with curl:

# Create a lead
curl -X POST ${BASE_URL} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(testLeadData, null, 2)}'

# Get all leads (with auth)
curl -X GET ${BASE_URL} \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Update a lead (with auth)
curl -X PUT ${BASE_URL}/LEAD_ID \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \\
  -H "Content-Type: application/json" \\
  -d '{"status": "contacted", "notes": "Customer contacted"}'
`); 