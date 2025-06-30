"use client"
import React from 'react'

const Contact = () => {
    return (
        <div className='layout-container flex flex-col h-full grow '>

            <main className="flex-1 bg-[var(--secondary-color)] py-16 px-6 sm:px-10">
                <div className="mx-auto max-w-3xl">
                    <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">Get in Touch</h2>
                            <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)]">
                                We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                            </p>
                        </div>
                        <form className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5" htmlFor="name">Full Name</label>
                                <input className="form-input block w-full rounded-lg border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm py-3 px-4 placeholder:text-gray-400" id="name" name="name" placeholder="e.g. John Doe" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5" htmlFor="email">Email Address</label>
                                <input className="form-input block w-full rounded-lg border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm py-3 px-4 placeholder:text-gray-400" id="email" name="email" placeholder="you@example.com" type="email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5" htmlFor="subject">Subject</label>
                                <input className="form-input block w-full rounded-lg border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm py-3 px-4 placeholder:text-gray-400" id="subject" name="subject" placeholder="How can we help?" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5" htmlFor="message">Message</label>
                                <textarea className="form-textarea block w-full rounded-lg border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm py-3 px-4 placeholder:text-gray-400" id="message" name="message" placeholder="Your message..." rows="5"></textarea>
                            </div>
                            <div>
                                <button className="flex w-full items-center justify-center rounded-lg py-3 px-4 bg-[var(--primary-color)] text-white text-base font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 transition-colors cursor-pointer" type="submit">
                                    Send Message
                                    <span className="material-icons-outlined ml-2 text-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                                            <path d="M9.49811 15L16.9981 7.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M8.00634 7.67888L15.327 4.21881C18.3688 2.78111 19.8897 2.06226 20.8598 2.78341C21.8299 3.50455 21.5527 5.14799 20.9984 8.43486L20.0435 14.0968C19.6811 16.246 19.4998 17.3205 18.6989 17.7891C17.8979 18.2577 16.8574 17.8978 14.7765 17.178L8.41077 14.9762C4.51917 13.6301 2.57337 12.9571 2.50019 11.6365C2.427 10.3159 4.28678 9.43692 8.00634 7.67888Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.49811 15.5V17.7274C9.49811 20.101 9.49811 21.2878 10.2083 21.4771C10.9185 21.6663 11.6664 20.6789 13.1622 18.7039L13.9981 17.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                        <div className="mt-12 border-t border-gray-200 pt-8">
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Other ways to connect</h3>
                            <div className="flex items-center text-[var(--text-secondary)]">
                                <span className="material-icons-outlined mr-3 text-xl text-[var(--primary-color)]">email</span>
                                <a className="hover:text-[var(--primary-color)] transition-colors" href="mailto:kshitizsh.8@gmail.com">kshitizsh.8@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="w-auto m-2 ">
                <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-lg max-w-2xl mx-auto text-center mb-4">
                    <strong>Notice:</strong> The <span className="font-semibold">Contact</span> features are not functional yet, as there is no backend implemented for these pages. They are for demonstration only. Contact me throw my <a href="https://github.com/codzhorizon" className="font-semibold text-[var(--primary-color)] hover:text-[var(--primary-hover-color)] transition-colors cursor-pointer">Github Link</a>.
                </div>
            </section>
        </div>
    )
}

export default Contact
