function Star({
  value,
  hover,
  rating,
  hoverEnter,
  hoverLeave,
  ratingClicked,
  color,
}) {
  return (
    <span
      className={"star"}
      style={{ color: value <= (hover || rating) ? color : "" }}
      key={value}
      onClick={() => ratingClicked(value)}
      onMouseEnter={() => hoverEnter(value)}
      onMouseLeave={hoverLeave}
    >
      {"\u2605"}
    </span>
  );
}

export default Star;
