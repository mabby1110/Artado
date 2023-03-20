import React from "react";

// componentes
import { NewPost } from "../componentes/NewPost";
import { PostCard } from "../componentes/PostCard"

// css global
import { MainSectionStyle } from "../Ye";

export function Home() {
    return (
        <MainSectionStyle className="MainSection">
            <NewPost/>
            <PostCard/>
        </MainSectionStyle>
    );
}