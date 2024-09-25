'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import '../../../app/Style/Reports.css'
import { Trash2, PlusCircle, CalendarRange, ClipboardList, ChartNoAxesCombined, Layers3, Edit, MapPinCheckInside } from 'lucide-react';
import '../../../app/Style/purchase.css';
import 'react-data-grid/lib/styles.css';
import axios from 'axios';

import DataGrid from 'react-data-grid';  // Import react-data-grid
import Link from 'next/link';


const demo = [
    {
        transferNo: "2122",
        transferDate: "2024-09-12",
        proCode: "300",
        proName: "Bag",
        uom: "212",
        qty: "10",
        remarks: "Sample item",
        total: "87",
    },
    {
        transferNo: "2123",
        transferDate: "2024-09-13",
        proCode: "301",
        proName: "Box",
        uom: "213",
        qty: "15",
        remarks: "Another item",
        total: "95",
    }
];


const FGTransferNote = () => {
    const { register, handleSubmit,getValues,reset} = useForm();
    const [Backenddata, setBackenddata] = useState(demo);
    const [items, setItems] = useState([]);
    const [error,setError]=useState(null)
    const [loading, setLoading] = useState(false);  // State for loading indication

    // Columns for Data Grid
    const columns = [
        { key: 'transferNo',  name: 'Transfer No' },
        { key: 'transferDate',  name: 'Transfer Date' },
        { key: 'proCode',  name: 'Product Code' },
        { key: 'proName',  name: 'Product Name' },
        { key: 'uom',  name: 'UOM' },
        { key: 'qty',  name: 'Qty' },
        { key: 'remarks',  name: 'Remarks' },
        { key: 'total',  name: 'Total' },
    ];

    const onAddItem = () => {
        const formData = getValues();
       

        // Add current demand to totalDemand
        

        // Add the current form data to the items list
        setItems([...items, formData]);

        // Reset the form for new entry
        reset({ itemCode: '', itemName: '', uom: '', qty: '', demand: '' });
    };

    const onDeleteItem = (index: number) => {
        const itemToRemove = items[index];
        const updatedItems = items.filter((_, i) => i !== index);
        // Update the items list
        setItems(updatedItems);
    };
    const onClearItems = () => {
        setItems([]);
        
    };

    // Fetch Data from Backend Based on Form Input
    // const fetchData = async (formData: any) => {
    //     setLoading(true);
    //       setError(null);
    //     try {
    //         setLoading(true);
    //         const response = await axios.get('/your-backend-api', {
    //             params: {
    //                 transferNo: formData.transferNo,
    //                 transferDate: formData.transferDate,
    //                 proCode: formData.proCode,
    //                 proName: formData.proName,
    //                 uom: formData.uom,
    //                 qty: formData.qty,
    //                 remarks: formData.remarks,
    //                 total: formData.total,
    //             }
    //         });
    //         if (response.data.length==0) {
    //             setError("No data available")
    //         }
    //         setBackenddata(response.data);  // Update backend data
    //     } catch (error) {
    //         console.error('Error while fetching data', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // On form submit, fetch data from backend
    const onSubmit = (data: any) => {
        // fetchData(data);  // Fetch backend data based on form input
        console.log('Final Submission:', data);
        console.log('Items:', items);
    };

    return (
        <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px]  -mb-10 h-[100vh] -mt-10'>
            <div className="material-return-form-container p-6 bg-[#27303D] shadow-md rounded-md">
                <h1 className="text-xl font-semibold mb-8">FG Transfer Note</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Transfer No</label>
                            <Input
                                type="number"
                                {...register('transferNo')}
                                placeholder="10001"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="flex text-sm font-medium "><CalendarRange className='pr-1' />Transfer Date</label>
                            <Input
                                type="date"
                                {...register('transferDate')}
                                placeholder="21-AUG-2024"
                                className="mt-1 block w-full text-[#64747A]"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-4">
                        <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Product Code</label>
                            <select className="block w-full p-2  rounded-md shadow-sm  sm:text-sm mt-[5px]" {...register('proCode')}>
                                <option value="" disabled>Select an option</option>
                                <option value="pro1">pro1</option>
                                <option value="pro2">pro2</option>
                            </select>
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Product Name</label>
                            <Input
                                type="text"
                                {...register('proName')}
                                placeholder="Bag"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><Layers3 className='pr-1' />UOM</label>
                            <Input
                                type="text"
                                {...register('uom')}
                                placeholder="Good Stuff"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><Layers3 className='pr-1' />Qty To transfer</label>
                            <Input
                                type="number"
                                {...register('qty')}
                                placeholder="10"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ChartNoAxesCombined className='pr-1' />Remarks</label>
                            <Input
                                type="text"
                                {...register('remarks')}
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
                    <div className="col-span-2 mb-4">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />total</label>
                            <select className="block w-full p-2  rounded-md shadow-sm  sm:text-sm mt-[5px]" {...register('total')}>
                                <option value="" disabled>Select an option</option>
                                <option value="pro1">pro1</option>
                                <option value="pro2">pro2</option>
                            </select>
                        </div>

                    <div className="mb-4">
    <h1 className="text-lg font-semibold mb-2 flex">
        <MapPinCheckInside className="pr-1" />Added Items
    </h1>
    {items.map((item, index) => (
        <div key={index} className="border p-2 mb-2 rounded bg-white grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            <div>SI : {index + 1}</div>
            <div className="col-span-1">TransNo: {item.transferNo}</div>
            <div className="col-span-1">TransDate: {item.transferDate}</div>
            <div className="col-span-1">ProCode: {item.proCode}</div>
            <div className="col-span-1">ProName: {item.proName}</div>
            <div className="col-span-1">UOM: {item.uom}</div>
            <div className="col-span-1">Qty: {item.qty}</div>
            <div className="col-span-1">Remarks: {item.remarks}</div>
            <div className="col-span-1 flex justify-end">
                <Button type="button" onClick={() => onDeleteItem(index)} className="text-red-500">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    ))}
</div>
                <div className="flex justify-end items-center">
                    <Button type="button" className="mr-2" onClick={onClearItems} ><Trash2 className="icon mr-2 h-4 w-4" />Clear</Button>
                  <Link href={{pathname:'/fg-Transfer-Report-main', query:{Backenddata}}}> <Button type="submit" className="mr-2"> <PlusCircle className="icon mr-2 h-4 w-4" />Create</Button></Link>
                    <Button type="submit"><Edit className="icon mr-2 h-4 w-4" />Create and New</Button>
                </div>
                </form>

                {/* Data Grid to display backend data */}
            </div>
        </div>
    );
};

export default FGTransferNote;
