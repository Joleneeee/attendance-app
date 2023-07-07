import axios from "axios";

export const updateUserStatus = async (
  name: string,
  id: number,
  userStatus: string
) => {
  try {
    if (name != " " || id != 0) {
      if (userStatus === "false") {
        const response = await axios.put(
          `http://192.168.0.179:3000/user/${name}/${id}`,
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
