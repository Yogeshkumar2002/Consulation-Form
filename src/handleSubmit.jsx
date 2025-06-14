import axios from 'axios';
import { toast } from "react-toastify";

export async function handleSubmit(e, formData, setFormData, setCurrentPage) {
  e.preventDefault();

  if (!formData.fullName || !formData.dob || !formData.phone) {
    toast.error("Please fill in all required fields.");
    return;
  }

  try {
    
    const data = new FormData();

    for (let key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    const response = await axios.post("http://localhost:5000/submit", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log("Submitted Successfully", response.data);
    toast.success("Form submitted successfully!");

  
    setFormData({
      fullName: "",
      dob: "",
      phone: "",
      occupation: "",
      concern: "",
      emergencyName: "",
      relationship: "",
      emergencyContact: "",
      alternateContact: "",
      bloodGroup: "",
      reason: "",
      startDate: "",
      severity: "",
      symptomsChanged: "",
      consultedDoctor: "",
      vaccinations: "",
      ReceivedVaccine: "",
      smoking: "",
      Drinking: "",
      Drug: "",
      Caffeine: "",
      Exercise: "",
      Sleep: "",
      Diet: "",
      Feeling: "",
      Therapy: "",
      Disability: "",
      dor: "",
      typeOfTest: "",
      Report: null
    });

    setCurrentPage(0);
  } catch (error) {
    console.error("Submission failed:", error.response?.data || error.message);
    toast.error("Error submitting the form. Please try again.");
  }
}
