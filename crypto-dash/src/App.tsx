import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { type Coins, type SORT_OPTION_TYPES } from "./models/coins";
import { fetchCoins } from "./services/coin-gecko-api";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import CoinDetails from "./pages/CoinDetails";

const App = () => {
  const [coins, setCoins] = useState<Coins>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [filter, setFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<SORT_OPTION_TYPES>("market_cap_desc");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const loadCoins = async () => {
      try {
        const data = await fetchCoins({ per_page: limit.toString() }, signal);
        setCoins(data ?? []);
        setError("");
      } catch (err) {
        console.error("Error in loadCoins:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
        setCoins([]); // Clear coins on error
      } finally {
        setLoading(false);
      }
    };
    loadCoins();
    return () => controller.abort();
  }, [limit]);

  const handleLimitChange = (newLimit: number) => {
    setLoading(true);
    setLimit(newLimit);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              coins={coins}
              filter={filter}
              setFilter={setFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
              limit={limit}
              setLimit={handleLimitChange}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
