import addressSchema from '../models/addressModal.js'

export const postAddressController = async (req, res) => {


    try {
        const { values, } = req.body;
        console.log("values",values)
        const {userId} = req.params;
        console.log("userId",userId)
        if (!values || !userId) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const {building, name, mobile, state, district, addressType, area, pincode, terms,landmark } = values;

        // if (!building || !name || !mobile || !state || !district || !addressType || !area || !pincode || !terms) {
        //     return res.status(400).json({ message: 'All fields are required' });
        // }

        // const name = `${lname} ${fname}`;
        const addressDetails = new addressSchema({ user:userId,building, name, mobile, state, district, addressType, area, pincode, terms,landmark });

        await addressDetails.save();

        res.status(201).json({ message: "Address is added successfully", addressDetails });
    } catch (error) {
        res.status(500).json({ message: "server error" });
        console.log("error", error);
    }
};

export const getAddressController = async (req,res) => {
    try {
        const {userId} = req.params
        console.log("req.params",req.params)
        if (!userId ) {
            return res.status(401).json({ message: "userId is required" });
          }

        const userAddress = await addressSchema.find({user:userId})
        .populate('user')
        // console.log("userAddress",userAddress)
       
        
    res.status(201).json({
        //  message:"Your Address get Successfully",
         userAddress });


        
    } catch (error) {
        res.status(500).json({ message: "server error" });
        console.log("error", error);    
    }
} 

export const updateAddressController = async (req, res) => {
    try {
        const { values } = req.body;
        const { editAddress } = req.params;

        if (!values || !editAddress) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const updatedAddress = await addressSchema.findOneAndUpdate(
            { _id: editAddress },
            { $set: values }, // Updates the fields in `values`
            { new: true } // Returns the updated document
        );

        if (!updatedAddress) {
            return res.status(404).json({ message: 'Address not found' });
        }

        res.status(200).json({ message: "Address updated successfully", updatedAddress });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
        console.error("Error:", error);
    }
};
