import { Link } from "@inertiajs/react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircle,
  faComment,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function MainContent(params) {
  return (
    <div className="grid grid-cols-4 gap-1 h-screen pt-16">
      <div className="bg-slate-100 hidden lg:col-span-1 lg:block p-4">
        <Sidebar />
      </div>
      <div className="lg:col-span-3 col-span-4 p-4 overflow-auto relative">
        <div className="sticky top-0 right-0 w-full bg-white">
          <div className="flex">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search topic or discussion..."
              className="block w-full rounded-l-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button className="px-4 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div>
          <div className="card-discussion my-4 p-3 bg-slate-100 rounded-xl">
            <h1 className="text-xl font-bold">Title Discussion</h1>
            <h4 className="text-sm text-slate-500">
              <FontAwesomeIcon icon={faUser} /> Narayan Sangkar{" "}
              <FontAwesomeIcon icon={faCalendar} /> 10/10/2022{" "}
              <FontAwesomeIcon icon={faCircle} /> Bursa kerja
            </h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              accusamus quisquam hic repellat at consequatur repudiandae
              voluptate fugiat dignissimos illo eveniet praesentium nostrum,
              harum quos quibusdam! Perspiciatis, quis? Incidunt, nostrum
              cupiditate. Perspiciatis, rem animi itaque sed nam nihil adipisci
              nostrum ut. Unde excepturi accusamus consequatur delectus sed, quo
              officiis cumque?...<Link href="/">Read more</Link>
            </p>
            <div className="flex mt-3 gap-2">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
                <FontAwesomeIcon icon={faHeart} /> 27 Likes
              </button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
                <FontAwesomeIcon icon={faComment} /> 3 Comments
              </button>
            </div>
          </div>
          <div className="card-discussion my-4 p-3 bg-slate-100 rounded-xl">
            <h1 className="text-xl font-bold">Title Discussion</h1>
            <h4 className="text-sm text-slate-500">
              <FontAwesomeIcon icon={faUser} /> Narayan Sangkar{" "}
              <FontAwesomeIcon icon={faCalendar} /> 10/10/2022{" "}
              <FontAwesomeIcon icon={faCircle} /> Bursa kerja
            </h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              accusamus quisquam hic repellat at consequatur repudiandae
              voluptate fugiat dignissimos illo eveniet praesentium nostrum,
              harum quos quibusdam! Perspiciatis, quis? Incidunt, nostrum
              cupiditate. Perspiciatis, rem animi itaque sed nam nihil adipisci
              nostrum ut. Unde excepturi accusamus consequatur delectus sed, quo
              officiis cumque?...<Link href="/">Read more</Link>
            </p>
          </div>
          <div className="card-discussion my-4 p-3 bg-slate-100 rounded-xl">
            <h1 className="text-xl font-bold">Title Discussion</h1>
            <h4 className="text-sm text-slate-500">
              <FontAwesomeIcon icon={faUser} /> Narayan Sangkar{" "}
              <FontAwesomeIcon icon={faCalendar} /> 10/10/2022{" "}
              <FontAwesomeIcon icon={faCircle} /> Bursa kerja
            </h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              accusamus quisquam hic repellat at consequatur repudiandae
              voluptate fugiat dignissimos illo eveniet praesentium nostrum,
              harum quos quibusdam! Perspiciatis, quis? Incidunt, nostrum
              cupiditate. Perspiciatis, rem animi itaque sed nam nihil adipisci
              nostrum ut. Unde excepturi accusamus consequatur delectus sed, quo
              officiis cumque?...<Link href="/">Read more</Link>
            </p>
          </div>
          <div className="card-discussion my-4 p-3 bg-slate-100 rounded-xl">
            <h1 className="text-xl font-bold">Title Discussion</h1>
            <h4 className="text-sm text-slate-500">
              <FontAwesomeIcon icon={faUser} /> Narayan Sangkar{" "}
              <FontAwesomeIcon icon={faCalendar} /> 10/10/2022{" "}
              <FontAwesomeIcon icon={faCircle} /> Bursa kerja
            </h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              accusamus quisquam hic repellat at consequatur repudiandae
              voluptate fugiat dignissimos illo eveniet praesentium nostrum,
              harum quos quibusdam! Perspiciatis, quis? Incidunt, nostrum
              cupiditate. Perspiciatis, rem animi itaque sed nam nihil adipisci
              nostrum ut. Unde excepturi accusamus consequatur delectus sed, quo
              officiis cumque?...<Link href="/">Read more</Link>
            </p>
          </div>
          <div className="card-discussion my-4 p-3 bg-slate-100 rounded-xl">
            <h1 className="text-xl font-bold">Title Discussion</h1>
            <h4 className="text-sm text-slate-500">
              <FontAwesomeIcon icon={faUser} /> Narayan Sangkar{" "}
              <FontAwesomeIcon icon={faCalendar} /> 10/10/2022{" "}
              <FontAwesomeIcon icon={faCircle} /> Bursa kerja
            </h4>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              accusamus quisquam hic repellat at consequatur repudiandae
              voluptate fugiat dignissimos illo eveniet praesentium nostrum,
              harum quos quibusdam! Perspiciatis, quis? Incidunt, nostrum
              cupiditate. Perspiciatis, rem animi itaque sed nam nihil adipisci
              nostrum ut. Unde excepturi accusamus consequatur delectus sed, quo
              officiis cumque?...<Link href="/">Read more</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
