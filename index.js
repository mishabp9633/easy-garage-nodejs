import { initialize } from "./database/connection.js";
import express from "express";
import customerRoutes from "./routes/user.routes.js";
import { errorhandling } from "./middlewares/error.middleware.js";
import vehicleRoutes from "./routes/vehicle.routes.js";
import serviceRoutes from "./routes/services.routes.js";
import staffRoutes from "./routes/staff.routes.js";
import productRoutes from "./routes/product.routes.js";
import jobCardRoutes from "./routes/jobCard.routes.js";
import bookingRoutes from "./routes/booking.routes.js"
import storeBillRoutes from "./routes/storeBill.routes.js"

import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// var jsonParsor = bodyParser.json();

await initialize();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/v1", [
  customerRoutes,
  vehicleRoutes,
  serviceRoutes,
  staffRoutes,
  productRoutes,
  jobCardRoutes,
  bookingRoutes,
  storeBillRoutes

]);

app.use(errorhandling);


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
