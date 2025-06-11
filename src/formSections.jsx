import React from "react";

function renderFormSection(currentPage, formData, setFormData, setCurrentPage) {
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, 7));
  const handleBack = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  switch (currentPage) {
    case 1:
      return (
        <div className="text-center">
          <h2>Welcome</h2>
          <p>
            Please complete this questionnaire before your consultation. Your
            answers will help us provide better care tailored to your specific needs.
          </p>
          <div className="alert alert-info text-start" role="alert">
            <strong>Your responses will:</strong>
            <ul>
              <li>Save time during your consultation</li>
              <li>Help your counselor prepare appropriately</li>
            </ul>
          </div>
          <p>This should take approximately 5-7 minutes to complete.</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => setFormData((prev) => ({ ...prev, currentPage: 2 }))}
          >
            Get Started
          </button>
        </div>
      );

    case 2:
      return (
        <form className="needs-validation" noValidate>
          <p>Please confirm your basic details:</p>
          {[
            { label: "Full Name", name: "fullName", placeholder: "Enter your name" },
            { label: "Date of Birth", name: "dob", placeholder: "dd-mm-yyyy", type: "date" },
            { label: "Phone Number", name: "phone", placeholder: "Enter your phone number" },
            { label: "Enter Occupation", name: "occupation", placeholder: "Enter occupation" },
            { label: "Primary Concern for Visit", name: "concern", placeholder: "Enter primary concern visit" },
          ].map(({ label, name, placeholder, type = "text" }, i) => (
            <div className="mb-3" key={i}>
              <label className="form-label">{label}</label>
              <input
                type={type}
                className="form-control is-invalid"
                placeholder={placeholder}
                required
                value={formData[name] || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, [name]: e.target.value }))
                }
              />
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
          ))}
        </form>
      );

 case 3:
  return (
    <form className="needs-validation" noValidate>
      {[
        { label: "Full Name", name: "emergencyName", placeholder: "Enter full name" },
        { label: "Relationship to Patient", name: "relationship", placeholder: "Enter relationship" },
        { label: "Contact Number", name: "emergencyContact", placeholder: "Enter contact number", type: "tel" },
        { label: "Alternate Number", name: "alternateContact", placeholder: "Enter alternate number", type: "tel" },
        { label: "Blood Group", name: "bloodGroup", placeholder: "Enter blood group" }
      ].map(({ label, name, placeholder, type = "text" }, i) => (
        <div className="mb-3" key={i}>
          <label className="form-label">{label}</label>
          <input
            type={type}
            className="form-control is-invalid"
            placeholder={placeholder}
            required
            value={formData[name] || ""}
            onChange={(e) =>
              setFormData({ ...formData, [name]: e.target.value })
            }
          />
        </div>
      ))}
    </form>
  );

  case 4:
  return (
    <div className="container mt-3 mx-0">
      <div className="login-box">
        <form className="was-validated">
          <div className="mb-3 mt-3">
            <label htmlFor="reason" className="form-label">
              What symptoms or concerns bring you in today?
            </label>
            <input
              type="text"
              className="form-control"
              id="reason"
              name="reason"
              required
              value={formData.reason || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, reason: e.target.value }))
              }
            />
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="mb-3 mt-3">
            <label htmlFor="startDate" className="form-label">
              When did the symptoms start?
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              name="startDate"
              required
              value={formData.startDate || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, startDate: e.target.value }))
              }
            />
          </div>

          <div className="mb-3 mt-3">
            <label className="form-label">Severity of Symptoms:</label>
            {["Mild", "Moderate", "Severe"].map((level, i) => (
              <div className="form-check" key={i}>
                <input
                  type="radio"
                  className="form-check-input"
                  name="severity"
                  value={level}
                  checked={formData.severity === level}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      severity: e.target.value
                    }))
                  }
                />
                <label className="form-check-label">{level}</label>
              </div>
            ))}
          </div>

          <div className="mb-3 mt-3">
            <label className="form-label">
              Have the Symptoms Changed or Worsened Recently?
            </label>
            {["Yes", "No"].map((option, i) => (
              <div className="form-check" key={i}>
                <input
                  type="radio"
                  className="form-check-input"
                  name="symptomsChanged"
                  value={option}
                  checked={formData.symptomsChanged === option}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      symptomsChanged: e.target.value
                    }))
                  }
                />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
          </div>

          <div className="mb-3 mt-3">
            <label className="form-label">
              Have you consulted any other doctor about this issue?
            </label>
            {["Yes", "No"].map((option, i) => (
              <div className="form-check" key={i}>
                <input
                  type="radio"
                  className="form-check-input"
                  name="consultedDoctor"
                  value={option}
                  checked={formData.consultedDoctor === option}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      consultedDoctor: e.target.value
                    }))
                  }
                />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );

    case 5:
      return (
        <div>
          <label className="form-label">
            <b>Do you currently have or have had any of the following?</b>
          </label>
          {[
            "Diabetes",
            "Hypertension",
            "Asthma or COPD",
            "Heart Disease",
            "Stroke",
            "Kidney Disease",
            "Thyroid Disorder",
            "Liver Disease",
            "Cancer",
            "Mental Health Conditions",
            "Neurological Disorders",
          ].map((item, idx) => (
            <div className="form-check" key={idx}>
              <input
                type="checkbox"
                className="form-check-input"
                id={`check${idx + 1}`}
              />
              <label className="form-check-label" htmlFor={`check${idx + 1}`}>
                {item}
              </label>
            </div>
          ))}
          <br />
          <label className="form-label">Are your vaccinations up to date?</label>
          <select className="form-select">
            <option>No</option>
            <option>Yes</option>
            <option>Not Sure</option>
          </select>
          <br />
          <label className="form-label">Received COVID-19 Vaccine?</label>
          <select className="form-select">
            <option>No Vaccine</option>
            <option>First Dose</option>
            <option>Second Dose</option>
            <option>Booster</option>
          </select>
        </div>
      );

