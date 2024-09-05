
'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { Button, Input, Select } from './ui'; // Assume these are pre-defined UI components
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { BaggageClaim, CalendarRange, ClipboardList, Edit, FolderPen, HandCoins, MapPinCheckInside, MessageCircleMore, MessageSquareText, NotepadTextDashed, PlusCircle, ScrollText, ShoppingCart, SquareChartGantt, Star, Trash2, WalletCards, File} from 'lucide-react';
import  '../../app/Style/purchase.css';

const GRN = () => {
    const { register, handleSubmit, reset, getValues } = useForm();
    const [items, setItems] = useState([]);
    const [totalDemand, setTotalDemand] = useState(0);

    const onAddItem = () => {
        const formData = getValues();
        const { demand } = formData;

        // Add current demand to totalDemand
        setTotalDemand(prevTotal => prevTotal + parseFloat(demand));

        // Add the current form data to the items list
        setItems([...items, formData]);

        // Reset the form for new entry
        reset({ itemCode: '', itemName: '', uom: '', qty: '', demand: '' });
    };

    const onDeleteItem = (index) => {
        const itemToRemove = items[index];
        const updatedItems = items.filter((_, i) => i !== index);

        // Update total demand after removing the item
        setTotalDemand(prevTotal => prevTotal - parseFloat(itemToRemove.demand));

        // Update the items list
        setItems(updatedItems);
    };
    const onClearItems = () => {
        setItems([]);
        setTotalDemand(0);
    };
    const onSubmit = (data) => {
        console.log('Final Submission:', data);
        console.log('Items:', items);
    };
    return (
        <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px]  -mb-10 -mt-[40px]'>
        <div className="material-return-form-container p-6 bg-[#27303D] shadow-md rounded-md mt-[400px]">
            <h1 className="text-xl font-semibold mb-8">GRN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                   
                    <div>
                        <label className="flex text-sm font-medium text-gray-700"><ScrollText className='pr-1'/>GRN No</label>
                        <Input
                            type="number"
                            {...register('grnNo')}
                            placeholder="10001"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div>
                        <label className="flex text-sm font-medium text-gray-700"><CalendarRange className='pr-1'/>GRN Date</label>
                        <Input
                            type="date"
                            {...register('grnDate')}
                            placeholder="21-AUG-2024"
                            className="mt-1 block w-full"
                        />
                    </div>
                </div>
               
                <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                        <label className="flex text-sm font-medium text-gray-700"><ShoppingCart className='pr-1'/>PO No</label>
                        <Input
                            type="number"
                            {...register('poNo')}
                            placeholder="10001"
                            className="mt-1 flex w-full"
                        />
                    </div>
                <div>
                        <label className="flex text-sm font-medium text-gray-700"><CalendarRange className='pr-1'/>PO Date</label>
                        <Input
                            type="date"
                            {...register('poDate')}
                            placeholder="21-AUG-2024"
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700 "><ClipboardList  className='pr-1'/>IGP No</label>
                        <select className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm focus:outline-none   focus:border-black focus:border-2 sm:text-sm"  defaultValue=""
      >
        <option value="" disabled>
          Please select an option
        </option>
        <option value="pro1">pro1</option>
        <option value="pro2">pro2</option>
       
      </select>

                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                        <label className="flex text-sm font-medium text-gray-700"><CalendarRange className='pr-1'/>IGP Date</label>
                        <Input
                            type="date"
                            {...register('igpDate')}
                            placeholder=""
                            className="mt-1 block w-full"
                        />
                    </div>
                <div>
                        <label className="flex text-sm font-medium text-gray-700"><ScrollText className='pr-1'/>Bill No</label>
                        <Input
                            type="number"
                            {...register('billNo')}
                            placeholder=""
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div>
                        <label className="flex text-sm font-medium text-gray-700"><CalendarRange className='pr-1'/>Bill Date</label>
                        <Input
                            type="date"
                            {...register('billDate')}
                            placeholder=""
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <label className="flex text-sm font-medium text-gray-700"><ClipboardList className='pr-1'/>Vendor Name</label>
                        <Input
                            type="text"
                            {...register('vendorName')}
                            placeholder=""
                            className="mt-1 flex w-full"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-11 gap-4 mb-4 " >
                <div className="col-span-2 mt-[6px]">
                        <label className="flex text-sm font-medium text-gray-700 w-[100px]"><SquareChartGantt className='pr-1'/>IT Code</label>
                        <select className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm focus:outline-none   focus:border-black focus:border-2 sm:text-sm"  defaultValue=""
      >
        <option value="" disabled>
          Please select an option
        </option>
        <option value="pro1">pro1</option>
        <option value="pro2">pro2</option>
       
      </select>

                    </div>
                   
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><FolderPen className='pr-1'/>IT Name</label>
                        <Input
                            type="text"
                            {...register('itemName')}
                            placeholder=""
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><MessageSquareText className='pr-1'/>UOM</label>
                        <Input
                            type="text"
                            {...register('uom')}
                            placeholder=""
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><BaggageClaim className='pr-1'/>QTY Rec</label>
                        <Input
                            type="number"
                            {...register('qtyRec')}
                            placeholder=""
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><BaggageClaim className='pr-1'/>PO QTY</label>
                        <Input
                            type="number"
                            {...register('poQty')}
                            placeholder=""
                            className="mt-1 flex w-full"
                        />
                    </div>
                    
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><NotepadTextDashed className='pr-1'/>PO Bal</label>
                        <Input
                            type="number"
                            {...register('poBalance')}
                            placeholder="0"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><Star className='pr-1'/>Rate In PO</label>
                        <Input
                            type="number"
                            {...register('rateInPO')}
                            placeholder=""
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><Star className='pr-1'/>Bill Rate</label>
                        <Input
                            type="number"
                            {...register('billRate')}
                            placeholder=""
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><HandCoins className='pr-1'/>Value</label>
                        <Input
                            type="number"
                            {...register('value')}
                            placeholder=""
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="flex justify-end items-center">
                    <Button type="button" onClick={onAddItem} className="btn-create">
                            <PlusCircle className="icon mr-2 h-4 w-4" />
                        </Button>
                    </div >
                    </div> 
                    <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><WalletCards className='pr-1'/>Sum Of Total QTY Rec</label>
                        <Input
                            type="number"
                            value={totalDemand}
                            readOnly
                            className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:border-black focus:border-2 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><WalletCards className='pr-1'/>Sum Of Total Value</label>
                        <Input
                            type="number"
                            value={totalDemand}
                            readOnly
                            className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:border-black focus:border-2 sm:text-sm"
                        />
                    </div>
                </div>
                    </div>
                    <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2 flex"><MapPinCheckInside className='pr-1'/>Added Items</h2>
                    {items.map((item, index) => (
                        <div key={index} className="border p-2 mb-2 rounded bg-white grid grid-cols-8 gap-4 items-center">
                            <div>SI : {index+1}</div>
                            <div className="col-span-2">Item Code: {item.itemCode}</div>
                            <div className="col-span-1">Item Name: {item.itemName}</div>
                            <div className="col-span-1">UOM: {item.uom}</div>
                            <div className="col-span-1">Qty: {item.qty}</div>
                            <div className="col-span-1">Demand: {item.demand}</div>
                            <div className="col-span-1 flex justify-end">
                                <Button type="button" onClick={() => onDeleteItem(index)} className="text-red-500">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                    <div className="material-return-form-container p-6 bg-[#27303D] shadow-md rounded-md mt-5">
            <h1 className="text-xl font-semibold mb-8">New</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="flex text-sm font-medium text-gray-700 -mt-5"><MessageCircleMore className='pr-1'/>Remarks</label>
                        <textarea
                             {...register('regNo')}
                             placeholder="Enter your remarks"
                             className="mt-1 flex w-full p-2 bg-[#333B48]"
                             rows="4" // Adjust the number of rows as needed
                    ></textarea>
                    </div>
                    <div >
    <label className="flex text-sm font-medium text-gray-700 -mt-4"><File className='pr-1'/>Choose File</label>
    <div className="relative">
        <input
            type="file"
            {...register('reqDate')}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer "
        />
        <button
            type="button"
             className="mt-1 flex w-full bg-[#333B48] text-[#64747A] py-2 px-4 rounded-md text-center"
        >
            Choose File
        </button>
    </div>
</div>
                    </div>
                 </form>
                </div>
               
                    
                <div className="flex justify-end items-center mt-5">
                <Button type="button" className="mr-2" onClick={onClearItems} ><Trash2 className="icon mr-2 h-4 w-4" />Clear</Button>
                <Button type="submit" className="mr-2"><PlusCircle className="icon mr-2 h-4 w-4" />Create</Button>
                    <Button type="submit"><Edit className="icon mr-2 h-4 w-4" />Create and New</Button>
                </div>
            </form>
</div>
</div>
    );
};

export default GRN;