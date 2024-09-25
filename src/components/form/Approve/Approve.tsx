
'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
// import { Button, Input, Select } from './ui'; // Assume these are pre-defined UI components
import Link from 'next/link';
import { ClipboardPen, ShoppingCart, ClipboardCopy, ClipboardList } from 'lucide-react';
import ParticlesComponent from '../Particles';

const Approve = () => {
    const {  handleSubmit } = useForm();

    const onSubmit = () => {
        console.log('Form Data:');
    };

    return (
        <div className=''>
            <ParticlesComponent id="particles"/>
            <div className="material-return-form-container p-6 backdrop-blur-md bg-[#27303d] opacity-80 rounded-md mt-[100px]">
  <h1 className="text-2xl font-semibold mb-8 text-white ml-[100px]">Approved</h1>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4 ml-4">
      
      {/* REQ Card */}
      <div className="w-full">
        <Link href="/approve1">
          <div className="custom-shadow m-2 group p-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full overflow-hidden cursor-pointer">
            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
              <ClipboardPen size={30} className="text-current group-hover:text-[#42B682]" />
            </div>
            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-xl">REQ</p>
          </div>
        </Link>
      </div>

      {/* PO Card */}
      <div className="w-full">
        <Link href="/approve2">
          <div className="custom-shadow m-2 group p-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full overflow-hidden cursor-pointer">
            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
              <ShoppingCart size={30} className="text-current group-hover:text-[#42B682]" />
            </div>
            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-xl">PO</p>
          </div>
        </Link>
      </div>

      {/* IGP Card */}
      <div className="w-full">
        <Link href="/approve3">
          <div className="custom-shadow m-2 group p-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full overflow-hidden cursor-pointer">
            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
              <ClipboardCopy size={30} className="text-current group-hover:text-[#42B682]" />
            </div>
            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-xl">IGP</p>
          </div>
        </Link>
      </div>

      {/* GRN Card */}
      <div className="w-full">
        <Link href="/approve4">
          <div className="custom-shadow m-2 group p-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full overflow-hidden cursor-pointer">
            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
              <ClipboardList size={30} className="text-current group-hover:text-[#42B682]" />
            </div>
            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-xl">GRN</p>
          </div>
        </Link>
      </div>

      {/* OGP Card */}
      <div className="w-full">
        <Link href="/approve5">
          <div className="custom-shadow m-2 group p-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center gap-2 relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full overflow-hidden cursor-pointer">
            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
              <ClipboardList size={30} className="text-current group-hover:text-[#42B682]" />
            </div>
            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-xl">OGP</p>
          </div>
        </Link>
      </div>

    </div>
  </form>
</div>

        </div>
    );
};

export default Approve;