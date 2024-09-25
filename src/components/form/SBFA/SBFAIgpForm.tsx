'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Trash2, PlusCircle, Edit, CalendarRange, ClipboardList, MessageCircleMore, CircleCheck, Rows4 } from 'lucide-react';
import DataGrid from 'react-data-grid';
import 'react-data-grid/lib/styles.css';
import '../../../app/Style/purchase.css';
import '../../../app/Style/Reports.css'
import Link from 'next/link';

const demoData = [
        { itemCode: 'A100', itemName: 'Item 1', uom: 'kg', qty: 150, igpQty: 120 ,balance:2000,remarks:"Good"},
    ];
   


const SBFAIgpForm = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [gridData, setGridData] = useState(demoData); 

    // Fetch data from the backend 
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch('https://your-backend-api.com/pending-requisition'); // Replace with actual API URL
    //             const data = await response.json();
                
                
    //             setValue('poNo', data.poNo);
    //             setValue('poDate', data.poDate);
    //             setValue('igpNo', data.igpNo);
    //             setValue('igpDate', data.igpDate);
    //             setValue('vendorName', data.vendorName);
    //             setValue('carrierNo', data.carrierNo);
                
                
                
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
        { key: 'qty', name: 'QTY' },
        { key: 'igpQty', name: 'IGP Qty' },
        { key: 'balance', name: 'Balance' },
        { key: 'remarks', name: 'Remarks' },
    ];

    return (
        <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] -mb-10 h-[100vh] -mt-10'>
            <div className="material-return-form-container p-6 bg-[#27303D] shadow-md rounded-md">
                <h1 className="text-xl font-semibold mb-8">SBFA Inward Gate Pass</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />PO No
                            </label>
                            <Input
                                type="number"
                                {...register('poNo')}
                                placeholder="10001"
                                className="mt-1 block w-full"
                                value={'2002'}  //remove this 
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="flex text-sm font-medium">
                                <CalendarRange className='pr-1' />PO Date
                            </label>
                            <Input
                                type="date"
                                {...register('poDate')}
                                className="mt-1 block w-full text-[#64747A]"
                                value={'19/09/2024'} //remove this
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />IGP No
                            </label>
                            <Input
                                type="number"
                                {...register('igpNo')}
                                placeholder="10001"
                                className="mt-1 block w-full"
                                value={'2002'}  //remove this 
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="flex text-sm font-medium">
                                <CalendarRange className='pr-1' />IGP Date
                            </label>
                            <Input
                                type="date"
                                {...register('igpDate')}
                                className="mt-1 block w-full text-[#64747A]"
                                value={'19/09/2024'} //remove this
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />Vendor Name
                            </label>
                            <Input
                                type="text"
                                {...register('vendorName')}
                                placeholder="10001"
                                className="mt-1 block w-full"
                                value={'2002'}  //remove this 
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="flex text-sm font-medium">
                                <CalendarRange className='pr-1' />Carrier No
                            </label>
                            <Input
                                type="number"
                                {...register('carrierNo')}
                                className="mt-1 block w-full text-[#64747A]"
                                value={'2'} //remove this
                                readOnly
                            />
                        </div>
                    </div>

                  

                    <div className="flex justify-end items-center">
                     <Link href={'/sbfa3'}>   <Button type="button" className="mr-2">
                            <Trash2 className="icon mr-2 h-4 w-4" />Clear
                        </Button></Link>
                       
                      <Link href={'/approve3'}>  <Button type="submit">
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

export default SBFAIgpForm;
