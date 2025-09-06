# ALX Listing App

## Description
The ALX Listing App is a simple Airbnb-like listing page built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **ESLint**.  
The goal of this project is to create a foundation for displaying property listings in a clean and reusable way while practicing modern web development tools and workflows.

---

## Project Structure

```
alx-listing-app/
│
├── components/
│   └── common/
│       ├── Card.tsx        # Reusable Card component for property details
│       └── Button.tsx      # Reusable Button component for actions (e.g., Book Now, Details)
│
├── interfaces/
│   └── index.ts            # TypeScript interfaces (e.g., CardProps, ButtonProps)
│
├── constants/
│   └── index.ts            # Reusable constants such as API URLs or configuration values
│
├── public/
│   └── assets/             # Static images, icons, and other assets for the app
│
├── pages/
│   ├── index.tsx           # Main entry point of the app
│   └── _app.tsx            # Custom App component for global styles
│
└── README.md               # Project documentation
```

---

## Running the Project Locally

Follow these steps to run the app on your machine:

1. **Clone the repository** (if applicable) or ensure you're inside the project folder:
   ```bash
   cd alx-listing-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the project in your browser**:
   ```
   http://localhost:3000
   ```

---

## Technologies Used
- **Next.js** – React framework for building web applications  
- **TypeScript** – Type safety and better developer experience  
- **Tailwind CSS** – Utility-first styling framework  
- **ESLint** – Code linting for cleaner code  
