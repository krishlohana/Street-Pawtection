# Street Pawtection
https://street-pawtection-krish-lohana.netlify.app/
A digital platform to help street animals through reporting, rescue, adoption, and education.

## Features

- 🐕 **Animal Reporting**: Report street animals in need of help
- 🏠 **Adoption Platform**: Browse and adopt rescued animals
- 👥 **Volunteer System**: Join our community of animal helpers
- 📚 **Educational Blog**: Learn about animal welfare
- 📊 **Admin Dashboard**: Manage reports and applications (protected)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd street-pawtection
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory and add:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Admin Dashboard Credentials
VITE_ADMIN_USERNAME=your_admin_username_here
VITE_ADMIN_PASSWORD=your_secure_admin_password_here
```

### 3. Supabase Setup
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the migration file in `supabase/migrations/` to create the required tables
3. Update your `.env` file with your Supabase URL and anon key

### 4. Run the Application
```bash
npm run dev
```

## Admin Dashboard

The admin dashboard is available at `/admin` and requires authentication.

**Security Features:**
- Username/password protection
- Session management (24-hour expiry)
- Environment variable configuration
- Secure logout functionality

## Deployment

This project is configured for Netlify deployment. Make sure to set your environment variables in your Netlify dashboard:

1. Go to your Netlify site settings
2. Navigate to "Environment variables"
3. Add all the variables from your `.env` file

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Supabase
- **Deployment**: Netlify
- **Icons**: Lucide React

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please contact the development team.

---

**Important Security Note**: Never commit your `.env` file to version control. The `.env.example` file shows the required variables without exposing sensitive data.
