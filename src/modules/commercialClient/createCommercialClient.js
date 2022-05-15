const { hash } = require("bcrypt");
const prisma = require("../../database/database");

const createCommercialClient = async (
    establishment_name,
    owner_name,
    email,
    password,
    perfil_image,
    street,
    number,
    neighborhood,
    city,
) => {

    const clientExist = await prisma.commercialClient.findFirst({
        where: {
            email: {
                equals: email
            }
        }
    });

    if (clientExist) {
        return null;
    }

    const safePassword= await hash(password, 8);

    const client = await prisma.commercialClient.create({
        data: {
            establishment_name: establishment_name,
            owner_name: owner_name,
            email: email,
            password: safePassword,
            perfil_image: perfil_image,
            street: street,
            number: number,
            neighborhood: neighborhood,
            city: city,
        }
    });

    return client;
}

module.exports = createCommercialClient;