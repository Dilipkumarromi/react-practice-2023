import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const Login = async (data) => {
  console.log("url", BASE_URL);
  const login = await axios.post(`${BASE_URL}/login`, data);
  if (login) {
    const locationStore = login?.data?.data;
    console.log("isLogn", JSON.stringify(locationStore));
    localStorage.setItem("isLogn", JSON.stringify(locationStore));

    return login;
  }

  // localStorage.setItem('login', login.data?.data)
  return login;
};

const getStudentInfo = async (centre_id) => {
  const data = await axios.get(
    `${BASE_URL}/get-student-enrollment?centre_master_id=${centre_id}`
  );
  return data;
};
const updateStudent = async (data) => {
  const student = await axios.patch(
    `${BASE_URL}/update-student-enrollment`,
    data
  );
  return student;
};
const getCourseList = async () => {
  const course = await axios.get(`${BASE_URL}/get-course-list`);
  console.log("Course-api", course);
  return course?.data?.data;
};
const courseDetails = async (data) => {
  const courseDetails = await axios.post(
    `${BASE_URL}/create-course-details`,
    data
  );
  return courseDetails?.data;
};
const getCourseListDetailsBody = async (course_id) => {
  const courseDetailsBody = await axios.get(
    `${BASE_URL}/get-course-details-body?course_master_id=${course_id}`
  );
  return courseDetailsBody.data;
};
const createCourse = async (formData) => {
  const createCourse = await axios.post(`${BASE_URL}/create-course`,formData);
  console.log('course-payload',createCourse)
  return createCourse.data
};

const AuthUserAccess = {
  Login,
  getStudentInfo,
  getCourseList,
  courseDetails,
  updateStudent,
  getCourseListDetailsBody,
  createCourse,
};
export default AuthUserAccess;
