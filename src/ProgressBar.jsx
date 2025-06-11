const ProgressBar = ({ current }) => {
  const steps = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="d-flex justify-content-center mb-3">
      {steps.map((step) => (
        <div
          key={step}
          className={`rounded-circle d-flex align-items-center justify-content-center me-2 ${step === current ? 'bg-primary text-white' : 'bg-light text-dark'}`}
          style={{ width: 40, height: 40 }}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
