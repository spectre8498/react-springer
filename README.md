# React + TypeScript + Vite

# 🚀 React-Springer  

A **modern, accessible, and scalable** React project using **Material UI** for styling, built with **best practices** in component design, state management, and performance optimization.

---

## 📌 Features  
✅ **Component-Based Architecture** - Modular and reusable UI components  
✅ **Material UI Integration** - Consistent and modern styling  
✅ **100% Accessibility Compliance** - WCAG 2.1 guidelines followed  
✅ **Optimized Performance** - Efficient rendering  
✅ **Responsive UI** - Works across all screen sizes  

---

## 📌 Project Details  

- **Project Name:** React-Springer  
- **Version:** 1.0.0  
- **Author:** Sourabh Ambugekar  
- **GitHub Repository:** [GitHub Link](https://github.com/spectre8498/react-springer)  
- **Live Demo:** [URL]  
- **Tech Stack:** React.js, Material UI, Recharts, React Router  

---

## 📂 Project Architecture  

--React Spring
  --Components
    --Charts
      --CompletedArticlesChart
      --CompletedIssuesChart
      --ManuscriptStatusChart
    --Dashboard
    --ProjectTaskDetailsComponent
    --ProjectTasksTableComponent
    --SearchInputComponent
    --SidePanel
    --TaskActionsDialogComponent
    --TasksTableComponent


## 🏗️ **Component Design**  

- **Atomic Design Principle:**  
  - **Atoms** - Buttons, Inputs, Labels  
  - **Molecules** - Form fields, Cards, Dropdowns  
  - **Organisms** - Search Bars  
  - **Templates** - Dashboard Layout, Forms  
  - **Pages** - Dashboard, Project Details  

- **Styling Approach:**  
  - Combination of **CSS Modules** and **Material UI Styles**  

---

## 🎨 **Material UI & Styling**  

We use **Material UI** for styling to maintain a **consistent and responsive design**:

- Pre-built **MUI Components** (Buttons, Tables, Dialogs)
- **Theme Customization** for a unique look
- **Typography & Grid System** for better layout structuring

---

## 📊 **Dashboard & Features**  

### 🔹 **Three Charts (Using Recharts)**  

1️⃣ **Completed Articles Chart** 📈  
   - Displays the number of completed articles over time.  
   - Uses **Bar Chart** from Recharts.  

2️⃣ **Manuscript Status Chart** 📊  
   - Shows the status of manuscripts (Pending, In Review, Approved).  
   - Uses **Pie Chart** for clear visualization.  

3️⃣ **Completed Issues Chart** 📊  
   - Tracks completed issues in different time frames.  
   - Uses **Line Chart** for trend analysis.  

---

### 📋 **Ongoing Tasks Table**  

🔍 **Search Features:**  
   - Users can search tasks by **Manuscript Author**, **Author** and **Assigned TO**.  

✏️ **Edit Feature:**  
   - Each row contains an **Pencil Icon Button** allowing quick modifications.  
   - Users can update task details from the dialog box.  

📌 **Pagination Support:**  
   - Large data sets are split into pages for better performance.  

---

### 📌 **Projects Tasks Table**  

🛠️ **Same Features as Ongoing Tasks:**  
   - **Search by Task Name, Assigned User**  
   - **Edit Any Row Inline**  
   - **Pagination for Large Data Sets**  

---

### 📑 **Side Panel Navigation**  

The **side panel** allows easy navigation between:  

✅ **Dashboard** - Overview of tasks & charts.  
✅ **Main Page** - Detailed manuscript and task information.  
✅ **Project Details Form** - A structured form to enter/edit project information.  

---

### 📝 **Edit Task Dialog (Popup Modal)**  

🔹 **How It Works:**  
- When the **Pencil Icon Button** is clicked, a **dialog box** opens.  
- The user can **enter details** such as:  
  - **Author Name**  
  - **Assigned To**  
  - **Task Status** (Dropdown: Pending, In Progress, Completed)  
  - **Upload a File** (Supports `.docx`, `.pdf`)  

📂 **File Upload Feature:**  
- Allows users to attach necessary documents for the task.  
- Drag & Drop support for convenience.  

---

## 📝 **Edit Project Task (New Page)**  

🔹 **How It Works:**  
- When the **Edit Button** in **Project Tasks** is clicked, a **new page opens**.  
- The user can **enter and update details** for the selected project task.  
- Uses **React Router** for navigation between pages.  

📄 **Fields in the Edit Project Task Page:**  
✔ **Task Title** (Editable)  
✔ **Assigned Team Members** (Dropdown)  
✔ **Task Status** (Pending, In Progress, Completed)  
✔ **Due Date Selector**  
✔ **Task Description** (Rich Text Editor)  
✔ **File Upload** (Supports `.docx`, `.pdf`)  

🚀 **Auto-Save Feature:**  
- The form **autosaves changes** as the user updates fields.  
- Users can **navigate away** without losing progress.  

💾 **Save & Update Button:**  
- Users can manually **save changes** and return to the Project Tasks Table.  

🔙 **Back Navigation:**  
- A **"Back to Tasks"** button allows users to return to the previous list.  

---

## 🎯 **Achieving 100% Accessibility Score**  

🚀 **React-Springer** has been tested on **Google Lighthouse** and achieved a **100% Accessibility Score** ✅  

### 🔥 **How We Achieved 100% Accessibility:**  

1️⃣ **Semantic HTML Elements** (`<main>`, `<section>`, `<header>`, `<footer>`)  
2️⃣ **Keyboard Navigation Support** (`tabindex`, `aria-*` attributes)  
3️⃣ **Color Contrast Compliance** (WCAG 2.1 AA/AAA standards)  
4️⃣ **ARIA Roles & Labels** (`aria-label`, `aria-labelledby` for screen readers)  
5️⃣ **Skip Navigation Links** (For users who rely on keyboards/screen readers)  
6️⃣ **Accessible Forms** (Proper `label` associations, error messaging)  
7️⃣ **Focus Management** (Handling modal/dialog focus states)  

🔍 **Lighthouse 100% Accessibility Score Screenshot:**  
*(Add a screenshot showing the 100% score here)*  

---

## 📦 **Libraries Used**  

| Library         | Purpose |
|----------------|---------|
| **Material UI** | UI Components & Styling |
| **React Hook Form** | Form validation |
| **Recharts** | Data visualization |

## 🎯 Achieving 100% Accessibility Score  

🚀 **React-Springer** has been tested on **Google Lighthouse** and achieved a **100% Accessibility Score** ✅  

### 🔥 **How We Achieved 100% Accessibility:**  

1️⃣ **Semantic HTML Elements** (Using `<main>`, `<section>`, `<header>`, `<footer>`)  
2️⃣ **Keyboard Navigation Support** (Focusable elements with `tabindex`, `aria-*`)  
3️⃣ **Color Contrast Compliance** (Meeting WCAG 2.1 AA standards)  
4️⃣ **ARIA Roles & Labels** (`aria-label`, `aria-labelledby` for screen readers)  
5️⃣ **Skip Navigation Links** (For users who rely on keyboards/screen readers)  
6️⃣ **Accessible Forms** (Proper `label` associations, error messaging)  
7️⃣ **Focus Management**

---

## 🚀 **Getting Started**  

Follow these steps to set up and run the project locally:  

### 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/spectre8498/react-springer.git
cd react-springer
npm install
npm start