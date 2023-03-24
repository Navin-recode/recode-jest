// import { render, screen } from "@testing-library/react"
// import Greet from "./Greet"

// test('Greet renders correctly', ()=> {
//   render(<Greet />)
//   const textElement = screen.getByText(/hello/i)
//   expect(textElement).toBeInTheDocument();
// })

/*
greet should render the text hello and if a name is passed into the component 
it should render hello followed by the name. 
TTD approach - 
*/
import { render, screen } from '@testing-library/react'
import Greet from './Greet'

test('Greet renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText('Hello')
  expect(textElement).toBeInTheDocument()
})
test('Greet renders the name', ()=> {
  render(<Greet name = 'navin' />)
  const textElement = screen.getByText('Hello navin')
  expect(textElement).toBeInTheDocument()
})


