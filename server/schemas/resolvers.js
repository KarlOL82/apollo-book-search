const { Tech, Matchup } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
              }
            return User.findOne({_id: context.user_id})
        }
    }
}