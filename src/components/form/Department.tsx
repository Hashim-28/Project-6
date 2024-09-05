
'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
// import { Button, Input, Select } from './ui'; // Assume these are pre-defined UI components
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Edit, PlusCircle, Trash2, XCircle } from 'lucide-react';
import  '../../app/Style/purchase.css';

const Department = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = () => {
        console.log('Form Data:');
    };

    return (
        <div className="material-return-form-container p-6 bg-slate-200 shadow-md rounded-md mt-16">
            <h1 className="text-xl font-semibold mb-8">Department</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-4 mb-4">
                   
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Department No</label>
                        <Input
                            type="number"
                            {...register('departmentNo')}
                            placeholder="0"
                            className="mt-1 block w-full"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                   
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Department Name</label>
                        <Input
                            type="text"
                            {...register('departmentName')}
                            placeholder=""
                            className="mt-1 block w-full"
                        />
                    </div>
                </div>
                <div className="flex justify-end items-center mt-5">
                    <Button type="button" className="mr-2"> <Trash2 className="icon mr-2 h-4 w-4" />Clear</Button>
                    <Button type="submit" className="mr-2"><PlusCircle className="icon mr-2 h-4 w-4" />Create</Button>
                </div>
                </form>
            </div>
    )}
 export default Department;