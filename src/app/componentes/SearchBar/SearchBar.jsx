import React from "react";
import { useState, useRef } from "react";

import { SearchBarStyle } from "./SearchBarStyle";
import { NewPost } from "./NewPost/NewPost";
import { FilterBar } from "../FilterBar/FilterBar";

export function SearchBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const ref_btn = useRef(null)

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="SearchBar">
            <SearchBarStyle>
                <input className="searchInput" type="text" />
                <input className="newPostBtn" type="button" value={isSidebarOpen ? '^' : '+'} ref={ref_btn} onClick={()=>toggleSidebar()}/>
                <FilterBar/>
            </SearchBarStyle>
            {isSidebarOpen && <NewPost className="form" />}
        </div>
    )
}