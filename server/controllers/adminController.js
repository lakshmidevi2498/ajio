import mongoose from 'mongoose';
import userSchemaModal from '../models/userSchemaModal.js';

export const getAdminController = async (req, res) => {
    try {

        const { email, password ,role} = req.body; 
        console.log("req.body", req.body); 
     
        if ( !email || !password) {
            return res.status(400).json({ message: "User object with email and password is required" });
        }
    //    const newAdmin = new userSchemaModal({
    //     email:email,password:password,role:role ,provider:'admin'
    //    })
    //    await newAdmin.save()

        const admin = await userSchemaModal.findOne({ email });
        console.log("admin", admin);

        if (!admin) {
            return res.status(400).json({ message: "Admin not found" });
        }
        res.status(200).json({ message: "Admin exists", admin });
        // res.status(200).json({ message: "Admin created", newAdmin });
    } 
    catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const createAdminController = async (req, res) => {
    try {

        const { email, password ,role} = req.body; 
        console.log("req.body", req.body); 
     
        if ( !email || !password) {
            return res.status(400).json({ message: "User object with email and password is required" });
        }
       const newAdmin = new userSchemaModal({
        email:email,password:password,role:role ,provider:'admin'
       })
       await newAdmin.save()

   
        res.status(200).json({ message: "Admin created", newAdmin });
    } 
    catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
