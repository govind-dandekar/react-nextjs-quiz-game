"use client";

function StartQuizButton({ children }) {
  return (
    <button className="no-text-wrap min-w-32 text-3xl bg-cyan-500 py-3 px-8 rounded-2xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300">
      {children}
    </button>
  );
}

export default StartQuizButton;
