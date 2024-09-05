'use client'
import React, { useState } from 'react';

type MenuItem = {
  name: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menuItems: MenuSection[] = [
  {
    title: 'Home',
    items: [
      { name: 'Pending Approvals' },
      { name: 'SBFA' },
      { name: 'Approved' },
    ],
  },
  {
    title: 'Setup',
    items: [
      { name: 'Company' },
      { name: 'Fiscal Year' },
      { name: 'Voucher Types' },
      { name: 'Application Segments' },
      { name: 'Groups' },
      { name: 'User' },
      { name: 'Departments' },
    ],
  },
  {
    title: 'Function',
    items: [
      { name: 'Purchase Requisition' },
      { name: 'Purchase Order' },
      { name: 'Inward Gate Pass' },
      { name: 'GRN' },
      { name: 'Material Return Note' },
      { name: 'Store Issuance Note' },
      { name: 'Super Category' },
      { name: 'Control Category' },
      { name: 'Material Accounts' },
      { name: 'Material Return from Production' },
    ],
  },
  {
    title: 'Reports',
    items: [
      { name: 'Material Accounts Detail' },
      { name: 'Issuance Report' },
      { name: 'Inventory Ledger' },
      { name: 'Purchase Requisition Report' },
      { name: 'Inward Gate Pass Report' },
      { name: 'Purchase Order Report' },
      { name: 'GRN Report' },
      { name: 'Material Balance Report' },
      { name: 'Material Closing Balance Report' },
      { name: 'Multiple Ledger' },
    ],
  },
  {
    title: 'Sales',
    items: [
      { name: 'Finished Goods Transfer Report' },
      { name: 'Finished Goods Dispatch Report' },
      { name: 'Finished Goods Ledger' },
      { name: 'Sales Order' },
      { name: 'Finished Goods Report' },
      { name: 'Customer' },
    ],
  },
  {
    title: 'Administration',
    items: [],
  },
];

const Menu: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-wrap justify-between">
      {menuItems.map((menu, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div
              className="p-4 bg-gray-800 text-white cursor-pointer"
              onClick={() => toggleMenu(index)}
            >
              {menu.title}
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-screen' : 'max-h-0'
              } overflow-hidden`}
            >
              <ul className="p-4">
                {menu.items.map((item, i) => (
                  <li key={i} className="p-2 text-gray-700">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;