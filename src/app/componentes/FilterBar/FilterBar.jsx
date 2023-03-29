import React from "react"
import { useState, useRef } from "react"

// componentes
import { Label } from "../Label/Label"

// css
import { FilterBarStyle } from "./FilterBarStyle"

export function FilterBar() {
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false)
  const ref_sec1 = useRef(null)

  const toggleFilterBar = () => {
    setIsFilterBarOpen(!isFilterBarOpen)
  }

  return (
    <FilterBarStyle>
      <div className="filSection1" ref={ref_sec1}>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
        <Label/>
      </div>
      <div className="filSection2">
        <input className="seeFilter" type="button" value={isFilterBarOpen ? 'v' : '>'} onClick={()=>toggleFilterBar()}/>
      </div>
    </FilterBarStyle>
  )
}
