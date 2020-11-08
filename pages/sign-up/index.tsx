import Link from 'next/link'
import { useForm } from 'react-hook-form'

import GuessLayout from '../../components/layout/guess'

const SignUpPage = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any) => console.log(values);

  return (
    <GuessLayout title="Sign In">
      <h1 className="text-center text-4xl mb-10 w-full">
        Create an account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-5">
          <input
            type="text"
            className="
              border
              border-gray-400
              rounded
              w-full
              h-12
              px-3
              py-4
              focus:outline-none
              focus:border-pink-400
            "
            placeholder="Email"
            name="email"
            ref={register({
              required: "The email field is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address."
              }
            })}
          />

          <div className="text-red-600 mt-2 text-sm">
            {errors.email && errors.email.message}
          </div>
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            ref={register({
              required: "The full name field is required."
            })}
            className="
              border
              border-gray-400
              rounded
              w-full
              h-12
              px-3
              py-4
              focus:outline-none
              focus:border-pink-400
            "
          />

          <div className="text-red-600 mt-2 text-sm">
            {errors.fullName && errors.fullName.message}
          </div>
        </div>

        <div className="mb-5">
          <input
            type="password"
            className="
              border
              border-gray-400
              rounded
              w-full
              h-12
              px-3
              py-4
              focus:outline-none
              focus:border-pink-400
            "
            placeholder="Password"
            name="password"
            ref={register({
              required: "The password field is required."
            })}
          />

          <div className="text-red-600 mt-2 text-sm">
            {errors.password && errors.password.message}
          </div>
        </div>

        <div className="text-gray-600 mb-5 text-sm">
          Already have an account?

          <Link href='/'>
            <a className="
              ml-1
              text-pink-400
              hover:text-pink-500
              focus:text-pink-600
            ">Sign In</a>
          </Link>
        </div>

        <button
          type="submit"
          className="
            bg-pink-400
            hover:bg-pink-500
            focus:outline-none
            focus:bg-pink-600
            h-12
            rounded
            text-white
            w-full
            transition
            duration-150
            ease-linear
            text-center
          "
        >Submit</button>
      </form>
    </GuessLayout>
  )
}

export default SignUpPage
