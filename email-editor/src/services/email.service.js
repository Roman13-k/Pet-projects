import axios from "axios";

class EmailService {
  URL = "http://localhost:3000/emails";

  async getEmails() {
    const { data } = await axios.get(this.URL);
    return data;
  }

  async sendEmails(email) {
    const { data } = await axios.post(this.URL, email);
    return data;
  }

  async deleteEmail(id) {
    await axios.delete(`http://localhost:3000/emails/${id}`);
  }
}

export const emailService = new EmailService();
