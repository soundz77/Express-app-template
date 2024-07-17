import app from "../../base-template/src/app.js";
const pageRouter = app();

// import application routes

import index from "../controllers/index.js";

// set up routes
pageRouter.get("/", index);

export default pageRouter;
