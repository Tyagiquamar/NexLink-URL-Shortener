import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[var(--text-primary)] text-white/80">
                <div className="container mx-auto px-6 lg:px-10 py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="logo-font text-white text-2xl font-bold mb-3">
                                <span className="text-[var(--primary-color)]">
                                    Nex
                                </span>
                                Link
                            </h4>
                            <p className="text-sm leading-relaxed">The simplest way to shorten, share, and track your links.</p>
                        </div>
                        <div>
                            <h5 className="text-white font-medium mb-3">Quick Links</h5>
                            <ul className="space-y-2 text-sm">
                                <li><Link className="hover:text-white transition-colors cursor-pointer" href="/about">Features</Link></li>
                                <li><Link className="hover:text-white transition-colors cursor-pointer" href="/Login">Sign Up</Link></li>
                                <li><Link className="hover:text-white transition-colors cursor-pointer" href="/Login">Login</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-medium mb-3">Resources</h5>
                            <ul className="space-y-2 text-sm">
                                <li><Link className="hover:text-white transition-colors cursor-pointer" href="/contact">Help Center</Link></li>
                                <li><a className="hover:text-white transition-colors cursor-pointer" href="https://github.com/CodzHorizon" target='_blank'>GitHub</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-medium mb-3">Legal</h5>
                            <ul className="space-y-2 text-sm">
                                <li><Link className="hover:text-white transition-colors cursor-pointer" href="/privacypolicy">Terms of Service</Link></li>
                                <li><Link className="hover:text-white transition-colors cursor-pointer" href="/privacypolicy">Privacy Policy</Link></li>
                                <li><Link className="hover:text-white transition-colors cursor-pointer" href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
                        <p>© 2024 NexLink. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 sm:mt-0">
                            <a aria-label="GitHub" className="flex items-center hover:text-white transition-colors cursor-pointer" href="https://github.com/CodzHorizon" target='_blank'>
                            <p className='text-xs  mr-1.5 hover:underline'>Made By CodzHorizon -</p>
                                <svg fill="currentColor" height="18px" viewBox="0 0 24 24" width="18px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.304.763-1.604-2.665-.3-5.467-1.334-5.467-5.933 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.63-5.475 5.922.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.8.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                                </svg>
                            </a>
                            <a aria-label="Twitter" className="hover:text-white transition-colors cursor-pointer" href="#">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                                </svg>
                            </a>
                            <a aria-label="Facebook" className="hover:text-white transition-colors cursor-pointer" href="#">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                                </svg>
                            </a>
                            <a aria-label="Instagram" className="hover:text-white transition-colors cursor-pointer" href="#">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
