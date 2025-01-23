
import userSchemaModal from "../models/userSchemaModal.js";
import mongoose from 'mongoose'

export const getUserDetailsController = async (req, res) => {
    const { userId } = req.query;
    console.log("userId", userId);

    try {
       
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        const user = await userSchemaModal.findById(userId);
        console.log("user", user);
        if (user) {
            res.status(200).json({ 
                // message: "User details found successfully",
                 user });
        } else {
            res.status(404).json({ message: "User not found" });
        }

    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const updateUserDetailsController = async (req, res) => {
    const { values } = req.body;
    const { userId } = req.query; // Extract userId from query
    console.log("values", values, userId);

    try {
        if (!values || !userId) {
            return res.status(401).json({ message: "Form values are required" });
        }

        const fullName = `${values.fname} ${values.lname}`;
        const updateUser = await userSchemaModal.findByIdAndUpdate(userId, {
            fname: values.fname,
            lname: values.lname,
            sname: values.sname,
            email: values.email,
            number: values.number,
            dob: values.dob,
            gender: values.gender,
            name:fullName
        }, { new: true }); 

        console.log("updateUser", updateUser);
        await updateUser.save(); 

        return res.status(200).json({ message: "User details updated successfully", updateUser });
    } catch (error) {
        console.error("Error", error);
        return res.status(500).json({ message: "Internal server error", error });
    }
};


