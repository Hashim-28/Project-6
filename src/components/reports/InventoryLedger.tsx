'use client';
import { header, image } from "../setup/Company";
import { Printer, Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useState } from 'react';
import axios from 'axios';
import '../../app/Style/Reports.css'
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';


const demo=[{SuperCode:"2122",SN:"Bag",ControlCode:"300",CN:'itme',ItemCode:"3102",IN:"bag",UMO:"212",OC:"843",VRate:"87",SSR:"980",LocallyPurchase:"yes",Imported:"NO",Customer:""},
  {SuperCode:"2122",SN:"Bag",ControlCode:"300",CN:'itme',ItemCode:"3102",IN:"bag",UMO:"212",OC:"843",VRate:"87",SSR:"980",LocallyPurchase:"yes",Imported:"NO",Customer:""},
  ]

const InventoryLedger = () => {
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState(demo);
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
    <div className="main-container w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] -mb-10  -mt-[50px]">
      <div className=" w-1/2 bg-[#27303D] shadow-xl rounded-3xl p-2 flex item-center justify-center ml-80">
      <h1 >{header}</h1>   
      </div>
      <div className="mb-10">
        <img src={image} alt="Provided" style={{ width: "200px", height: "auto" }} />
      </div>
      <div className="reports-container p-6 bg-[#27303D] shadow-md rounded-md -mt-10">
        <h1 className="ml-[500px]">Inventory Leadger</h1>
        <form>
          <div className="grid grid-cols-2 gap-4 mt-4">
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
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label>From</label>
              <Input type="date" className="block mt-1" />
            </div>
            <div>
              <label>To</label>
              <Input type="date" className="block mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label>UMO</label>
              <Input type="text" placeholder="Nice " className="mt-1" />
            </div>
            <div>
              <label>Opening Balance</label>
              <Input type="number" placeholder="Nice " className="mt-1" />
            </div>
          </div>

          <div className="flex justify-end items-center mt-4">
            <Button type="button" className="mr-2" onClick={print}>
              <Printer className="icon mr-2 h-4 w-4" />
              Print
            </Button>
            <Button type="submit" className="mr-2" onClick={clear}>
              <Trash className="icon mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button type="button" >
              Generate Ledger
            </Button>
          </div>
        </form>
      </div>

      

      {error && <p className='mt-10 text-xl text-white'>{error}</p>}
      <div>
            
            <DataGrid columns={allColumns} rows={tableData} className="react-data-grid mt-10"/>
            </div>
    </div>
  );
};

export default InventoryLedger;
