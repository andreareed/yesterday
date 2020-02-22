const userService = require('../user/user-service');

const validate = async (decoded, request) => {
  try {
    const user = await userService.findById(decoded.id);

    if (!user) {
      throw new Error(`User ${decoded.sub} not found`);
    }

    const isVerified = !!user;

    const credentials = {
      ...decoded,
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
      },
      scope: [
        ...(isVerified ? ['verified'] : []),
        `user-${user.id}`,
      ],
    };

    return { isValid: true, credentials };
  } catch (e) {
    return { isValid: false };
  }
};

module.exports = validate;
