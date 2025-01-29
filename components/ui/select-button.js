// can apply different CSS classes depending if button has been selected or not
function SelectButton({
  buttonText,
  selectedLevel,
  onSelect,
  children,
  ...props
}) {
  // generalize for bg px and py?
  const baseButtonCSS =
    "bg-cyan-600 py-8 px-12 rounded-2xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300 mt-12 text-3xl";

  const selectedButtonCSS =
    "py-8 px-12 rounded-2xl mt-12 text-3xl outline-4 outline-offset-2 outline-dotted bg-cyan-900";

  return (
    <button onClick={() => onSelect(buttonText)} {...props}>
      {children}
    </button>
  );
}

export default SelectButton;
