import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const steps = [1, 2, 3, 4, 5, 6, 7];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    phone: "",
    occupation: "",
    concern: "",
    currentPage: 1,
  });

  useEffect(() => {
    if (formData.currentPage !== currentPage) {
      setCurrentPage(formData.currentPage);
    }
  }, [formData.currentPage]);

  return (
    <div className="App">
      <style>
        {`
        .circle-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 18px;
          line-height: 50px;
          text-align: center;
          padding: 0;
          border: none;
          background-color: #e0e0e0;
          color: black;
          transition: 0.3s ease;
        }
        .circle-btn:hover {
          background-color: #c0c0c0;
        }
        .circle-btn.active {
          background-color: #0d6efd;
          color: white;
        }
        .Toastify__toast {
         font-size: 1.2rem;
         text-align: center;
         border-radius: 10px;
        }
        @media (max-width: 768px) {
         .Toastify__toast {
         font-size: 1rem;
         }  
      `}
      </style>
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        steps={steps}
      />
      <PageContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        formData={formData}
        setFormData={setFormData}
      />

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
