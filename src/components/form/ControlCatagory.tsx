'use client';
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Edit, PlusCircle, Trash2, XCircle } from 'lucide-react';
import  '../../app/Style/controlcategoty.css';
const FormSchema = z.object({
  supercode: z.string(),
  controlcode: z.string(),
  supercata: z.string(),
  
})

const onSubmit  = () =>{
  console.log('form submitted')
}
const ControlCatagory= () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  return  (
    <div className='w-[106.2%] bg-[#1E1E2E] -ml-10 p-[61px] h-[100vh]  -mb-10 -mt-[40px]'>
    <div className="cotainer-up material-return-form-container p-6  bg-[#27303D]  ">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1">
      <h1 className='font-bold text-3xl ' >Control Catagory</h1>
        <div className='flex space-between gap-1'>
        <div className='first space-y-4 w-[600px] '>
            
 <FormField
          control={form.control}
          name="supercode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SuperCode</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="controlcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Control Code</FormLabel>
              <FormControl>
                <Input placeholder="...." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className='second space-y-4 ml-4 w-[600px]'>
        <FormField
          control={form.control}
          name="supercata"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Super Catagory</FormLabel>
              <FormControl>
              <select className="block w-full p-2 border border-gray-100 bg-white rounded-md shadow-sm focus:outline-none   focus:border-black focus:border-2 sm:text-sm"  defaultValue="" {...field}
      >
        <option value="" disabled>
          Please select an option
        </option>
        <option value="pro1">pro1</option>
        <option value="pro2">pro2</option>
       
      </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="controlcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Control Catagory</FormLabel>
              <FormControl>
                <Input placeholder="...." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
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
  )
}

export default ControlCatagory;