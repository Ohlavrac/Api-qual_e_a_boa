const prisma = require("../../database/database");

const updateEvent = async (id, id_owner) => {
    id = parseInt(id);

    const isEventOwner = await prisma.event.findFirst({
        where: {
            id: id,
            id_owner: id_owner,
        }
    });

    return isEventOwner;
}

module.exports = updateEvent;