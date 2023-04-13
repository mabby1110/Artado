import React from "react";
import { useState, useRef } from "react";

import { SearchBarStyle } from "./SearchBarStyle";
import { NewPost } from "./NewPost/NewPost";
import { FilterBar } from "../FilterBar/FilterBar";

export function SearchBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const ref = useRef(null)

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
      isSidebarOpen ? ref.current.style.gridArea = "1 / 2 / 2 / 3" : ref.current.style.gridArea = "1 / 2 / 3 / 3";
    }

    return (
        <SearchBarStyle ref={ref}>
            <input className="searchInput" type="text" />
            <input className="newPostBtn" type="button" value={isSidebarOpen ? '^' : '+'}  onClick={()=>toggleSidebar()}/>
            <FilterBar/>
            {isSidebarOpen && <NewPost className="form" />}
        </SearchBarStyle>
    )
}