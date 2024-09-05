'use client'
import '../../app/Style/supercategory.css';
import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import * as z from "zod";
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';

const FormSchema = z.object({
    SuperCode: z.string().min(1, 'Super Code is required'),
    ControlCode: z.string().min(1, 'Control Code is required'),
    Code: z.string().min(1, 'Code is required'),
    UOM: z.string().min(1, 'UOM is required'),
    SuperName: z.string().min(3, 'Super Name is required'),
    ControlName: z.string().min(3, 'Control Name is required'),
    OpeningStock: z.string().min(1, 'Opening Stock is required'),
    ValuationRate: z.string().min(1, 'Valuation Rate is required'),
    StandardSellingRate: z.string().min(1, 'Standard Selling Rate is required'),
    LocallyPurchased: z.boolean(),
    Imported: z.boolean(),
    Customers: z.boolean(),
});

const MaterialAccount = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = () => {
        console.log('Form Submitted:', form.getValues());
    };

    return (
        <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px]  -mb-10 -mt-[40px]'>
        <div className="super-category-container material-return-form-container bg-[#27303D] p-6">
            <h1 className="form-title text-xl mb-4">Material Accounts</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-10 gap-6">
                        {/* Part 1: Source Code, Super Name, Control Code, Control Name, Code, UOM */}
                        <div className="form-part p-4 rounded-md shadow-md col-span-7">
                            <h2 className="form-part-title text-lg mb-4">Source Details</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="SuperCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Super Code</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Super Code" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="SuperName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Super Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Super Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="ControlCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Control Code</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Control Code" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="ControlName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Control Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Control Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="Code"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Code</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Code" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="UOM"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>UOM</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter UOM" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Part 2: Stock Details */}
                        <div className="form-part  p-4 rounded-md shadow-md col-span-3">
                            <h2 className="form-part-title text-lg mb-4">Stock Details</h2>
                            <div className="grid grid-cols-1 gap-4">
                                <FormField
                                    control={form.control}
                                    name="OpeningStock"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Opening Stock</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Opening Stock" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="ValuationRate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Valuation Rate</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Valuation Rate" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="StandardSellingRate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Standard Selling Rate</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Standard Selling Rate" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Part 3: Image Upload */}
                        <div className="form-part  p-4 rounded-md shadow-md col-span-5">
                            <h2 className="form-part-title text-lg mb-4">Upload Image</h2>
                            <FormField
                                control={form.control}
                                name="Image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="file" {...field}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Part 4: Types with Checkboxes */}
                        <div className="form-part p-4 rounded-md shadow-md col-span-5">
                            <h2 className="form-part-title text-lg mb-4">Type</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <FormField
                                    control={form.control}
                                    name="LocallyPurchased"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Checkbox {...field} />
                                            </FormControl>
                                            <FormLabel>Locally Purchased</FormLabel>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="Imported"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Checkbox {...field} />
                                            </FormControl>
                                            <FormLabel>Imported</FormLabel>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="Customers"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Checkbox {...field} />
                                            </FormControl>
                                            <FormLabel>Customers</FormLabel>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="form-part p-4 text-right">
                        <Button type="button" className="mr-2">Clear</Button>
                        <Button type="submit" className="mr-2">Create</Button>
                        <Button type="submit">Create and New</Button>
                    </div>
                </form>
            </Form>
        </div>
        </div>
    );
}

export default MaterialAccount;