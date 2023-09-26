import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authApiSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Registration = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [registerUser, { data, isLoading, isSuccess, error }] =
        useRegisterUserMutation();

    console.log({ error })

    const onSubmit = data => {
        console.log({ data })
        const privateUrl = '44c26384eae4023f6064cf342eee9294'
        const formData = new FormData()
        formData.append("image", data?.image[0])

        fetch(`https://api.imgbb.com/1/upload?key=${privateUrl}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const postInfo = {
                    name: data.name,
                    email: data.email,
                    phoneNo: data.phoneNo,
                    password: data.password,
                    birthday: data.birthday,
                    role: data?.role,
                    image: result?.data?.url || ""
                }
                registerUser(postInfo)
                reset()
            })

    }

    useEffect(() => {

        if (isSuccess) {
            navigate('/login')
            toast("check email to verify your email")
        }
    }, [isLoading])

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-1/2  ">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Name
                        </label>
                        <input {...register("name", { required: { value: true, message: "name is required" } })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="enter your name" />

                        {errors.name?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Email
                        </label>
                        <input {...register("email", { required: { value: true, message: "email is required" } })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="enter your email" />

                        {errors.email?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Password
                        </label>
                        <input {...register("password", { required: { value: true, message: "password field is required" } })} className="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

                        {errors.password?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Phone NO
                        </label>
                        <input {...register("phoneNo", { required: { value: true, message: "phone number is required" } })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="enter your phoneNumber" />

                        {errors.phoneNo?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.phoneNo.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Birthday
                        </label>
                        <input {...register("birthday", { required: { value: true, message: "birthday is required" } })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="date" placeholder="date of birth" />

                        {errors.birthday?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.birthday.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            User Role
                        </label>
                        <input {...register("role")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="user role" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Image
                        </label>
                        <input {...register("image", { required: { value: true, message: "image is required" } })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="file" accept="image/*" />

                        {errors.image?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.image.message}</p>}
                    </div>


                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sing Up
                        </button>
                        <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                            login?
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Registration;