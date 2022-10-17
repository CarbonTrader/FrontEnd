import "../styles/pages/spinner.scss";

const LoadingSpinner = () => {
  return (
    <div>
      <div class="backdrop"></div>
      <div class="lds-circle spinner-position">
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
