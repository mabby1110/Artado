import React from "react";
import { useState, useRef } from "react";

// css global
import { SearchBarStyle } from "../Ye"
import { NewPost } from "./NewPost";

export function SearchBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const ref_btn = useRef(null)

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <SearchBarStyle className="SearchBar">
            <input className="search" type="text" />
            <input className="btn" type="button" value={isSidebarOpen ? '^' : '+'} ref={ref_btn} onClick={()=>toggleSidebar()}/>
            {isSidebarOpen && <NewPost className="form" />}
            
        </SearchBarStyle>
    )
}