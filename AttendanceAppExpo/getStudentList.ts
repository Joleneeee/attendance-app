import axios from "axios";

export const getStudentList = async (number: string) => {
    const response = await axios.get(`http://192.168.1.106:3000/checkin/${number}`);
    const data = response.data[0];
    return data.students;
}