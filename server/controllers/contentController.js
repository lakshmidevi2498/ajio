import axios from 'axios';
import Content from '../models/contentModel.js';

export const postContentController = async (req, res) => {
  try {
    const { images, number } = req.body;

   
    if (!images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({ message: 'Images are required and must be an array.' });
    }

   
    const base64Images = await Promise.all(
      images.map(async (imageUrl) => {
        try {
          const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
          return `data:${response.headers['content-type']};base64,${Buffer.from(response.data).toString('base64')}`;
        } catch (error) {
          console.error(`Error converting image ${imageUrl} to base64:`, error.message);
          throw new Error(`Failed to process image: ${imageUrl}`);
        }
      })
    );

     
    const content = new Content({
      images: base64Images,
      number,
    });

 
    const savedContent = await content.save();

  
    return res.status(200).json({
      // message: 'Content saved successfully',
      savedContent,
    });
  } catch (error) {
    console.error('Error saving content:', error);
    return res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

export const getContentController = async (req,res) => {
    try {
        const ContentData = await Content.find(); 
        res.status(200).json(ContentData);
      } catch (error) {
        console.log("Error in products controller", error);
        res.status(500).json({  error: error.message });
      }
}
