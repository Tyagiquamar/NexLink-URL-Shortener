"use client"
import React from 'react'

const Login = () => {
    return (
        <div>
            <main className="flex flex-col flex-1 items-center justify-center py-10 sm:py-16 md:py-20">
                <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-xl shadow-xl">
                    <h2 className="text-[var(--text-primary)] text-center text-3xl font-bold tracking-tight mb-8">Create your account</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="sr-only" htmlFor="email">Email address</label>
                            <input autoComplete="email" className="form-input block w-full rounded-lg border-gray-300 bg-gray-50 h-12 px-4 text-base text-[var(--text-primary)] placeholder:text-gray-400 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] shadow-sm" id="email" name="email" placeholder="Email address" required="" type="email" />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="password">Password</label>
                            <input autoComplete="current-password" className="form-input block w-full rounded-lg border-gray-300 bg-gray-50 h-12 px-4 text-base text-[var(--text-primary)] placeholder:text-gray-400 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] shadow-sm" id="password" name="password" placeholder="Password" required="" type="password" />
                        </div>
                        <div>
                            <button className="flex w-full justify-center items-center cursor-pointer rounded-lg bg-[var(--primary-color)] h-12 px-4 text-[var(--text-on-primary)] text-base font-semibold shadow-sm hover:bg-[var(--primary-hover-color)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] transition-colors" type="submit">
                                Create Account
                            </button>
                        </div>
                    </form>
                    <p className="mt-8 text-center text-sm text-[var(--text-secondary)]">
                        Already have an account?
                        <a className="font-semibold text-[var(--primary-color)] hover:text-[var(--primary-hover-color)] transition-colors" href="#">
                            Log In
                        </a>
                    </p>
                    <div className="relative mt-8">
                        <div aria-hidden="true" className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-4">
                        <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] transition-colors" type="button">
                            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.145 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.602-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.942 0-1.091.39-1.984 1.029-2.685-.103-.253-.446-1.27.098-2.649 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.396.099 2.649.64.701 1.028 1.594 1.028 2.685 0 3.839-2.338 4.685-4.568 4.935.359.308.678.922.678 1.857 0 1.338-.012 2.419-.012 2.746 0 .268.18.578.688.48A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z"></path>
                            </svg>
                            <span className="truncate">GitHub</span>
                        </button>
                    </div>
                </div>
                <section className="w-auto mt-8 mx-2">
                <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-lg max-w-2xl mx-auto text-center mb-4">
                    <strong>Notice:</strong> The <span className="font-semibold">Sign Up</span> and <span className="font-semibold">Login</span> features are not functional yet, as there is no backend implemented for these pages. They are for demonstration only.
                </div>
            </section>
            </main>
        </div>
    )
}

export default Login
