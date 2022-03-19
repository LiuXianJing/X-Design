import './App.css';
import MyTable from './test/MyTable'
import MyPagination from './test/MyPagination'
import MyButton from './test/MyButton'
import MyInput from './test/MyInput'
import MySelect from './test/MySelect'
import MyTag from './test/MyTag'
import MyIcons from './test/MyIcons'

function App() {
  return (
    <div className="app">
      表格
      <MyTable />
      <br></br>
      分页器
      <MyPagination />
      <br></br>
      按钮
      <MyButton />
      <br></br>
      输入框
      <MyInput />
      <br></br>
      选择框
      <MySelect />
      <br></br>
      标签
      <div>
        <MyTag />
      </div>
      <br></br>
      图标
      <MyIcons />
    </div>
  );
}

export default App;
