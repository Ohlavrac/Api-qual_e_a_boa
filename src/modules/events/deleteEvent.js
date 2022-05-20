const prisma = require("../../database/database");

const deleteEvent = async (id, id_owner) => {
    id = parseInt(id);
    const event = await prisma.event.findFirst({
        where: {
            id: id, id_owner
        }
    });

    if (event) {
        const deleteEvent = await prisma.event.delete({
            where: {
                id: id,
            }
        })
    }

    console.log(deleteEvent);

    return event;
}

module.exports = deleteEvent;