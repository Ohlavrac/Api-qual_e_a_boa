const prisma = require("../../database/database");

const eventDetail = async (id) => {
    id = parseInt(id);
    const event = await prisma.event.findFirst({
        where: {
            id: {
                equals: id
            },
            active: {
                equals: 1
            }
        }
    });

    console.log(event);

    return event;
}

module.exports = eventDetail;