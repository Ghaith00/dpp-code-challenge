# 📌 Digital Product Passport - Front-End Challenge

## 📖 Overview
This project is a **Digital Product Passport** application that fetches and displays real-time data from an **API** containing verifiable credentials for a car battery. The goal is to **dynamically process and present** the data in an interactive and user-friendly manner.

[Demo Link](https://dpp-code-challenge-six.vercel.app/)

---

## 🚀 Features

### 🔹 API Integration & Data Handling
- Fetches **real-time** data from the **Digital Product Passport API**.
- Implements **error handling** for network issues and API failures.
- Processes and structures the data for an optimized UI. 🚧

### 🔹 Interactive UI & Components
- **Sidebar Navigation** 🏠 - Allows users to navigate different sections.
- **Dark Mode** 🌙 - Toggle between **light** and **dark themes** dynamically.
- **Expandable Sections** 📂 - Users can view detailed product specifications interactively. 🚧
- **Filter & Search** 🔍 - Enables searching and filtering through data. 🚧
- **Charts & Tables** 📊 - Data is represented visually using **Recharts & Tailwind-styled tables**.

### 🔹 Fully Responsive Design
- Optimized for **mobile, tablet, and desktop**.
- Uses **TailwindCSS** for a modern, clean UI.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend framework |
| **Vite.js** | Fast development server |
| **TailwindCSS** | Styling framework |
| **Recharts** | Interactive charts & data visualization |
| **TypeScript** | Static typing & maintainability |

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Ghaith00/dpp-code-challenge.git
cd dpp-code-challenge
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
Your app should now be running at `http://localhost:5173/` (default Vite port).

---

## 📂 Project Structure
```
src
 ┣ 📂 core              # Shared code
 │  ┣ 📂 components     # Reusable UI components (Sidebar, Topbar, Tables, etc.)
 │  ┣ 📂 router         # Application routing
 │  ┣ 📂 store          # Global state management
 │  ┗ 📂 utils          # Utility functions
 ┣ 📂 modules           # Business logic organized by feature
 │  ┣ 📂 Home          # Home page (services, store, tests, components, page)
 │  ┣ 📂 Product       # Product details (services, components, store, etc.)
 ┗ 📜 main.tsx         # App entry point
```

---

## 🔧 Configuration & Customization

### 🔹 Changing API Endpoint 🚧 not implemented 🚧
Modify `VITE_API_URL` in the `.env` file to point to a different API.

### 🔹 Customizing UI
Modify **TailwindCSS classes** in `src/core/components/` to style the UI differently.


---

## 📡 Deployment
To deploy on **Vercel**:
```sh
npm run build
vercel deploy
```
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 👨‍💻 Author & Contact
👤 **Your Ghaith Tabib**  
🔗 **GitHub:** [Ghaith00](https://github.com/Ghaith00)  

---

### 🎉 Enjoy building your Digital Product Passport! 🚀

