import axios from "axios";

const productService = () => {
    const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/products`;
    const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;

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