import React from "react"
import classNames from "classnames"

function Pion({ color, position, askPos }) {
  return (
    <button
      onClick={() => askPos(color, position)}
      className={classNames(
        "w-6 h-6 rounded-full bg",
        { "bg-white": color === "white" },
        { "bg-black": color === "black" }
      )}
    />
  )
}

export default Pion
