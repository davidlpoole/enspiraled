import { useState } from 'react'

interface Props {
  cx: number
  cy: number
  level?: number
  r?: number
  fill?: string
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

export default function Circle({ cx, cy, level = 0, r = 256 }: Props) {
  const [clicked, setClicked] = useState(false)

  if (level > 7) return null

  const handleClick = () => setClicked(true)

  const generateCircle = (offsetX: number, offsetY: number) => (
    <Circle
      level={level + 1}
      cx={cx + (offsetX * r) / 2}
      cy={cy + (offsetY * r) / 2}
      r={r / 2}
      fill={colors[(level + 1) % colors.length]}
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
        onClick={handleClick}
        cx={cx}
        cy={cy}
        r={r}
        fill={colors[level % colors.length]}
      />
      {circles}
    </>
  )
}
