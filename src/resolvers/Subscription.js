function newLinkSubscribe(parent, args, context, info) {
  return context.db.subscription.link(
    { where: { mutation_in: ['CREATED'] } },
    info
  );
}

const newLink = {
  subscribe: newLinkSubscribe,
};

const newVoteSubscribe = (parent, args, context, info) => {
  return context.db.subscription.vote(
    { where: { mutation_in: ['CREATED'] } },
    info
  );
};

const newVote = {
  subscribe: newVoteSubscribe,
};

module.exports = {
  newLink,
  newVote,
};
