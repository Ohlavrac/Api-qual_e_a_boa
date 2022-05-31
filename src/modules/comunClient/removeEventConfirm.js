const prisma = require("../../database/database");

const removeEventConfirm = async (id, idComunClient) => {
    id = parseInt(id);
    var removeConfirm;
    
    const relationEventAndClientC = await prisma.comunClientEvent.findFirst({
        where: {
            idComunClient: {equals: idComunClient},
            idEvent: {equals: id}
        }
    });

    console.log("INFO: "+ relationEventAndClientC);

    if (relationEventAndClientC) {
        removeConfirm = await prisma.event.update({
            where: {
                id: id
            },
            data: {
                confirmations: {decrement: 1}
            }
        }); 

        const removeRelation = await prisma.comunClientEvent.delete({
            where: {
                id: relationEventAndClientC.id
            }
        });

        return removeConfirm;
    } else {
        return {msg: "user not found in the queue"};
    }
}

module.exports = removeEventConfirm;