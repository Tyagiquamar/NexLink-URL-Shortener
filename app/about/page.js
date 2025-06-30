"use client"
import React from 'react'


const About = () => {
    return (
        <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">

                <main className="flex flex-1 justify-center py-12 sm:py-16 px-6 sm:px-10">
                    <div className="layout-content-container flex max-w-4xl flex-1 flex-col items-center">
                        <section className="w-full text-center mb-12">
                            <h1 className="text-[var(--text-primary)] text-3xl font-bold leading-tight tracking-tight mb-4 text-center">About NexLink</h1>
                            <p className="text-[var(--text-secondary)] text-base font-normal leading-relaxed mb-6 max-w-2xl mx-auto">
                                NexLink is a modern URL shortening service dedicated to making links shorter, smarter, and more shareable. We believe in simplifying the way you connect with the world, one tiny link at a time.
                            </p>
                        </section>
                        
                        <section className="w-full mb-12">
                            <h2 className="text-[var(--text-primary)] text-2xl font-bold leading-tight tracking-tight mb-3 text-center">Our Mission</h2>
                            <p className="text-[var(--text-secondary)] text-base font-normal leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                                Our mission is to empower individuals and businesses by providing a reliable, user-friendly, and feature-rich platform for managing and tracking links. We strive to enhance online interactions and make information sharing seamless and efficient.
                            </p>
                        </section>
                        <section className="w-full">
                            <h2 className="text-[var(--text-primary)] text-2xl font-bold leading-tight tracking-tight  text-center mb-8">Key Features</h2>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="flex flex-1 flex-col gap-4 rounded-xl border border-[var(--border-light)] bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-[var(--primary-color)] w-8 h-8">
                                        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="feature-title">Customizable Short Links</h3>
                                        <p className="feature-description">Tailor your short links to reflect your brand or content, making them more memorable and trustworthy.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-4 rounded-xl border border-[var(--border-light)] bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-[var(--primary-color)] w-8 h-8">
                                        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="feature-title">Advanced Analytics</h3>
                                        <p className="feature-description">Gain valuable insights by tracking clicks, geographic locations, referrers, and more for each link.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-4 rounded-xl border border-[var(--border-light)] bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-[var(--primary-color)] w-8 h-8">
                                        <svg fill="currentColor" height="100%" viewBox="0 0 256 256" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-[var(--text-primary)] text-lg font-semibold leading-tight">Secure &amp; Reliable</h3>
                                        <p className="text-[var(--text-secondary)] text-sm font-normal leading-normal">Our robust infrastructure ensures your links are always active, protected, and redirecting smoothly.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

            </div>
        </div>
    )
}

export default About
