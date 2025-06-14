import { handleSubmit } from "./handleSubmit";

function renderFormSection(currentPage, formData, setFormData, setCurrentPage) {
  switch (currentPage) {
    case 1:
      return (
        <div className="text-center">
          <h2>Welcome</h2>
          <p>
            Please complete this questionnaire before your consultation. Your
            answers will help us provide better care tailored to your specific
            needs.
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
            className="btn btn-primary mt-3 px-5"
            onClick={() => setCurrentPage(2)}
          >
            Get Started
          </button>
        </div>
      );

    case 2:
      return (
        <form className="was-validated">
          <p>Please confirm your basic details:</p>
          {[
            {
              label: "Full Name",
              name: "fullName",
              placeholder: "Enter your name",
            },
            {
              label: "Date of Birth",
              name: "dob",
              placeholder: "dd-mm-yyyy",
              type: "date",
            },
            {
              label: "Phone Number",
              name: "phone",
              placeholder: "Enter your phone number",
            },
            {
              label: "Enter Occupation",
              name: "occupation",
              placeholder: "Enter occupation",
            },
            {
              label: "Primary Concern for Visit",
              name: "concern",
              placeholder: "Enter primary concern visit",
            },
          ].map(({ label, name, placeholder, type = "text" }, i) => (
            <div className="mb-3" key={i}>
              <label className="form-label">{label}</label>
              <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                required
                value={formData[name] || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, [name]: e.target.value }))
                }
              />
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
          ))}
        </form>
      );

    case 3:
      return (
        <form className="was-validated">
          {[
            {
              label: "Full Name",
              name: "emergencyName",
              placeholder: "Enter full name",
            },
            {
              label: "Relationship to Patient",
              name: "relationship",
              placeholder: "Enter relationship",
            },
            {
              label: "Contact Number",
              name: "emergencyContact",
              placeholder: "Enter contact number",
              type: "tel",
            },
            {
              label: "Alternate Number",
              name: "alternateContact",
              placeholder: "Enter alternate number",
              type: "tel",
            },
            {
              label: "Blood Group",
              name: "bloodGroup",
              placeholder: "Enter blood group",
            },
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
                  id="reasons"
                  name="reason"
                  required
                  value={formData.reason || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, reason: e.target.value }))
                  }
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="startDate" className="form-label">
                  When did the symptoms start?
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="startingDate"
                  name="startDate"
                  required
                  value={formData.startDate || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      startDate: e.target.value,
                    }))
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
                      required
                      value={level}
                      checked={formData.severity === level}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          severity: e.target.value,
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
                      required
                      value={option}
                      checked={formData.symptomsChanged === option}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          symptomsChanged: e.target.value,
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
                      required
                      value={option}
                      checked={formData.consultedDoctor === option}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          consultedDoctor: e.target.value,
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
                checked={formData.diseases?.includes(item)}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  const value = item;
                  setFormData((prev) => {
                    const current = prev.diseases || [];
                    return {
                      ...prev,
                      diseases: isChecked
                        ? [...current, value]
                        : current.filter((d) => d !== value),
                    };
                  });
                }}
              />

              <label className="form-check-label" htmlFor={`check${idx + 1}`}>
                {item}
              </label>
            </div>
          ))}
          <br />
          <label className="form-label">
            Are your vaccinations up to date?
          </label>
          <select
            className="form-select"
            name="vaccinations"
            id="vaccinations"
            value={formData.vaccinations || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, vaccinations: e.target.value, }))
            }
          >
            <option value=""></option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="Not Sure">Not Sure</option>
          </select>
          <br />
          <label className="form-label" name="ReceivedVaccine">
            Received COVID-19 Vaccine?
          </label>
          <select
            className="form-select"
            name="ReceivedVaccine"
            id="ReceivedVaccine"
            value={formData.ReceivedVaccine || ""}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                ReceivedVaccine: e.target.value,
              }))
            }
          >
            <option value="No Vaccine">No Vaccine</option>
            <option value="First Dose">First Dose</option>
            <option value="Second Dose">Second Dose</option>
            <option value="Booster">Booster</option>
          </select>
        </div>
      );

    case 6:
      return (
        <div className="container mt-3 mx-0">
          <div className="mb-3">
            <label htmlFor="smoke">Having a Smoking Habit:</label>
            <select
              id="smoke"
              name="smoking"
              className="form-select"
              value={formData.smoking || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, smoking: e.target.value }))
              }
            >
              <option value="">Select...</option>
              <option value="never">Never</option>
              <option value="smoke-f">Former Smoker</option>
              <option value="smoke-c">Current Smoker</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="drinking">Having a Drinking Alcohol Habit:</label>
            <select
              id="drinking"
              className="form-select"
              name="Drinking"
              value={formData.Drinking || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, Drinking: e.target.value }))
              }
            >
              <option value="">Select...</option>
              <option value="never">Never</option>
              <option value="drink-f">Occasionally</option>
              <option value="drink-r">Regularly</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="drugs">Recreational Drug Use:</label>
            <select
              id="drugs"
              name="Drug"
              className="form-select"
              value={formData.Drug || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, Drug: e.target.value }))
              }
            >
              <option value="">Select...</option>
              <option value="never">No</option>
              <option value="drug-f">Yes</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="coffee">Caffeine Intake:</label>
            <select
              id="coffee"
              name="Caffeine"
              className="form-select"
              value={formData.Caffeine || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, Caffeine: e.target.value }))
              }
            >
              <option value="">Select...</option>
              <option value="never">None</option>
              <option value="coffee-f">1–2 cups/day</option>
              <option value="coffee-d">3+ cups/day</option>
              <option value="coffee-y">More than 3+ cups/day</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exercise">Exercise Routine:</label>
            <select
              id="exercise"
              name="Exercise"
              className="form-select"
              value={formData.Exercise || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, Exercise: e.target.value }))
              }
            >
              <option value="">Select...</option>
              <option value="Sedentary">Sedentary</option>
              <option value="Light">Light</option>
              <option value="Moderate">Moderate</option>
              <option value="Intense">Intense</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="sleeping">Sleep Pattern:</label>
            <select
              id="sleeping"
              name="Sleep"
              className="form-select"
              value={formData.Sleep || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, Sleep: e.target.value }))
              }
            >
              <option value="">Select...</option>
              <option value="5">Less than 5 hours</option>
              <option value="6">More than 6 hours</option>
              <option value="trouble">Trouble falling or staying asleep</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="eats">Diet:</label>
            <select
              id="eats"
              name="Diet"
              className="form-select"
              value={formData.Diet || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, Diet: e.target.value }))
              }
            >
              <option value="">Select...</option>
              <option value="others">Others</option>
              <option value="balanced">Balanced</option>
              <option value="sugar">High-sugar</option>
              <option value="fat">High-fat</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="mental-health">
              Feeling Down, Depressed, or Hopeless?
            </label>
            <select
              id="mental-health"
              className="form-select"
              name="Feeling"
              value={formData.Feeling || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  Feeling: e.target.value,
                }))
              }
            >
              <option value="">Select...</option>
              <option value="others">No</option>
              <option value="Yes">Yes</option>
              <option value="sometimes">Some-Time Happens</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="emotional-health">
              Have you ever sought counseling or therapy?
            </label>
            <select
              id="emotional-health"
              className="form-select"
              name="Therapy"
              value={formData.Therapy || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  Therapy: e.target.value,
                }))
              }
            >
              <option value="">Select...</option>
              <option value="others">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="disable">
              Do you require disability or mobility assistance?
            </label>
            <select
              id="disable"
              name="Disability"
              className="form-select"
              value={formData.Disability || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, Disability: e.target.value }))
              }
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
              <label htmlFor="data" className="mt-2">
                Please Upload your most recent blood test reports (within the
                last 6 months):
              </label>
              <br />

              <input
                type="file"
                name="Report"
                accept=".pdf,.doc,.docx,.jpg,.png"
                className="form-control mt-2"
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    Report: e.target.files[0],
                  }));
                }}
              />

              <p style={{ textAlign: "center" }} className="mt-5">
                (or)
              </p>

              <label htmlFor="dor" className="mt-3">
                Date of Report: <em>(optional)</em>
              </label>
              <input
                type="date"
                className="form-control"
                id="reportDate"
                name="dor"
                value={formData.dor || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dor: e.target.value,
                  }))
                }
              />

              <p style={{ textAlign: "center" }} className="mt-5">
                (or)
              </p>

              <label htmlFor="test" className="mt-3 mb-2">
                Select the type of test:
              </label>
              <select
                id="test"
                name="typeOfTest"
                className="form-select"
                value={formData.typeOfTest || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    typeOfTest: e.target.value,
                  }))
                }
              >
                <option value="">Select...</option>
                <option value="cbc">CBC</option>
                <option value="Lipid Profile">Lipid Profile</option>
                <option value="HbA1c">HbA1c</option>
              </select>
            </div>
          </div>

          <div className="container my-5 mb-0">
            <div className="row justify-content-center">
              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-success px-5"
                  onClick={(e) =>
                    handleSubmit(e, formData, setFormData, setCurrentPage)
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      );

    default:
      return <p>Thank You! your Form is Submitted</p>;
  }
}

export default renderFormSection;
