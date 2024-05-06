import { useState } from 'react'

interface Props {
  cx: number
  cy: number
  r?: number
  fill?: string
}

function randomColor() {
  return `#${Math.floor(Math.random() * 1000).toString(16)}`
}

export default function Circle({ cx, cy, r = 256 }: Props) {
  const [clicked, setClicked] = useState(false)

  const generateCircle = (offsetX: number, offsetY: number) => (
    <Circle
      cx={cx + offsetX * r}
      cy={cy + offsetY * r}
      r={r / 2}
      fill={randomColor()}
    />
  )

  const circles = clicked && (
    <>
      {generateCircle(-1, 0)}
      {generateCircle(0, -1)}
      {generateCircle(1, 0)}
      {generateCircle(0, 1)}
    </>
  )

  return (
    <>
      <circle
        onMouseOver={() => setClicked(true)}
        cx={cx}
        cy={cy}
        r={r}
        fill={randomColor()}
      />
      {circles}
    </>
  )
}
