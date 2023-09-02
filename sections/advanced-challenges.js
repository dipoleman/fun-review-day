function removeSmarterAgents(agents) {
  const moleRegex = /m(.*)o(.*)l(.*)e/i;
  return agents.filter((agent) => {
    if (moleRegex.test(agent.aboutMe)) {
      return false;
    } else {
      for (let i = 0; i < agent.interests.length; i++) {
        if (moleRegex.test(agent.interests[i])) {
          return false;
        }
      }
    }
    return true;
  });

  console.log(agents);
}

function rememberMe(func) {
  const cache = {};
  return function (...args) {
    for (key in cache) {
      if (key === args.toString()){
        console.log('input seen before!')
        return cache[key]
      }
    }
    cache[args] = func(...args)
    console.log(cache)
    return cache[args];
  };
}

module.exports = { removeSmarterAgents, rememberMe };
