import './App.css';
import MyTable from './test/MyTable'
import MyPagination from './test/MyPagination'
import MyButton from './test/MyButton'
import MyInput from './test/MyInput'
import MySelect from './test/MySelect'
import MyTag from './test/MyTag'
import MyIcons from './test/MyIcons'
import MyRadio from './test/MyRadio';
import Checkbox from './components/Checkbox';
import Row from './components/Row';
import Col from './components/Col';
import Progress from './components/Progress';
import MyModal from './test/MyModal';
import MyDrawer from './test/MyDrawer';
import MySwitch from './test/MySwitch';

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
      单选
      <MyRadio />
      <br></br>
      复选框
      <div>
        <Checkbox>复选1</Checkbox>
      </div>
      <br></br>
      Row, Col
      <Row>
        <Col span={12} style={{backgroundColor: '#97cff2'}}>12</Col>
        <Col span={12} style={{backgroundColor: '#97f2c7'}}>12</Col>
      </Row>
      <br></br>
      进度条
      <Progress type='line' percentage={60} />
      <Progress type='circle' percentage={30} />
      <br></br>
      弹窗
      <div>
        <MyModal />
      </div>
      <br></br>
      抽屉
      <div>
        <MyDrawer />
      </div>
      <br></br>
      开关
      <MySwitch />
      <br></br>
      图标
      <MyIcons />
    </div>
  );
}

export default App;
