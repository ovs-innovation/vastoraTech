# Lead Generation API

A comprehensive API for managing leads in your business application. This API provides full CRUD operations for lead management with features like filtering, searching, and statistics.

## Features

- ✅ Create leads (public endpoint)
- ✅ Get all leads with pagination and filtering
- ✅ Get lead by ID
- ✅ Update lead information
- ✅ Delete leads (soft delete)
- ✅ Lead statistics and analytics
- ✅ Bulk operations
- ✅ Email notifications for new leads
- ✅ Search functionality
- ✅ Status tracking
- ✅ Assignment to team members

## API Endpoints

### Base URL
```
http://localhost:5000/api/leads
```

### 1. Create Lead (Public)
**POST** `/api/leads/`

Create a new lead. This endpoint is public and doesn't require authentication.

**Request Body:**
```json
{
  "name": "Angad Kumar",
  "emailId": "angadkumar70676@gmail.com",
  "phoneNumber": "9625348008",
  "businessName": "",
  "location": "noida",
  "service": "other",
  "customService": "edkfdkjf",
  "source": "website",
  "notes": "Customer interested in custom service"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead created successfully",
  "data": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "Angad Kumar",
    "emailId": "angadkumar70676@gmail.com",
    "phoneNumber": "9625348008",
    "businessName": "",
    "location": "noida",
    "service": "other",
    "customService": "edkfdkjf",
    "status": "new",
    "source": "website",
    "notes": "Customer interested in custom service",
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### 2. Get All Leads (Protected)
**GET** `/api/leads/`

Get all leads with pagination, filtering, and search capabilities. Requires authentication.

**Query Parameters:**
- `page` (number, default: 1) - Page number
- `limit` (number, default: 10) - Items per page
- `status` (string) - Filter by status
- `source` (string) - Filter by source
- `search` (string) - Search in name, email, phone, business, location
- `sortBy` (string, default: "createdAt") - Sort field
- `sortOrder` (string, default: "desc") - Sort order ("asc" or "desc")

**Example:**
```
GET /api/leads/?page=1&limit=10&status=new&search=angad
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
      "name": "Angad Kumar",
      "emailId": "angadkumar70676@gmail.com",
      "phoneNumber": "9625348008",
      "businessName": "",
      "location": "noida",
      "service": "other",
      "customService": "edkfdkjf",
      "status": "new",
      "source": "website",
      "notes": "",
      "assignedTo": null,
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 1,
    "totalLeads": 1,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

### 3. Get Lead Statistics (Protected)
**GET** `/api/leads/stats`

Get lead statistics and analytics. Requires authentication.

**Response:**
```json
{
  "success": true,
  "data": {
    "total": 150,
    "today": 5,
    "byStatus": {
      "new": 45,
      "contacted": 30,
      "qualified": 25,
      "converted": 40,
      "lost": 10
    }
  }
}
```

### 4. Get Lead by ID (Protected)
**GET** `/api/leads/:id`

Get a specific lead by ID. Requires authentication.

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "Angad Kumar",
    "emailId": "angadkumar70676@gmail.com",
    "phoneNumber": "9625348008",
    "businessName": "",
    "location": "noida",
    "service": "other",
    "customService": "edkfdkjf",
    "status": "new",
    "source": "website",
    "notes": "",
    "assignedTo": null,
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### 5. Update Lead (Protected)
**PUT** `/api/leads/:id`

Update a lead's information. Requires authentication.

**Request Body:**
```json
{
  "status": "contacted",
  "notes": "Customer contacted via phone",
  "assignedTo": "60f7b3b3b3b3b3b3b3b3b3b4"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead updated successfully",
  "data": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "Angad Kumar",
    "emailId": "angadkumar70676@gmail.com",
    "phoneNumber": "9625348008",
    "businessName": "",
    "location": "noida",
    "service": "other",
    "customService": "edkfdkjf",
    "status": "contacted",
    "source": "website",
    "notes": "Customer contacted via phone",
    "assignedTo": "60f7b3b3b3b3b3b3b3b3b3b4",
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T11:00:00.000Z"
  }
}
```

