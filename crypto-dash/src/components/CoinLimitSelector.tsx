import { LIMIT_OPTIONS } from "../models/coins";

type CoinLimitSelectorProps = {
  limit: number;
  onLimitChange: (newLimit: number) => void;
};

const CoinLimitSelector = ({
  limit,
  onLimitChange,
}: CoinLimitSelectorProps) => {
  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onLimitChange(Number(e.target.value));
  };

  return (
    <>
      <div className="controls">
        <label htmlFor="limit">Show :</label>
        <select
          name="limit"
          id="limit"
          value={limit}
          onChange={handleLimitChange}
        >
          {LIMIT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CoinLimitSelector;
