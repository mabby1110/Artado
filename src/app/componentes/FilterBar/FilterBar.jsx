import React from "react"
import { useState, useRef } from "react"

// componentes
import { Label } from "../Label/Label"

// css
import { FilterBarStyle } from "./FilterBarStyle"

export function FilterBar() {
  return (
    <FilterBarStyle>
      {
        Array.from({ length: 30 }, (_, index) => (
          <Label key={index} />
        ))
      }
    </FilterBarStyle>
  )
}
