function removeAgents(arr) {
    return arr.filter((agent)=>{
        return agent.profession !== "mole"
    })
}

function makeNameTags(arr) {

    const tags = arr.map((agent)=>{
        return `${agent.title} ${agent.forename} ${agent.surname}, ${agent.company}`
    })

    return tags

}

function createPoll(arr) {
    const things = Array.from(new Set(arr))
    const poll = {}
    things.forEach((thing)=>{
        poll[thing] = 0
    })
    arr.forEach((thing)=>{
        poll[thing]+=1
    })
    return poll
}

module.exports = { removeAgents, makeNameTags, createPoll };


//   removeAgents(employees); // returns [{name: 'Sam', profession: 'artist'}];