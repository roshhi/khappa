import { Package } from "lucide-react";
import { NavLink } from "react-router";
import { Trash2, PencilLine } from "lucide-react";
import { useState } from "react";
import BlurModalWrapper from "../modals/BlurModalWrapper";
import categoryService from "../../services/categoryService";
import UpdateCategoryForm from "../Forms/UpdateCategoryForm";

export default function CategoryCard({
  handleUpdateFromState,
  id,
  image,
  title,
  description,
  count,
  handleDeleteFromState
}) {

  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);


  return (
    <>
      <NavLink 
      to={`/categories/${id}`} 
      state={{ description, title}}
      className="no-underline">
          <div className=" w-[90vw] sm:w-[45vw] lg:w-[30vw] xl:max-w-[400px] rounded-3xl bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 border-b-3 border-white hover:border-b-black">
              {/* Image Section */}
              <div className="relative">
                  <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover"
                  />
                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-emerald-500 text-white px-4 py-2 rounded-full text-sm shadow-md">
                  <Package className="w-4 h-4" />
                  <span>{count==null?0:count} products</span>
                  </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {title}
                  </h2>
                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => {
                        e.preventDefault(); 
                        e.stopPropagation(); 
                        setIsEdit(true);
                      }}
                      className=' flex p-2 rounded-xl w-fit bg-gradient-to-r from-indigo-600 to-emerald-500 text-white items-center justify-center transition-transform duration-300 ease-out hover:bg-indigo-600 hover:-translate-y-1 cursor-pointer'>
                      <PencilLine className='w-5 h-5'  />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault(); 
                        e.stopPropagation(); 
                        setIsDelete(true);
                      }}
                      className=' flex gap-2 p-2 rounded-xl w-fit bg-red-500 text-white items-center justify-center ransition-transform duration-300 ease-out hover:bg-red-600 hover:-translate-y-1 cursor-pointer'>
                      <Trash2 className='w-5 h-5' />
                    </button>
                  </div>
                </div>
                <p className="text-slate-500 mt-2 truncate">
                  {description}
                </p>
              </div>
          </div>
      </NavLink>

    {isDelete && (
      <BlurModalWrapper title="Delete Category" onClose={() => setIsDelete(false)}>
        <div className="flex flex-col justify-center items-center gap-4 mt-6">
          <img src={image} alt="" className="rounded-2xl w-full h-62" />
          <div className="w-full text-center">
            <h1 className="text-slate-500 text-lg font-semibold">
              Are you sure you want to delete {title}? 
            </h1>
            <p>This action cannot be undone.</p>
          </div>
          <div className="flex justify-center gap-4 w-full mt-6"> 
            <button
              onClick={() => setIsDelete(false)}
              className="px-4 py-2 w-[45%] rounded-lg bg-white text-gray-800 transition hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                try{
                  await categoryService().delete(id);
                  handleDeleteFromState(id);
                  setIsDelete(false);
                }catch(err){
                  alert(err.message);
                  return;
                }
              }}
              className="px-4 py-2 w-[45%] rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </BlurModalWrapper>)
    }
    {isEdit && (
      <BlurModalWrapper title="Edit Category" onClose={() => setIsEdit(false)}>
        <div className="flex flex-col justify-center items-center gap-4 mt-6">
          <UpdateCategoryForm
            categoryId={id}
            existingTitle={title}
            existingDescription={description}
            existingImage={image}
            handleUpdateFromState={handleUpdateFromState}
            onClose={() => setIsEdit(false)}
            isEdit={true}
          >
          </UpdateCategoryForm>
        </div>
      </BlurModalWrapper>)
    }
</>
  );
}
