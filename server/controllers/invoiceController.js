import fs from 'fs';
import PDFDocument from 'pdfkit';
import axios from 'axios';  
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadInvoiceController = async (req, res) => {
    const { orders } = req.body;
    console.log("orders", orders);
    const orderedProducts = orders.cart.products;

    try {
      
        const imageUrl = 'https://dealzy-assets.s3.ap-south-1.amazonaws.com/brands/54/logo-v2.png?v=1724607354';
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const logoImage = Buffer.from(response.data, 'binary');

    
        const doc = new PDFDocument();

         
        const fileName = `invoice_${Date.now()}.pdf`;
        const filePath = path.join(__dirname, fileName);

      
        const writeStream = fs.createWriteStream(filePath);
        doc.pipe(writeStream);

        if (orders && orders.cart && Array.isArray(orders.cart.products)) {
            const products = orders.cart.products;
            console.log("products", products);

    
            doc.image(logoImage, { fit: [150, 100], align: 'left' });
            doc.moveDown();

         
            doc.fontSize(20).text('Invoice', { align: 'center' });
            doc.moveDown();

         
            doc.fontSize(12).text('Customer Support: 1822-8596-7895', { fontWeight: "bold", align: 'right' });
            doc.fontSize(12).text('Email: customercare@ajio.com', { fontWeight: "bold", align: 'right' });
            doc.moveDown();

           
            doc.fontSize(12).text(`Recipient Address: ${orders.address.name}`, { align: 'left', fontWeight: "bold" });
            doc.fontSize(12).text(`${orders.address.building}`, { align: 'left' });
            doc.fontSize(12).text(`${orders.address.district}`, { align: 'left' });
            doc.fontSize(12).text(`${orders.address.state}`, { align: 'left' });
            doc.fontSize(12).text(`${orders.address.pincode}`, { align: 'left' });
            doc.moveDown();

         
            doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
            doc.moveDown();

          
            doc.text('Order Details:', { align: 'left', fontWeight: "bold" });
            doc.text(`Order Id : ${orders.paymentDetails.orderId}`, { align: 'right', fontWeight: "bold" });
            doc.moveDown();

            
            const nonCancelledProducts = products.filter(item => item.productShippingStatus === "Delivered");

            const totalAmount = products.reduce((total, item) =>
                item.productShippingStatus === "Delivered" ? item.product.price + total : total
                , 0);

           
            nonCancelledProducts.forEach((item, index) => {
                doc.fontSize(12).text(`Product ${index + 1}: ${item.product.name}`, { align: 'left' });
                doc.fontSize(12).text(`Price: $${item.product.price}`, { align: 'left' });
                doc.fontSize(12).text(`Quantity: ${item.product.quantity}`, { align: 'left' });
                doc.moveDown();
            });

       
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
