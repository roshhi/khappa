import {CirclePile, ArrowRight, Package, ShoppingBag, TrendingUp } from "lucide-react";
import { NavLink } from 'react-router-dom';

export default function LandingPage(){

    const stats = [
        {
          label: 'Total Stock',
          value: 498,
          icon: Package,
          color: 'from-violet-500 to-purple-600',
          delay: 0.1,
          border: 'border-purple-500',
          backgroundColor: 'hover:bg-purple-50',
        },
        {
          label: 'Products',
          value: 36,
          icon: ShoppingBag,
          color: 'from-cyan-500 to-blue-600',
          delay: 0.2,
          border: 'border-blue-500',
          backgroundColor: 'hover:bg-blue-50',
        },
        {
          label: 'Categories',
          value: 4,
          icon: TrendingUp,
          color: 'from-emerald-500 to-green-600',
          delay: 0.3,
          border: 'border-green-500',
          backgroundColor: 'hover:bg-green-50',
        },
    ];

    return(
        
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-2 mt-25 ">
                <div className="flex items-center  bg-[#EEF2FF] w-fit px-4 py-2 rounded-2xl space-x-2 text-indigo-600">
                    <CirclePile className="w-5 h-5"/>
                    <h1 className="">Modern Inventory Solution</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[4vw] font-extrabold">Inventory Management,</h1>
                    <span className="text-[4vw] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 leading-none pb-2">Reimagined.</span>
                    <p className="text-[1.2vw] text-[#62748E] text-center max-w-2xl mt-2 ">Khappa streamline your product tracking with an elegant, powerful interface 
                    designed for modern businesses.</p>
                </div>
                <div className="flex items-center space-x-6 mt-6">
                    <NavLink to={'/categories'}>
                        <button className=" group flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl transition-transform duration-300 ease-out hover:bg-transparent border-2 hover:text-indigo-500 hover:border-indigo-500 cursor-pointer">
                            <p>Explore Dashboard </p>
                            <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-2"/>
                        </button>
                    </NavLink>
                   
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-20 mb-20 gap-2">
                <div className="flex">
                    {stats.map((stat)=>{
                        const Icon = stat.icon;
                        return(
                            <div className={`flex flex-col items-center justify-center shadow-lg rounded-xl p-6 m-4 w-58 h-48 border-t-4 transition-transform duration-300 ease-out ${stat.border} ${stat.backgroundColor} mt-10 hover:-translate-y-1`}>
                                <div className={`w-15 h-19 mx-auto mb-6 text-white rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}> 
                                    <Icon/> 
                                </div>
                                <div className="text-4xl font-extrabold">
                                    {stat.value}
                                </div>
                                <h2 className="text-xl text-[#62748E] ">
                                    {stat.label}
                                </h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )


}