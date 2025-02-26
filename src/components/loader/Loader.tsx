import { ProgressBar } from "react-loader-spinner";
import "./loader.css";

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <ProgressBar
        visible={true}
        height="80"
        width="80"
        barColor="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
