const prisma = require("../../database/database");

const findAllEvents = async () => {
    const events = await prisma.event.findMany({
        where: {
            active: {
                equals: 1
            }
        }
    });

    console.log(events);
    return events;
}

module.exports = findAllEvents;