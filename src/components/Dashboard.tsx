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
        <div className='grid justify-center bg-[#1E1E2E] lg:w-[107%] w-[130%]  -mt-10 -ml-[50px] -mb-10'>
            <div className="fixed 0 inset-0 bg-world-map bg-center bg-no-repeat bg-cover opacity-30"></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    <div className="material-return-form-container p-4 backdrop-blur-md bg-[#27303d] opacity-90 rounded-md ml-6 sm:ml-10 lg:ml-0 w-full max-w-[360px] lg:max-w-[420px] sm:max-w-[420px] mt-20 mx-auto sm:mt-20 lg:mt-20">
        <h1 className="text-lg font-semibold mb-2 text-white text-center">Pending Demands</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-4">
                <div className='w-full'>
                    <Link href='/pending-approval1'>
                        <div className="custom-shadow group px-4 py-3 bg-[#27293D] rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full cursor-pointer">
                            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <span>{data.req.toLocaleString()}</span>
                            </div>
                            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-center text-l">REQ</p>
                        </div>
                    </Link>
                </div>
                <div className='w-full'>
                    <Link href='/pending-approval2'>
                        <div className="custom-shadow group px-4 py-3 bg-[#27293D] rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full cursor-pointer">
                            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <span>{data.po.toLocaleString()}</span>
                            </div>
                            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-center text-l">PO</p>
                        </div>
                    </Link>
                </div>
                <div className='w-full'>
                    <Link href='/pending-approval3'>
                        <div className="custom-shadow group px-4 py-3 bg-[#27293D] rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full cursor-pointer">
                            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <span>{data.qty.toLocaleString()}</span>
                            </div>
                            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-center text-l">QTY</p>
                        </div>
                    </Link>
                </div>
               
            </div>
        </form>
    </div>

    
    <div className="material-return-form-container p-4 backdrop-blur-md bg-[#27303d] opacity-90 rounded-md ml-6 sm:-ml-20 lg:ml-0 w-full max-w-[360px] lg:max-w-[420px] sm:max-w-[420px] sm:mt-20 mt-10 mx-auto lg:mt-20">
    <h1 className="text-lg font-semibold mb-2 text-white text-center">Pending PO</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-4">
                <div className='w-full'>
                    <Link href='/pending-approval1'>
                        <div className="custom-shadow group px-4 py-3 bg-[#27293D] rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full cursor-pointer">
                            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <span>{data.req.toLocaleString()}</span>
                            </div>
                            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-center text-l">REQ</p>
                        </div>
                    </Link>
                </div>
                <div className='w-full'>
                    <Link href='/pending-approval2'>
                        <div className="custom-shadow group px-4 py-3 bg-[#27293D] rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full cursor-pointer">
                            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <span>{data.po.toLocaleString()}</span>
                            </div>
                            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-center text-l">PO</p>
                        </div>
                    </Link>
                </div>
                <div className='w-full'>
                    <Link href='/pending-approval3'>
                        <div className="custom-shadow group px-4 py-3 bg-[#27293D] rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full cursor-pointer">
                            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <span>{data.qty.toLocaleString()}</span>
                            </div>
                            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-center text-l">QTY</p>
                        </div>
                    </Link>
                </div>
               
            </div>
        </form>
    </div>
    
    <div className="material-return-form-container p-4 backdrop-blur-md ml-6 sm:ml-[520px] sm:mt-2 bg-[#27303d] opacity-80 rounded-md w-full max-w-[360px] lg:max-w-[420px] sm:max-w-[420px] mt-10 mx-auto lg:mt-20 lg:ml-0">
    <h1 className="text-lg font-semibold mb-2 text-white text-center">Pending GP</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-4">
                <div className='w-full'>
                    <Link href='/pending-approval1'>
                        <div className="custom-shadow group px-4 py-3 bg-[#27293D] rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full cursor-pointer">
                            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <span>{data.req.toLocaleString()}</span>
                            </div>
                            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-center text-l">REQ</p>
                        </div>
                    </Link>
                </div>
                <div className='w-full'>
                    <Link href='/pending-approval2'>
                        <div className="custom-shadow group px-4 py-3 bg-[#27293D] rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full cursor-pointer">
                            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <span>{data.po.toLocaleString()}</span>
                            </div>
                            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-center text-l">PO</p>
                        </div>
                    </Link>
                </div>
                <div className='w-full'>
                    <Link href='/pending-approval3'>
                        <div className="custom-shadow group px-4 py-3 bg-[#27293D] rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full cursor-pointer">
                            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#42B783] group-hover:bg-[#27293D] transition-all duration-300">
                                <span>{data.qty.toLocaleString()}</span>
                            </div>
                            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-center text-l">QTY</p>
                        </div>
                    </Link>
                </div>
               
            </div>
        </form>
    </div>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-4 p-4 lg:-mt-4'>
    <div className="flex justify-center mb-4 lg:-ml-[130px] ml-0 sm:-ml-[300px]">
        <div className="custom-shadow group progress-box px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full lg:max-w-[200px] sm:max-w-[200px] max-w-[300px] mt-6 overflow-hidden cursor-pointer opacity-80 sm:-mt-[210px] lg:mt-6">
            <h1 className="text-lg font-semibold mb-2 text-white ">Turn OR</h1>
            <CircularProgressBar percentage={data.toRatio} />
            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-lg mt-2">Turn OR</p>
        </div>
    </div>

    <div className="flex justify-center mb-4 lg:-ml-80 ml-0 sm:-ml-[980px]">
        <div className="custom-shadow group progress-box px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full lg:max-w-[200px] sm:max-w-[200px]  sm:mt-5 max-w-[300px] lg:mt-6 overflow-hidden cursor-pointer opacity-80 sm:-mt-[211px] ">
            <h1 className="text-lg font-semibold mb-2 text-white">Sales Ratio</h1>
            <CircularProgressBar percentage={data.toRatio} />
            <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-lg mt-2">Sales Ratio</p>
        </div>
    </div>

    <div className='flex flex-col md:flex-row sm:flex-col w-full lg:mt-6 space-y-4 md:space-y-0 md:space-x-4 '>
        <div className="p-4 backdrop-blur-md bg-[#27303d] opacity-80 rounded-md w-full lg:max-w-[400px] max-w-[330px] h-[185px] overflow-y-scroll scrollbar-hide lg:-ml-[215px] ml-6  sm:max-w[500px] ">
            <h1 className="text-lg font-semibold mb-8 text-white lg:ml-14 ml-14">Stock Available</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col space-y-4'>
                    <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-[0px_0px_8px_5px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full h-[120px] overflow-hidden opacity-90">
                        <span>{data.stock.toLocaleString()}</span>
                        <p className="heading font-semibold tracking-wider group-hover:text-[#27293D]">Stock Available</p>
                    </div>
                    <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-[0px_0px_8px_5px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full h-[120px] overflow-hidden opacity-90">
                        <span>{data.stock.toLocaleString()}</span>
                        <p className="heading font-semibold tracking-wider group-hover:text-[#27293D]">Stock Available</p>
                    </div>
                </div>
            </form>
        </div>

        <div className="p-4 backdrop-blur-md bg-[#27303d] opacity-80  rounded-md w-full lg:max-w-[400px] max-w-[330px] h-[185px] overflow-y-scroll scrollbar-hide ml-6  ">
            <h1 className="text-lg font-semibold mb-8 text-white lg:ml-24 ml-24">Value</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col space-y-4'>
                    <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-[0px_0px_8px_5px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full h-[120px] overflow-hidden opacity-90">
                        <span>{data.value.toLocaleString()}</span>
                        <p className="heading font-semibold tracking-wider group-hover:text-[#27293D]">Value</p>
                    </div>
                    <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-[0px_0px_8px_5px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full h-[120px] overflow-hidden opacity-90">
                        <span>{data.value.toLocaleString()}</span>
                        <p className="heading font-semibold tracking-wider group-hover:text-[#27293D]">Value</p>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div className='custom-shadow group p-4 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 w-full lg:max-w-[300px] max-w-[330px] h-[185px] overflow-hidden mx-auto mt-6 opacity-80 ml-6 lg:ml-0 sm:-mt-0 lg:mt-6'>
        <h2 className="text-lg font-semibold text-white">Column Bar Chart</h2>
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

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 p-4 lg:-mt-6 lg:-ml-4 ml-6'>
    <div className='custom-shadow group p-4 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 w-full max-w-[450px] sm:h-[300px] overflow-hidden  opacity-80'>
        <div className='bar-chart'>
            <h2 className="text-lg font-semibold text-white ml-[120px]">Stock</h2>
            <div className="chart-container w-full h-[200px] text-xl">
                <Bar data={chartData} options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Top Items Based on Value',
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

    <div className='custom-shadow group p-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 w-full max-w-[450px] overflow-hidden  opacity-80 sm:-ml-[100px] lg:ml-0'>
        <div className='line chart'>
            <h2 className="text-lg font-semibold text-white ml-10">Inventory Value Over Time</h2>
            <div className="chart-container w-full h-[200px] text-xl">
                <Line data={lineChartData} options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Inventory Value',
                        },
                    },
                }} />
            </div>
        </div>
    </div>

    <div className="material-return-form-container p-4 backdrop-blur-md bg-[#27303d] opacity-80 rounded-md w-full max-w-[340px] h-[220px]  overflow-y-scroll scrollbar-hide">
        <h1 className="text-lg font-semibold text-white ml-20">Total Purchase</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full'>
                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full h-[130px] opacity-90 mt-2">
                    <span>{data.stock.toLocaleString()}</span>
                    <p className="heading font-semibold tracking-wider group-hover:text-[#27293D] text-l">Quantity</p>
                </div>
            </div>
            <div className='w-full'>
                <div className="custom-shadow group px-10 py-5 bg-[#27293D] rounded-lg flex flex-col items-center justify-center relative shadow-lg transition-all duration-300 hover:bg-[#42B783] hover:shadow-[0px_0px_15px_5px_rgba(66,183,131,0.5)] w-full h-[130px] mt-5 opacity-90">
                    <span>{data.value.toLocaleString()}</span>
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
