
import { X } from "lucide-react"


const BlurModalWrapper = ({children,onClose,title}) => {
  return (
    
    <div 
        onClick={onClose} 
        className='fixed z-50 border-2 top-0 left-0 w-full h-full backdrop-blur-sm  flex justify-center items-center p-4'
    >
        <div 
            onClick={(e) => e.stopPropagation()} 
            className='w-120 h-140 rounded-2xl bg-[#F4F4F4]/90 backdrop-blur-md  p-6 shadow-lg'
        > 
            <div className='flex justify-between items-center mb-10'>
                <h1 className='text-lg font-bold'>{title}</h1>
                <X 
                    onClick={onClose} 
                    className='text-[#62748E] cursor-pointer'
                />
            </div>
            {children}
        </div>
    </div>
)}

export default BlurModalWrapper

