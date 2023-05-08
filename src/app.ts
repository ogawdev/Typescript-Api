import express from "express";

class Application {
    app: express.Application;

    constructor() {
        this.app = express();
    }

    start() {
        this.app.listen(3000, () => {
            console.log("Server is listening on port 3000");
        });
    }
}

export default Application;