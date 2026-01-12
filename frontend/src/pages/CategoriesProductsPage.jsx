import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useParams, useLocation } from 'react-router'
import { NavLink } from 'react-router'
import { ListFilter } from 'lucide-react'
import axios from 'axios'
import ProductCard from '../components/modals/ProductCard'

const CategoriesProductsPage = () => {

    const { id } = useParams();
    const location = useLocation();
    const { description,title } = location.state || {};
    const [categoriesProd, setCategoriesProd] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        axios.get("http://localhost:3000/api/categories/"+id+"/products")
        .then((res)=>{ setCategoriesProd(res.data); })
        .catch((err)=>{ console.log(err); })
        .finally(() => {
            setLoader(false);
        });
    },[])

    return (

        <div className='p-3 mt-10 mx-auto max-w-7xl'>
            <div className='flex flex-col gap-2'>
                <NavLink to={'/categories'} className="w-fit">
                    <button className='p-3 relative right-2 rounded-2xl flex items-center gap-2 text-[#62748E] font-medium mb-4 text-lg cursor-pointer hover:bg-[#EEF2FF]'>
                        <ArrowLeft className='w-5 h-5'/>
                        Back to Categories
                    </button>
                </NavLink>
                <h1 class="capitalize text-4xl font-extrabold">{title}</h1>
                <p className='text-xl text-[#62748E] mt-1'>{description}</p>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 gap-4'>
                    <div>
                        <input className='w-[90vw] sm:w-[80vw] xl:max-w-[1100px] rounded-2xl border-[#62748E] p-4 pl-9 shadow-[0_0_12px_rgba(0,0,0,0.12)]' type="text" placeholder="Search products..."/>
                    </div>
                    <div className='w-[90vw] sm:w-[20vw] xxl:max-w-[150px]  flex gap-2 bg-[#F0F5F9] rounded-2xl p-4 justify-center items-center'>
                        <ListFilter />
                        <p>Filters</p> 
                    </div>
                </div>
                {loader ? <div className='loader fixed top-[70%] lg:top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]'></div> 
                :
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center lg:justify-items-start'>
                    {
                        categoriesProd.map((product) =>{
                            return (
                                <ProductCard
                                    key={product.id}
                                    id={product.product_id}
                                    image={product.image_url || "https://cdn.greatnews.life/wp-content/uploads/2022/11/Untitled-design-21.png"}
                                    name={product.name}
                                    description={product.description || "No description available"}
                                    count={product.quantity}
                                    price={product.price || 0}
                                    category_title={title}
                                />
                            )
                        })
                    }
                </div>}
            </div>
        </div>
    )
}

export default CategoriesProductsPage