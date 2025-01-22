import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js"; // Import Express server
import Post from "../src/models/Post.js"; // Import Post model

// Increase timeout to avoid Jest async errors
jest.setTimeout(30000);

let postId;

// ✅ Setup MongoDB before running tests
beforeAll(async () => {
  await mongoose.connect("mongodb://db:27017/blogging-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Ensure the database is clean before tests
  console.log("Deletando todos os posts do banco de testes.");
  await Post.deleteMany({});
});

// ✅ Close MongoDB connection after all tests
afterAll(async () => {
  await mongoose.connection.close(); // Close MongoDB connection
  await new Promise(resolve => setTimeout(() => resolve(), 500)); // Ensure Jest exits
});

// ✅ Test: List all posts
test("GET /posts should return status 200 and a list of posts", async () => {
  const res = await request(app).get("/posts");
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

// ✅ Test: Create a new post
test("POST /posts should create a new post", async () => {
  const newPost = { titulo: "Test Post", descricao: "Post description" };
  const res = await request(app).post("/posts").send(newPost);

  expect(res.status).toBe(201);
  expect(res.body.post.titulo).toBe(newPost.titulo);

  postId = res.body.post._id; // Store the post ID for further tests
});

// ✅ Test: Get a specific post by ID
test("GET /posts/:id should return a specific post", async () => {
  const res = await request(app).get(`/posts/${postId}`);
  expect(res.status).toBe(200);
  expect(res.body._id).toBe(postId);
});

// ✅ Test: Update a post
test("PUT /posts/:id should update an existing post", async () => {
  const updatedPost = { titulo: "Updated Title", descricao: "Updated description" };
  const res = await request(app).put(`/posts/${postId}`).send(updatedPost);

  expect(res.status).toBe(200);
  expect(res.body.message).toBe("Livro atualizado");
});

// ✅ Test: Delete a post
test("DELETE /posts/:id should delete a post", async () => {
  const res = await request(app).delete(`/posts/${postId}`);
  expect(res.status).toBe(200);
  expect(res.body.message).toBe("Livro excluido com sucesso");
});

// ✅ Test: Search posts by title
test("GET /posts/search should search posts by title", async () => {
  const res = await request(app).get("/posts/busca?titulo=Test");
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});