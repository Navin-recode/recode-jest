
type GreetProps = {
  name?: string // ? means optional
}

const Greet = (props: GreetProps) => {
  return (
   <div>Hello {props.name}</div>
  )
}

export default Greet
