'use client'
import { header, image } from "../setup/Company";
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
import { ArrowDownUp, Bookmark, Calculator, ChartColumnBig, ChevronDown, CircleHelp, Columns3, Cross, Download, ExternalLink, Filter, Group, History, Logs, MailCheck, Printer, RotateCcw, Rows4, Save, Search, Sheet, Sigma, Star, Table, Trash, Wrench } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import axios from 'axios';
import '../../app/Style/Reports.css'
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { Input } from "../ui/input";

type Checked = DropdownMenuCheckboxItemProps["checked"];
const demo=[{SuperCode:"2122",SN:"Bag",ControlCode:"300",CN:'itme',ItemCode:"3102",IN:"bag",UMO:"212",OC:"843",VRate:"87",SSR:"980",LocallyPurchase:"yes",Imported:"NO",Customer:""},
  {SuperCode:"2122",SN:"Bag",ControlCode:"300",CN:'itme',ItemCode:"3102",IN:"bag",UMO:"212",OC:"843",VRate:"87",SSR:"980",LocallyPurchase:"yes",Imported:"NO",Customer:""},
  ]
const MultipleLeadger = () => {
  const [SuperCode, setSuperCode] = useState<Checked>(false);
  const [SN, setSN] = useState<Checked>(false);
  const [ControlCode, setControlCode] = useState<Checked>(false);
  const [CN, setCN] = useState<Checked>(false);
  const [ItemCode, setItemCode] = useState<Checked>(false);
  const [IN, setIN] = useState<Checked>(false);
  const [UMO, setUMO] = useState<Checked>(false);
  const [OC, setOC] = useState<Checked>(false);
  const [VRate, setVRate] = useState<Checked>(false);
  const [SSR, setSSR] = useState<Checked>(false);
  const [LocallyPurchase, setLocallyPurchase] = useState<Checked>(false);
  const [Imported, setImported] = useState<Checked>(false);
  const [Customer, setCustomer] = useState<Checked>(false);

  const [rowsPerPage, setRowsPerPage] = useState(100); 
  const [tableData, setTableData] = useState(demo); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  

  const allColumns = [
    { key: 'SuperCode', name: 'Super Code'  },
    { key: 'SN', name: 'SN' },
    { key: 'ControlCode', name: 'Control Code' },
    { key: 'CN', name: 'CN' },
    { key: 'ItemCode', name: 'Item Code' },
    { key: 'IN', name: 'IN' },
    { key: 'UMO', name: 'UMO' },
    { key: 'OC', name: 'OC' },
    { key: 'VRate', name: 'V Rate' },
    { key: 'SSR', name: 'SSR' },
    { key: 'LocallyPurchase', name: 'Locally Purchase' },
    { key: 'Imported', name: 'Imported' },
    { key: 'Customer', name: 'Customer' }
  ];
  const areAnyColumnsSelected = [
    SuperCode, SN, ControlCode, CN, ItemCode, IN, UMO, OC, VRate, SSR, LocallyPurchase, Imported, Customer
  ].some(Boolean);

  const selectedColumns = areAnyColumnsSelected ? allColumns.filter((column) => {
    switch (column.key) {
      case 'SuperCode': return SuperCode;
      case 'SN': return SN;
      case 'ControlCode': return ControlCode;
      case 'CN': return CN;
      case 'ItemCode': return ItemCode;
      case 'IN': return IN;
      case 'UMO': return UMO;
      case 'OC': return OC;
      case 'VRate': return VRate;
      case 'SSR': return SSR;
      case 'LocallyPurchase': return LocallyPurchase;
      case 'Imported': return Imported;
      case 'Customer': return Customer;
      default: return true;
    }
  }):allColumns;

  const selectedOption = [
    SuperCode ? "SuperCode" : '',
    SN ? "SN" : '',
    ControlCode ? "ControlCode" : '',
    CN ? "CN" : '',
    ItemCode ? "ItemCode" : '',
    IN ? "IN" : '',
    UMO ? "UMO" : '',
    OC ? "OC" : '',
    VRate ? "VRate" : '',
    SSR ? "SSR" : '',
    LocallyPurchase ? "LocallyPurchase" : '',
    Imported ? "Imported" : '',
    Customer ? "Customer" : '',
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
  // }, [rowsPerPage]);
  
  const displayedRows = tableData.slice(0, rowsPerPage);
  const printer =()=>{
    window.print();
  }
 

  return (
    <div className="material-account w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] -mb-10     -mt-[50px] ">
      <div className=" w-1/2 bg-[#27303D] shadow-xl rounded-3xl p-2 flex item-center justify-center ml-80">
      <h1>{header}</h1>   
      </div>
      <div className="mb-10">
        <img src={image} alt="Provided" style={{ width: "200px", height: "auto" }} />
      </div>
      <div className="main-container p-6 bg-[#27303D] shadow-md rounded-md mb-10 -mt-10">
        <div className="flex w-full">
      <h1 className="text-lg text-white mb-10 ml-[46%]">Multiple Leadger</h1>
              <Button onClick={printer} className="ml-[20%] -mt-2"><Printer className="mr-1"/>Print</Button>
              <Button className="ml-2 -mt-2"><Trash className="mr-1"/>Clear</Button>
              </div>
      <form>
            <div className="grid grid-cols-2 gap-4">
                <div>
              <label className="text-white">Item Name</label>
              <div className="col-span-1">
                <select className="flex w-full p-2 border border-gray-100 bg-[#0F172A] text-white rounded-md shadow-sm bg-transparent sm:text-sm mt-2" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="pro1">pro1</option>
                  <option value="pro2">pro2</option>
                </select>
              </div>
              </div>
              <div>
              <label className="text-white">Item Name</label>
              <div className="col-span-1">
                <select className="flex w-full p-2 border border-gray-100 bg-[#0F172A] text-white rounded-md shadow-sm bg-transparent sm:text-sm mt-2" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="pro1">pro1</option>
                  <option value="pro2">pro2</option>
                </select>
              </div>
              </div>
              </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
              <label className="text-white">From</label>
               <Input type="date"  className="block"/>
              </div>
              <div>
              <label className="text-white">To</label>
                <Input type="date" className="block" />
              </div>
              </div>
        </form>
      </div>


      <div className="p-6 bg-[#27303D] shadow-md rounded-md">
            
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
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={SuperCode} onCheckedChange={setSuperCode}>Super Code</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={SN} onCheckedChange={setSN}>SN</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={ControlCode} onCheckedChange={setControlCode}>Control Code</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={CN} onCheckedChange={setCN}>CN</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={ItemCode} onCheckedChange={setItemCode}>Item Code</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={IN} onCheckedChange={setIN}>IN</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={UMO} onCheckedChange={setUMO}>UMO</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={OC} onCheckedChange={setOC}>OC</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={VRate} onCheckedChange={setVRate}>V Rate</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={SSR} onCheckedChange={setSSR}>Standard Selling Rate</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={LocallyPurchase} onCheckedChange={setLocallyPurchase}>Locally Purchase</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={Imported} onCheckedChange={setImported}>Imported</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={Customer} onCheckedChange={setCustomer}>Customer</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <input type="text" readOnly className="p-2 w-[200px] bg-[#0F172A] text-white -ml-[70px]" value={selectedOption} />
              <Button type="button" className="p-2 w-[50px] -ml-2" >Go</Button>
            </div>
            <div className="grid grid-cols-2 w-[200px]">
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-[85px] border-none h-[40px] ">
                      Rows
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-10 flex flex-col justify-center text-white bg-[#1E1E2E] border-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.5)]">
                    {[100, 200, 300, 400, 500].map((row) => (
                      <DropdownMenuItem key={row} onClick={() => setRowsPerPage(row)} className="focus:bg-[#3D9C75]">
                        {row}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
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
            
           <DataGrid columns={selectedColumns} rows={displayedRows} className="react-data-grid opacity-90" />
           </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultipleLeadger;
