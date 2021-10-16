import React from "react"
import classNames from "classnames"
import Pion from "./Pion"

function Case({ position, color, pion = false, askPos }) {
  return (
    <div
      className={classNames(
        "p-2 w-full flex justify-center",
        { "bg-yellow-300": color % 2 == 0 },
        { "bg-yellow-600": color % 2 !== 0 }
      )}
    >
      {pion ? (
        <Pion askPos={askPos} position={position} color={pion} />
      ) : (
        <p className="text-center uppercase w-6 h-6 text-xs font-light">{position}</p>
      )}
    </div>
  )
}

export default Case
