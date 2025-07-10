# API Login Integration - BuketKu

## Overview
The LoginScreen menggunakan sistem login hybrid yang menggabungkan autentikasi email/password dengan fetch foto profil dari API external.

## System Design

### 1. Login Authentication
- **Input**: Email dan password
- **Credentials**: `nama@gmail.com` / `123`
- **Purpose**: Autentikasi untuk masuk ke aplikasi

### 2. Photo Fetch from API
- **Triggered**: Setelah login berhasil
- **Credentials**: Fixed NIM dan API password
- **Purpose**: Mengambil foto profil dan data user

## API Integration Details

### Endpoint
```
https://cloud-jalurlangitv2.ikraf.or.id/api/applms/tarik_data
```

### Authentication
- Basic Authentication: `adminx:adminx123`

### Fixed Parameters for Photo Fetch
- `nim`: 23040201
- `password`: khoirunnisanurfadilah0904

### Response Structure
```json
{
  "success": true,
  "data": {
    "nama": "User Name",
    "nim": "23040201", 
    "kelas": "User Class",
    "foto": "https://photo-url.jpg"
  }
}
```

### Features Implemented

1. **API Login Integration**
   - Fetches user data from the API
   - Handles authentication with Basic Auth
   - 10-second timeout for API calls
   - Proper error handling for network issues

2. **Photo Display**
   - Shows user photo if available in API response
   - Displays user information (name, NIM, class)
   - Responsive photo container with styling

3. **Enhanced UI**
   - Loading indicator during API calls
   - User-friendly error messages
   - Help text for users
   - Demo/Quick login buttons with real credentials

4. **Error Handling**
   - Network timeout handling
   - API error responses
   - User-friendly error messages
   - Fallback for missing data

### Usage

1. **Normal Login**
   - Enter NIM: `23040201`
   - Enter Password: `khoirunnisanurfadilah0904`
   - Click "Masuk" to authenticate via API

2. **Quick Login**
   - Click "Isi Kredensial" to auto-fill the form
   - Then click "Masuk" to login

3. **Demo Login**
   - Click "Login Demo" to bypass API and go directly to app

### Code Structure

```typescript
// API Call
const response = await fetch(
  `https://cloud-jalurlangitv2.ikraf.or.id/api/applms/tarik_data?password=${password}&nim=${nim}`,
  {
    method: 'GET',
    headers: {
      Authorization: 'Basic ' + btoa('adminx:adminx123'),
    },
    signal: controller.signal,
  }
);

// Handle Response
if (data && data.success) {
  setUserData(data.data);
  if (data.data && data.data.foto) {
    setPhotoUri(data.data.foto);
  }
  // Navigate to main app
}
```

### UI Components Added

1. **Photo Container**
   - Displays user photo from API
   - Styled with border and proper sizing
   - Shows "Foto Profil" label

2. **User Data Container**
   - Shows user name, NIM, and class
   - Styled with green theme
   - Only visible after successful login

3. **Loading State**
   - Activity indicator during API call
   - Disabled button during loading
   - "Memproses..." text

4. **Help Text**
   - Guide for users about using LMS credentials
   - Styled with green theme and icon

### Error Handling

- **Network Errors**: Shows generic error message
- **API Errors**: Shows specific error from API
- **Timeout**: Shows timeout message
- **Invalid Credentials**: Shows authentication error
- **Empty Fields**: Shows validation error

The login system now works with real API integration while maintaining a smooth user experience with proper loading states and error handling.
