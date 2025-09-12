
const RequestController = require('./controllers/RequestController');

describe('API requests', () => {
  it('should make a GET request', async () => {
    const response = await RequestController.getRequest();
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('title');
    console.log('First test response:', response.data);
  });


  it('GET /users should return status 200 and array of users', async () => {
    const response = await RequestController.getUsersInfo();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty('username');
    console.log('Second test response:', response.data[0]);
  });

  it('GET /comments?postId=1 should return comments for post 1', async () => {
    const response = await RequestController.getComments();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty('postId');
    expect(response.data[0].postId).toBe(1);
    console.log('Third test response:', response.data);
  });

  it('POST /should create a new post', async () => {
    const response = await RequestController.createNewPost();
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('title', 'New Post');
    expect(response.data).toHaveProperty('body', 'This is a new post');
    expect(response.data).toHaveProperty('userId', 1);
    console.log('Fourth test response:', response.data);
  })

  it('POST /comments should create a new comment', async () => {
    const newComment = {
      name: 'John Doe',
      email: '8oVbE@example.com',
      body: 'This is a new comment',
      postId: 1
    }
    const response = await RequestController.createNewComment(newComment);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('name', 'John Doe');
    expect(response.data).toHaveProperty('email', '8oVbE@example.com');
    expect(response.data).toHaveProperty('body', 'This is a new comment');
    expect(response.data).toHaveProperty('postId', 1);
    expect(response.data).toHaveProperty('id');
    console.log('Fifth test response:', response.data);
  });

});
