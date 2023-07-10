import axios from "axios";

export const updateUserStatus = async (
  id: string,
  userStatus: string
) => {
  try {
    if (id != '0') {
      if (userStatus === "false") {
        const response = await axios.put(
          `http://192.168.1.106:3000/student/${id}`,
          { status: "true" }
        );
        console.log(response.data);
        alert("Successfully Checkin!");
      } else {
        alert("Already Checkin!");
      }
    } else {
      alert("Empty Fields!");
    }
  } catch (error) {
    console.log(error.response.data);
  }
};
