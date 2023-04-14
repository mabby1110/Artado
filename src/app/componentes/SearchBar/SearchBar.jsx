import React from "react";
import { useState, useRef } from "react";

import { SearchBarStyle } from "./SearchBarStyle";
import { NewPost } from "./NewPost/NewPost";
import { FilterBar } from "../FilterBar/FilterBar";

export function SearchBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const ref_searchBar = useRef(null)

    const [isFilterBarOpen, setFilterBarOpen] = useState(false)
    const ref_filterBar = useRef(null)
  
    const toggleFilterBar = () => {
      setFilterBarOpen(!isFilterBarOpen);
      isFilterBarOpen ? ref_filterBar.current.style.gridArea = "1 / 2 / 2 / 3" : ref_filterBar.current.style.gridArea = "1 / 2 / 3 / 3";
    }

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
      isSidebarOpen ? ref_searchBar.current.style.gridArea = "1 / 2 / 2 / 3" : ref_searchBar.current.style.gridArea = "1 / 2 / 3 / 3";
    }

    return (
        <SearchBarStyle ref={ref_searchBar}>
            <div className="searchInput">
                <input type="text" />
            </div>
            <div className="searchBtn">
                <input type="button" value={"+"}/>
            </div>
            <div className="newPostBtn">
                <input type="button" value={isSidebarOpen ? '^' : '+'}  onClick={()=>toggleSidebar()}/>
            </div>
            <div className="filterSection">
                <FilterBar/>
            </div>
            <div className="filterBarBtn">
                <button onClick={toggleFilterBar}>
                    {isFilterBarOpen ? '>' : 'v'}
                </button>
            </div>
            {isSidebarOpen && <NewPost className="newPostSection"/>}
        </SearchBarStyle>
    )
}