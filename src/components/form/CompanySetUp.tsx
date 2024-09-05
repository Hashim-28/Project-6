'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { PlusCircle, Trash2, XCircle } from 'lucide-react';
import '../../app/Style/purchase.css';

const CompanySetUp = () => {
    const { register, handleSubmit ,reset} = useForm();
    const [isFormVisible, setFormVisible] = useState(false);

    const onSubmit = (data: any) => {
        console.log('Form Data:', data);
        setFormVisible(false); // Close the popup after submission
    };

    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
    };
    const handleClear = () => {
        reset(); // Clear all input fields
    };

    return (
        <div className="material-return-form-container p-6 bg-slate-200 shadow-md rounded-md mt-16">
            <div className="flex justify-end items-center mt-5">
                <Button type="button" className="mr-2" onClick={toggleFormVisibility}>
                    <PlusCircle className="icon mr-2 h-4 w-4" /> Create
                </Button>
            </div>

            {isFormVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                    <div className="bg-white p-4  shadow-lg rounded-md w-[600px] h-[600px]">
                        <div className="flex justify-between items-center mb-2">
                            <h1 className="text-l font-semibold">Company SetUp</h1>
                            <button onClick={toggleFormVisibility}>
                                <XCircle className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1  mb-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Company Name</label>
                                    <Input
                                        type="Text"
                                        {...register('companyName')}
                                        placeholder=""
                                        className="mt-1 block w-full"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 mb-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Address</label>
                                    <Input
                                        type="text"
                                        {...register('address')}
                                        placeholder=""
                                        className="mt-1 block w-full"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 mb-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone No</label>
                                    <Input
                                     type="number"
                                     {...register('phoneNo')}
                                     placeholder=""
                                     pattern="\d{12}"
                                     max-Length="12"
                                     className="mt-1 block w-full"
                                     required
    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 mb-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Fax</label>
                                    <Input
                                        type="number"
                                        {...register('fax')}
                                        placeholder=""
                                        className="mt-1 block w-full"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 mb-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">City</label>
                                    <Input
                                        type="text"
                                        {...register('city')}
                                        placeholder=""
                                        className="mt-1 block w-full"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 mb-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Zip</label>
                                    <Input
                                        type="number"
                                        {...register('zip')}
                                        max-length="5"
                                        placeholder=""
                                        className="mt-1 block w-full"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 mb-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Currency</label>
                                    <Input
                                        type="number"
                                        {...register('currency')}
                                        placeholder=""
                                        className="mt-1 block w-full"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end items-center mt-2">
                                <Button type="button" className="mr-2" onClick={handleClear}>
                                    <Trash2 className="icon mr-2 h-4 w-4" /> Clear
                                </Button>
                                <Button type="submit" className="mr-2">
                                    <PlusCircle className="icon mr-2 h-4 w-4" /> Create
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanySetUp;
