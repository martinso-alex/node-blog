const migrate = require("./migrate");

module.exports = (app) => {
	app.use("/api", migrate);
};
