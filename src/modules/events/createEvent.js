const prisma = require("../../database/database");

const createEvent = async (
    title,
    description,
    date,
    image,
    price,
    capacity,
    street,
    number,
    neighborhood,
    city,
    state,
    id_owner,
) => {
    const event = await prisma.event.create({
        data: {
            title,
            description,
            date,
            image,
            price,
            capacity,
            street,
            number,
            neighborhood,
            city,
            state,
            id_owner,
        }
    });

    return event;   
}

module.exports = createEvent;