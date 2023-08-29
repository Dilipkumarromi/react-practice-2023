import Swal from "sweetalert2";
const messagesSwal=(messageType)=>{
    switch (messageType) {
        case 'success':
            return Swal.fire("Course Details has been created", "", "success");
            
        case 'Duplicate':
            return Swal.fire("Duplicate entries are not allowed!", "", "question");            
            
        default:
            break;
    }
}
export default messagesSwal