type CoinFilterInputProps = {
  filter: string;
  onFilterChange: (newFilter: string) => void;
};

const CoinFilterInput: React.FC<CoinFilterInputProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <>
      <div className="filter">
        <input
          type="text"
          name="filter"
          id="filter"
          value={filter}
          placeholder="Filter coins by name or symbol"
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default CoinFilterInput;
