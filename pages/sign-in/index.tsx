import { useForm } from 'react-hook-form'

import GuessLayout from '../../components/layout/guess'

const SignInPage = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any) => console.log(values);

  return (
    <GuessLayout title="Sign In">
      <div className="w-1/4 mx-auto h-screen flex content-center flex-wrap -mt-32">
        <h1 className="text-center text-4xl mb-10 w-full">Sign In</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mb-5">
            <input
              type="text"
              className="
                border
                border-gray-400
                rounded
                w-full
                h-10
                p-3
                focus:outline-none
                focus:border-blue-600
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

            <div className="text-red-600 mt-2">
              {errors.email && errors.email.message}
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
                h-10
                p-3
                focus:outline-none
                focus:border-blue-600
              "
              placeholder="Password"
              name="password"
              ref={register({
                required: "The password field is required."
              })}
            />

            <div className="text-red-600 mt-2">
              {errors.password && errors.password.message}
            </div>
          </div>

          <button
            type="submit"
            className="
              bg-blue-500
              hover:bg-blue-600
              focus:outline-none
              focus:bg-blue-700
              py-2
              px-5
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
      </div>
    </GuessLayout>
  )
}

export default SignInPage
