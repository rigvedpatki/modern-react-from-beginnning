import {
  SORT_OPTION_LABEL_VALUE_MAP_ARRAY,
  type SORT_OPTION_TYPES,
} from "../models/coins";

type CoinSortSelectorProps = {
  sortBy: string;
  onSortByChange: (newSortBy: SORT_OPTION_TYPES) => void;
};

const CoinSortSelector: React.FC<CoinSortSelectorProps> = ({
  sortBy,
  onSortByChange,
}) => {
  return (
    <>
      <div className="controls">
        <label htmlFor="sort">Sort By :</label>
        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value as SORT_OPTION_TYPES)}
        >
          {SORT_OPTION_LABEL_VALUE_MAP_ARRAY.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CoinSortSelector;
