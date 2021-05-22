const LocalStrategy = require("passport-local").Strategy;
const { InvalidArgumentError } = require("../../utils/errors");

const passport = require("passport");
const bcrypt = require("bcrypt");

const { User } = require("../models");

passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
			session: false,
		},
		async (email, password, done) => {
			try {
				const user = await User.query().findOne({ email });
				const validPassword = await bcrypt.compare(password, user.password);

				if (!user)
					throw new InvalidArgumentError(
						"there's no user with the given email."
					);

				if (!validPassword)
					throw new InvalidArgumentError("invalid email or password.");

				done(null, user);
			} catch (error) {
				done(error);
			}
		}
	)
);
