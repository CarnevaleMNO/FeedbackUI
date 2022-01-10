export default function Button({ children, version, type, isDisabled, func }) {
  return (
    <button type={type} onClick={func} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};
