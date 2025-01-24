import fs from 'fs';
import PDFDocument from 'pdfkit';
import axios from 'axios';  
import { fileURLToPath } from 'url';
import path from 'path';
import mongoose from 'mongoose'
import address from '../models/addressModal.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadInvoiceController = async (req, res) => {
    const { item,perProductCharge,addressId,paymentId } = req.body;
    console.log("orders", item,perProductCharge,addressId,paymentId);

    try {

        const userAddress = await address.findById(addressId)
        console.log("userAddress in invoice",userAddress)
      
        const imageUrl = 'https://dealzy-assets.s3.ap-south-1.amazonaws.com/brands/54/logo-v2.png?v=1724607354';
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const logoImage = Buffer.from(response.data, 'binary');

    
        const doc = new PDFDocument();

         
        const fileName = `invoice_${Date.now()}.pdf`;
        const filePath = path.join(__dirname, fileName);

      
        const writeStream = fs.createWriteStream(filePath);
        doc.pipe(writeStream);

        if (item && perProductCharge) {
          

    
            doc.image(logoImage, { fit: [150, 100], align: 'left' });
            doc.moveDown();

         
            doc.fontSize(20).text('Invoice', { align: 'center' });
            doc.moveDown();

         
            doc.fontSize(12).text('Customer Support: 1822-8596-7895', { fontWeight: "bold", align: 'right' });
            doc.fontSize(12).text('Email: customercare@ajio.com', { fontWeight: "bold", align: 'right' });
            doc.moveDown();

           
            doc.fontSize(12).text(`Recipient Address: ${userAddress.name}`, { align: 'left', fontWeight: "bold" });
            doc.fontSize(12).text(`${userAddress.building}`, { align: 'left' });
            doc.fontSize(12).text(`${userAddress.district}`, { align: 'left' });
            doc.fontSize(12).text(`${userAddress.state}`, { align: 'left' });
            doc.fontSize(12).text(`${userAddress.pincode}`, { align: 'left' });
            doc.moveDown();

         
            doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
            doc.moveDown();

          
            doc.text('Order Details:', { align: 'left', fontWeight: "bold" });
            doc.text(`Order Id : ${paymentId}`, { align: 'right', fontWeight: "bold" });
            doc.moveDown();


                doc.fontSize(12).text(`Product : ${item.product.name}`, { align: 'left' });
                doc.fontSize(12).text(`Price: $${item.product.getitprice+perProductCharge}`, { align: 'left' });
                doc.fontSize(12).text(`Quantity: ${item.product.quantity}`, { align: 'left' });
                doc.moveDown();

       const totalAmount = item.product.getitprice+perProductCharge
            doc.fontSize(12).text(`Total Amount: $${totalAmount}`, { align: 'right', fontWeight: 'bold' });
            doc.moveDown();
            
            doc.fontSize(12).text('Thank you for your business!', { align: 'center' });
            doc.fontSize(12).text('________________', { align: 'right' });
            doc.fontSize(12).text('Authorized Signed', { align: 'right' });
            doc.end();
        }

  
        writeStream.on('finish', () => {
            res.download(filePath, fileName, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error downloading the invoice');
                }
             
                fs.unlinkSync(filePath);
            });
        });
    } catch (error) {
        console.error('Error generating invoice:', error);
        res.status(500).send('Server error');
    }
};
