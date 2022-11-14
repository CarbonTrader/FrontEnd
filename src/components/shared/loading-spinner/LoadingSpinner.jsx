import "../../../styles/pages/spinner.scss";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="backdrop"></div>
      <div className="lds-circle spinner-position">
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
