import React, { useEffect, useState, useCallback, useReducer } from "react"
import Case from "./Case"
import generateTab from "../constants/gridpos"
import initialState from "../constants/initialState"

function Plateau() {
  const grid = generateTab()

  const forceUpdate = useReducer(() => ({}))[1]
  const [posArray, setPosArray] = useState(initialState)

  const askPos = (color, position) => {
    const value = prompt("Dans quelle case voulez vous allez ?")

    if (value && color === "white") {
      const newPosArray = posArray
      newPosArray.white[posArray.white.indexOf(posArray.white.find(x => x === position))] = value
      setPosArray(newPosArray)
      forceUpdate()
    } else if (value && color === "black") {
      const newPosArray = posArray
      newPosArray.black[posArray.black.indexOf(posArray.black.find(x => x === position))] = value
      setPosArray(newPosArray)
      forceUpdate()
    }
  }

  return (
    <div key={posArray} className="bg-yellow-800 w-full md:w-1/2 mx-auto p-2 ">
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
                    pion={
                      posArray.black.includes(value)
                        ? "black"
                        : posArray.white.includes(value)
                        ? "white"
                        : false
                    }
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
