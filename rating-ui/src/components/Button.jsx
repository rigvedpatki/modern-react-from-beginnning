function Button({ className, onClick, disabled, children }) {
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
