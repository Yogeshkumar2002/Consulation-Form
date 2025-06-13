const Navigation = ({ currentPage, setCurrentPage, steps }) => {
  return (
    <div className="container-fluid text-center my-3">
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {steps.map((step) => (
          <button
            key={step}
            className={`circle-btn ${step === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(step)}
          >
            {step}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