### 6. Delete Lead (Protected)
**DELETE** `/api/leads/:id`

Delete a lead (soft delete). Requires authentication.

**Response:**
```json
{
  "success": true,
  "message": "Lead deleted successfully"
}
```

### 7. Bulk Update Leads (Protected)
**PUT** `/api/leads/bulk/update`

Update multiple leads at once. Requires authentication.

**Request Body:**
```json
{
  "leadIds": ["60f7b3b3b3b3b3b3b3b3b3b3", "60f7b3b3b3b3b3b3b3b3b3b4"],
  "updateData": {
    "status": "contacted",
    "assignedTo": "60f7b3b3b3b3b3b3b3b3b3b5"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "2 leads updated successfully",
  "modifiedCount": 2
}
```

## Lead Status Options

- `new` - Newly created lead (default)
- `contacted` - Lead has been contacted
- `qualified` - Lead is qualified for conversion
- `converted` - Lead has been converted to customer
- `lost` - Lead is lost/not interested

## Authentication

- **Public endpoints**: No authentication required
  - POST `/api/leads/` (Create lead)

- **Protected endpoints**: Require Bearer token in Authorization header
  - All other endpoints

**Example:**
```
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Lead with this email or phone number already exists"
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Access denied. No token provided."
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Lead not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Error creating lead",
  "error": "Error details"
}
```

## Testing

Run the test file to test all endpoints:

```bash
cd backend
node test-lead-api.js
```

## Environment Variables

Add these to your `.env` file for email notifications:

```env
ADMIN_EMAIL=admin@yourcompany.com
EMAIL_USER=your-email@yourcompany.com
```

## Database Schema

The Lead model includes the following fields:

- `name` (required) - Lead's name
- `emailId` (required) - Lead's email address
- `phoneNumber` (required) - Lead's phone number
- `businessName` (optional) - Business name
- `location` (optional) - Location
- `service` (optional) - Service type (default: "other")
- `customService` (optional) - Custom service description
- `status` (optional) - Lead status (default: "new")
- `source` (optional) - Lead source (default: "website")
- `notes` (optional) - Additional notes
- `assignedTo` (optional) - Admin assigned to this lead
- `isActive` (optional) - Whether lead is active (default: true)
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## Integration Examples

### Frontend Integration (JavaScript)

```javascript
// Create a new lead
const createLead = async (leadData) => {
  try {
    const response = await fetch('/api/leads/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating lead:', error);
  }
};

// Get all leads (with authentication)
const getLeads = async (token, filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters);
    const response = await fetch(`/api/leads/?${queryParams}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching leads:', error);
  }
};
```

### cURL Examples

```bash
# Create a lead
curl -X POST http://localhost:5000/api/leads/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Angad Kumar",
    "emailId": "angadkumar70676@gmail.com",
    "phoneNumber": "9625348008",
    "businessName": "",
    "location": "noida",
    "service": "other",
    "customService": "edkfdkjf"
  }'

# Get all leads (with auth)
curl -X GET http://localhost:5000/api/leads/ \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Update a lead
curl -X PUT http://localhost:5000/api/leads/LEAD_ID \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{"status": "contacted", "notes": "Customer contacted"}'
```

## Features & Benefits

1. **Public Lead Creation**: Anyone can submit leads without authentication
2. **Duplicate Prevention**: Prevents duplicate leads based on email and phone
3. **Email Notifications**: Automatic email notifications for new leads
4. **Advanced Filtering**: Filter by status, source, and search functionality
5. **Pagination**: Efficient handling of large datasets
6. **Soft Delete**: Leads are marked as inactive rather than permanently deleted
7. **Statistics**: Built-in analytics and reporting
8. **Bulk Operations**: Update multiple leads at once
9. **Assignment**: Assign leads to team members
10. **Audit Trail**: Timestamps for creation and updates

This API provides a complete solution for lead generation and management in your business application. 