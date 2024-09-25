'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Trash2, PlusCircle, Edit, CalendarRange, ClipboardList, MessageCircleMore, CircleCheck, Rows4, X, CircleX } from 'lucide-react';
import DataGrid from 'react-data-grid';
import 'react-data-grid/lib/styles.css';
import '../../../app/Style/purchase.css';
import '../../../app/Style/Reports.css'
import Link from 'next/link';

const demoData = [
        { itemCode: 'A100', itemName: 'Item 1', uom: 'kg', inStock: 150, demand: 120 },
    ];
   


const SBFAReqForm = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [gridData, setGridData] = useState(demoData); 

    // Fetch data from the backend 
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch('https://your-backend-api.com/pending-requisition'); // Replace with actual API URL
    //             const data = await response.json();
                
                
    //             setValue('regNo', data.regNo);
    //             setValue('reqDate', data.reqDate);
    //             setValue('remarks', data.remarks);
                
                
    //             setGridData(data.relatedItems); 
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }

    //     fetchData();
    // }, [setValue]);

    const onSubmit = (data: any) => {
        console.log('Final Submission:', data);
    };

    
    const columns = [
        { key: 'itemCode', name: 'Item Code' },
        { key: 'itemName', name: 'Item Name' },
        { key: 'uom', name: 'UOM' },
        { key: 'inStock', name: 'In Stock' },
        { key: 'demand', name: 'Demand' },
    ];

    return (
        <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] -mb-10  -mt-10'>
            <div className="material-return-form-container p-6 bg-[#27303D] shadow-md rounded-md">
                <h1 className="text-xl font-semibold mb-8">SBFA Requisition</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />Reg No
                            </label>
                            <Input
                                type="number"
                                {...register('regNo')}
                                placeholder="10001"
                                className="mt-1 block w-full"
                                value={'2002'}  //remove this 
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="flex text-sm font-medium">
                                <CalendarRange className='pr-1' />Req Date
                            </label>
                            <Input
                                type="date"
                                {...register('reqDate')}
                                className="mt-1 block w-full text-[#64747A]"
                                value={'19/09/2024'} //remove this
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="col-span-1">
                        <label className="flex text-sm font-medium">
                            <MessageCircleMore className='pr-1' />Remarks
                        </label>
                        <Input
                            type="text"
                            {...register('remarks')}
                            placeholder="Massage"
                            className="mt-1 block w-full mb-3"
                            value={'Good Quality'}//remove this
                            readOnly
                        />
                    </div>

                    <div className="flex justify-end items-center">
                       <Link href={'/sbfa1'}> <Button type="button" className="mr-2">
                            <CircleX className="icon mr-2 h-4 w-4" />Cancel
                        </Button></Link>
                       
                       <Link href={'/approve1'}> <Button type="submit">
                        <CircleCheck className="icon mr-2 h-4 w-4"/>
                        Approved
                        </Button></Link>
                    </div>
                </form>

                {/* Data Grid Section */}
                <div className="mt-6">
                    <DataGrid
                        columns={columns}
                        rows={gridData} // Data from backend
                        className="react-data-grid opacity-80 h-[100px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default SBFAReqForm;
