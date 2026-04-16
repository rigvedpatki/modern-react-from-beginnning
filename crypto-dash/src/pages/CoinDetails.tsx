import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { type CoinDetails as CoinDetailsType } from "../models/coins";
import { fetchCoinDetails } from "../services/coin-gecko-api";
import LoadingBar from "../components/LoadingBar";
import CoinChart from "../components/CoinChart";

const CoinDetails = () => {
  const [coinDetails, setCoinDetails] = useState<CoinDetailsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    const loadCoinDetails = async () => {
      if (!id) {
        setError("No coin ID provided");
        setLoading(false);
        return;
      }
      try {
        const data = await fetchCoinDetails(id, signal);
        if (!data) {
          setCoinDetails(null);
          setError("");
          return;
        }
        setCoinDetails(data);
        setError("");
      } catch (error) {
        if (!error) return;
        console.error("Error in loadCoinDetails:", error);
        if (typeof error === "string") {
          setError(error);
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setCoinDetails(null); // Clear coin details on error
      } finally {
        setLoading(false);
      }
    };
    loadCoinDetails();
    return () => {
      setError("");
      setCoinDetails(null);
      controller.abort();
    };
  }, [id]);

  return (
    <>
      {loading && <LoadingBar isLoading={loading} />}
      {error && (
        <div className="coin-details-container">
          <div className="error"> ❌ {error}</div>
        </div>
      )}
      {!error && coinDetails && (
        <div className="coin-details-container">
          <Link to="/"> ⬅ Back to Home</Link>
          <h1 className="contain-details-title">
            {`${coinDetails.name} (${coinDetails.symbol.toUpperCase()})`}
          </h1>
          {coinDetails.image?.large && (
            <img
              src={coinDetails.image.large}
              alt={`${coinDetails.name} logo`}
              className="coin-details-image"
            />
          )}
          {coinDetails.description?.en && (
            <p className="coin-description">
              {coinDetails.description.en.split(". ")[0]}.
            </p>
          )}
          <div className="coin-details-info">
            {coinDetails.market_cap_rank && (
              <h3>Rank: #{coinDetails.market_cap_rank}</h3>
            )}
            {coinDetails.market_data && (
              <>
                {coinDetails.market_data.current_price?.inr && (
                  <h3>
                    Current Price: ₹
                    {coinDetails.market_data.current_price.inr.toLocaleString(
                      "en-IN",
                    )}
                  </h3>
                )}
                {coinDetails.market_data.market_cap?.inr && (
                  <h4>
                    Market Cap: ₹
                    {coinDetails.market_data.market_cap.inr.toLocaleString(
                      "en-IN",
                    )}
                  </h4>
                )}
                {coinDetails.market_data.high_24h?.inr && (
                  <h4>
                    24h High: ₹
                    {coinDetails.market_data.high_24h.inr.toLocaleString(
                      "en-IN",
                    )}
                  </h4>
                )}
                {coinDetails.market_data.low_24h?.inr && (
                  <h4>
                    24h Low: ₹
                    {coinDetails.market_data.low_24h.inr.toLocaleString(
                      "en-IN",
                    )}
                  </h4>
                )}
                {coinDetails.market_data.price_change_percentage_24h !==
                  undefined &&
                  coinDetails.market_data.price_change_24h !== undefined && (
                    <h4>
                      24h Price Change:{" "}
                      {`₹ ${coinDetails.market_data.price_change_24h.toLocaleString(
                        "en-IN",
                      )}`}{" "}
                      <span
                        className={
                          coinDetails.market_data.price_change_percentage_24h >
                          0
                            ? "positive"
                            : "negative"
                        }
                      >
                        {`(${coinDetails.market_data.price_change_percentage_24h.toFixed(
                          2,
                        )}%)`}
                      </span>
                    </h4>
                  )}
                {coinDetails.market_data.circulating_supply !== undefined && (
                  <h4>
                    Circulating Supply:{" "}
                    {coinDetails.market_data.circulating_supply.toLocaleString(
                      "en-IN",
                    )}
                  </h4>
                )}
                {coinDetails.market_data.total_supply !== undefined && (
                  <h4>
                    Total Supply:{" "}
                    {coinDetails.market_data.total_supply.toLocaleString(
                      "en-IN",
                    )}
                  </h4>
                )}
                {coinDetails.market_data.ath?.inr &&
                  coinDetails.market_data.ath_date?.inr && (
                    <h4>
                      All-Time High: ₹
                      {coinDetails.market_data.ath.inr.toLocaleString("en-IN")}{" "}
                      on{" "}
                      {new Date(
                        coinDetails.market_data.ath_date.inr,
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </h4>
                  )}
                {coinDetails.market_data.atl?.inr &&
                  coinDetails.market_data.atl_date?.inr && (
                    <h4>
                      All-Time Low: ₹
                      {coinDetails.market_data.atl.inr.toLocaleString("en-IN")}{" "}
                      on{" "}
                      {new Date(
                        coinDetails.market_data.atl_date.inr,
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </h4>
                  )}
              </>
            )}
            {coinDetails.last_updated && (
              <h4>
                Last Updated:{" "}
                {new Date(coinDetails.last_updated).toLocaleDateString(
                  "en-IN",
                  {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  },
                )}
              </h4>
            )}
          </div>
          {id && <CoinChart id={id} />}
          {coinDetails.links && (
            <div className="coin-details-links">
              {coinDetails.links.homepage?.[0] && (
                <p>
                  🌐{" "}
                  <a
                    href={coinDetails.links.homepage[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </p>
              )}
              {coinDetails.links.blockchain_site?.[0] && (
                <p>
                  🔗{" "}
                  <a
                    href={coinDetails.links.blockchain_site[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blockchain Explorer
                  </a>
                </p>
              )}
              {coinDetails.categories && coinDetails.categories.length > 0 && (
                <p>Categories: {coinDetails.categories.join(", ")}</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CoinDetails;
