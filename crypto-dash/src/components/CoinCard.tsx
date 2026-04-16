import { Link } from "react-router";
import { type Coin } from "../models/coins";

type CoinProps = {
  coin: Coin;
};

const CoinCard: React.FC<CoinProps> = ({ coin }) => {
  return (
    <>
      <Link to={`/coin/${coin.id}`} className="coin-link">
        <div className="coin-card">
          <div className="coin-header">
            <img src={coin.image} alt={coin.name} className="coin-image" />
            <div>
              <h2>{coin.name}</h2>
              <p className="symbol">{coin.symbol.toUpperCase()}</p>
            </div>
          </div>
          {coin.current_price && (
            <p>Price: ₹ {coin.current_price.toLocaleString("en-IN")}</p>
          )}
          {coin.price_change_percentage_24h && (
            <p
              className={
                coin.price_change_percentage_24h > 0 ? "positive" : "negative"
              }
            >
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </p>
          )}
          {coin.market_cap && (
            <p> Market Cap: ₹ {coin.market_cap.toLocaleString("en-IN")}</p>
          )}
        </div>
      </Link>
    </>
  );
};

export default CoinCard;
