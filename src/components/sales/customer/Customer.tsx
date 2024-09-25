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
        CustID:"10002",
        CustN:"2024-09-13",
        CustAddr:'Islamabad',
        CreatBy:'Person'
    },
    {
        CustID:"10002",
        CustN:"2024-09-13",
        CustAddr:'Islamabad',
        CreatBy:'Person'
    }
  ];


const Customer = () => {
    const { register, handleSubmit,getValues,reset} = useForm();
    const [Backenddata, setBackenddata] = useState(demo);
    const [items, setItems] = useState([]);
    const [error,setError]=useState(null)
    const [loading, setLoading] = useState(false);  // State for loading indication

    // Columns for Data Grid
    const allColumns = [
        { key: 'CustID', name: 'Customer ID' },
        { key: 'CustN', name: 'Customer Name' },
        { key: 'CustAddr', name: 'Customer Address' },
        { key: 'CreatBy', name: 'Created By' }
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
    //                  CustID: formData.CustID,
    //                  CustN: formData.CustN,
    //                  CustAddr: formData.CustAddr,
    //                  CreatBy: formData.CreatBy
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
                <h1 className="text-xl font-semibold mb-8">Customer</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Customer ID</label>
                            <Input
                                type="number"
                                {...register('customerID')}
                                placeholder="1"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Account Code</label>
                            <Input
                                type="number"
                                {...register('accCode')}
                                placeholder="01010"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Customer Name</label>
                            <Input
                                type="text"
                                {...register('customerName')}
                                placeholder="person"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Customer Address</label>
                            <Input
                                type="text"
                                {...register('customerAddress')}
                                placeholder="Karachi"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                    </div>
                <div className="flex justify-end items-center">
                    <Button type="button" className="mr-2" onClick={onClearItems} ><Trash2 className="icon mr-2 h-4 w-4" />Clear</Button>
                  <Link href={{pathname:'/customer-main'}}> <Button type="submit" className="mr-2"> <PlusCircle className="icon mr-2 h-4 w-4" />Create</Button></Link>
                </div>
                </form>

                {/* Data Grid to display backend data */}
            </div>
        </div>
    );
};

export default Customer;
