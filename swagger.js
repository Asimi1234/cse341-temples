const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temples API',
    description: 'CSE 341 Temples API — full CRUD for LDS temples',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';         // the spec file that gets generated
const endpointsFiles = ['./routes/index.js']; // entry point swagger-autogen scans

// Generate swagger.json by scanning the route files above
swaggerAutogen(outputFile, endpointsFiles, doc);
