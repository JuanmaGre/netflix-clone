import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'
import useAuth from "../hooks/useAuth";



interface Inputs {
    email: string
    password: string
};

function Login() {
    const [login, setLogin] = useState(false);
    const { signIn, signUp } = useAuth();
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if(login) {
            await signIn(data.email, data.password)
        } else {
            await signUp(data.email, data.password)
        }
    };

    return (
        <div className="relative flex h-screen w-screen flex-col bg-black
        md:items-center md:justify-center md:bg-transparent">
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image 
                src="https://rb.gy/p2hphi"
                layout="fill"
                className="-z-10 !hidden opacity-60 sm:!inline"
                objectFit="cover"
            />
            <img 
                src="https://rb.gy/ulxxee" 
                width={150}
                height={150}
                className="absolute left-4 top-4 cursor-pointer object-contain
                md:left-10 md:top-6"
            />
            <form 
                className="relative mt-24 space-y-8 rounded bg-black/75
                py-10 px-6 md:mt-0 md:max-w-md md:px-14"
                onSubmit={handleSubmit(onSubmit)}    
            >
                <h1 className="text-4xl font-semibold">
                    Sign In
                </h1>
                <div>
                    <label className="inline-block w-full">
                        <input 
                            className="input"
                            type="email"
                            placeholder="Email"
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <p className="text-sm  text-orange-500">
                                Please enter a valid email.
                            </p>
                        )}
                    </label>
                    <label className="inline-block w-full">
                        <input 
                            className="input"
                            type="password"
                            placeholder="Password"
                            {...register('password', { required: true })}
                        />
                        {errors.password && (
                            <p className="text-sm  text-orange-500">
                                Please enter a valid password.
                            </p>
                        )}
                    </label>
                </div>
                <button
                    onClick={() => setLogin(true)}
                    type="submit"
                    className="w-full rounded bg-[#e50914] py-3 font-semibold">
                    Sign In
                </button>
                <div className="text-[gray]">
                    New to Netflix ?(' ')
                    <button
                        onClick={() => setLogin(false)} 
                        type="submit" 
                        className="text-white hover:underline"
                    >
                        Sign Up Now
                    </button>
                </div>
            </form>
        </div>
    );
};


export default Login