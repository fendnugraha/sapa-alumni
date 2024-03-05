import { faMessage, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

export default function Sidebar(params) {
  return (
    <>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg w-full mb-4 hover:bg-indigo-500">
        Start Discussion
      </button>
      <ul className="space-y-3 mt-3">
        <li>
          <Link href="/">
            <FontAwesomeIcon icon={faMessage} /> All Discussion
          </Link>
        </li>
        <li>
          <Link href="/">
            <FontAwesomeIcon icon={faNewspaper} /> Latest Update
          </Link>
        </li>
      </ul>

      <h1 className="text-lg mt-5 mb-3 font-bold">Popular Topic</h1>
      <ul className="space-y-2 list-disc list-inside">
        <li>
          <Link href="/">Bursa kerja</Link>
        </li>
        <li>
          <Link href="/">PKL</Link>
        </li>
        <li>
          <Link href="/">Ujian Nasional</Link>
        </li>
      </ul>
    </>
  );
}
