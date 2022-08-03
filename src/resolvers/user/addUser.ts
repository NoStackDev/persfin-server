import User from "../../models/userModel";
import bcrypt from "bcrypt"



const addUser = async (_: any, args: {firstname: string, lastname: string, othernames: string, email: string, password: string} ) => {
    try {
        const hash = await bcrypt.hash(args.password, 10)
        const user = new User({...args, password: hash})
        const {password, ...otherData} = user._doc
        await user.save()
        return otherData

    } catch(err: any) {
        console.log(err.message)
    }
}

export default addUser