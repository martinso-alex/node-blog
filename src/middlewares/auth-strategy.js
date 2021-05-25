const BearerStrategy = require("passport-http-bearer").Strategy;
const LocalStrategy = require("passport-local").Strategy;

const { InvalidCredentialsError } = require("../../utils/errors");

const passport = require("passport");
const bcrypt = require("bcrypt");
const { jwt } = require("../../utils/tokens");

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

				if (!user)
					throw new InvalidCredentialsError(
						"there's no user with the given email."
					);

				const validPassword = await bcrypt.compare(password, user.password);
        
				if (!validPassword)
					throw new InvalidCredentialsError("invalid email or password.");

				done(null, user);
			} catch (error) {
				done(error);
			}
		}
	)
);

passport.use(
	new BearerStrategy(async (token, done) => {
		try {
			const { payload } = await jwt.contents(token);
			const user = await User.query().findById(payload.id);
			done(null, user, { token: token });
		} catch (error) {
			done(error);
		}
	})
);
