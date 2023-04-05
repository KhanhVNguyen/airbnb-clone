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
        </div>
    )
    return (
        <Modal
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            title="Register"
            body={bodyContent}
            disabled={isLoading}
            actionLabel='Continue'
        />
    )
};

export default RegisterModal;