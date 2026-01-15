import axios from "axios";

const productService = () => {
    const API_BASE_URL = "http://localhost:3000/api/products";
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dt5lc3c4i/image/upload";

    return {
        getAll: async () => {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        },

        uploadImage: async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "unsigned_upload");
            
            const response = await axios.post(CLOUDINARY_URL, formData);
            return response.data.secure_url;
        },

        create: async (productData) => {
            const response = await axios.post(API_BASE_URL, productData);
            console.log(response.data);
            return response.data;
        },

        delete: async (productId) => {
            const category = await axios.get(`${API_BASE_URL}/${productId}`);
            if (category.data) {
                await axios.delete(`${API_BASE_URL}/${productId}`);
            }
        },

        update: async (productId, updatedData) => {
            const response = await axios.put(`${API_BASE_URL}/${productId}`, updatedData);
            return response.data;
        }
    };
};

export default productService;