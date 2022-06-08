const app = require("../index.js");
const request = require("supertest");

describe("GET /api/books", () => {

    // Acceder a todos los libros
    test("deberia responder con codigo 200", async () => {
        const response = await request(app).get("/api/books").send();
        expect(response.statusCode).toBe(200);
    });

    // Deberia ser un objeto la repuesta
    test("deberia ser un objeto", async () => {
        const response = await request(app).get("/api/books").send();
        expect(response.body).toBeInstanceOf(Object)
    });
})

describe("POST /api/books", () => {

    // Podria crear un libro con exito
    test("deberia responder con codigo 200", async () => {
        const response = await request(app).post("/api/books").send({
            title: "ejemplo"
        });
        expect(response.statusCode).toBe(200);
    });

    // No deberia dejarme crear un libro sin 'title'
    test("deberia devolver con codigo de estado 400", async () => {
        const response = await request(app).post("/api/books").send();
        expect(response.statusCode).toBe(400);
    })

    // No deberia poder crear un libro con un titulo vacio
    test("deberia responder con codigo 200", async () => {
        const response = await request(app).post("/api/books").send({
            title: ""
        });
        expect(response.statusCode).toBe(400);
    });
})