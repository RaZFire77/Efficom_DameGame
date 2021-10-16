import React from "react"

function Pion({ color, position, askPos }) {
  return (
    <button
      onClick={() => askPos(color, position)}
      className={`w-6 h-6 rounded-full bg-${color}`}
    />
  )
}

export default Pion
