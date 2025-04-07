```markdown
# 🍎 ReactJS Item Search App with Favorites & Debounced Search

This is a simple and elegant ReactJS web application that allows users to:

- 🔍 Search for items from a local mock API
- 🌟 Add and manage a "Favorites" list
- ⏳ Perform debounced search to reduce API calls while typing

---

## 🚀 Features

- ✅ **Search items** from a local mock API (`json-server`)
- ⏳ **Debounced Search** using `lodash.debounce`
- 🌟 **Favorites list** with add/remove functionality
- 💅 Responsive **styling using Tailwind CSS**
- 📦 Modular, reusable components and organized structure

---

## 📁 Project Structure

```
├── README.md
├── db.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── components
    │   ├── FavoritesList.jsx
    │   ├── ItemList.jsx
    │   └── SearchBar.jsx
    ├── index.js
    ├── logo.svg
    └── reportWebVitals.js

```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/benjaminmweribaya/react-favorites-search.git
cd react-favorites-search
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Run the Mock API with `json-server`

> Make sure you have `json-server` installed globally:

```bash
npm install -g json-server
```

Then run the server:

```bash
json-server --watch db.json --port 5000
```

> This will host your API at `http://localhost:5000/items`.

---

### 4. Run the React App

```bash
npm start
```

> The app will be available at `http://localhost:3000`.

---

## 🧪 Example API Data (`db.json`)

```json
{
  "items": [
    { "id": 1, "name": "Apple" },
    { "id": 2, "name": "Banana" },
    { "id": 3, "name": "Carrot" },
    { "id": 4, "name": "Dates" },
    { "id": 5, "name": "Eggplant" },
    { "id": 6, "name": "Fig" },
    { "id": 7, "name": "Grapes" },
    { "id": 8, "name": "Honeydew" }
  ]
}
```

---

## 🧠 Key Technologies Used

| Tool/Library       | Purpose                            |
|--------------------|------------------------------------|
| ReactJS            | Frontend framework                 |
| Axios              | HTTP requests                      |
| Lodash.debounce    | Debounced search functionality     |
| CSS                | Styling and layout                 |
| json-server        | Local mock API                     |

---

## 📋 Decisions and Justifications

- 🧪 **Used `json-server`** to simulate a real API environment locally, avoiding the need for external endpoints
- ⏱ **Implemented debounced search** using `lodash.debounce` to avoid excessive API hits and improve UX
- 💡 **Used `name_like`** query param to filter by item name for more precise search results
- 📦 **Built modular components** for clean code and separation of concerns

---

## 📌 Future Improvements

- Add image URLs or categories to items
- Persist favorites using localStorage
- Use a real public API (e.g. OpenLibrary, TheMealDB)
- Add dark mode toggle

---

## 👤 Author

**Benjamin Mweri Baya**

Full-Stack Software Developer | Chemical Engineer | UI/UX Designer 
📧 b3njaminbaya@gmail.com  
🔗 [LinkedIn](http://www.linkedin.com/in/benjamin-mweri-baya) | [GitHub](https://github.com/benjaminmweribaya)

---

## 📄 License

This project is licensed under the MIT License.
```


