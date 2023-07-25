import "./App.css";
import EnrollCourse from "./Components/EnrollCourse/EnrollCourse";
import Header from "./Components/Header/Header";
import NoticeCards from "./Components/NoticeCards/NoticeCards";
import VideoPlay from "./Components/VideoPlay/VideoPlay";
import StudentList from "./Components/StudentList/StudentList";
import Login from "./Login/Login";
import TextEditor from "./Components/TextEditor/TextEditor";


function App() {
  return (
    <div id="layout-wrapper">
      <Header />
      <TextEditor/>
      {/* <StudentList/> */}
      {/* <NoticeCards/> */}
      {/* <EnrollCourse/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
