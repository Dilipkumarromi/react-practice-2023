import React from 'react'
import Header from '../Header/Header'
 
import StudentList from '../StudentList/StudentList'
import TextEditor from '../TextEditor/TextEditor'
import Router from '../../Router/Router'
import CourseCard from '../Student/CourseCard/CourseCard'
import UserProfile from '../Student/UserProfile/UserProfile'
import DegreeList from '../DegreeList/DegreeList'
import { Outlet } from 'react-router-dom'
import StudentFormsDetails from '../Student/StudentFormsDetails/StudentFormsDetails'


export default function Home() {
  return (
     <>
     <Header/>
      <StudentFormsDetails/>
      <Outlet/>
     
     </>
  )
}
