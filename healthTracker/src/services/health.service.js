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

export async function postInitDate(data, date) {
  try {
    await axios.post("http://localhost:3000/rezults", { ...data, id: date });
  } catch (error) {
    console.log(error);
  }
}

export async function getIndicators(id) {
  const respose = await axios.get(`http://localhost:3000/rezults/${id}`);
  return respose.data;
}
export async function getAllIndicators() {
  try {
    const respose = await axios.get(`http://localhost:3000/rezults`);
    return respose.data;
  } catch (error) {
    console.log(error);
  }
}

export async function putIndicators(id, data) {
  try {
    await axios.put(`http://localhost:3000/rezults/${id}`, data);
  } catch (error) {
    console.log(error);
  }
}
