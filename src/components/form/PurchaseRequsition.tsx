'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Trash2, PlusCircle, Edit, CalendarRange, FolderPen, ChartNoAxesCombined , Layers3, MapPinCheckInside, MessageSquareText, SquareChartGantt, MessageCircleMore, ClipboardList } from 'lucide-react';
import '../../app/Style/purchase.css';

const PurchaseRequisition = () => {
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
        <div className="material-return-form-container p-6 bg-[#27303D] shadow-md rounded-md">
            <h1 className="text-xl font-semibold mb-8">Purchase Requisition</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="flex text-sm font-medium "><ClipboardList  className='pr-1'/>Reg No</label>
                        <Input
                            type="number"
                            {...register('regNo')}
                            placeholder="10001"
                            className="mt-1 block w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="flex text-sm font-medium "><CalendarRange className='pr-1'/>Req Date</label>
                        <Input
                            type="date"
                            {...register('reqDate')}
                            placeholder="21-AUG-2024"
                            className="mt-1 block w-full text-[#64747A]"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-4">
                    <div className="col-span-2">
                        <label className="flex text-sm font-medium "><SquareChartGantt className='pr-1'/>Item Code</label>
                        <select className="block w-full p-2  rounded-md shadow-sm  sm:text-sm mt-[5px]" {...register('itemCode')} defaultValue="">
                            <option value="" disabled>Select an option</option>
                            <option value="pro1">pro1</option>
                            <option value="pro2">pro2</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium "><FolderPen className='pr-1'/>Item Name</label>
                        <Input
                            type="text"
                            {...register('itemName')}
                            placeholder="Bag"
                            className="mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium "><MessageSquareText className='pr-1'/>UOM</label>
                        <Input
                            type="text"
                            {...register('uom')}
                            placeholder="Good Stuff"
                            className="mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium "><Layers3 className='pr-1'/>QTY</label>
                        <Input
                            type="number"
                            {...register('qty')}
                            placeholder="10"
                            className="mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium "><ChartNoAxesCombined  className='pr-1'/>Demand</label>
                        <Input
                            type="number"
                            {...register('demand')}
                            placeholder="8"
                            className="mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="flex justify-end items-center">
                        <Button type="button" onClick={onAddItem} className="btn-create ">
                            <PlusCircle className="icon mr-2 h-4 w-4 " />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="col-span-1">
                        <label className="flex text-sm font-medium "><ChartNoAxesCombined  className='pr-1'/>Total Demand</label>
                        <Input
                            type="number"
                            value={totalDemand}
                            readOnly
                            className="block w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:border-black focus:border-2 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="col-span-1">
                        <label className="flex text-sm font-medium "><MessageCircleMore className='pr-1'/>Remarks</label>
                        <Input
                            type="text"
                            {...register('remarks')}
                            placeholder="Massage"
                            className="mt-1 block w-full mb-3"
                        />
                    </div>

                <div className="mb-4">
                    <h1 className="text-lg font-semibold mb-2 flex "><MapPinCheckInside className='pr-1'/>Added Items</h1>
                    {items.map((item, index) => (
                        <div key={index} className=" p-2 mb-2 text-white rounded bg-[#333B48] grid lg:grid-cols-8 sm:grid-cols-8 grid-cols-2 gap-4 items-center">
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

                <div className="flex justify-end  items-center">
                    <Button type="button" className="mr-2" onClick={onClearItems} ><Trash2 className="icon mr-2 h-4 w-4" />Clear</Button>
                    <Button type="submit" className="mr-2"> <PlusCircle className="icon mr-2 h-4 w-4" />Create</Button>
                    <Button type="submit"><Edit className="icon mr-2 h-4 w-4" />Create and New</Button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default PurchaseRequisition;
