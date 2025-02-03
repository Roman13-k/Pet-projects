import axios from "axios";

export async function getGoals() {
  try {
    const respose = await axios.get("http://localhost:3000/goals");
    return respose.data;
  } catch (error) {
    console.log(error);
  }
}

export async function putGoals(data) {
  try {
    await axios.put("http://localhost:3000/goals", data);
  } catch (error) {
    console.log(error);
  }
}

// export async function postInitDate() {
//   try {
//     const respose = await axios.get("http://localhost:3000/rezults");
//     return respose.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getIndicators() {
//   try {
//     const respose = await axios.get("http://localhost:3000/rezults");
//     return respose.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function putIndicators() {
//   try {
//     const respose = await axios.get("http://localhost:3000/rezults");
//     return respose.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
