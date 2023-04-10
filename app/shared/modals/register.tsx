'use client';

import axios from 'axios';
import { useCallback, useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import useRegisterModal from '../hooks/useRegisterModal';
import Modal from './modal';
import Heading from '../components/heading';
import Input from '../components/input/input';
import Button from '../components/button/button';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post("/api/register", data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title="Welcome to Airbnb" subtitle='Create an account!' />
            <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} required />
            <Input id='name' label='Name' disabled={isLoading} register={register} errors={errors} required />
            <Input id='password' type='password' label='Password' disabled={isLoading} register={register} errors={errors} required />

        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => { }} />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => { }} />
            <div className='text-neutral-500 text-center mt-4 font-light flex gap-2 justify-center'>
                <div>
                    Already have an account?
                </div>
                <div onClick={registerModal.onClose} className='cursor-pointer text-neutral-800 hover:underline'>
                    Login
                </div>
            </div>

        </div>
    )

    return (
        <Modal
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            title="Register"
            body={bodyContent}
            disabled={isLoading}
            actionLabel='Continue'
            footer={footerContent}
            onSubmit={handleSubmit(onSubmit)}

        />
    )
};

export default RegisterModal;
