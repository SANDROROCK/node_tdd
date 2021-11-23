const request = require("supertest");
const app = require("./server");

describe("Teste my app server", () => {
  it("should get main route", async () => {
    const res = await request(app).get("/")

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("message")
  });
});
