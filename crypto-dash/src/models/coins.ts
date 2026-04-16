export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
  market_cap_rank_with_rehypothecated: number;
};

export type Coins = Coin[];

export const LIMIT_OPTIONS = [10, 20, 30, 40, 50, 100] as const;
export const SORT_OPTION_VALUES = [
  "market_cap_asc",
  "market_cap_desc",
  "volume_asc",
  "volume_desc",
  "price_asc",
  "price_desc",
  "price_change_percentage_24h_asc",
  "price_change_percentage_24h_desc",
] as const;

export type SORT_OPTION_TYPES = (typeof SORT_OPTION_VALUES)[number];
export const SORT_OPTION_LABEL_VALUE_MAP_ARRAY: {
  label: string;
  value: SORT_OPTION_TYPES;
}[] = [
  {
    label: "Market Cap (Low to High)",
    value: "market_cap_asc",
  },
  {
    label: "Market Cap (High to Low)",
    value: "market_cap_desc",
  },
  {
    label: "Volume (Low to High)",
    value: "volume_asc",
  },
  {
    label: "Volume (High to Low)",
    value: "volume_desc",
  },
  {
    label: "Price (Low to High)",
    value: "price_asc",
  },
  {
    label: "Price (High to Low)",
    value: "price_desc",
  },
  {
    label: "Price Change % 24h (Low to High)",
    value: "price_change_percentage_24h_asc",
  },
  {
    label: "Price Change % 24h (High to Low)",
    value: "price_change_percentage_24h_desc",
  },
];

export type CoinDetails = {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string | null;
  platforms: Record<string, string>;
  detail_platforms: Record<
    string,
    { decimal_place: number | null; contract_address: string }
  >;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  categories_details: { id: string; name: string }[];
  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: string[];
  localization: Record<string, string>;
  description: Record<string, string>;
  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    snapshot_url: string | null;
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier: string | null;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: {
      github: string[];
      bitbucket: string[];
    };
  };
  image: { thumb: string; small: string; large: string };
  country_origin: string;
  genesis_date: string | null;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  ico_data: {
    ico_start_date: string;
    ico_end_date: string;
    short_desc: string;
    description: string;
    links: Record<string, string>;
    softcap_currency: string;
    hardcap_currency: string;
    total_raised_currency: string;
    softcap_amount: number;
    hardcap_amount: number;
    total_raised_amount: number;
    quote_pre_sale_currency: string;
    base_pre_sale_currency: number;
    quote_pre_sale_amount: number;
    quote_public_sale_currency: string;
    base_public_sale_currency: number;
    quote_public_sale_amount: number;
    base_public_sale_amount: number;
    accepting_currency: string;
    country_origin: string;
    pre_sale_start_date: string;
    pre_sale_end_date: string;
    whitelist_url: string;
    whitelist_start_date: string;
    whitelist_end_date: string;
    bounty_detail_url: string;
    amount_for_sale: number;
    kyc_required: boolean;
    whitelist_available: boolean;
    pre_sale_available: boolean;
    pre_sale_ended: boolean;
  };
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_cap_rank_with_rehypothecated: number;
  market_data: {
    current_price: Record<string, number>;
    total_value_locked: number | null;
    mcap_to_tvl_ratio: number | null;
    fdv_to_tvl_ratio: number | null;
    roi: number | null;
    ath: Record<string, number>;
    ath_change_percentage: Record<string, number>;
    ath_date: Record<string, string>;
    atl: Record<string, number>;
    atl_change_percentage: Record<string, number>;
    atl_date: Record<string, string>;
    market_cap: Record<string, number>;
    market_cap_rank: number;
    outstanding_token_value_usd: number | null;
    market_cap_rank_with_rehypothecated: number;
    fully_diluted_valuation: Record<string, number>;
    market_cap_fdv_ratio: number;
    total_volume: Record<string, number>;
    high_24h: Record<string, number>;
    low_24h: Record<string, number>;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: Record<string, number>;
    price_change_percentage_1h_in_currency: Record<string, number>;
    price_change_percentage_24h_in_currency: Record<string, number>;
    price_change_percentage_7d_in_currency: Record<string, number>;
    price_change_percentage_14d_in_currency: Record<string, number>;
    price_change_percentage_30d_in_currency: Record<string, number>;
    price_change_percentage_60d_in_currency: Record<string, number>;
    price_change_percentage_200d_in_currency: Record<string, number>;
    price_change_percentage_1y_in_currency: Record<string, number>;
    market_cap_change_24h_in_currency: Record<string, number>;
    market_cap_change_percentage_24h_in_currency: Record<string, number>;
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    outstanding_supply: number;
    last_updated: string;
  };
  community_data: {
    facebook_likes: number | null;
    reddit_average_posts_48h: number;
    reddit_average_comments_48h: number;
    reddit_subscribers: number;
    reddit_accounts_active_48h: number;
    telegram_channel_user_count: number | null;
  };
  developer_data: {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
    pull_requests_merged: number;
    pull_request_contributors: number;
    code_additions_deletions_4_weeks: { additions: number; deletions: number };
    commit_count_4_weeks: number;
    last_4_weeks_commit_activity_series: number[];
  };
  status_updates: unknown[];
  last_updated: string;
  tickers: {
    base: string;
    target: string;
    market: {
      name: string;
      identifier: string;
      has_trading_incentive: boolean;
    };
    last: number;
    volume: number;
    converted_last: Record<string, number>;
    converted_volume: Record<string, number>;
    trust_score: string | null;
    bid_ask_spread_percentage: number;
    timestamp: string;
    last_traded_at: string;
    last_fetch_at: string;
    is_anomaly: boolean;
    is_stale: boolean;
    trade_url: string;
    token_info_url: string | null;
    coin_id: string;
    target_coin_id: string;
  }[];
};

export type CoinMarketChart = {
  prices: [number, number][];
};
