import '../../app/Style/supercategory.css';
import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import * as z from "zod";
import { Input } from '../ui/input';

// Import Lucide icons
import { XCircle, Trash2, PlusCircle, Edit } from 'lucide-react';
import MaterialAccount from './MaterialAccount';
import ControlCatagory from './ControlCatagory';

const FormSchema = z.object({
    Code: z.string().min(1, 'Code is required'),
    Name: z.string().min(3, 'Name is required')
});

const SuperCategory = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = () => {
        console.log('Form Submitted:');
    };

    return (
       <>
       <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] h-[100vh]  -mb-10 -mt-[40px]'>
       <div className=" material-return-form-container p-6  bg-[#27303D] mt-[50px]">
            <h1 className="form-title">Super Category</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="form-content">
                    <div className="form-row">
                        <FormField
                            control={form.control}
                            name="Code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Code</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Code" type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="Name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Name" type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="form-buttons">
                        <Button className='btn-cancel' type="button">
                            <XCircle className="icon mr-2 h-4 w-4" />
                            Cancel
                        </Button>
                        <Button className='btn-clear' type="reset">
                            <Trash2 className="icon mr-2 h-4 w-4" />
                            Clear
                        </Button>
                        <Button className='btn-create' type="submit">
                            <PlusCircle className="icon mr-2 h-4 w-4" />
                            Create
                        </Button>
                        <Button className='btn-create-new' type="submit">
                            <Edit className="icon mr-2 h-4 w-4" />
                            Create & New
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
        </div>

        <div className='-mt-[150px]'>
            <ControlCatagory/>
        </div>
        <div className='-mt-[200px]'>
            <MaterialAccount/>
        </div>
       
       </>
    );
}

export default SuperCategory;
