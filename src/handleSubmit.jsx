import axios from 'axios';
import { toast } from "react-toastify";

export function handleSubmit(e, formData, setFormData, setCurrentPage) {
  e.preventDefault();

  if (!formData.fullName || !formData.dob || !formData.phone) {
    toast.error("Please fill in all required fields.");
    return;
  }

  try {
    const response = axios.post("http://localhost:5000/submit", formData);
    console.log("Submitted Successfully", response.data);
    toast.success("Form submitted successfully!");

    setFormData({
      fullName: "",
      dob: "",
      phone: "",
      occupation: "",
      concern: "",
      currentPage: 1
    });
    setCurrentPage(0);
}
  catch (error) {
    console.error("Submission failed:", error);
    toast.error("Error submitting the form. Please try again.");
  }
};








