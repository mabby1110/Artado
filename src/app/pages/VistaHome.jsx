import React from "react";
import { PostCard } from "../componentes/PostCard"
import { MainSectionStyle } from "../Ye";

export function Home() {
    return (
        <MainSectionStyle className="MainSection">
            <PostCard/>
            <PostCard/>
        </MainSectionStyle>
    );
}