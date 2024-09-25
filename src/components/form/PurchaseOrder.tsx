
'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { Button, Input, Select } from './ui'; // Assume these are pre-defined UI components
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { BadgePercent, BaggageClaim, Banknote, CalendarRange, ChartNoAxesCombined, ClipboardList, Edit, FolderPen, HandCoins, Layers3, MapPinCheckInside, MapPinHouse, MessageCircleMore, MessageSquareText, NotepadTextDashed, PlusCircle, ReceiptText, ShoppingCart, Star, Trash2, XCircle } from 'lucide-react';
import  '../../app/Style/purchase.css';

const PurchaseOrder = () => {
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
        <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px]   -mb-10 -mt-[40px]'>
        <div className="material-return-form-container p-6  bg-[#27303D] shadow-md rounded-md mt-5">
            <h1 className="text-xl font-semibold mb-8">Purchase Order</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid  grid-cols-1 sm:grid-cols-4 lg:grid-cols-4  gap-4 mb-4">
                    <div>
                        <label className="flex text-sm font-medium text-gray-700"><ClipboardList  className='pr-1'/>Reg No</label>
                        <Input
                            type="number"
                            {...register('regNo')}
                            placeholder="10001"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div>
                        <label className="flex text-sm font-medium text-gray-700"><CalendarRange className='pr-1'/>Req Date</label>
                        <Input
                            type="date"
                            {...register('reqDate')}
                            placeholder="21-AUG-2024"
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div>
                        <label className="flex text-sm font-medium text-gray-700"><ShoppingCart className='pr-1'/>PO NO</label>
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
                </div>
               
                <div className="grid  grid-cols-2 sm:grid-cols-5 lg:grid-cols-5  gap-4 mb-4">
                <div>
                        <label className="flex text-sm font-medium text-gray-700"><CalendarRange className='pr-1'/>Delivery Date</label>
                        <Input
                            type="date"
                            {...register('deliver')}
                            placeholder="21-AUG-2024"
                            className="mt-1 block w-full"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="flex text-sm font-medium text-gray-700"><ReceiptText className='pr-1'/>Payment Terms</label>
                        <div className="col-span-1">
                        <select className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm bg-transparent sm:text-sm mt-2"  defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="pro1">pro1</option>
        <option value="pro2">pro2</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700 "><ClipboardList className='pr-1'/>Vendor Nmae</label>
                        <select className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm bg-transparent sm:text-sm mt-2"  defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="pro1">pro1</option>
        <option value="pro2">pro2</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><MapPinHouse className='pr-1'/>Vendor Address</label>
                        <Input
                            type="text"
                            {...register('vendor')}
                            placeholder="New Address"
                            className="mt-1 flex w-full"
                        />
                    </div>
                </div>
                <div className="grid  grid-cols-2 sm:grid-cols-6 lg:grid-cols-12  gap-4 mb-4">
                <div className="col-span-2">
                        <label className="flex text-sm font-medium text-gray-700 w-[120px] mt-1"><ChartNoAxesCombined  className='pr-1'/>Total Demand</label>
                        <select className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm bg-transparent sm:text-sm"  defaultValue=""
      >
        <option value="" disabled>
          Please select an option
        </option>
        <option value="pro1">pro1</option>
        <option value="pro2">pro2</option>
       
      </select>

                    </div>
                   
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700 w-[100px]"><FolderPen className='pr-1'/>IT Name</label>
                        <Input
                            type="text"
                            {...register('itemName')}
                            placeholder="Bag"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><MessageSquareText className='pr-1'/>UOM</label>
                        <Input
                            type="text"
                            {...register('uom')}
                            placeholder="nice stuff"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><Layers3 className='pr-1'/>QTY</label>
                        <Input
                            type="number"
                            {...register('qty')}
                            placeholder="10"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><BaggageClaim className='pr-1'/>PO QTY</label>
                        <Input
                            type="number"
                            {...register('poQty')}
                            placeholder="5"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><NotepadTextDashed className='pr-1'/>Req Bal</label>
                        <Input
                            type="number"
                            {...register('reqBalance')}
                            placeholder="2,000"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><Star className='pr-1'/>Rate</label>
                        <Input
                            type="number"
                            {...register('rate')}
                            placeholder="1.2"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><HandCoins className='pr-1'/>Exc Val</label>
                        <Input
                            type="number"
                            {...register('excValue')}
                            placeholder="0"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><BadgePercent className='pr-1'/>GST</label>
                        <Input
                            type="number"
                            {...register('gst')}
                            placeholder="5"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><Banknote className='pr-1'/>Amount</label>
                        <Input
                            type="number"
                            {...register('amount')}
                            placeholder="1,000"
                            className="mt-1 flex w-full"
                        />
                    </div>
                    <div className="flex justify-end items-center">
                        <Button type="button" onClick={onAddItem} className="btn-create">
                            <PlusCircle className="icon mr-2 h-4 w-4" />
                        </Button>
                    </div>
                    </div> 
                    <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><ShoppingCart className='pr-1'/>Total Demand</label>
                        <Input
                            type="number"
                            value={totalDemand}
                            readOnly
                            className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:border-black focus:border-2 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="col-span-1">
                        <label className="flex text-sm font-medium text-gray-700"><MessageCircleMore className='pr-1'/>Remarks</label>
                        <Input
                            type="text"
                            {...register('remarks')}
                            placeholder="Write Someting"
                            className="mt-1 flex w-full mb-3"
                        />
                    </div>
                    <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2 flex"><MapPinCheckInside className='pr-1'/>Added Items</h2>
                    {items.map((item, index) => (
                        <div key={index} className="border p-2 mb-2 rounded bg-white grid  grid-cols-2 sm:grid-cols-4 lg:grid-cols-8  gap-4 items-center">
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
                <div className="flex justify-end items-center">
                    <Button type="button" className="mr-2" onClick={onClearItems}> <Trash2 className="icon mr-2 h-4 w-4" />Clear</Button>
                    <Button type="submit" className="mr-2"><PlusCircle className="icon mr-2 h-4 w-4" />Create</Button>
                    <Button type="submit"><Edit className="icon mr-2 h-4 w-4" />Create and New</Button>
                </div>
            </form>
    </div>
    </div>
    );
};

export default PurchaseOrder;