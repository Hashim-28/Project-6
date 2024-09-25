'use client';
import { header, image } from "../setup/Company";
import { Printer, Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useState } from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import axios, { all } from 'axios';
import '../../app/Style/Reports.css'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const demo = [{PoNo:"10135",date:"06/sep/2024",GPN:'10115',VN:"Amir Package",IC:"07-004-005",IN:"Product1",UMO:'PCs',QTY:'250'},
{PoNo:"10135",date:"06/sep/2024",GPN:'10115',VN:"Amir Package",IC:"07-004-005",IN:"Product1",UMO:'PCs',QTY:'250'},
];
const OutwardGatePassDetails = () => {
  const [showTable, setShowTable] = useState(true);
  const [tableData, setTableData] = useState(demo);
  const [error, setError] = useState(null);
  const allColumns = [
    { key: 'PoNo', name: 'PO No' },
    { key: 'date', name: 'Date' },
    { key: 'GPN', name: 'GPN' },
    { key: 'VN', name: 'Vendor Name' },
    { key: 'IC', name: 'Item Code' },
    { key: 'IN', name: 'Item Name' },
    { key: 'UMO', name: 'Unit of Measure' },
    { key: 'QTY', name: 'Quantity' }
  ];
  
 
  // const fetchLedgerData = async () => {
  //   setError(null);
  //   try {
  //     const response = await axios.get('BACKEND LINK');
  //     const data = response.data;

  //     if (data.length === 0) {
  //       setError("No data available.");
  //     } else {
  //       setTableData(data);
  //     }

  //     setShowTable(true);
  //   } catch (error) {
  //     setError("Failed to fetch data.");
  //   } 
  // };
  const print=()=>{
    window.print();
  }
  const clear =()=>{
    setShowTable(false);
  }

  return (
    <div className="main-container w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] -mb-10 -mt-[50px]">
     <div className=" w-1/2 bg-[#27303D] shadow-xl rounded-3xl p-2 flex item-center justify-center ml-80">
      <h1 >{header}</h1>   
      </div>
      <div className="mb-10">
        <img src={image} alt="Provided" style={{ width: "200px", height: "auto" }} />
      </div>
      <div className="reports-container p-6 bg-[#27303D] shadow-md rounded-md -mt-10">
        
        <div className="flex  items-center  w-full">
        <h1 className="ml-[500px] w-[300px]">Outward Gate Pass Gate</h1>
            <Button type="button" className="mr-2 ml-[300px]" onClick={print}>
              <Printer className="icon mr-2 h-4 w-4" />
              Print
            </Button>
            <Button type="submit" className="mr-2" onClick={clear}>
              <Trash className="icon mr-2 h-4 w-4" />
              Clear
            </Button>
          </div>
        <form>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label>Item Code</label>
              <div className="col-span-1">
                <select className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm bg-transparent sm:text-sm mt-2" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="pro1">pro1</option>
                  <option value="pro2">pro2</option>
                </select>
              </div>
            </div>
            <div className="mt-0">
              <label>Item Name</label>
              <Input type="text"  placeholder="Bag" className="mt-1" />
            </div>
            <div>
              <label>PO</label>
              <div className="col-span-1">
                <select className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm bg-transparent sm:text-sm mt-2" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="pro1">pro1</option>
                  <option value="pro2">pro2</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div>
              <label>From</label>
              <Input type="date" className="block mt-1" />
            </div>
            <div>
              <label>To</label>
              <Input type="date" className="block mt-1" />
            </div>
            <div>
              <label>Vendor</label>
              <div className="col-span-1">
                <select className="flex w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm bg-transparent sm:text-sm mt-2" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="pro1">pro1</option>
                  <option value="pro2">pro2</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-2">
            <div>
              <label>Status</label>
              <Input type="text" placeholder="Nice " className="mt-1" />
            </div>
          </div>
        </form>
      </div>

      

      {error && <p className='mt-10 text-xl text-white'>{error}</p>}

      {showTable && !error && (
         <div>
            
         <DataGrid columns={allColumns} rows={tableData} className="react-data-grid opacity-90 mt-10" />
         </div>
      )}
    </div>
  );
};

export default OutwardGatePassDetails;
