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
    DnNo: "2122",
    DnDate: "2024-09-12",
    SON: "300",
    SOD: "2024-09-12",
    DD: "2024-09-12",
    Customer: "Person",
    CustomerAddress: "Islamabad",
    proCode: "301",
    proName: "Box",
    uom: "213",
    SOQTY: "30",
    QTYDis: "30",
    Rate: "30",
    Value: "30",
    totalDis: "87",
    remarks: "Sample item"
  },
  {
    DnNo: "2123",
    DnDate: "2024-09-13",
    SON: "301",
    SOD: "2024-09-13",
    DD: "2024-09-13",
    Customer: "Company",
    CustomerAddress: "Lahore",
    proCode: "302",
    proName: "Bottle",
    uom: "214",
    SOQTY: "40",
    QTYDis: "35",
    Rate: "40",
    Value: "40",
    totalDis: "90",
    remarks: "Another sample item"
  }
];

const MainPage = () => {
  const [DnNo, setDnNo] = useState<Checked>(false);
  const [DnDate, setDnDate] = useState<Checked>(false);
  const [SON, setSON] = useState<Checked>(false);
  const [SOD, setSOD] = useState<Checked>(false);
  const [DD, setDD] = useState<Checked>(false);
  const [Customer, setCustomer] = useState<Checked>(false);
  const [CustomerAddress, setCustomerAddress] = useState<Checked>(false);
  const [proCode, setProCode] = useState<Checked>(false);
  const [proName, setProName] = useState<Checked>(false);
  const [uom, setUOM] = useState<Checked>(false);
  const [SOQTY, setSOQTY] = useState<Checked>(false);
  const [QTYDis, setQTYDis] = useState<Checked>(false);
  const [Rate, setRate] = useState<Checked>(false);
  const [Value, setValue] = useState<Checked>(false);
  const [totalDis, setTotalDis] = useState<Checked>(false);
  const [remarks, setRemarks] = useState<Checked>(false);
  const [tableData, setTableData] = useState(demo); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  
  const allColumns = [
    { key: 'DnNo', name: 'DN No' },
    { key: 'DnDate', name: 'DN Date' },
    { key: 'SON', name: 'SO No' },
    { key: 'SOD', name: 'SO Date' },
    { key: 'DD', name: 'Delivery Date' },
    { key: 'Customer', name: 'Customer' },
    { key: 'CustomerAddress', name: 'Customer Address' },
    { key: 'proCode', name: 'Product Code' },
    { key: 'proName', name: 'Product Name' },
    { key: 'uom', name: 'UOM' },
    { key: 'SOQTY', name: 'SO Qty' },
    { key: 'QTYDis', name: 'Qty Dispatched' },
    { key: 'Rate', name: 'Rate' },
    { key: 'Value', name: 'Value' },
    { key: 'totalDis', name: 'Total Discount' },
    { key: 'remarks', name: 'Remarks' }
];

const areAnyColumnsSelected = [
    DnNo, DnDate, SON, SOD, DD, Customer, CustomerAddress, proCode, proName, uom, SOQTY, QTYDis, Rate, Value, totalDis, remarks
].some(Boolean);

const selectedColumns = areAnyColumnsSelected ? allColumns.filter((column) => {
    switch (column.key) {
      case 'DnNo': return DnNo;
      case 'DnDate': return DnDate;
      case 'SON': return SON;
      case 'SOD': return SOD;
      case 'DD': return DD;
      case 'Customer': return Customer;
      case 'CustomerAddress': return CustomerAddress;
      case 'proCode': return proCode;
      case 'proName': return proName;
      case 'uom': return uom;
      case 'SOQTY': return SOQTY;
      case 'QTYDis': return QTYDis;
      case 'Rate': return Rate;
      case 'Value': return Value;
      case 'totalDis': return totalDis;
      case 'remarks': return remarks;
      default: return true;
    }
}) : allColumns;

const selectedOption = [
    DnNo ? "DnNo" : '',
    DnDate ? "DnDate" : '',
    SON ? "SON" : '',
    SOD ? "SOD" : '',
    DD ? "DD" : '',
    Customer ? "Customer" : '',
    CustomerAddress ? "CustomerAddress" : '',
    proCode ? "proCode" : '',
    proName ? "proName" : '',
    uom ? "uom" : '',
    SOQTY ? "SOQTY" : '',
    QTYDis ? "QTYDis" : '',
    Rate ? "Rate" : '',
    Value ? "Value" : '',
    totalDis ? "totalDis" : '',
    remarks ? "remarks" : ''
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
            <Link href={'/fg-Dispatch-Report-note'}>
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
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={DnNo} onCheckedChange={setDnNo}>DN No</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={DnDate} onCheckedChange={setDnDate}>DN Date</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={SON} onCheckedChange={setSON}>SO No</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={SOD} onCheckedChange={setSOD}>SO Date</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={DD} onCheckedChange={setDD}>Delivery Date</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={Customer} onCheckedChange={setCustomer}>Customer</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={CustomerAddress} onCheckedChange={setCustomerAddress}>Customer Address</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={proCode} onCheckedChange={setProCode}>Product Code</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={proName} onCheckedChange={setProName}>Product Name</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={uom} onCheckedChange={setUOM}>UOM</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={SOQTY} onCheckedChange={setSOQTY}>SO Qty</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={QTYDis} onCheckedChange={setQTYDis}>Qty Dispatched</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={Rate} onCheckedChange={setRate}>Rate</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={Value} onCheckedChange={setValue}>Value</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={totalDis} onCheckedChange={setTotalDis}>Total Discount</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={remarks} onCheckedChange={setRemarks}>Remarks</DropdownMenuCheckboxItem>

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
