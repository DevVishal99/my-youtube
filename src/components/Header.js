import React, { useEffect } from "react";
import {
  MENU_IMG,
  SUGGESTIONS_API,
  USER_ICON,
  YOUTUBE_IMG,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setFocus, setSearchText, sideBarToggler } from "../utils/toggleSlice";
import { addCacheResults, addSearchResults } from "../utils/youtubeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.toggle.searchText);
  const searchResults = useSelector((store) => store.youtube.searchResults);
  const setFocu = useSelector((store) => store.toggle.focus);
  const searchCache = useSelector((store) => store.youtube.cacheResults);

  const handleSideBar = () => {
    dispatch(sideBarToggler());
  };

  const handleChange = (e) => {
    const searchText = e.target.value;
    dispatch(setSearchText(searchText));
  };

  const fetchSearchData = async () => {
    const data = await fetch(SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    dispatch(addSearchResults(json[1]));
    dispatch(
      addCacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        dispatch(addSearchResults(searchCache[searchQuery]));
      } else {
        fetchSearchData();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="flex justify-between shadow-xl h-20 align-middle md:w-screen w-screen">
      <div className="flex">
        <img
          className="h-12 w-5 mx-2 my-3 cursor-pointer"
          alt="SideMenu"
          src={MENU_IMG}
          onClick={handleSideBar}
        />
        <a href="/">
          <img
            className="h-12 w-32 mx-2 my-3 cursor-pointer"
            alt="Logo"
            src={YOUTUBE_IMG}
          />
        </a>
      </div>
      <div className="w-8/12 m-3">
        <div className="text-center w-full">
          <input
            className="border border-black rounded-l-full w-2/4 py-2 px-4"
            type="text"
            placeholder="Search Here.."
            onChange={handleChange}
            onFocus={() => dispatch(setFocus(true))}
            onBlur={() => dispatch(setFocus(false))}
          />
          <button className="py-2 px-4 border border-black border-l-gray-200 rounded-r-full">
            🔎
          </button>
        </div>
        {setFocu && (
          <div>
            <ul className="bg-white absolute w-[32rem] ml-56 rounded-lg px-2 py-2">
              {searchResults.map((s) => (
                <li key={s} className="py-1 px-2 hover:bg-gray-100 ">
                  🔎 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <img className="h-12 m-3 md:inline hidden" alt="userIcom" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
