const app = require('../app/index');
const request = require('supertest');
let token = '';
let carModel = require('../app/models').Car;

beforeAll(async () => {
    const credentialsLogin = {
        email: 'brian@binar.co.id',
        password: "123456"
    };
    const response = await request(app).post('/v1/auth/login').send(credentialsLogin);
    token = response.body.accessToken;
});


describe('GET /', () => {
    it('return 200 ok', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done)
    });
});

// ADD TEST GET CARS
describe('GET /v1/cars', () => {
    it('return 200 ok', (done) => {
        request(app)
            .get('/v1/cars')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done)
    });
});

// ADD TEST POST CARS
describe('POST /v1/cars', () => {
    it('return 201 created', async () => {
        const payload = {
            name: "Hyundai Stargazer",
            price: 300000,
            size: "LARGE",
            image: "https://arista-group.co.id/storage/file/vehicle/7jWy4kjS4hssZgBAYuccyxe0fR8YioVwlady0My2.jpg",
            isCurrentlyRented: false
        };

        await request(app)
            .post('/v1/cars')
            .set({
                Authorization: `Bearer ${token}`
            })
            .set(payload)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(201)
    });
});

// ADD TEST UPDATE CARS
describe('PUT /v1/cars/:id', () => {
    it("Respond with 200", async () => {
        const payload = {
            name: "Honda Civic",
            price: 300000,
            size: "MEDIUM",
            image: "https://arista-group.co.id/storage/file/vehicle/7jWy4kjS4hssZgBAYuccyxe0fR8YioVwlady0My2.jpg",
            isCurrentlyRented: false
        };
        const car = await carModel.create(payload)

        let updateCar = {
            name: "Updated Car",
            price: 200000,
            size: "MEDIUM",
            image: "https://arista-group.co.id/storage/file/vehicle/7jWy4kjS4hssZgBAYuccyxe0fR8YioVwlady0My2.jpg",
            isCurrentlyRented: false
        };

        await request(app)
            .put(`/v1/cars/${car.id}`)
            .set({
                Authorization: `Bearer ${token}`
            })
            .set(updateCar)
            .expect(200)

    });

});

// ADD TEST DELETE CARS
describe('DELETE /v1/cars/:id', () => {
    it('should return 204', async () => {
        const payload = {
            name: "Honda Civic",
            price: 300000,
            size: "MEDIUM",
            image: "https://arista-group.co.id/storage/file/vehicle/7jWy4kjS4hssZgBAYuccyxe0fR8YioVwlady0My2.jpg",
            isCurrentlyRented: false
        };
        const car = await carModel.create(payload)

        await request(app)
        .delete(`/v1/cars/${car.id}`)
        .set({
            Authorization: `Bearer ${token}`
        })
        .expect(204)
    })
})