module.exports = (app) => {
	app.use("/api", [
		require("./migrate"),
		require("./authenticate"),
		require("./articles"),
		require("./authors"),
	]);
};