case 6:
  return (
    <div className="container mt-3 mx-0">

      {/* Smoking */}
      <div className="mb-3">
        <label htmlFor="smoke">Having a Smoking Habit:</label>
        <select
          id="smoke"
          className="form-select"
          value={formData.smoke || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, smoke: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="never">Never</option>
          <option value="smoke-f">Former Smoker</option>
          <option value="smoke-c">Current Smoker</option>
        </select>
      </div>

      {/* Drinking */}
      <div className="mb-3">
        <label htmlFor="drinking">Having a Drinking Alcohol Habit:</label>
        <select
          id="drinking"
          className="form-select"
          value={formData.drinking || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, drinking: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="never">Never</option>
          <option value="drink-f">Occasionally</option>
          <option value="drink-r">Regularly</option>
        </select>
      </div>

      {/* Drugs */}
      <div className="mb-3">
        <label htmlFor="drugs">Recreational Drug Use:</label>
        <select
          id="drugs"
          className="form-select"
          value={formData.drugs || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, drugs: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="never">No</option>
          <option value="drug-f">Yes</option>
        </select>
      </div>

      {/* Caffeine */}
      <div className="mb-3">
        <label htmlFor="coffee">Caffeine Intake:</label>
        <select
          id="coffee"
          className="form-select"
          value={formData.coffee || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, coffee: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="never">None</option>
          <option value="coffee-f">1–2 cups/day</option>
          <option value="coffee-d">3+ cups/day</option>
          <option value="coffee-y">More than 3+ cups/day</option>
        </select>
      </div>

      {/* Exercise */}
      <div className="mb-3">
        <label htmlFor="exercise">Exercise Routine:</label>
        <select
          id="exercise"
          className="form-select"
          value={formData.exercise || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, exercise: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="Sedentary">Sedentary</option>
          <option value="Light">Light</option>
          <option value="Moderate">Moderate</option>
          <option value="Intense">Intense</option>
        </select>
      </div>

      {/* Sleep */}
      <div className="mb-3">
        <label htmlFor="sleeping">Sleep Pattern:</label>
        <select
          id="sleeping"
          className="form-select"
          value={formData.sleeping || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, sleeping: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="5">Less than 5 hours</option>
          <option value="6">More than 6 hours</option>
          <option value="trouble">Trouble falling or staying asleep</option>
        </select>
      </div>

      {/* Diet */}
      <div className="mb-3">
        <label htmlFor="eats">Diet:</label>
        <select
          id="eats"
          className="form-select"
          value={formData.eats || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, eats: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="others">Others</option>
          <option value="balanced">Balanced</option>
          <option value="sugar">High-sugar</option>
          <option value="fat">High-fat</option>
        </select>
      </div>

      {/* Mental Health */}
      <div className="mb-3">
        <label htmlFor="mental-health">Feeling Down, Depressed, or Hopeless?</label>
        <select
          id="mental-health"
          className="form-select"
          value={formData.mentalHealth || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, mentalHealth: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="others">No</option>
          <option value="Yes">Yes</option>
          <option value="sometimes">Some-Time Happens</option>
        </select>
      </div>

      {/* Counseling */}
      <div className="mb-3">
        <label htmlFor="emotional-health">Have you ever sought counseling or therapy?</label>
        <select
          id="emotional-health"
          className="form-select"
          value={formData.emotionalHealth || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, emotionalHealth: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="others">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      {/* Disability */}
      <div className="mb-3">
        <label htmlFor="disable">Do you require disability or mobility assistance?</label>
        <select
          id="disable"
          className="form-select"
          value={formData.disability || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, disability: e.target.value }))}
        >
          <option value="">Select...</option>
          <option value="others">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
  );


case 7:
  return (
    <>
      <div className="container mt-3 mx-0">
        <div className="report">
          {/* Upload File */}
          <label htmlFor="data" className="mt-2">
            Please Upload your most recent blood test reports (within the last 6 months):
          </label>
          <br />
          {/* <input
            type="file"
            id="data"
            name="files"
            className="mt-3"
            onChange={(e) => setFormData((prev) => ({ ...prev, file: e.target.files[0] }))}
          /> */}
          <input type="file" className="form-control mt-2" />

          <p style={{ textAlign: "center" }} className="mt-5">(or)</p>

          {/* Date Picker */}
          <label htmlFor="dor" className="mt-3">
            Date of Report: <em>(optional)</em>
          </label>
          <input
            type="date"
            className="form-control"
            id="dor"
            value={formData.reportDate || ""}
            onChange={(e) => setFormData((prev) => ({ ...prev, reportDate: e.target.value }))}
          />

          <p style={{ textAlign: "center" }} className="mt-5">(or)</p>

          {/* Test Type Selection */}
          <label htmlFor="test" className="mt-3 mb-2">Select the type of test:</label>
          <select
            id="test"
            className="form-select"
            value={formData.testType || ""}
            onChange={(e) => setFormData((prev) => ({ ...prev, testType: e.target.value }))}
          >
            <option value="">Select...</option>
            <option value="cbc">CBC</option>
            <option value="Lipid Profile">Lipid Profile</option>
            <option value="HbA1c">HbA1c</option>
          </select>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="container my-5 mb-0">
        <div className="row justify-content-center">
          {/* <div className="col-auto">
            <button type="button" className="btn btn-outline-secondary px-5" onClick={handleBack}>
              Back
            </button>
          </div> */}
          <div className="col-auto">
              <button className="btn btn-outline-secondary px-5" onClick={handleBack}>
                Back
              </button>
            </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-success px-5">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );


    default:
      return <p>This page is under construction.</p>;
  }
};

export default renderFormSection;
