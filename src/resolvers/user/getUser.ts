import User from "../../models/userModel";

const getUser = async(_: any, args: {user: string}) => {
    try {
        const user = await User.findById(args.user) 
        return user
    } catch(err: any) {
        console.log(err.message)
    }
}

export default getUser