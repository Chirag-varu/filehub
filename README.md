# FileHub - 🚀 The only file sharing solution you need.

FileHub is a web application that allows users to securely store, manage, and share their files and documents. With an intuitive interface and robust security features, FileHub makes file storage and collaboration seamless.

Working Link: https://filehub-cv.vercel.app/

---

## ✨ Features

- 🔒 **Secure File Storage** – Upload and store files securely in the cloud.
- 🔗 **File Sharing** – Share files with others using unique links.
- 🛡️ **Access Control** – Set permissions to control who can view files.
- 📂 **Organized Management** – Categorize files into folders for better organization.
- 🤝 **Real-Time Collaboration** – Work on shared documents with teammates.
- 📑 **Multi-Format Support** – Supports images, PDFs, documents, videos, and more.
- 🔑 **User Authentication** – Secure sign-in and user management.

![Screenshot (103)](https://github.com/user-attachments/assets/7807be59-859d-4cbc-be1b-ce2e1bac9856)

![Screenshot (102)](https://github.com/user-attachments/assets/b902262f-7c98-4d19-819f-1be8679d42ab)

---

## 🛠 Tech Stack  

### **Frontend**  
- **Next.js 15** (React 19 & TypeScript)  
- **Tailwind CSS** (with Tailwind Merge & Animations)  
- **Radix UI** (Dialog, Select, Tooltip, Toast, etc.)  
- **Lucide React** (Icons)  
- **Recharts** (Data Visualization)  
- **React Hook Form** (Form Handling & Validation)  
- **Zod** (Schema Validation)  
- **React Dropzone** (File Upload)  

### **Backend & Storage**  
- **Appwrite** (Node SDK for Database & Storage)  

### **Tooling & Utilities**  
- **ESLint & Prettier** (Code Formatting & Linting)  
- **PostCSS** (CSS Processing)  
- **Sonner / React Hot Toast** (Notifications)  
- **Use Debounce** (Optimized State Management)

---

## 🚀 Getting Started

### 🛠 Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/filehub.git
cd filehub
npm install  # or yarn install
```

### ▶ Running the Application
Start the development server:

```bash
npm run dev  # or yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to access the app.

---

## 📡 API Endpoints

### 🔐 Authentication
- `POST /api/auth/register` – Register a new user.
- `POST /api/auth/login` – User login.

### 📂 File Management
- `POST /api/files/upload` – Upload a file.
- `GET /api/files/:id` – Retrieve a file.
- `DELETE /api/files/:id` – Delete a file.
- `POST /api/files/share` – Share a file with a link.

---

## 🛠 Technologies Used
- 🎨 **Frontend:** Next.js, TypeScript, Tailwind CSS, UI-Topia
- 🖥️ **Backend:** appwrite

---

## 🤝 Contributing
We welcome contributions! If you’d like to contribute:
1. 🍴 Fork the repository.
2. 🌿 Create a new branch: `git checkout -b feature-branch`.
3. 💾 Commit changes: `git commit -m 'Add new feature'`.
4. 📤 Push to the branch: `git push origin feature-branch`.
5. 🔄 Open a Pull Request.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact
For queries or feedback, feel free to reach out via [📩 email](mailto:chiragvaru0@gmail.com) or open an issue on GitHub.

