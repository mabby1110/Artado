import React from "react";
import { useState, useRef } from "react";

// css global
import { SearchBarStyle } from "../../Ye";
import { NewPostForm } from "../NewPost/NewPostForm";

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
            </SearchBarStyle>
            {isSidebarOpen && <NewPostForm className="form" />}
        </div>
    )
}