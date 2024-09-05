'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, Search, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import clsx from 'clsx';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import  '../../../app/Style/purchase.css';
import { boolean } from 'zod';
type Checked = DropdownMenuCheckboxItemProps["checked"];

const SBFAPO = () => {
  const [ReqNo, setReqNO] = useState<Checked>(false);
  const [ReqDate, setReqDate] = useState<Checked>(false);
  const [ApprovedBy, setApprovedBy] = useState<Checked>(false);
  const [Time, setTime] = useState<Checked>(false);
  const [Show, setShow] = useState<Checked>(false);
  const { handleSubmit } = useForm();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [items, setItems] = useState([]);

  // BackEnd 
//   const fetchDataFromBackend = async () => {
//     // Replace this with your actual API call
//     const response = await fetch('/api/pending-requests');
//     const data = await response.json();
//     return data;
//   };
  const onGoClick = async () => {
//     const data = await fetchDataFromBackend();
//     const filteredData = data.map((item: { reqNo: any; reqDate: any; approvedBy: any; time: any; show: any; }) => {
//       const filteredItem = {};
//       if (ReqNo) filteredItem.reqNo = item.reqNo;
//       if (ReqDate) filteredItem.reqDate = item.reqDate;
//       if (ApprovedBy) filteredItem.approvedBy = item.approvedBy;
//       if (Time) filteredItem.time = item.time;
//       if (Show) filteredItem.show = item.show;
      
//       return Object.keys(filteredItem).length > 0 ? filteredItem : item;
//     });

//     setItems(filteredData);
  };




const onDeleteItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
};

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const slectedoption =[
    ReqNo ? "ReqNo" :'',
    ReqDate ? "ReqDate" :'',
    ApprovedBy ? "ApprovedBy" :'',
    Time ? "Time" :'',
    Show ? "Show" :'',
  ].filter(Boolean).join(", ")
  return (
    <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] h-[100vh] -mb-10 -mt-[40px]'>
    <div className="material-return-form-container p-6  bg-[#27303D] shadow-md rounded-md ">
      <h1 className="text-xl font-semibold mb-8">SBFA Purchase Order</h1>
      <form onSubmit={handleSubmit(onGoClick)}>
        <div className="grid grid-cols-1 mb-4 ml-20">
          <div className='grid grid-cols-3 w-[400px] border  bg-white rounded-3xl'>
            <div className='dropdown'>
              <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                <DropdownMenuTrigger asChild>
                <Button variant="outline" onClick={toggleDropdown} className='w-[70px] border border-none rounded-bl-3xl rounded-tl-3xl h-[45px]'>
                <Search />
                <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>All Colums</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={ReqNo}
                    onCheckedChange={setReqNO}
                  >
                    PO No
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={ReqDate}
                    onCheckedChange={setReqDate}
                  >
                   PO Date
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={ApprovedBy}
                    onCheckedChange={setApprovedBy}
                  >
                    Approved By
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={Time}
                    onCheckedChange={setTime}
                  >
                    Time
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={Show}
                    onCheckedChange={setShow}
                  >
                    Show
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <input type="text" className='w-[262px]   border border-none -ml-[60px] ' value={slectedoption}   readOnly/>
            <button className='border w-[60px] border-none bg-white ml-[72.5px] rounded-br-3xl rounded-tr-3xl' type="submit">Go</button>
          </div>
        </div>

        {/* ...........................Backend data *.............................*/}

        <div className="mb-4">
                    
                    {items.map((item, index) => (
                        <div key={index} className="border p-2 mb-2 rounded bg-white grid grid-cols-8 gap-4 items-center">
                            <div>SI : {index+1}</div>
                            <div className="col-span-2">Req No: {''}</div>
                            <div className="col-span-1">Req Date: {''}</div>
                            <div className="col-span-1">Creaed By: {''}</div>
                            <div className="col-span-1">Time: {''}</div>
                            <div className="col-span-1">Show: {''}</div>
                            <div className="col-span-1 flex justify-end">
                                <Button type="button" onClick={() => onDeleteItem(index)} className="text-red-500">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

      </form>
    </div>
    </div>
  );
};

export default SBFAPO;
function getValues() {
    throw new Error('Function not implemented.');
}

