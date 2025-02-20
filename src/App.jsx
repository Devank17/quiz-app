import React from "react";
import Quiz from "./components/Quiz";
import AttemptHistory from "./components/AttemptHistory";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./components/StartPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/history",
      element: <AttemptHistory />,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 w-full py-4 shadow">
        <h1 className="text-5xl font-bold text-center text-white">
          Interactive Quiz Platform
        </h1>
      </header>
      
      {/* Main content */}
      <main className="flex-grow container mx-auto p-6">
        <RouterProvider router={router} />
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-600 w-full py-2 text-center text-white">
        © 2025 Interactive Quiz Platform. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
