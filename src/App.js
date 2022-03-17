import './App.css';
import MyTable from './test/MyTable'
import MyPagination from './test/MyPagination'
import MyButton from './test/MyButton'

function App() {
  return (
    <div className="app">
      <MyTable />
      <br></br>
      <MyPagination />
      <br></br>
      <MyButton />
    </div>
  );
}

export default App;
