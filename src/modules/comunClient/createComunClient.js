const prisma = require("../../database/database");
const {hash} = require("bcrypt");

const createCommunClient = async (
    name,
    lastname,
    email,
    password,
    age,
    perfil_image,
    vaccination_status,
    city,
    state,
) => {
    const clientExist = await prisma.comunClient.findFirst({
        where: {
            email: {
                equals: email
            }
        }
    });

    console.log(clientExist);
    if (clientExist) {
        return null;
    }

    const safePassword = await hash(password, 8);

    const communClient = await prisma.comunClient.create({
        data: {
            name: name,
            lastname: lastname,
            email: email,
            password: safePassword,
            age: age,
            perfil_image: perfil_image,
            vaccination_status: vaccination_status,
            city: city,
            state: state,
        }
    });

    return communClient;
}

module.exports = createCommunClient;