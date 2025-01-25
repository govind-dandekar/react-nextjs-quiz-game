"use client";

function SelectLevelButton({ buttonText, selectedLevel, onSelect }) {
  let buttonClass =
    "min-w-32 text-3xl bg-cyan-600 py-3 px-8 rounded-2xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300";

  // add border if level selected
  if (buttonText === selectedLevel) {
    buttonClass += "outline-4 outline-offset-2 outline-dotted bg-cyan-900";
  }

  return (
    <button onClick={() => onSelect(buttonText)} className={buttonClass}>
      {buttonText}
    </button>
  );
}

export default SelectLevelButton;
