import Link from "next/link";

import { FaHome } from "react-icons/fa";

function CustomFooter() {
  return (
    <div className="flex text-white bg-cyan-400 m-3 py-3 px-3 mt-5 rounded-2xl font-sans justify-evenly align-middle w-3/4">
      <p>for non-commercial entertainment purposes only</p>
      <span className="mt-1">
        <Link href="/">
          <FaHome className="scale-150" />
        </Link>
      </span>
    </div>
  );
}

export default CustomFooter;
