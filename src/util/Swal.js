import Swal from "sweetalert2";
const messagesSwal=(messageType,userResponseMessage='')=>{
    switch (messageType) {
        case 'success':
            return Swal.fire(`${userResponseMessage} has been created`, "", "success");
            
        case 'duplicate':
            return Swal.fire("Duplicate entries are not allowed!", "", "question");            
            
        default:
            break;
    }
}
export default messagesSwal