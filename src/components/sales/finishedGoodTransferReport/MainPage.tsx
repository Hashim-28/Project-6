'use client'
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
import { ArrowDownUp, Bookmark, Calculator, ChartColumnBig, ChevronDown, CircleHelp, Columns3, Download, ExternalLink, Filter, Group, History, Logs, MailCheck, Plus, Printer, RotateCcw, Rows4, Save, Search, Sheet, Sigma, Star, Table, Wrench } from "lucide-react";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import axios from 'axios';
import '../../../app/Style/Reports.css'



type Checked = DropdownMenuCheckboxItemProps["checked"];
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

const MainPage = () => {
  const [transferNo, setTransferNo] = useState<Checked>(false);
  const [transferDate, setTransferDate] = useState<Checked>(false);
  const [proCode, setProCode] = useState<Checked>(false);
  const [proName, setProName] = useState<Checked>(false);
  const [uom, setUom] = useState<Checked>(false);
  const [qty, setQty] = useState<Checked>(false);
  const [remarks, setRemarks] = useState<Checked>(false);
  const [total, setTotal] = useState<Checked>(false);
  const [tableData, setTableData] = useState(demo); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  
  const allColumns = [
    { key: 'transferNo', name: 'Transfer No' },
    { key: 'transferDate', name: 'Transfer Date' },
    { key: 'proCode', name: 'Product Code' },
    { key: 'proName', name: 'Product Name' },
    { key: 'uom', name: 'UOM' },
    { key: 'qty', name: 'Quantity' },
    { key: 'remarks', name: 'Remarks' },
    { key: 'total', name: 'Total' },
  ];
  
  const areAnyColumnsSelected = [
    transferNo, transferDate, proCode, proName, uom, qty, remarks, total
  ].some(Boolean);
  
  const selectedColumns = areAnyColumnsSelected ? allColumns.filter((column) => {
    switch (column.key) {
      case 'transferNo': return transferNo;
      case 'transferDate': return transferDate;
      case 'proCode': return proCode;
      case 'proName': return proName;
      case 'uom': return uom;
      case 'qty': return qty;
      case 'remarks': return remarks;
      case 'total': return total;
      default: return true;
    }
  }) : allColumns;
  
  const selectedOption = [
    transferNo ? "Transfer No" : '',
    transferDate ? "Transfer Date" : '',
    proCode ? "Product Code" : '',
    proName ? "Product Name" : '',
    uom ? "UOM" : '',
    qty ? "Quantity" : '',
    remarks ? "Remarks" : '',
    total ? "Total" : '',
  ].filter(Boolean).join(", ");
  
  // const fetchData = async () => {
  //   setLoading(true);
  //   setError(null);  
  //   try {
  //     const response = await axios.get("/api/material-data", {
  //       params: {
  //         rows: rowsPerPage,
  //         columns: selectedOption ? selectedOption : 'all',
  //       },
  //     });
  //     if (response.data.length === 0) {
  //       setError("No data found in the backend.");  
  //     }
  //     setTableData(response.data);
  //   } catch (error) {
  //     setError("Failed to load data from the backend.");  
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [tabledata]);

  


  return (
    // remove hieght when add api for backend {h-[100vh]}
    <div className="material-account w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] -mb-10 -mt-10 ">
      
      <div className="p-6 bg-[#27303D] shadow-md rounded-md mt-10">
        <div className="flex justify-end">
            <Link href={'/fg-Transfer-Report-note'}>
      <Button  className="-mt-2">
        <Plus className="mr-1" />
        Add New
      </Button>
      </Link>
              </div>
            
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
                  <DropdownMenuSeparator className="bg-gray-600 h-px"/>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={transferNo} onCheckedChange={setTransferNo}>Transfer No</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={transferDate} onCheckedChange={setTransferDate}>Transfer Date</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={proCode} onCheckedChange={setProCode}>Product Code</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={proName} onCheckedChange={setProName}>Product Name</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={uom} onCheckedChange={setUom}>UOM</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={qty} onCheckedChange={setQty}>Quantity</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={remarks} onCheckedChange={setRemarks}>Remarks</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={total} onCheckedChange={setTotal}>Total</DropdownMenuCheckboxItem>
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
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)]" >
            {/* Actions */}
            <DropdownMenuSeparator className="bg-gray-600 h-px"/>
            <DropdownMenuGroup>
              <DropdownMenuItem  className="focus:bg-[#3D9C75]">
                <Columns3 className="mr-2 h-4 w-4" />
                <span>Columns</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-[#3D9C75]">
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
                    <DropdownMenuItem className="focus:bg-[#3D9C75]">
                      <ArrowDownUp className="mr-2 h-4 w-4" />
                      <span>Sort</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="focus:bg-[#3D9C75]">
                      <Sigma className="mr-2 h-4 w-4" />
                      <span>Aggregate</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="focus:bg-[#3D9C75]">
                      <Calculator className="mr-2 h-4 w-4" />
                      <span>Compute</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="focus:bg-[#3D9C75]">
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
                    <DropdownMenuItem className="focus:bg-[#3D9C75]">
                      <Logs className="mr-2 h-4 w-4" />
                      <span>Control Break</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="focus:bg-[#3D9C75]">
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
                          <DropdownMenuItem className="focus:bg-[#3D9C75]">
                            <span>1</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-[#3D9C75]">
                            <span>5</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-[#3D9C75]">
                            <span>10</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-[#3D9C75]">
                            <span>15</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-[#3D9C75]">
                            <span>20</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-[#3D9C75]">
                            <span>25</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-[#3D9C75]">
                            <span>50</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-[#3D9C75]">
                            <span>100</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-[#3D9C75]">
                            <span>1000</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-[#3D9C75]">
                            <span>All</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuSeparator className="bg-gray-600 h-px"/>

              <DropdownMenuItem className="focus:bg-[#3D9C75]">
                <ChartColumnBig className="mr-2 h-4 w-4" />
                <span>Chart</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-[#3D9C75]">
                <Group className="mr-2 h-4 w-4" />
                <span>Group By</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="focus:bg-[#3D9C75]">
                <ExternalLink className="mr-2 h-4 w-4" />
                <span>Pivot</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className="bg-gray-600 h-px"/>

            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex">
                  <Bookmark className="mr-2 h-4 w-4 mt-1 ml-2" />
                  <span>Report</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)] p-2 rounded-xl ml-2">
                    <DropdownMenuItem className="focus:bg-[#3D9C75]">
                      <Save className="mr-2 h-4 w-4" />
                      <span>Save Report</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-[#3D9C75]">
                      <RotateCcw className="mr-2 h-4 w-4" />
                      <span>Reset</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuItem className="focus:bg-[#3D9C75]">
                <Download className="mr-2 h-4 w-4" />
                <span>Download</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuItem className="focus:bg-[#3D9C75]">
              <MailCheck className="mr-2 h-4 w-4" />
              <span>Subscription</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-gray-600 h-px"/>

            <DropdownMenuItem className="focus:bg-[#3D9C75]">
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
          ) : tableData.length === 0 ? (
            <p>No data available.</p> 
          ) : (
            <div>
            
           <DataGrid columns={selectedColumns} rows={tableData} className="react-data-grid opacity-80"  />
           </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
