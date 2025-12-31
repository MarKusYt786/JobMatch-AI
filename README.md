# 📄 ATS Resume Checker (JobMatch AI)

A **full-stack ATS-friendly Resume Checker** that analyzes a resume against a job description and provides:

- ✅ ATS score  
- ✅ Keyword match & missing keywords  
- ✅ AI-style improvement suggestions  
- ✅ Clean, recruiter-style UI  

Built with **React + Node.js + Express**, designed to simulate **real ATS behavior**.

---

## 🚀 Features

- 📄 PDF Resume Parsing (real text extraction)
- 🔍 Keyword Matching (Resume vs Job Description)
- 📊 ATS Score Calculation (logic-based)
- 🤖 AI Suggestions Engine (rule-based intelligence)
- 📈 Progress Bar & Visual Analysis
- 🛡️ Error Handling & Stability
- ⚡ Production-ready architecture

---

## 🧠 How It Works

1. User uploads a **PDF resume**
2. User pastes a **job description**
3. Backend:
   - Extracts resume text
   - Cleans & normalizes content
   - Matches keywords against JD
   - Calculates ATS score
   - Generates improvement suggestions
4. Frontend displays:
   - ATS score
   - Progress bar
   - Matched & missing keywords
   - AI suggestions

---

## 🗂️ Project Structure

ats-resume-checker/
│
├── README.md                # Project documentation
├── LICENSE                  # MIT License
│
├── server/
│   ├── controllers/
│   │   └── resumeController.js
│   │
│   ├── routes/
│   │   └── resumeRoutes.js
│   │
│   ├── services/
│   │   ├── resumeParser.js
│   │   ├── keywordMatcher.js
│   │   ├── scoreCalculator.js
│   │   └── aiSuggestions.js
│   │
│   ├── utils/
│   │   └── cleanText.js
│   │
│   ├── uploads/             # Temporary uploaded resume files
│   │
│   ├── index.js             # Express app entry point
│   ├── package.json
│   ├── package-lock.json
│   └── .env                 # Backend environment variables
│
├── client/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── UploadResume.jsx
│   │   │
│   │   ├── styles/
│   │   │   └── rightCard.css
│   │   │
│   │   ├── utils/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env                 # Frontend environment variables
│   ├── package.json
│   └── package-lock.json
│
└── .gitignore

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- Custom CSS (ATS-style UI)

### Backend
- Node.js
- Express.js
- Multer (file uploads)
- pdf-parse (resume parsing)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ats-resume-checker.git
cd ats-resume-checker
```

### 1️⃣ Backend Setup

```bash
cd server
npm install
npm run dev
```
Create .env inside server/:

```env
PORT=5000
NODE_ENV=development
```

### 1️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```
Create .env inside client/:

```env
VITE_API_URL=http://localhost:5000
```

## 🔗 API Endpoint

### Analyze Resume

```bash
Analyze Resume
```
### Form Data
- resume → PDF file
- jobDescription → text

### Response Example

```json
{
  "score": 78,
  "status": "ATS Friendly",
  "matchingKeywords": [],
  "missingKeywords": [],
  "suggestions": [],
  "preview": "Resume text..."
}
```

## Screenshot Section

![s1](https://github.com/user-attachments/assets/f7cb19a4-3947-4bed-9234-2e2afd955377)

![s2](https://github.com/user-attachments/assets/1a69c198-8b5a-4251-a811-9eb10fc4787d)

<img width="948" height="485" alt="s3" src="https://github.com/user-attachments/assets/33c4ea18-5c26-4ce1-a8bd-8083f422613d" />

## 🧪 Validations & Safety

✅ Only PDF files allowed
✅ File size limit (2MB)
✅ Empty resume detection
✅ Safe async file cleanup
✅ Crash-proof frontend rendering

## 🎯 AI Suggestions Logic

Suggestions are generated dynamically, based on:
- Missing keywords
- ATS score
- Resume length
- Section presence (Experience, Skills)
- Action verb usage

⚠️ No static or pre-stored suggestions.

## 📌 Use Cases

- Students optimizing resumes
- Job seekers improving ATS score
- Portfolio project for full-stack development
- Base for SaaS ATS tools

## 🔮 Future Enhancements

🔐 Authentication & saved reports
📄 Export analysis as PDF
🤖 LLM-powered suggestions (OpenAI / Gemini)
☁️ Deployment (Vercel + Render)

## 👨‍💻 Author

Yeswanth Ketha
Full-Stack Developer | Web Developer

## 📜 License

This project is licensed under the **MIT License**.
