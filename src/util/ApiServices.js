import Swal from "sweetalert2";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const Login = async (data) => {
    console.log('url',BASE_URL)
  const login = await axios.post(`${BASE_URL}/login`, data);
  if (login) {
    const locationStore = login?.data?.data;
    console.log("isLogn", JSON.stringify(locationStore));
    localStorage.setItem("isLogn", JSON.stringify(locationStore));

    return login
  }
  // Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Something went wrong!',
  //     footer: '<a href="">Why do I have this issue?</a>'
  //   })

  // localStorage.setItem('login', login.data?.data)
  return login;
};

const getStudentInfo=async(centre_id)=>{
    const data=await axios.get(`${BASE_URL}/get-student-enrollment?centre_master_id=${centre_id}`)
    return data
}
const AuthUserAccess = { Login,getStudentInfo };
export default AuthUserAccess;
