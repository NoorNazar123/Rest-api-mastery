# 📝 Notes API (CRUD) — Learning Project

## 📌 Project Overview

This is a simple RESTful API built using **Node.js, Express, and MongoDB (Mongoose)**.
The goal of this project was to understand and practice **basic CRUD operations** and how backend APIs work.

---

## 🎯 What I Learned

Through this project, I learned:

* How to set up an Express server
* How to connect Node.js with MongoDB using Mongoose
* How to create a schema and model
* How CRUD operations work in backend development
* How to handle requests and send structured responses
* Basic error handling using try/catch
* Using environment variables (`.env`) for secure configuration

---

## 🛠 Tech Stack

* **Node.js** – runtime environment
* **Express.js** – backend framework
* **MongoDB** – database
* **Mongoose** – ODM (Object Data Modeling)
* **dotenv** – environment variable management

---

## ⚙️ Project Structure (Simple)

* `index.js` → main server file
* `.env` → stores MongoDB connection string

---

## 🧠 Core Concepts Practiced

### 1. Database Connection

* Connected MongoDB using Mongoose
* Used async/await for handling connection
* Handled connection errors

---

### 2. Schema & Model

Defined a simple Note schema:

* `title` (String)
* `description` (String)

Created a model to interact with the database.

---

### 3. CRUD Operations

#### ➕ Create (POST /notes)

* Accepts `title` and `description`
* Validates input
* Stores note in MongoDB using `create()`

---

#### 📖 Read (GET /notes)

* Fetches all notes from database using `find()`

---

#### 🔍 Read Single (GET /notes/:id)

* Fetches one note using `findById()`

---

#### ✏️ Update (PATCH /notes/:id)

* Updates note using `findByIdAndUpdate()`
* Returns updated document using `{ new: true }`

---

#### ❌ Delete (DELETE /notes/:id)

* Deletes note using `findByIdAndDelete()`

---

## 📬 Response Format

Created a helper class `FormatResponse` to keep responses consistent:

```json
{
  "statusCode": 200,
  "message": "Success message",
  "data": {}
}
```

---

## ⚠️ Error Handling

* Used `try/catch` for async operations
* Returned proper HTTP status codes:

  * `200` → success
  * `201` → created
  * `400` → bad request
  * `404` → not found
  * `500` → server error

---

## 🔐 Environment Variables

Used `.env` file to store MongoDB connection string:

```env
MONGO_DB=your_connection_string
```

---

## ▶️ How to Run the Project

1. Install dependencies

```bash
npm install
```

2. Create `.env` file and add your MongoDB URI

3. Start server

```bash
node index.js
```

4. Server runs at:

```
http://localhost:4000
```

---

## 🧪 Testing

You can test API using:

* Postman
* Thunder Client
* Browser (for GET requests)

---

## 📈 Future Improvements

* Add validation middleware
* Add authentication (JWT)
* Structure project using MVC pattern
* Deploy to cloud (Render / Railway)
* Add frontend

---

## 💡 Key Takeaways

* CRUD is the foundation of backend development
* Mongoose simplifies database operations
* Clean and consistent responses improve API usability
* Error handling is important even in small projects

---

## 👨‍💻 Author

M Noor e Nazar

---

## 📚 Purpose

This project is built for **learning and revision** to strengthen backend fundamentals.
