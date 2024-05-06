interface Props {
  cx: number
  cy: number
  level: number
  r: number
}

export default function Circle(props: Props) {
  return <circle cx={props.cx} cy={props.cy} r={props.r} />
}
