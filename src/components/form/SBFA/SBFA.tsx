
'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
// import { Button, Input, Select } from './ui'; // Assume these are pre-defined UI components
import  '../../../app/Style/boxes.css';
import Link from 'next/link';
import { ClipboardPen, ShoppingCart, ClipboardCopy, ClipboardList } from 'lucide-react';
import ParticlesComponent from '../Particles';

const SBFA = () => {
    const { handleSubmit } = useForm();

    const onSubmit = () => {
        console.log('Form Data:');
    };

    return (
        <div className=''>
            <ParticlesComponent id="particles"/>
        <div className="material-return-form-container p-6 backdrop-blur-md bg-[#27303d] opacity-80 rounded-md mt-[60px]">
             
            <h1 className="text-2xl font-semibold mb-8 text-white ml-[100px]">SBFA</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-4 gap-4 mb-4 ml-20">
                    <div className='w-10'>
                        <Link href='/sbfa1'>
                            <div className="custom-shadow m-2 group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[200px] overflow-hidden cursor-pointer ">
                                <div className="flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <ClipboardPen size={40} className='text-current group-hover:text-[#42B682]'/>
                                </div>
                                <p className="heading font-semibold tracking-wider group-hover:text-[#27293D]  text-xl">REQ</p>
                            </div>
                        </Link>
                    </div>
                    <div className='w-10'>
                        <Link href='/sbfa2'>
                            <div className="custom-shadow m-2 group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[200px] overflow-hidden cursor-pointer">
                                <div className="flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <ShoppingCart size={40} className='text-current group-hover:text-[#42B682]'/>
                                </div>
                                <p className="heading font-semibold tracking-wider group-hover:text-[#27293D]  text-xl">PO</p>
                            </div>
                        </Link>
                    </div>
                    <div className='w-10'>
                        <Link href='/sbfa3'>
                            <div className="custom-shadow m-2 group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[200px] overflow-hidden cursor-pointer">
                                <div className="flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <ClipboardCopy size={40} className='text-current group-hover:text-[#42B682]'/>
                                </div>
                                <p className="heading font-semibold tracking-wider group-hover:text-[#27293D]  text-xl">IGP</p>
                            </div>
                        </Link>
                    </div>
                    <div className='w-10'>
                        <Link href='/sbfa4'>
                            <div className="custom-shadow m-2 group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[200px] overflow-hidden cursor-pointer">
                                <div className="flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <ClipboardList size={40} className='text-current group-hover:text-[#42B682]'/>
                                </div>
                                <p className="heading font-semibold tracking-wider group-hover:text-[#27293D]  text-xl">GRN</p>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </form>
        </div>
        </div>
    );
};

export default SBFA;