const { compare } = require("bcrypt");
const prisma = require("../../database/database");

const login = async (email, password) => {
    const isCommercial = await prisma.commercialClient.findFirst({
        where: {
            email: {
                equals: email
            },
        }
    });

    if (isCommercial) {
        const passwordValid = await compare(password, isCommercial.password);
        if (passwordValid) {
            return isCommercial;
        }
    } else {
        const isComun = await prisma.comunClient.findFirst({
            where: {
                email: {
                    equals: email
                }
            }
        });

        if (isComun) {
            const passwordValidComun = await compare(password, isComun.password);
            if (passwordValidComun) {
                return isComun;
            }
        }
    }

    return null;
}

module.exports = login;