    import React from 'react'
    import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
    import { zodResolver } from '@hookform/resolvers/zod'
    // import { Input } from 'postcss'
    import { useForm } from 'react-hook-form'
    import { Button } from '../ui/button'
    import * as z from "zod"
    import { Input } from '../ui/input'
    import Link from 'next/link'
    import ParticlesComponent from "./Particles";
    import '../../app/Style/particles.css'
    const FormSchema = z.object({
        // email: z.string().min(2, {
        //   message: "email must be at least 2 characters.",
        // }),
        email: z.string().min(1, 'Email is required').email('Invalid email'),
        password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 character')
    })


    const SignInForm = () => {
        const form = useForm<z.infer<typeof FormSchema>>({
            resolver: zodResolver(FormSchema),
    
        })

        const onSubmit = () =>{
            console.log('form Submited')
        }
        
    return (
        <div className='w-[400px]  rounded-xl raduis-10 p-10 bg-[#27303d] ml-[450px] '>
        <Form {...form}  >
    <ParticlesComponent id="particles"/>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        
            
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem>
                <FormLabel className='text-white'>email</FormLabel>
                <FormControl>
                <Input placeholder="mail@gmail.com" type='email' {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
            <FormItem>
                <FormLabel className='text-white'>password</FormLabel>
                <FormControl>
                <Input placeholder="password" type='password'{...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <Button className='w-full mt-6 bg-[#42B783]' type="submit" >SignIn</Button>
        
        </form>
        
        
        <p className='mt-12 text-white'>if you don&apos;t have an account, please&nbsp;
            <Link className='text-[#42B783]' href='/super-category'>Home</Link>
        </p>
        
    </Form>
    </div>
    )
    }

    export default SignInForm
