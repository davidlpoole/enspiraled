import Circle from './Circle'

interface Props {
  width: number
  height: number
}

function App({ width, height }: Props) {
  return (
    <svg width={width} height={height}>
      <Circle cx={width / 2} cy={height / 2} />
    </svg>
  )
}

export default App
