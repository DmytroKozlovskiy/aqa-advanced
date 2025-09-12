const BaseController = require("./BaseController");

class RequestController extends BaseController {
  async getRequest (id) {
    return await this.axiosInstance.get('/todos/1');
  }
  
  async getUsersInfo () {
    return await this.axiosInstance.get('/users');
  }  

  async getComments (postId) {
    return await this.axiosInstance.get('/comments?postId=1');
  }

  async createNewPost (payload) {
    return await this.axiosInstance.post('/posts', {
      title: 'New Post',
      body: 'This is a new post',
      userId: 1,
    });
  }

  async createNewComment (newComment) {
    return await this.axiosInstance.post('/comments', {
      name: 'John Doe',
      email: '8oVbE@example.com',
      body: 'This is a new comment',
      postId: 1
    });
  }


}
module.exports = new RequestController();