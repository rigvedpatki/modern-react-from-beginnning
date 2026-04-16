import { useEffect, useState } from "react";
import { fetchCoinMarketChart } from "../services/coin-gecko-api";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
  Filler,
  type Point,
  type ChartData,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
  Filler,
);

type LineChartData = ChartData<"line", (number | Point | null)[], unknown>;
const lineChartData: LineChartData = {
  datasets: [
    {
      label: "Price (INR)",
      data: [], // This will be populated with the fetched chart data
      fill: true,
      borderColor: "#007bff",
      backgroundColor: "rgba(0, 123, 255, 0.1)",
      pointRadius: 0,
      tension: 0.3,
    },
  ],
};
type CoinChartProps = {
  id: string;
};
const CoinChart: React.FC<CoinChartProps> = ({ id }) => {
  const [chartData, setChartData] = useState<LineChartData>(lineChartData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (!id) return;
    const loadChartData = async () => {
      try {
        const response = await fetchCoinMarketChart(id, signal);
        if (!response) {
          setChartData(lineChartData);
          setError("");
          return;
        }
        const formattedData = response.prices.map(([timestamp, price]) => ({
          x: timestamp,
          y: price,
        }));
        setChartData((previous) => {
          const newData = {
            ...previous,
            datasets: [
              {
                ...previous.datasets[0],
                data: formattedData,
              },
            ],
          };
          return newData;
        });
        setError("");
      } catch (error) {
        console.error("Error in loadChartData:", error);
        if (!error) return;
        if (typeof error === "string") {
          setError(error);
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    loadChartData();

    return () => controller.abort();
  }, [id]);
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        {loading && <div>Loading chart...</div>}
        {error && <div className="error"> ❌ {error}</div>}
        {!loading && !error && chartData.datasets[0].data.length === 0 ? (
          <div className="error">No chart data available</div>
        ) : (
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  mode: "index",
                  intersect: false,
                },
              },
              scales: {
                x: {
                  type: "time",
                  time: {
                    unit: "day",
                  },
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 7,
                  },
                },
                y: {
                  ticks: {
                    callback: (value) => `₹${value.toLocaleString("en-IN")} `, // Format y-axis labels as currency
                  },
                },
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default CoinChart;
