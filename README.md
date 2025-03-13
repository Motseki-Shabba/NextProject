🌟 **Boxfusion Fitness**
**Overview**


Boxfusion Fitness is a comprehensive Next.js application designed to connect personal trainers with their clients through a feature-rich platform for nutrition planning and fitness management. It supports:

Comprehensive client management

Customized meal planning

Detailed food item tracking

🏋️‍♂️ **Key Features**


1. For Fitness Professionals
Simple trainer registration and secure login.

Comprehensive client profile management.

Custom meal plan creation and assignment.

Extensive food database management.

Intuitive dashboard interface.

2. **For Clients**


Streamlined registration through trainer invitation.

Secure access to a personal dashboard.

Easy viewing of assigned nutrition plans.

Mobile-responsive design for on-the-go access.



🧱 **Technology Foundation**


Core Framework: Next.js with App Router architecture.

Interface Design: Ant Design component library.

Data Management: Context API paired with useReducer.

Backend Communication: Axios for API integration.

Security: JWT-based authentication system.



🛠️ **Development Setup**


System Requirements
Node.js (v16+)

Package manager (npm/yarn)

Local Installation
Get the codebase:

bash
git clone https://github.com/yourusername/fusionfit.git
cd fusionfit
Set up dependencies:

bash
npm install
Configure environment: Create .env.local file with the following:

bash
NEXT_PUBLIC_API_URL=https://body-vault-server-b9ede5286d4c.herokuapp.com
Launch development server:

bash
npm run dev
Visit http://localhost:3000 to view the application.



🗂️ **Codebase Organization**
bash
fusionfit/
├── app/                 # Page routes and layouts
├── components/          # Reusable interface elements
│   ├── auth/            # Login/registration elements
│   ├── CreateClient/    # Client management interfaces
│   ├── FoodItems/       # Food-related interfaces
├── providers/           # State management contexts
├── public/              # Static resources
├── styles/              # Global styling
└── utils/               # Helper functions



🔗 **API Endpoints**
The backend offers the following endpoints:

User Management: Handles registration, authentication, and profile access.

Client Operations: Supports profile creation and management.

Nutrition Database: Enables food item retrieval, categorization, and creation.

Meal Planning: Facilitates plan creation, assignment, and retrieval.
