'use client'
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import '../app/Style/boxes.css';
import Link from 'next/link';
import CircularProgressBar from './Cirlce';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const { handleSubmit } = useForm();
    const [data, setData] = useState({ req: 1000, pro: 2000, qty: 500, po: 3000, gp: 2500, stock: 9999, value: 9999999, toRatio: 10 });
    const [chartData, setChartData] = useState({
        labels: ['REQ', 'PRO', 'QTY', 'PO', 'GP'],
        datasets: [
            {
                label: 'Value',
                data: [900000, 300000, 500000, 100000, 1200000],
                backgroundColor: '#42B780',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    });

    const [lineChartData, setLineChartData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Inventory Value Over Time',
                data: [300, 500, 700, 400, 600, 800, 100, 400, 200, 900, 750, 1000],
                fill:true,
                 backgroundColor: 'rgba(66, 183, 128, 0.2)',
                borderColor: '#42B780',
                borderwidth:1,
                tension: 0.1,
            },
        ],
    });

    const [columnChartData, setColumnChartData] = useState({
        labels: ['Item 1', 'Item 2',],
        datasets: [
            {
                label: 'Item 1',
                data: [200 ,300],
                backgroundColor: ['#42B780','pink'], 
                borderColor: '#42B780',
                borderWidth: 1,
            },
            {
                label: 'Item 2',
                backgroundColor: ['pink'], 
            },
        ],
    });

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('/api/pending-demands')
            .then(response => response.json())
            .then(data => {
                setData({
                    req: data.req,
                    pro: data.pro,
                    qty: data.qty,
                    po: data.po,
                    gp: data.gp,
                    stock: data.stock,
                    value: data.value,
                    toRatio: data.toRatio,
                });

                // Update chart data
                setChartData(prevData => ({
                    ...prevData,
                    datasets: [{
                        ...prevData.datasets[0],
                        data: [data.req, data.pro, data.qty, data.po, data.gp],
                    }],
                }));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const onSubmit = () => {
        console.log('Form Data:');
    };



    return (
        <div className=' bg-[#1E1E2E] w-[107%] h-[130vh] mt-[130px] -ml-[50px] -mb-10'>
            <div className="fixed inset-0 bg-world-map bg-center bg-no-repeat bg-cover opacity-30"></div>
        <div className='grid grid-cols-3'>
            <div className="material-return-form-container p-4   backdrop-blur-md bg-[#27303d] opacity-90 rounded-md ml-10     w-[420px]   mt-20">
                <h1 className="text-lg font-semibold mb-8 text-white ml-[100px]">Pending Demands</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-3 mb-4">
                        <div className='w-10'>
                            <Link href='/pending-approval1'>
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[120px] -mt-5 overflow-hidden cursor-pointer opacity-90">
                                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                        <span>{data.req.toLocaleString()}</span>
                                    </div>
                                    <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-l">REQ</p>
                                </div>
                            </Link>
                        </div>
                        <div className='w-10'>
                            <Link href='/pending-approval1'>
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[120px]   -mt-5 overflow-hidden cursor-pointer">
                                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                        <span>{data.pro.toLocaleString()}</span>
                                    </div>
                                    <p className="heading font-semibold tracking-wider  group-hover:text-[#27293D] text-l">PRO</p>
                                </div>
                            </Link>
                        </div>
                        <div className='w-10'>
                            <Link href='/pending-approval1'>
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[120px]  -mt-5 overflow-hidden cursor-pointer">
                                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                        <span>{data.qty.toLocaleString()}</span>
                                    </div>
                                    <p className="heading font-semibold tracking-wider  group-hover:text-[#27293D] text-l">QTY</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="material-return-form-container p-4 backdrop-blur-md bg-[#27303d] opacity-90 rounded-md ml-5 w-[420px]  mt-20">
                <h1 className="text-lg font-semibold mb-8 text-white ml-[80px]">Pending Purchase Order</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-3 mb-4">
                        <div className='w-10'>
                            <Link href='/pending-approval1'>
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[120px]  -mt-5 overflow-hidden cursor-pointer opacity-90">
                                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                        <span>{data.po.toLocaleString()}</span>
                                    </div>
                                    <p className="heading font-semibold tracking-wider  group-hover:text-[#27293D] text-l">PO</p>
                                </div>
                            </Link>
                        </div>
                        <div className='w-10'>
                            <Link href='/pending-approval1'>
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[120px] -mt-5 overflow-hidden cursor-pointer">
                                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                        <span>{data.pro.toLocaleString()}</span>
                                    </div>
                                    <p className="heading font-semibold tracking-wider  group-hover:text-[#27293D] text-l">PRO</p>
                                </div>
                            </Link>
                        </div>
                        <div className='w-10'>
                            <Link href='/pending-approval1'>
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[120px] -mt-5 overflow-hidden cursor-pointer">
                                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                        <span>{data.qty.toLocaleString()}</span>
                                    </div>
                                    <p className="heading font-semibold  group-hover:text-[#27293D] tracking-wider text-l">QTY</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="material-return-form-container p-4 backdrop-blur-md bg-[#27303d] opacity-80 rounded-md  w-[430px] mt-20 ">
                <h1 className="text-lg font-semibold mb-8 text-white ml-[10 0px]">Pending Gate Pass</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-3 mb-4">
                        <div className='w-10'>
                            <Link href='/pending-approval1'>
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[120px] -mt-5 overflow-hidden cursor-pointer opacity-90">
                                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                        <span>{data.gp.toLocaleString()}</span>
                                    </div>
                                    <p className="heading font-semibold tracking-wider  group-hover:text-[#27293D] text-l">GP</p>
                                </div>
                            </Link>
                        </div>
                        <div className='w-10'>
                            <Link href='/pending-approval1'>
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[120px] -mt-5 overflow-hidden cursor-pointer">
                                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                        <span>{data.pro.toLocaleString()}</span>
                                    </div>
                                    <p className="heading font-semibold tracking-wider  group-hover:text-[#27293D] text-l">PRO</p>
                                </div>
                            </Link>
                        </div>
                        <div className='w-10'>
                            <Link href='/pending-approval1'>
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[120px] -mt-5 overflow-hidden cursor-pointer">
                                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                        <span>{data.qty.toLocaleString()}</span>
                                    </div>
                                    <p className="heading font-semibold  group-hover:text-[#27293D] tracking-wider text-l">QTY</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            <div className='grid grid-cols-5 -ml-6'>     
            <div className="grid justify-center mb-4">
    <div className="custom-shadow group progress-box px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[150px] mt-6 overflow-hidden cursor-pointer opacity-80">
        <h1 className="text-lg font-semibold mb-2 text-white w-[150px] ml-4">Turn Over Ratio</h1>
        <CircularProgressBar percentage={data.toRatio} />
        <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-lg w-[150px] mt-2 ml-2">Turn ratio over</p>
    </div>
</div>
            <div className="grid justify-center mb-4">
    <div className="custom-shadow group progress-box px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[150px] mt-6 overflow-hidden cursor-pointer opacity-80 -ml-[180px]">
        <h1 className="text-lg font-semibold mb-2 text-white w-[150px] ml-10">Sales Ratio</h1>
        <CircularProgressBar percentage={data.toRatio} />
        <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-lg w-[150px] mt-2 ml-10"> Sales Ratio</p>
    </div>
</div>
<div className='flex w-[380px] mt-6'>
                    <div className=" p-4 backdrop-blur-md bg-[#27303d] opacity-80 rounded-md    w-[400px] h-[185px] overflow-y-scroll scrollbar-hide -ml-[150px]">
                <h1 className="text-lg font-semibold mb-8 text-white ml-[30px]">Stock Available</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-10'>
                            
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-[0px_0px_8px_5px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[227px] h-[120px] -mt-5  overflow-hidden  opacity-90" >
                                        <span >{data.stock.toLocaleString()}</span>
                                    <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-l">Stock Available</p>
                                </div>
                        </div>
                        <div className='w-10'>
                            
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-[0px_0px_8px_5px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[227px] h-[120px] mt-5 overflow-hidden  opacity-90">
                                        <span >{data.stock.toLocaleString()}</span>
                                    <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-l">Stock Available</p>
                                </div>
                        </div>
                        
                        </form>
                        </div>

                        <div className=" p-4 backdrop-blur-md bg-[#27303d] opacity-80 rounded-md  h-[185px]   w-[400px] overflow-y-scroll scrollbar-hide ml-4">
                <h1 className="text-lg font-semibold mb-8 text-white ml-[80px]">Value</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-10'>
                            
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-[0px_0px_8px_5px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[227px] -mt-5 h-[120px] overflow-hidden  opacity-90">
                                        <span >{data.value.toLocaleString()}</span>
                                    <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-l">Value</p>
                                </div>
                        </div>
                        <div className='w-10'>
                            
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-[0px_0px_8px_5px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[227px] mt-5  h-[120px] overflow-hidden  opacity-90" >
                                        <span >{data.value.toLocaleString()}</span>
                                    <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-l">Value</p>
                                </div>
                        </div>
                        </form>
                        </div>
                    </div>
                    <div className='custom-shadow group p-4 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300  w-[410px] h-[185px] overflow-hidden  ml-[120px] mt-6 opacity-80'>
            <div className='colum bar chart mt-40'>
                        <h2 className="text-lg font-semibold text-white ml-20">Column Bar Chart</h2>
                        <div className="chart-container w-[300px] h-[300px] text-xl">
                            <Bar data={columnChartData} options={{
                                responsive: true,
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Items Comparison',
                                    },
                                },
                            }} />
                        </div>
                    </div>
                    </div>

            </div>
                    <div className='grid grid-cols-3'>
                    <div className='custom-shadow group p-4 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300  w-[450px] overflow-hidden  ml-10 mt-2 opacity-80'>
            <div className='bar-chart '>
                <h2 className="text-lg font-semibold  text-white ml-[170px]">Stock</h2>
                <div className="chart-container w-[370px] h-[200px] text-xl">
                    <Bar data={chartData} options={{
                        responsive: true,
                        plugins: {
                            
                            title: {
                                display: true,
                                text: 'Top Items Based on Value ',
                            },
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    }} />
                </div>
            </div>
                    </div>

                    <div className='custom-shadow group px-5 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300  w-[450px] overflow-hidden  mt-2 opacity-80 ml-14' >
            <div className='line chart'>
                    <h2 className="text-lg font-semibold  text-white ml-[70px]">Inventory Value Over time</h2>
                    <div className="chart-container w-[380px] h-[200px] text-xl">
                        <Line data={lineChartData} options={{
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Inventory value',
                                },
                            },
                        }} />
                    </div>
                </div>
                </div>

                <div className="material-return-form-container p-4 backdrop-blur-md bg-[#27303d] opacity-80 rounded-md    w-[340px]  h-[220px] mt-2 overflow-y-scroll scrollbar-hide ml-[70px]">
                <h1 className="text-lg font-semibold  text-white ml-[80px]">Total Purchase</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-10'>
                            
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[300px] h-[130px]   opacity-90 mt-2">
                                        <span >{data.stock.toLocaleString()}</span>
                                    <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-l">Quantity</p>
                                </div>
                        </div>
                        <div className='w-10'>
                            
                                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-[300px] h-[130px] mt-5  opacity-90">
                                        <span >{data.value.toLocaleString()}</span>
                                    <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-l">Value</p>
                                </div>
                        </div>
                        </form>
                        </div>
                    </div>

        </div>
        
    );
};

export default Dashboard;
