import Circle from './Circle'

interface Props {
  width: number
  height: number
  r: number
}

function App({ width, height }: Props) {
  const circle = {
    cx: width / 2,
    cy: height / 2,
    level: 0,
    r: 256,
  }

  return (
    <svg width={width} height={height}>
      <Circle {...circle} />
    </svg>
  )
}

export default App
