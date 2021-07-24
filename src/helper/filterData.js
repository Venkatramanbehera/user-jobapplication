const filterData = (participants,role) => {
    return participants.filter((participant) => {
        return participant.jobTitle === role
    })
}

export default filterData