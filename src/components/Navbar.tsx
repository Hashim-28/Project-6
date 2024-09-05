// import Link from 'next/link'
// import React from 'react'
// import { buttonVariants } from './ui/button'
// import { LayoutDashboard, Server } from 'lucide-react'

// const Navbar = () => {
//   return (
//     <div className=' bg-blue-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
//       <div className='container flex item-center justify-between'>
//         <Link href='/'><LayoutDashboard /></Link>
//         <Link className={buttonVariants()} href='/sign-in'>Sign-in</Link>
//       </div>

//     </div>
//   )
// }

// export default Navbar


'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BadgeDollarSign, Banknote, Building2, CalendarDays, CarFront, ChevronsLeftRightEllipsis, CircleCheck, CirclePercent, ClipboardCheck, ClipboardList, ClipboardMinus, ClipboardPen, ClipboardPenLine, ClipboardPlus, ClipboardType, Database, DoorClosed, FileChartColumnIncreasing, FileSpreadsheet, House, LayoutDashboard, Logs, PanelTopOpen, Rows4, ShoppingCart, SlidersVertical, Store, Undo2, Usb, User, UserRound, UserRoundCog, Users, X, } from 'lucide-react';
import clsx from 'clsx';



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closemenu = () => {
    setMenuOpen(false);
  };
   
  const hideScrollbarStyles = {
    /* Hide scrollbar for IE, Edge, and Firefox */
    msOverflowStyle: 'none',  /* IE and Edge */
    scrollbarWidth: 'none',   /* Firefox */
    /* Hide scrollbar for Chrome, Safari, and Opera */
    WebkitScrollbar: {
      display: 'none',
    }
  };
  // Example structure: Title as key and array of objects with name and href as items.
  const menuItems = [
    {
      icon: <House color='#42B682'/>,
      title: 'Home',
      items: [
        { icon:<FileChartColumnIncreasing size={20} color='#42B682'/>, name: 'Dashboard', href: '/dashborad' },
        { icon:<FileChartColumnIncreasing size={20} color='#42B682'/>, name: 'Pending Approvals', href: '/pending-approval' },
        { icon:<Rows4 size={20} color='#42B682'/>, name: 'SBFA', href: '/sbfa' },
        { icon:<CircleCheck size={20} color='#42B682'/>, name: 'Approved', href: '/approve' },
      ],
    },
    {
      icon: <Database color='#42B682'/>,
      title: 'Setup',
      items: [
        { icon:<Building2  size={20} color='#42B682'/> ,name: 'Company', href: '/setup/company' },
        { icon: <CalendarDays  size={20} color='#42B682'/>,name: 'Fiscal Year', href: '/setup/fiscal-year' },
        { icon:<Banknote  size={20} color='#42B682'/> ,name: 'Voucher Types', href: '/setup/voucher-types' },
        { icon: <Usb  size={20} color='#42B682'/>,name: 'Application Segments', href: '/setup/application-segments' },
        { icon: <Users  size={20} color='#42B682'/>,name: 'Groups', href: '/setup/groups' },
        { icon: <User size={20} color='#42B682' />,name: 'User', href: '/setup/user' },
        { icon: <Store size={20} color='#42B682' />,name: 'Departments', href: '/department' },
      ],
    },
    {
      icon: <ClipboardCheck color='#42B682'/>,
      title: 'Function',
      items: [
        {  icon: <ClipboardPenLine size={20} color='#42B682' />,name: 'Purchase Requisition', href: '/purchase-request' },
        {  icon: <ClipboardPenLine size={20} color='#42B682' />,name: 'Purchase Order', href: '/purshace-order' },
        {  icon: <CarFront size={20} color='#42B682' />,name: 'Inward Gate Pass', href: '/inward-gate' },
        {  icon: <ClipboardMinus size={20} color='#42B682' /> ,name: 'GRN', href: '/grn' },
        {  icon: <ArrowLeft size={20} color='#42B682' />,name: 'Material Return Note', href: '/material-return-note' },
        {  icon: <FileSpreadsheet size={20} color='#42B682' />,name: 'Store Issuance Note', href: '/store-issuance-note' },
        { icon: <ChevronsLeftRightEllipsis size={20} color='#42B682' />, name: 'Super Category', href: '/super-category' },
        {  icon: <SlidersVertical size={20} color='#42B682' />,name: 'Control Category', href: '/control-category' },
        {  icon: <SlidersVertical size={20} color='#42B682' />,name: 'Material Accounts', href: '/material-accounts' },
        {  icon: <Undo2 size={20} color='#42B682' />,name: 'Material Return from Production', href: '/materialreturnform' },
      ],
    },
    {
      icon: <ClipboardPlus color='#42B682'/>,
      title: 'Reports',
      items: [
        { icon:<Logs size={20} color='#42B682' /> , name: 'Material Accounts Detail', href: '/reports/material-accounts-detail' },
        { icon: <Logs size={20} color='#42B682' />, name: 'Issuance Report', href: '/reports/issuance-report' },
        { icon: <ClipboardList size={20} color='#42B682' />, name: 'Inventory Ledger', href: '/reports/inventory-ledger' },
        { icon: <ClipboardPen size={20} color='#42B682' />, name: 'Purchase Requisition Report', href: '/reports/purchase-requisition-report' },
        { icon: <CarFront size={20} color='#42B682' />, name: 'Inward Gate Pass Report', href: '/reports/inward-gate-pass-report' },
        { icon:<ShoppingCart size={20} color='#42B682' /> , name: 'Purchase Order Report', href: '/reports/purchase-order-report' },
        { icon: <ClipboardType size={20} color='#42B682' />, name: 'GRN Report', href: '/reports/grn-report' },
        { icon: <SlidersVertical size={20} color='#42B682' />, name: 'Material Balance Report', href: '/reports/material-balance-report' },
        { icon:<Rows4 size={20} color='#42B682'/> , name: 'Material Closing Balance Report', href: '/reports/material-closing-balance-report' },
        { icon: <PanelTopOpen size={20} color='#42B682' />, name: 'Multiple Ledger', href: '/reports/multiple-ledger' },
      ],
    },
    {
      icon: <BadgeDollarSign color='#42B682'/>,
      title: 'Sales',
      items: [
        { icon:<ClipboardCheck size={20} color='#42B682'/> , name: 'Finished Goods Transfer Report', href: '/sales/finished-goods-transfer-report' },
        { icon:<ClipboardCheck size={20} color='#42B682' /> , name: 'Finished Goods Dispatch Report', href: '/sales/finished-goods-dispatch-report' },
        { icon:<PanelTopOpen size={20} color='#42B682' /> , name: 'Finished Goods Ledger', href: '/sales/finished-goods-ledger' },
        { icon:<CirclePercent size={20} color='#42B682' /> , name: 'Sales Order', href: '/sales/sales-order' },
        { icon:<ClipboardCheck size={20} color='#42B682' /> , name: 'Finished Goods Report', href: '/sales/finished-goods-report' },
        { icon: <UserRound size={20} color='#42B682' />, name: 'Customer', href: '/sales/customer' },
      ],
    },
    {
      icon: <UserRoundCog color='#42B682'/>,
      title: 'Administration',
      items: [],
    },
  ];

  return (
    <div>
      <div className=" py-2  border-zinc-200 fixed w-full z-10 top-0">
        <div className="container flex items-center justify-between">
          <button onClick={toggleMenu} className='text-[#42B682]'>
            <LayoutDashboard />
          </button>
          <Link className="bg-[#DB4CCA] text-white py-1 px-3 rounded" href="/sign-in">
            Sign-in
          </Link>
        </div>
      </div>

      {/* Overlay Menu */}
      <div
        className={clsx(
          'fixed inset-0 z-20 bg-[#1E1E2E] transition-transform transform w-[900px] h-full lg:h-[500px] shadow-2xl overflow-y-auto',
          menuOpen ? 'translate-x-0' : 'translate-x-[1400px]'
        )} style={hideScrollbarStyles}
      >
        <div className="flex justify-between items-center bg-[#42B682] text-white p-4  ">
          <h2 className="text-lg">Menu</h2>
          <button onClick={toggleMenu} >
            <X />
          </button>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2   md:grid-cols-3 lg:grid-cols-5 gap-0 ">
            {menuItems.map((menu, index) => (
              <div key={index}>
                <h3 className="text-l font-bold mb-2 flex text-white"><span className='mr-2 '>{menu.icon}</span>{menu.title}</h3>
                <ul>
                  {menu.items.map((item, i) => (
                    <li key={i} className="text-white mb-1 text-[11px] mt-3 ">
                      <Link href={item.href} onClick={closemenu} className='flex hover:text-[#42B682]'> <span className='mr-2'>{item.icon }</span> {item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;