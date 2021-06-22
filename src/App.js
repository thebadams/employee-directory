import TableComponent from './components/Table'
import Heading from './components/Heading'
import FormComponent from './components/FormComponent'
import Container from 'react-bootstrap/Container'

function App() {
  return  (
    <Container>
      <Heading />
      <FormComponent />
      <TableComponent />
    </Container>
    
  )
}

export default App;
