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
import { ArrowDownUp, Bookmark, Calculator, ChartColumnBig, ChevronDown, CircleHelp, Columns3, Download, ExternalLink, Filter, Group, History, Logs, MailCheck, Printer, RotateCcw, Rows4, Save, Search, Sheet, Sigma, Star, Table, Wrench } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import axios from 'axios';
import '../../app/Style/Reports.css'
import { Input } from "../ui/input";
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

type Checked = DropdownMenuCheckboxItemProps["checked"];

const demoData = [
    {
      DocNo: "D001",
      IC: "IC001",  
      IN: "Item 1",
      UMO: "kg",
      IS: "100",
      QtyIssue: "10",
      Rate: "50",
      Amount: "500",
      IssuanceDate: "2024-08-01",
      Remarks: "Good quality",
      RefNo: "Ref001",
      IssuedTo: "John Doe"
    },
    {
      DocNo: "D002",
      IC: "IC002",
      IN: "Item 2",
      UMO: "litre",
      IS: "200",
      QtyIssue: "20",
      Rate: "30",
      Amount: "600",
      IssuanceDate: "2024-08-02",
      Remarks: "Delivered",
      RefNo: "Ref002",
      IssuedTo: "Jane Doe"
    }
  ];

const IssuanceReport = () => {
  const [DocNo, setDocNo] = useState<Checked>(false);
  const [IC, setIC] = useState<Checked>(false);
  const [IN, setIN] = useState<Checked>(false);
  const [UMO, setUMO] = useState<Checked>(false);
  const [IS, setIS] = useState<Checked>(false);
  const [QTYISS, setQTYISS] = useState<Checked>(false);
  const [RATE, setRATE] = useState<Checked>(false);
  const [AMOUNT, setAMOUNT] = useState<Checked>(false);
  const [ISSDate, setISSDate] = useState<Checked>(false);
  const [Remark, setRemark] = useState<Checked>(false);
  const [RefNo, setRefNo] = useState<Checked>(false);
  const [IssuedTo, setIssuedTo] = useState<Checked>(false);
  const [tableData, setTableData] = useState(demoData); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  
  const allColumns = [
    { key: 'DocNo', name: 'Doc No' },
    { key: 'IC', name: 'Item Code' },
    { key: 'IN', name: 'Item Name' },
    { key: 'UMO', name: 'UMO' },
    { key: 'IS', name: 'In Stock' },
    { key: 'QtyIssue', name: 'Qty Issue' },
    { key: 'Rate', name: 'Rate' },
    { key: 'Amount', name: 'Amount' },
    { key: 'IssuanceDate', name: 'Issuance Date' },
    { key: 'Remarks', name: 'Remarks' },
    { key: 'RefNo', name: 'Reference No' },
    { key: 'IssuedTo', name: 'Issued To' }
  ];
  const areAnyColumnsSelected = [
    DocNo, IC, IN, UMO, IS, QTYISS, RATE, AMOUNT, ISSDate, Remark, RefNo, IssuedTo
  ].some(Boolean);
  const selectedColumns = areAnyColumnsSelected ? allColumns.filter((column) => {
    switch (column.key) {
      case 'DocNo': return DocNo;
      case 'IC': return IC;
      case 'IN': return IN;
      case 'UMO': return UMO;
      case 'IS': return IS;
      case 'QtyIssue': return QTYISS;
      case 'Rate': return RATE;
      case 'Amount': return AMOUNT;
      case 'IssuanceDate': return ISSDate;
      case 'Remarks': return Remark;
      case 'RefNo': return RefNo;
      case 'IssuedTo': return IssuedTo;
      default: return false;
    }
  }):allColumns;

  const selectedOption = [
    DocNo ? "DocNo" : '',
    IC ? "Item Code" : '',
    IN ? "IN" : '',
    UMO ? "UMO" : '',
    IS ? "IS" : '',
    QTYISS ? "QTYISS" : '',
    RATE ? "RATE" : '',
    AMOUNT ? "AMOUNT" : '',
    ISSDate ? "ISSDate" : '',
    Remark ? "Remark" : '',
    RefNo ? "RefNo" : '',
    IssuedTo ? "IssuedTo" : '',
    
  ].filter(Boolean).join(", ");

 
// For backend uncomment it 
//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);  
//     try {
//       const response = await axios.get("/api/material-data", {
//         params: {
//           columns: selectedOption ? selectedOption : 'all',
//         },
//       });
//       if (response.data.length === 0) {
//         setError("No data found in the backend.");  
//       }
//       setTableData(response.data);
//     } catch (error) {
//       setError("Failed to load data from the backend.");  
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
  

  const printer =()=>{
    window.print();
  }

  return (
    // remove hieght when add api for backend {h-[100vh]}
    <div className="material-account w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] -mb-10 -mt-[50px] ">
       <div className=" w-1/2 bg-[#27303D] shadow-xl rounded-3xl p-2 flex item-center justify-center ml-80">
      <h1>{header}</h1>   
      </div>
      <div className="mb-10">
        <img src={image} alt="Provided" style={{ width: "200px", height: "auto" }} />
      </div>
      <div className="p-6 bg-[#27303D] shadow-md rounded-md -mt-10">
        <div className="flex">
      <h1 className="text-lg text-white mb-10 ml-[40%]">Issuance Report</h1>
              <Button onClick={printer} className="ml-[40%] -mt-2"><Printer className="mr-1"/>Print</Button>
              </div>
            
        <form>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
            <label  className="text-md text-white">From</label>
            <Input type="date" className="bg-[#0F172A] border-none text-white block"/>
            </div>
            <div>
            <label  className="text-md text-white">To</label>
            <Input type="date" className="bg-[#0F172A] border-none text-white block"/>
            </div>
          </div>
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
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={DocNo} onCheckedChange={setDocNo}>Doc No</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={IC} onCheckedChange={setIC}>Item Code</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={IN} onCheckedChange={setIN}>Item Name</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={UMO} onCheckedChange={setUMO}>UMO</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={IS} onCheckedChange={setIS}>In Stock</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={QTYISS} onCheckedChange={setQTYISS}>QTY Issue</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={RATE} onCheckedChange={setRATE}>RATE</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={AMOUNT} onCheckedChange={setAMOUNT}>AMOUNT</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={ISSDate} onCheckedChange={setISSDate}>Isuance Date</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={Remark} onCheckedChange={setRemark}>Remarks</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={RefNo} onCheckedChange={setRefNo}>Reference No</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem className="focus:bg-[#3D9C75]" checked={IssuedTo} onCheckedChange={setIssuedTo}>IssuedTo</DropdownMenuCheckboxItem>
                  
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
            
            <DataGrid columns={selectedColumns} rows={tableData} className="react-data-grid"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IssuanceReport;
