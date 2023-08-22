import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";

import NoticeCard from "../Components/NoticeCards/NoticeCards";
import TextEditor from "../Components/TextEditor/TextEditor";
import VideoPlay from "../Components/VideoPlay/VideoPlay";
import StudentList from "../Components/StudentList/StudentList";
import Auth404 from "../Components/Auth-404/Auth404";
import Header from "../Components/Header/Header";
import DegreeList from "../Components/DegreeList/DegreeList";
import EnrollCourse from "../Components/Student/EnrollCourse/EnrollCourse";
import UserProfile from "../Components/Student/UserProfile/UserProfile";
import StudentFormsDetails from "../Components/Student/StudentFormsDetails/StudentFormsDetails";
import Blogs from "../Components/Blogs/Blogs";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<NoticeCard />} />
          <Route path="/texteditor" element={<TextEditor />} />
          <Route path="/videoplayer" element={<VideoPlay />} />
          <Route path="/studentlist" element={<StudentList />} />

          <Route path="/student-forms" element={<StudentFormsDetails />} />
          <Route path="/certificate" element={<DegreeList />} />
          <Route path="/course-enrollment" element={<EnrollCourse />} />
          <Route path="/student-profile" element={<UserProfile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/*" element={<Auth404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
