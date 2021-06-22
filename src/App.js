import TableComponent from './components/Table'
import Heading from './components/Heading'

function App() {
  return  (
    <>
    <Heading />
    <form>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
    <TableComponent />
    </>
    
  )
}

export default App;
