import React from "react";
import { css } from "@emotion/react";

// css global
import { SearchBarStyle } from "../Ye"
import { NewPost } from "./NewPost";

export function SearchBar() {
    return (
        <SearchBarStyle className="SearchBar">
            <input className="search" type="text" />
            <input className="btn" type="button" value="+"/>
            <NewPost className="form" />
        </SearchBarStyle>
    );
}