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
   


const SBFAGrnForm = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [gridData, setGridData] = useState(demoData); 

    // Fetch data from the backend 
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch('https://your-backend-api.com/pending-requisition'); // Replace with actual API URL
    //             const data = await response.json();
                
                
    //             setValue('grnNo', data.grnNo);
    //             setValue('grnDate', data.grnDate);
    //             setValue('poNo', data.poNo);
    //             setValue('poDate', data.poDate);
    //             setValue('igpNo', data.igpNo);
    //             setValue('igpDate', data.igpDate);
    //             setValue('billNo', data.billNo);
    //             setValue('billDate', data.billDate);
    //             setValue('vendorName', data.vendorName);
    //             setValue('sumOfTR', data.sumOfTR);
    //             setValue('sumOfTV', data.sumOfTV);
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
        { key: 'qtyRec', name: 'Qty Rec' },
        { key: 'poQty', name: 'PO Qty' },
        { key: 'totalRec', name: 'Total Rec' },
        { key: 'poBalance', name: 'PO Balance' },
        { key: 'rateInPo', name: 'Rate In Po' },
        { key: 'billRate', name: 'Bill Rate' },
        { key: 'value', name: 'Value' },
        { key: 'remarks', name: 'Remarks' },
    ];

    return (
        <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] -mb-10  mt-[200px]'>
            <div className="material-return-form-container p-6 bg-[#27303D] shadow-md rounded-md">
                <h1 className="text-xl font-semibold mb-8">SBFA GRN</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />GRN No
                            </label>
                            <Input
                                type="number"
                                {...register('grnNo')}
                                placeholder="10001"
                                className="mt-1 block w-full"
                                value={'2002'}  //remove this 
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="flex text-sm font-medium">
                                <CalendarRange className='pr-1' />GRN Date
                            </label>
                            <Input
                                type="date"
                                {...register('grnDate')}
                                className="mt-1 block w-full text-[#64747A]"
                                value={'19/09/2024'} //remove this
                                readOnly
                            />
                        </div>
                    </div>
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
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">

                    <div>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />Bill No
                            </label>
                            <Input
                                type="number"
                                {...register('billNo')}
                                placeholder="10001"
                                className="mt-1 block w-full"
                                value={'2002'}  //remove this 
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="flex text-sm font-medium">
                                <CalendarRange className='pr-1' />Bill Date
                            </label>
                            <Input
                                type="date"
                                {...register('billDate')}
                                className="mt-1 block w-full text-[#64747A]"
                                value={'19/09/2024'} //remove this
                                readOnly
                            />
                        </div>

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
                       
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4'>

                    <div>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />Sum Of Total Rec
                            </label>
                            <Input
                                type="number"
                                {...register('sumOfTR')}
                                placeholder="10001"
                                className="mt-1 block w-full"
                                value={'2002'}  //remove this 
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />Sum Of Total Value
                            </label>
                            <Input
                                type="number"
                                {...register('sumOfTV')}
                                placeholder="10001"
                                className="mt-1 block w-full"
                                value={'2002'}  //remove this 
                                readOnly
                            />
                        </div>                        
                    </div>

                    <div className='mb-4'>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />Remarks
                            </label>
                            <Input
                                type="text"
                                {...register('remarks')}
                                placeholder="Good"
                                className="mt-1 block w-full"
                                value={'Best'}  //remove this 
                                readOnly
                            />
                        </div>           

                  

                    <div className="flex justify-end items-center">
                       <Link href={'/sbfa4'}> <Button type="button" className="mr-2">
                            <Trash2 className="icon mr-2 h-4 w-4" />Clear
                        </Button></Link>
                       
                      <Link href={'/approve4'}>  <Button type="submit">
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

export default SBFAGrnForm;
