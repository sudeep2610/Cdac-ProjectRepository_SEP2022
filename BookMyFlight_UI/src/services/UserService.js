import axios from "axios";

/**
 * @author Chetan_Nagmoti
 * Using Axios library to send request to spring boot and fetch response
 * The service method handles operations for user
 */
export default class UserService {
  constructor() {
    this.uri = "http://localhost:8980/";
  }

  // Service method to register new user
  async addUser(user) {
    return await axios.post(this.uri + "/createuser", user).then((response) => {
      return response;
    });
  }

  getUsers() {
    return this.users;
  }

  async getDetails(userName,password){
    return await axios.post(this.uri +"/au/" +userName+ "/?" +"password="+ password)
    .then((response)=>{
      console.log(response.data.username)
      console.log(response.data.password)
      return response;
    })
  }

  // Service method to authenticate user
  async validateUser(username, password) {
    return await axios
      .get(this.uri + "/auth/" + username + "/" + password)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        return res;
      });
  }
}
