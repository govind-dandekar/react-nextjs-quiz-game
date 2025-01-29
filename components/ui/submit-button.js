const submitButtonCss =
  "bg-cyan-800 py-3 px-8 rounded-2xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300 mt-12 text-3xl";

function SubmitButton({ children, ...props }) {
  return (
    <button className={submitButtonCss} {...props}>
      {children}
    </button>
  );
}

export default SubmitButton;
