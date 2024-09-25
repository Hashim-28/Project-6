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
        proCode: "300",
        proName: "Bag",
        uom: "212",
        openStock:"0",
        VR:'0',
        SSR:'',
        img:''
       
    },
    {
      proCode: "300",
      proName: "Bag",
      uom: "212",
      openStock:"0",
      VR:'0',
      SSR:'',
      img:''
    }
  ];


const InventoryProduct = () => {
    const { register, handleSubmit,getValues,reset} = useForm();
    const [Backenddata, setBackenddata] = useState(demo);
    const [items, setItems] = useState([]);
    const [error,setError]=useState(null)
    const [loading, setLoading] = useState(false);  // State for loading indication

    // Columns for Data Grid
    const allColumns = [
        { key: 'proCode', name: 'Product Code' },
        { key: 'proName', name: 'Product Name' },
        { key: 'uom', name: 'UOM' },
        { key: 'openStock', name: 'Open Stock' },
        { key: 'VR', name: 'VR' },
        { key: 'SSR', name: 'SSR' },
        { key: 'img', name: 'Image' }
    ];


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
    //                  proCode: formData.proCode,
    //                  proName: formData.proName,
    //                  uom: formData.uom,
    //                  openStock: formData.openStock,
    //                  VR: formData.VR,
    //                  SSR: formData.SSR,
    //                  img: formData.img
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
        <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px]  -mb-10  -mt-10'>
            <div className="material-return-form-container p-6 bg-[#27303D] shadow-md rounded-md">
                <h1 className="text-xl font-semibold mb-8">Inventory Product</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
                        <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Product Code</label>
                            <Input
                                type="number"
                                {...register('proCode')}
                                placeholder="Bag"
                                className="mt-1 block w-full"
                                required
                            />
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
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
                        <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />UOM</label>
                            <Input
                                type="text"
                                {...register('uom')}
                                placeholder="Bag"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Opening Stock</label>
                            <Input
                                type="Number"
                                {...register('openingStock')}
                                placeholder="0"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
                        <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Valutaion Rate</label>
                            <Input
                                type="number"
                                {...register('valutaionRate')}
                                placeholder="0"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Stander Selling Rate</label>
                            <Input
                                type="Number"
                                {...register('standerSellingRate')}
                                placeholder="0"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-span-1 mb-4">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Image</label>
                            <Input
                                type="file"
                                {...register('image')}
                                placeholder="0"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                <div className="flex justify-end items-center">
                    <Button type="button" className="mr-2" onClick={onClearItems} ><Trash2 className="icon mr-2 h-4 w-4" />Clear</Button>
                  <Link href={{pathname:'/finish-good-report-main'}}> <Button type="submit" className="mr-2"> <PlusCircle className="icon mr-2 h-4 w-4" />Create</Button></Link>
                   
                </div>
                </form>

                {/* Data Grid to display backend data */}
            </div>
        </div>
    );
};

export default InventoryProduct;
