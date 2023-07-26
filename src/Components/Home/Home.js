import React from 'react'
import Header from '../Header/Header'
import { Outlet, Routes } from 'react-router-dom'
import StudentList from '../StudentList/StudentList'
import TextEditor from '../TextEditor/TextEditor'
import Router from '../../Router/Router'
import CourseCard from '../Student/CourseCard/CourseCard'


export default function Home() {
  return (
     <>
     <Header/>
    <CourseCard/>
     
     </>
  )
}
