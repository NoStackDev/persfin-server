import User from "../../models/userModel";

const getUsers = async () => {
    try {
        const users = await User.find()
        return users

    } catch(err: any) {
        console.log(err.message)
    }
}

export default getUsers