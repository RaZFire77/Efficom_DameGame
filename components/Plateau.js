import React, { useState } from "react"
import Case from "./Case"
import generateTab from "../constants/gridpos"
import initialState from "../constants/initialState"

function Plateau() {
  const grid = generateTab()
  const [posArray, setPosArray] = useState(initialState)

  const askPos = (color, position) => {
    const value = prompt("Ou voulez vous aller ?")

    if (color === "white") {
      // setPosArray({ ...posArray, white: posArray.white.push(value) })
      posArray.white[posArray.white.find(x => x === position)] = value
    }
  }

  const setPos = (state, value) => {
    if (state.black.includes(value)) {
      return "black"
    } else if (state.white.includes(value)) {
      return "white"
    }
    return false
  }

  return (
    <div className="bg-yellow-800 w-full md:w-1/2 mx-auto p-2 ">
      <div className="grid grid-cols-10">
        {grid.map(col =>
          col.map((pos, key) => (
            <div key={key} className="grid grid-rows-10">
              {pos.map((value, key) => (
                <div key={key} className="m-1">
                  <Case
                    askPos={askPos}
                    key={key}
                    color={key}
                    position={value}
                    pion={setPos(posArray, value)}
                  />
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Plateau
