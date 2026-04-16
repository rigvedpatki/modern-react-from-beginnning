import { BarLoader } from "react-spinners";

const override: React.CSSProperties = {
  display: "block",
  margin: "0px auto 15px auto",
  width: "100%",
};

type LoadingBarProps = {
  isLoading: boolean;
  color?: string;
};

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading, color }) => {
  return (
    <>
      <BarLoader
        loading={isLoading}
        color={color ? color : "#36d7b7"}
        cssOverride={override}
        aria-label="Loading..."
      />
    </>
  );
};

export default LoadingBar;
