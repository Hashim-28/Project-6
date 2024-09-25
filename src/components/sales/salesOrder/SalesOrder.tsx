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
        DnNo: "2122",
        DnDate: "2024-09-12",
        SON: "300",
        SOD:"2024-09-12",
        DD: "2024-09-12",
        Customer:"Person",
        CustomerAddress:"Islamabad",
        proCode: "301",
        proName: "Box",
        uom: "213",
        SOQTY:"30",
        QTYDis:"30",
        Rate:"30",
        Value:"30",
        totalDis: "87",
        remarks: "Sample item",
        
    },
    {
        DnNo: "2122",
        DnDate: "2024-09-12",
        SON: "300",
        SOD:"2024-09-12",
        DD: "2024-09-12",
        Customer:"Person",
        CustomerAddress:"Islamabad",
        proCode: "301",
        proName: "Box",
        uom: "213",
        SOQTY:"30",
        QTYDis:"30",
        Rate:"30",
        Value:"30",
        totalDis: "87",
        remarks: "Sample item",
    }
];


const SalesOrder = () => {
    const { register, handleSubmit,getValues,reset} = useForm();
    const [Backenddata, setBackenddata] = useState(demo);
    const [items, setItems] = useState([]);
    const [error,setError]=useState(null)
    const [loading, setLoading] = useState(false);  // State for loading indication

    // Columns for Data Grid
    const columns = [
        { key: 'SON', name: 'SO No' },
        { key: 'SOD', name: 'SO Date' },
        { key: 'DD', name: 'Delivery Date' },
        { key: 'Customer', name: 'Customer' },
        { key: 'CustomerAddress', name: 'Customer Address' },
        { key: 'proCode', name: 'Product Code' },
        { key: 'proName', name: 'Product Name' },
        { key: 'uom', name: 'UOM' },
        { key: 'qty', name: 'Qty' },
        { key: 'price', name: 'Price' },
        { key: 'amount', name: 'Amount' },
        { key: 'gst', name: 'GST' },
        { key: 'totalVal', name: 'Total Value' },
        { key: 'SOTQTY', name: 'Sum Of Total QTY' },
        { key: 'SOTAmont', name: 'Sum Of Total Amount' },
        { key: 'SOTValue', name: 'Sum Of Total Value' } 
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
    //                SON: formData.SON,
    //                SOD: formData.SOD,
    //                DD: formData.DD,
    //                Customer: formData.Customer,
    //                CustomerAddress: formData.CustomerAddress,
    //                proCode: formData.proCode,
    //                proName: formData.proName,
    //                uom: formData.uom,
    //                qty: formData.qty,
    //                price: formData.price,
    //                amount: formData.amount,
    //                gst: formData.gst,
    //                totalVal: formData.totalVal,
    //                SOTQTY: formData.SOTQTY,
    //                SOTAmount: formData.SOTAmount,
    //                SOTValue: formData.SOTValue
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
                <h1 className="text-xl font-semibold mb-8">SalesOrder</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
                        <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Sales Order No</label>
                            <Input
                                type="number"
                                {...register('salesOrderNo')}
                                placeholder="1000"
                                className="mt-1 block w-full text-[#64747A]"
                                required
                            />
                        </div>
                        <div>
                            <label className="flex text-sm font-medium "><CalendarRange className='pr-1' />Sales Order Date</label>
                            <Input
                                type="date"
                                {...register('salesOrderDate')}
                                placeholder="21-AUG-2024"
                                className="mt-1 block w-full text-[#64747A]"
                                required
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4'>
                    <div>
                            <label className="flex text-sm font-medium "><CalendarRange className='pr-1' />Delivery Date</label>
                            <Input
                                type="date"
                                {...register('deliveryDate')}
                                placeholder="21-AUG-2024"
                                className="mt-1 block w-full text-[#64747A]"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Customer Name</label>
                            <Input
                                type="text"
                                {...register('customerName')}
                                placeholder="Bag"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Customer Address</label>
                            <Input
                                type="text"
                                {...register('customerAddress')}
                                placeholder="Bag"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-11 gap-4 mb-4">
                        <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Product Code</label>
                            <select className="block w-full p-2  rounded-md shadow-sm  sm:text-sm mt-[5px]" {...register('proCode')}>
                                <option value="" disabled>Select an option</option>
                                <option value="pro1">pro1</option>
                                <option value="pro2">pro2</option>
                            </select>
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />ProName</label>
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
                            <label className="flex text-sm font-medium "><Layers3 className='pr-1' />QTY</label>
                            <Input
                                type="number"
                                {...register('QTY')}
                                placeholder="10"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><Layers3 className='pr-1' />Price</label>
                            <Input
                                type="number"
                                {...register('price')}
                                placeholder="10"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><Layers3 className='pr-1' />Amount</label>
                            <Input
                                type="number"
                                {...register('amount')}
                                placeholder="10"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><Layers3 className='pr-1' />GST</label>
                            <Input
                                type="number"
                                {...register('gst')}
                                placeholder="10"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                       
                        <div className="col-span-2 mb-4">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Total Value</label>
                            <Input
                                type="number"
                                {...register('totalValue')}
                                placeholder="10"
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
                    <div className='grid grid-cols-6 gap-4 mb-4'>
                    <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Sum Of Total QTY</label>
                            <select className="block w-full p-2  rounded-md shadow-sm  sm:text-sm mt-[5px]" {...register('sumOfTotalQTY')}>
                                <option value="" disabled>Select an option</option>
                                <option value="pro1">pro1</option>
                                <option value="pro2">pro2</option>
                            </select>
                        </div>
                    <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Sum Of Total Amount</label>
                            <select className="block w-full p-2  rounded-md shadow-sm  sm:text-sm mt-[5px]" {...register('sumOfTotalAmount')}>
                                <option value="" disabled>Select an option</option>
                                <option value="pro1">pro1</option>
                                <option value="pro2">pro2</option>
                            </select>
                        </div>
                    <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Sum Of Total Value</label>
                            <select className="block w-full p-2  rounded-md shadow-sm  sm:text-sm mt-[5px]" {...register('sumOfTotalValue')}>
                                <option value="" disabled>Select an option</option>
                                <option value="pro1">pro1</option>
                                <option value="pro2">pro2</option>
                            </select>
                        </div>
                        </div>
                    <div className="mb-4">
    <h1 className="text-lg font-semibold mb-2 flex">
        <MapPinCheckInside className="pr-1" />Added Items
    </h1>
    {items.map((item, index) => (
       <div key={index} className=" p-2 mb-2 rounded bg-[#1E1E2E] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center text-white    ">
  <div>SI : {index + 1}</div>
<div className="col-span-1">SO No: {item.SON}</div>
<div className="col-span-1">SO Date: {item.SOD}</div>
<div className="col-span-1">Delivery Date: {item.DD}</div>
<div className="col-span-1">Customer: {item.Customer}</div>
<div className="col-span-1">Customer Addr: {item.CustomerAddress}</div>
<div className="col-span-1">Pro Code: {item.proCode}</div>
<div className="col-span-1">Pro Name: {item.proName}</div>
<div className="col-span-1">UOM: {item.uom}</div>
<div className="col-span-1">Qty: {item.qty}</div>
<div className="col-span-1">Price: {item.price}</div>
<div className="col-span-1">Amount: {item.amount}</div>
<div className="col-span-1">GST: {item.gst}</div>
<div className="col-span-1">Total Value: {item.totalVal}</div>
<div className="col-span-1">SOT QTY: {item.SOTQTY}</div>
<div className="col-span-1">SOT Amount: {item.SOTAmount}</div>
<div className="col-span-1">SOT Value: {item.SOTValue}</div>

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
                  <Link href={{pathname:'/sales-order-main'}}> <Button type="submit" className="mr-2"> <PlusCircle className="icon mr-2 h-4 w-4" />Create</Button></Link>
                    <Button type="submit"><Edit className="icon mr-2 h-4 w-4" />Create and New</Button>
                </div>
                </form>

                {/* Data Grid to display backend data */}
            </div>
        </div>
    );
};

export default SalesOrder;
