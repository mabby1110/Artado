import React from "react";
import { HomeCard } from "../componentes/HomeCard"
import { MainSectionStyle } from "../Ye";

export function Home() {
    return (
        <MainSectionStyle className="MainSection">
            <HomeCard/>
            <HomeCard/>
        </MainSectionStyle>
    );
}