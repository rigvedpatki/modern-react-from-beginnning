import type { Coins, SORT_OPTION_TYPES } from "../models/coins";
import CoinCard from "../components/CoinCard";
import CoinLimitSelector from "../components/CoinLimitSelector";
import CoinFilterInput from "../components/CoinFilter";
import CoinSortSelector from "../components/CoinSortSelector";
import LoadingBar from "../components/LoadingBar";
import { useMemo } from "react";
type HomeProps = {
  coins: Coins;
  filter: string;
  setFilter: (filter: string) => void;
  sortBy: SORT_OPTION_TYPES;
  setSortBy: (sortBy: SORT_OPTION_TYPES) => void;
  limit: number;
  setLimit: (limit: number) => void;
  loading: boolean;
  error: string;
};

const Home: React.FC<HomeProps> = ({
  coins,
  filter,
  setFilter,
  sortBy,
  setSortBy,
  limit,
  setLimit,
  loading,
  error,
}) => {
  const filteredCoins = useMemo<Coins>(() => {
    return coins
      .filter(
        (coin) =>
          coin.name.toLowerCase().includes(filter.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(filter.toLowerCase()),
      )
      .slice()
      .sort((a, b) => {
        switch (sortBy) {
          case "market_cap_asc":
            return a.market_cap - b.market_cap;
          case "market_cap_desc":
            return b.market_cap - a.market_cap;
          case "volume_asc":
            return a.total_volume - b.total_volume;
          case "volume_desc":
            return b.total_volume - a.total_volume;
          case "price_asc":
            return a.current_price - b.current_price;
          case "price_desc":
            return b.current_price - a.current_price;
          case "price_change_percentage_24h_asc":
            return (
              a.price_change_percentage_24h - b.price_change_percentage_24h
            );
          case "price_change_percentage_24h_desc":
            return (
              b.price_change_percentage_24h - a.price_change_percentage_24h
            );
          default:
            return 0;
        }
      });
  }, [coins, filter, sortBy]);
  return (
    <>
      <div>
        <h1> 🚀 Crypto Dash</h1>
        <div className="top-controls">
          <CoinFilterInput filter={filter} onFilterChange={setFilter} />
          <CoinLimitSelector limit={limit} onLimitChange={setLimit} />
          <CoinSortSelector sortBy={sortBy} onSortByChange={setSortBy} />
        </div>
        <LoadingBar isLoading={loading} />
        {error && <div className="error">{error}</div>}
        {!loading && !error && coins?.length > 0 && (
          <main className="grid">
            {filteredCoins.length > 0 ? (
              filteredCoins.map((coin) => (
                <CoinCard key={coin.id} coin={coin} />
              ))
            ) : (
              <p>No coins match your filter.</p>
            )}
          </main>
        )}
      </div>
    </>
  );
};

export default Home;
