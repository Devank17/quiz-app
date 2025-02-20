# Interactive Quiz Platform

## Summary of Features

- **Interactive Quiz Experience**  
  Users can take quizzes with multiple question types (multiple-choice and integer input) and receive immediate feedback.

- **Multiple Question Types**

  - **Multiple-Choice Questions (MCQs):** Each MCQ has a 30-second timer and instant feedback upon submission.
  - **Integer-Type Questions:** Users input numerical answers without a timer.

- **Attempt History & Scoring**  
  Each attempt is recorded with details such as the question, the user’s answer, and whether it was correct.

- **Responsive & Modern UI**  
  The app is styled with Tailwind CSS for a clean, responsive design that adapts to different devices.

- **Routing & Navigation**  
  Uses React Router for navigating between the landing page, quiz, and attempt history.

- **Local Data Persistence**
  Stores attempt data using IndexedDB to persist quiz history locally.

- **Deployment Ready**  
  Designed to be easily deployed on platforms like Vercel or Netlify.

## Instructions to Run the App Locally

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   - **Using npm**
   ```bash
   npm install
   ```
   - **or using Yarn**
   ```bash
   yarn install
   ```
3. **Run the App Locally**
- **The app is built with Vite. To run the development server:**
    - **Using npm**
   ```bash
   npm run dev
   ```
   - **or using Yarn**
   ```bash
   yarn dev
   ```
- **Open your browser and navigate to http://localhost:5173 (or the URL provided in your terminal) to see the app in action.**