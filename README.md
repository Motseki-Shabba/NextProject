Boxfusion Fitness
Project Overview
FusionFit is a comprehensive Next.js application designed to connect personal trainers with their clients through a feature-rich platform for nutrition planning and fitness management. The system enables efficient client management, customized meal planning, and detailed food item tracking.
Key Capabilities
The platform offers distinct experiences for two user types:
For Fitness Professionals:
Simple trainer registration and secure login
Comprehensive client profile management
Custom meal plan creation and assignment
Extensive food database management
Intuitive dashboard interface
For Clients:
Streamlined registration through trainer invitation
Secure access to personal dashboard
Easy viewing of assigned nutrition plans
Mobile-responsive design for on-the-go access
Technology Foundation
Core Framework: Next.js with App Router architecture
Interface Design: Ant Design component library
Data Management: Context API paired with useReducer
Backend Communication: Axios for API integration
Security: JWT-based authentication system
Development Setup
System Requirements
Node.js (v16+)
Package manager (npm/yarn)
Local Installation
Get the codebase:
Copygit clone https://github.com/yourusername/fusionfit.gitcd fusionfit
Set up dependencies:
Copynpm install
Configure environment: Create .env.local with:
CopyNEXT_PUBLIC_API_URL=https://body-vault-server-b9ede5286d4c.herokuapp.com
Launch development server:
Copynpm run dev
Visit http://localhost:3000 to view the application
Codebase Organization
Copyfusionfit/├── app/                 # Page routes and layouts├── components/          # Reusable interface elements│   ├── auth/            # Login/registration elements│   ├── CreateClient/    # Client management interfaces│   ├── FoodItems/       # Nutrition tracking components│   └── policy/          # Terms and conditions modules├── providers/           # State management contexts├── public/              # Static resources├── styles/              # Global styling└── utils/               # Helper functions
API Endpoints
The platform connects to a comprehensive backend with endpoints including:
User Management: Registration, authentication, and profile access
Client Operations: Profile creation and management
Nutrition Database: Food item retrieval, categorization, and creation
Meal Planning: Plan creation, assignment, and retrieval
Project Context
This application represents a graduate-level frontend project demonstrating proficiency in modern React development practices, API integration patterns, state management techniques, and secure authentication implementation.
