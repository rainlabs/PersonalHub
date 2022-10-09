import React, { createRef, FC } from 'react';
import strapiService from '../../services/strapi.service';
import strapiAuthUtils from '../../utils/strapi.auth.utils';

const StrapiLoginPage: FC = () => {
    let username = createRef<HTMLInputElement>()
    let password = createRef<HTMLInputElement>()

    function onSubmit(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault()

        strapiService.post('/auth/local', {
            identifier: username.current?.value,
            password: password.current?.value
        }).then(response => {
            // console.log(response.data)

            if (response.data.jwt) {
                strapiAuthUtils.setJwtToken(response.data.jwt)
            }
        })
    }

    return (
        <section className="h-full gradient-form bg-gray-200 md:h-screen">
            <div className="container py-12 px-6 h-full mx-auto">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="xl:w-1/2">
                        <div className="block bg-white shadow-lg rounded-lg">
                            <div className="md:p-12 md:mx-6">
                                <div className="text-center">
                                    <img
                                        className="mx-auto w-32"
                                        src="https://super-static-assets.s3.amazonaws.com/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/images/3dda420b-3108-4242-8c17-fa6377327fdb.png"
                                        alt="logo"
                                    />
                                </div>
                                <form>
                                    <p className="mb-4 text-center">Please login to your account</p>
                                    <div className="mb-4">
                                        <input
                                            ref={username}
                                            type="text"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            ref={password}
                                            type="password"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="text-center pt-1 mb-12 pb-1">
                                        <button
                                            onClick={onSubmit}
                                            className="bg-gradient-to-r from-orange-500 via-red-600 to-rose-700 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                            type="button"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                        Log in
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StrapiLoginPage;