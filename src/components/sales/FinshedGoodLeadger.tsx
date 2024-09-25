'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import '../../app/Style/Reports.css'
import { Trash2, PlusCircle, CalendarRange, ClipboardList, ChartNoAxesCombined, Layers3, Edit, MapPinCheckInside, ArrowDownUp, Bookmark, Calculator, ChartColumnBig, ChevronDown, CircleHelp, Columns3, Download, ExternalLink, Filter, Group, Logs, MailCheck, RotateCcw, Rows4, Save, Search, Sheet, Sigma, Star, Wrench, History } from 'lucide-react';
import '../../app/Style/purchase.css';
import 'react-data-grid/lib/styles.css';
import axios from 'axios';

import DataGrid from 'react-data-grid';  // Import react-data-grid
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuPortal, DropdownMenuSubContent, DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

type Checked = DropdownMenuCheckboxItemProps["checked"];

const demo = [
    {
      proCode: "300",
      proName: "Bag",
      from: "2024-01-01",
      to: "2024-01-31",
      openQuantity: "0",
      uom: "212"
    },
    {
      proCode: "301",
      proName: "Shoes",
      from: "2024-01-01",
      to: "2024-01-31",
      openQuantity: "10",
      uom: "215"
    }
  ];
  


const FinishedGoodleadger = () => {
    const { register, handleSubmit,getValues,reset} = useForm();

    const [proCode, setProCode] = useState<Checked>(false);
const [proName, setProName] = useState<Checked>(false);
const [from, setFrom] = useState<Checked>(false);
const [to, setTo] = useState<Checked>(false);
const [openQuantity, setOpenQuantity] = useState<Checked>(false);
const [uom, setUom] = useState<Checked>(false);


    const [Backenddata, setBackenddata] = useState(demo);
    const [items, setItems] = useState([]);
    const [error,setError]=useState(null)
    const [loading, setLoading] = useState(false);  // State for loading indication

    // Columns for Data Grid
    const allColumns = [
        { key: 'proCode', name: 'Product Code' },
        { key: 'proName', name: 'Product Name' },
        { key: 'from', name: 'From' },
        { key: 'to', name: 'TO' },
        { key: 'openQuantity', name: 'Opening Quantity' },
        { key: 'uom', name: 'UOM' },
    ];


    const areAnyColumnsSelected = [
        proCode, proName, from, to, openQuantity, uom
    ].some(Boolean);
    
    const selectedColumns = areAnyColumnsSelected ? allColumns.filter((column) => {
        switch (column.key) {
            case 'proCode': return proCode;
            case 'proName': return proName;
            case 'from': return from;
            case 'to': return to;
            case 'openQuantity': return openQuantity;
            case 'uom': return uom;
            default: return true;
        }
    }) : allColumns;
    
    const selectedOption = [
        proCode ? "Product Code" : '',
        proName ? "Product Name" : '',
        from ? "From" : '',
        to ? "To" : '',
        openQuantity ? "Opening Quantity" : '',
        uom ? "UOM" : ''
    ].filter(Boolean).join(", ");
    


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
        <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px]  -mb-10  -mt-[50px]'>
            <div className="material-return-form-container p-6 bg-[#27303D] shadow-md rounded-md">
                <h1 className="text-xl font-semibold mb-8">Finshed Goods Ledger</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
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
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
                        <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />From</label>
                            <Input
                                type="date"
                                {...register('from')}
                                placeholder="22-Aug-2024"
                                className="mt-1 block w-full"
                                
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />To</label>
                            <Input
                                type="date"
                                {...register('to')}
                                placeholder="22-Aug-2024"
                                className="mt-1 block w-full"
                                
                            />
                        </div>
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
                        <div className="col-span-2">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />Opening Quantity</label>
                            <Input
                                type="number"
                                {...register('openingQuan')}
                                placeholder="0"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="flex text-sm font-medium "><ClipboardList className='pr-1' />UOM</label>
                            <Input
                                type="text"
                                {...register('uom')}
                                placeholder="PCS"
                                className="mt-1 block w-full"
                                required
                            />
                        </div>
                    </div>

                <div className="flex justify-end items-center">
                    <Button type="button" className="mr-2"  ><Trash2 className="icon mr-2 h-4 w-4" />Clear</Button>
                   <Button type="submit" className="mr-2"> <PlusCircle className="icon mr-2 h-4 w-4" />Create</Button>
                </div>
                </form>

       

                {/* Data Grid to display backend data */}
            </div>
            <div className="material-account p-6 bg-[#27303D] shadow-md rounded-md mt-10">
                <form>
          
          <div className="grid grid-cols-3">
            <div className="grid grid-cols-3 w-[400px] mb-10">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex bg-[#0F172A] text-white p-2 rounded-tl-xl rounded-bl-xl w-[50px] ml-4">
                  <Search />
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent   className="w-56 text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)]">
                  <DropdownMenuLabel>All Columns</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked={proCode} onCheckedChange={setProCode}>Product Code</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem checked={proName} onCheckedChange={setProName}>Product Name</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem checked={uom} onCheckedChange={setUom}>UOM</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem checked={openQuantity} onCheckedChange={setOpenQuantity}>Opening Quantity</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem checked={from} onCheckedChange={setFrom}>From</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem checked={to} onCheckedChange={setTo}>To</DropdownMenuCheckboxItem>


                </DropdownMenuContent>
              </DropdownMenu>
              <input type="text" readOnly className="p-2 w-[200px] bg-[#0F172A] text-white -ml-[70px]" value={selectedOption} />
              <Button type="button" className="p-2 w-[50px] -ml-2" >Go</Button>
            </div>
            <div className="grid grid-cols-1 w-[200px]">
              
              <div className="flex-shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Action</Button>
          </DropdownMenuTrigger >
          <DropdownMenuContent className="w-56 text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] z-10" >
            {/* Actions */}
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Columns3 className=" mr-2 h-4 w-4" />
                <span>Columns</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Filter className="mr-2 h-4 w-4" />
                <span>Filter</span>
              </DropdownMenuItem>

              {/* Submenu for Data */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex">
                  <Sheet className="mr-2 h-4 w-4 ml-2 mt-1" />
                  <span>Data</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] p-2 rounded-xl ml-2">
                    <DropdownMenuItem>
                      <ArrowDownUp className="mr-2 h-4 w-4" />
                      <span>Sort</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Sigma className="mr-2 h-4 w-4" />
                      <span>Aggregate</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Calculator className="mr-2 h-4 w-4" />
                      <span>Compute</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <History className="mr-2 h-4 w-4"/>
                      <span>Flashback</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              {/* Submenu for Format */}
              <DropdownMenuSub >
                <DropdownMenuSubTrigger  className="flex">
                  <Wrench className="mr-2 h-4 w-4 ml-2 mt-1" />
                  <span>Format</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] p-2 rounded-xl ml-2" >
                    <DropdownMenuItem>
                      <Logs className="mr-2 h-4 w-4" />
                      <span>Control Break</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Star className="mr-2 h-4 w-4" />
                      <span>Highlight</span>
                    </DropdownMenuItem>

                    {/* Rows Per Page Submenu */}
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="flex">
                        <Rows4 className="mr-2 h-4 w-4 mt-1 ml-2" />
                        <span>Rows Per Page</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] p-2 rounded-xl ml-2">
                          <DropdownMenuItem>
                            <span>1</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>5</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>10</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>15</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>20</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>25</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>50</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>100</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>1000</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>All</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <ChartColumnBig className="mr-2 h-4 w-4" />
                <span>Chart</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Group className="mr-2 h-4 w-4" />
                <span>Group By</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <ExternalLink className="mr-2 h-4 w-4" />
                <span>Pivot</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex">
                  <Bookmark className="mr-2 h-4 w-4 mt-1 ml-2" />
                  <span>Report</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] p-2 rounded-xl ml-2">
                    <DropdownMenuItem>
                      <Save className="mr-2 h-4 w-4" />
                      <span>Save Report</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <RotateCcw className="mr-2 h-4 w-4" />
                      <span>Reset</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                <span>Download</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuItem>
              <MailCheck className="mr-2 h-4 w-4" />
              <span>Subscription</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <CircleHelp className="mr-2 h-4 w-4" />
              <span>Help</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
              </div>
            </div>
            
          </div>
        </form>

        <div className="table-container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>  
          ) : Backenddata.length === 0 ? (
            <p>No data available.</p> 
          ) : (
            <div>
            
           <DataGrid columns={selectedColumns} rows={Backenddata} className="react-data-grid opacity-80"  />
           </div>
          )}
        </div>
        </div>
        </div>
    );
};

export default FinishedGoodleadger;
