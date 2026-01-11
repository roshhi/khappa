import React from 'react'
import CategoryCard from '../components/modals/CategoryCard'
import axios from "axios";
import { useState,useEffect } from 'react'
import { ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router';
const CategoriesPage = () => {

    const [categories, setCategories] = useState([]);
    const [loader, setLoader] = useState(true);
    
    useEffect(()=>{
        axios.get("http://localhost:3000/api/categories")
        .then((res)=>{ setCategories(res.data); })
        .catch((err)=>{ console.log(err); })
        .finally(() => {
            setLoader(false);
        });
    },[])
    
    return (

        <div className='p-5 mt-5 mx-auto max-w-7xl'>
            <NavLink to={'/'} className="w-fit">
                <button className='p-3 relative right-2 rounded-2xl flex items-center gap-2 text-[#62748E] font-medium mb-4 text-lg cursor-pointer hover:bg-[#EEF2FF]'>
                    <ArrowLeft className='w-5 h-5'/>
                    Back to Home
                </button>
            </NavLink>

            <h1 className='text-3xl font-extrabold'>Categories</h1>
            <p className='text-xl text-[#62748E] mt-1'>Browse and manage your product categories</p>
            {loader ? <div className='loader fixed top-[60%] lg:top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]'></div> :
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center lg:justify-items-start'> 
                    {
                        categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                id={category.category_id}
                                image={category.image_url || "https://cdn.greatnews.life/wp-content/uploads/2022/11/Untitled-design-21.png"}
                                title={category.name}
                                description={category.description || "No description available"}
                                count={category.productCount || 0}
                            />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default CategoriesPage