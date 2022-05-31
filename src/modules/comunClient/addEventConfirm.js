const prisma = require("../../database/database");

const addEventConfirm = async (id, idComunClient) => {
    id = parseInt(id);

    const isAtEvent = await prisma.comunClientEvent.findFirst({
        where: {
            idComunClient: idComunClient
        }
    });

    if (isAtEvent) {
        return {msg: "the id "+ idComunClient +" is at the queue event."};
    } else {
        const eventConfirm = await prisma.event.update({
            where: {
                id: id
            },
            data: {
                confirmations: {increment: 1}
            }
        }); 
    
        const relationEventAndClientC = await prisma.comunClientEvent.create({
            data: {
                idComunClient: idComunClient,
                idEvent: id
            }
        });

        console.log(eventConfirm);

        return eventConfirm;
    }
}

module.exports = addEventConfirm;