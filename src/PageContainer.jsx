import React from "react";
import renderFormSection from "./formSections";

const pages = [
  "Pre-Consulation Questionnaire",
  "Basic Information",
  "Emergency Contact Information",
  "Reason for Visit",
  "Medical History Details",
  "Lifestyle and Habits",
  "Lab Reports"
];

const PageContainer = ({ currentPage, setCurrentPage, formData, setFormData }) => {
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, 7));
  const handleBack = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="container">
      <div className="d-grid">
        <button
          type="button"
          className="btn btn-primary btn-block py-2 mx-2 mb-3"
          style={{ fontSize: "x-large", borderRadius: "16px" }}
        >
          {pages[currentPage - 1]}
        </button>
      </div>

     
      <div>{renderFormSection(currentPage, formData, setFormData)}</div>

      
      
        <div className="row justify-content-center my-4">
          {currentPage > 1 &&  (
            <div className="col-auto">
              <button className="btn btn-outline-secondary px-5" onClick={handleBack}>
                Back
              </button>
            </div>
          )}
        {currentPage !== 1 && currentPage!= 7 && (
          <div className="col-auto">
            <button className="btn btn-primary px-5" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
        </div>
    </div>
  );
};

export default PageContainer;
