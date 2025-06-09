## 🛒 E-commerce Web Application

A full-stack **E-commerce** application built using the **MERN Stack** to simplify the online shopping experience for users and enable powerful admin product control and order management.

---

### 📸 Project UI Screenshots

Below are the screenshots of the frontend UI stored at:
`client/src/assets`

<h2>User UI</h2>

<table>
  <tr>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20140939.png" width="100%"/></td>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20141049.png" width="100%"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20141121.png" width="100%"/></td>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20141313.png" width="100%"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20141411.png" width="100%"/></td>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20141449.png" width="100%"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20141529.png" width="100%"/></td>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20141558.png" width="100%"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20141645.png" width="100%"/></td>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20142121.png" width="100%"/></td>
  </tr>
</table>

<h2>Admin UI</h2>

<table>
  <tr>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20142448.png" width="100%"/></td>
    <td><img src="https://github.com/VanshK-MERN71/E-commerce/blob/main/client/src/assets/Screenshot%202025-06-09%20142744.png" width="100%"/></td>
  </tr>
</table>

---

### 🛠️ Tech Stack

#### 🔷 Frontend

* **Vite.js (React)**
* **Tailwind CSS**
* **Axios API**
* **React Router DOM**
* **Redux Toolkit** (for state management)

#### 🔶 Backend

* **Node.js**
* **Express.js**
* **MongoDB** (Mongoose)
* **jsonwebtoken**
* **multer + cloudinary** (for image uploads)
* **cookie-parser**
* **cors**
* **dotenv**
* **paypal-rest-sdk**

---

### 🔧 How to Clone and Setup Locally

#### 📁 Step 1: Clone the Repository

```bash
git clone https://github.com/VanshK-MERN71/E-commerce.git
cd E-commerce
```

#### 🚀 Step 2: Setup Frontend

```bash
cd client
npm install
npm run dev
```

#### ⚙️ Step 3: Setup Backend

```bash
cd ../server
npm install
```

👉 Create a `.env` file inside `server/` folder with the following content:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/dbname
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_secret
JWT_SECRET_Key=your_jwt_secret_key any think you write harelike(349493498h3jfjh3uyy7rf)
```

```bash
npm run dev
```

---

### 🤝 Contribution

Pull requests are welcome! For major changes, open an issue first to discuss your ideas.

---

### 📬 Contact

**Author:** Vansh Khanna
**GitHub:** [@VanshK-MERN71](https://github.com/VanshK-MERN71)

---

### 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Thanks for checking out the project! 🙌
