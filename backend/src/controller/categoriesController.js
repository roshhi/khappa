import db from '../db/queries.js';
import redisClient from '../db/redis.js';

async function fetchCategories(req, res) {    // Function to fetch all categories
    try{
        const cacheKey = "categories:all";
        const cachedData = await redisClient.get(cacheKey);
        
        if (cachedData) {
            return res.status(200).json(JSON.parse(cachedData));
        }
        const categories = await db.getAllCategories();
        await redisClient.set(
            cacheKey,
            JSON.stringify(categories),
            "EX",
            60
        );
        res.status(200).json(categories);
    }catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
} 
async function fetchCategoryById(req, res) {  // Function to fetch a category by ID
    try{
        const { id } = req.params;
        const category = await db.getCategoryById(id);
        res.status(200).json(category);
        console.log('Fetched category:', category);
    }catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ error: 'Failed to fetch category by id' });
    }
}
async function createNewCategory(req, res) {  // Function to create new category
    try{
        const { name, description, image } = req.body; // now includes image URL
        const category = await db.createCategory(name, description, image);
        await redisClient.del("categories:all");
        res.status(200).json(category);
        console.log('Fetched category:', category);
    }catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ error: 'Failed to create category' });
    }
}
async function deleteCategoryById(req, res) {  // Function to delete a category by ID
    try{
        const { id } = req.params;
        const category = await db.deleteCategory(id);
        await redisClient.del("categories:all");
        res.status(200).json(category);
        console.log('Fetched category:', category);
    }catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ error: 'Failed to create category' });
    }
}
async function updateCategoryById(req, res) {  // Function to update a category by ID
    try{
        const { id } = req.params;
        const { name,description,image } = req.body;
        const category = await db.updateCategory(id,name,description,image);
        await redisClient.del("categories:all");
        res.status(200).json(category);
        console.log('Fetched category:', category);
    }catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ error: 'Failed to create category' });
    }
}
export default { fetchCategories,fetchCategoryById,createNewCategory,deleteCategoryById,updateCategoryById };