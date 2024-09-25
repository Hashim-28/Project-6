'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Trash2, PlusCircle, Edit, CalendarRange, ClipboardList, MessageCircleMore, CircleCheck, Rows4, ArrowDownUp, Bookmark, Calculator, ChartColumnBig, ChevronDown, CircleHelp, Columns3, Download, ExternalLink, Filter, Group, Logs, MailCheck, RotateCcw, Save, Search, Sheet, Sigma, Star, Wrench, History, CircleX } from 'lucide-react';
import DataGrid from 'react-data-grid';
import 'react-data-grid/lib/styles.css';
import '../../../app/Style/purchase.css';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuCheckboxItemProps, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@radix-ui/react-dropdown-menu";
import '../../../app/Style/Reports.css';
import Link from 'next/link';

type Checked = DropdownMenuCheckboxItemProps["checked"];

const demoData = [
    {
        itemCode: 'A100',
        itemName: 'Item 1',
        uom: 'kg',
        qty: 50,
        poQty: 30,
        balance: 20,
        rate: 100,
        excValue: 5000,
        gst: 18,
        amount: 5900
    },
    {
        itemCode: 'B200',
        itemName: 'Item 2',
        uom: 'pcs',
        qty: 200,
        poQty: 100,
        balance: 100,
        rate: 50,
        excValue: 10000,
        gst: 18,
        amount: 11800
    },
    {
        itemCode: 'C300',
        itemName: 'Item 3',
        uom: 'ltr',
        qty: 150,
        poQty: 50,
        balance: 100,
        rate: 200,
        excValue: 30000,
        gst: 18,
        amount: 35400
    }
];
   
const demo = [
    {
    
      PODate: "2024-09-13",
      Rate:"",
      ApprovedBy: "", 
    
 
    },
    {
    
      PODate: "2024-09-13", 
      Rate:"",
      ApprovedBy: "", 
   
    
    }
  ];

const SBFAPoForm = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [gridData, setGridData] = useState(demoData); 
    const [tableData, setTableData] = useState(demo); 
    const [PODate, setPODate] = useState<Checked>(false);
    const [ApprovedBy, setApprovedBy] = useState<Checked>(false);
    const [Rate, setRate] = useState<Checked>(false);

    const allColumns = [
       
        { key: 'PODate', name: 'PO Date' },
        { key: 'Rate', name: 'Rate' },
        { key: 'ApprovedBy', name: 'Approved By' },
       
      ];
    
      const areAnyColumnsSelected = [
         PODate, ApprovedBy,Rate
    ].some(Boolean);
    
    const selectedColumns = areAnyColumnsSelected ? allColumns.filter((column) => {
        switch (column.key) {
          
          case 'PODate': return PODate;
          case 'Rate': return Rate;
          case 'ApprovedBy': return ApprovedBy;
          
          default: return true;
        }
    }) : allColumns;

    // Fetch data from the backend 
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch('https://your-backend-api.com/pending-requisition'); // Replace with actual API URL
    //             const data = await response.json();
                
                
    //             setValue('regNo', data.regNo);
    //             setValue('reqDate', data.reqDate);
    //             setValue('poNo', data.poNo);
    //             setValue('poDate', data.poDate);
    //             setValue('diliveryDate', data.diliveryDate);
    //             setValue('payTerm', data.payTerm);
    //             setValue('vendorName', data.vendorName);
    //             setValue('remarks', data.remarks);
    
                
    //             setGridData(data.relatedItems); 
    // setTableData(response.data);
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
            { key: 'qty', name: 'Qty' },
            { key: 'poQty', name: 'PO Qty' },
            { key: 'balance', name: 'Balance' },
            { key: 'rate', name: 'Rate' },
            { key: 'excValue', name: 'Exc Value' },
            { key: 'gst', name: 'GST' },
            { key: 'amount', name: 'Amount' },
        ];

        const selectedOption = [
          
            PODate ? "PO Date" : '',
            ApprovedBy ? "Approved By" : '',
            Rate ? "Rate" : ''
        ].filter(Boolean).join(", ");
        

    return (
        <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] -mb-10 mt-[700px]'>
            <div className="material-return-form-container p-6 bg-[#27303D] shadow-md rounded-md">
                <h1 className="text-xl font-semibold mb-8">SBFA Purchase Order</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 mb-4">
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
                        <div>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />Po No
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
                                <CalendarRange className='pr-1' />Po Date
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
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">

                        <div>
                            <label className="flex text-sm font-medium">
                                <CalendarRange className='pr-1' />Dilivery Date
                            </label>
                            <Input
                                type="date"
                                {...register('diliveryDate')}
                                className="mt-1 block w-full text-[#64747A]"
                                value={'19/09/2024'} //remove this
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="flex text-sm font-medium">
                                <ClipboardList className='pr-1' />Payment terms
                            </label>
                            <Input
                                type="text"
                                {...register('payTerm')}
                                placeholder="10001"
                                className="mt-1 block w-full"
                                value={'2002'}  //remove this 
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
                        <Link href={'/sbfa2'}><Button type="button" className="mr-2">
                            <CircleX className="icon mr-2 h-4 w-4" />Cancel
                        </Button></Link>
                    
                     <Link href={'/approve2'}>   <Button type="submit">
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
                        className="react-data-grid opacity-80 ]"
                    />
                </div>

                
                <div className="material-account p-6 bg-[#27303D] shadow-2xl rounded-md mt-10 ">
                <form>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            <div className="grid grid-cols-3 w-[400px] mb-10">
                
              <DropdownMenu>
                <DropdownMenuTrigger className="flex bg-[#0F172A] text-white p-2 rounded-tl-xl rounded-bl-xl w-[50px] ml-4">
                  <Search />
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent   className="w-56 text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)]">
                  <DropdownMenuLabel>All Columns</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
        <DropdownMenuCheckboxItem checked={PODate} onCheckedChange={setPODate}>PO Date</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={Rate} onCheckedChange={setRate}>PO Date</DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem checked={ApprovedBy} onCheckedChange={setApprovedBy}>Approved By</  DropdownMenuCheckboxItem>
       

                </DropdownMenuContent>
              </DropdownMenu>
              <input type="text" readOnly className="p-2 w-[200px] bg-[#0F172A] text-white -ml-[68px]" value={selectedOption} />
              <Button type="button" className="p-2 w-[50px] -ml-2" >Go</Button>
            </div>

            <div className="grid grid-cols-1 w-[200px]">
              <div className="flex-shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Action</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)]" >
            {/* Actions */}
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Columns3 className="mr-2 h-4 w-4" />
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
                      <History  className="mr-2 h-4 w-4"/>
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
        <div>
           <DataGrid columns={selectedColumns} rows={tableData} className="react-data-grid opacity-80"  />
           </div>
                </div>

            </div>
        </div>
    );
};

export default SBFAPoForm;
