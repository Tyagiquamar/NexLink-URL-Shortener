import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-1 flex-col'>

      <section className="  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-cover bg-center bg-no-repeat py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10 text-center ">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter">
              Shorten Your Links, Expand Your Reach
            </h1>
            <p className="mt-6 text-white/90 text-lg sm:text-xl font-normal leading-relaxed">
              NexLink is the simplest way to create short, memorable, and trackable links. Perfect for sharing on social media, email, or anywhere you need to save space.
            </p>
          </div>
          <div className="mt-10 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="min-w-[160px] sm:min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 sm:h-16 px-6 bg-[var(--primary-color)] text-white text-base sm:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
              <Link href="/shorten" className="truncate">Try Now</Link>
            </button>
            <button className="min-w-[160px] sm:min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 sm:h-16 px-6 bg-white text-[var(--primary-color)] text-base sm:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors">
              <Link href="/Login" className="truncate">Sign Up</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-[var(--background-light)]">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-[var(--text-primary)] text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
              Why Choose NexLink?
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
              We offer a simple, fast, and reliable URL shortening service with powerful features to help you manage your links effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 rounded-xl border border-[var(--border-light)] bg-[var(--background-white)] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-[var(--primary-color)] size-8">
                <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] text-lg font-bold leading-tight">Simple &amp; Fast Shortening</h3>
                <p className="mt-2 text-[var(--text-secondary)] text-sm font-normal leading-relaxed">
                  Instantly shorten long URLs into neat, manageable links with a single click. No complex steps, just quick results.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-[var(--border-light)] bg-[var(--background-white)] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-[var(--primary-color)] size-8">
                <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] text-lg font-bold leading-tight">Link Analytics</h3>
                <p className="mt-2 text-[var(--text-secondary)] text-sm font-normal leading-relaxed">
                  Track the performance of your shortened links with detailed analytics, including click counts, geographic data, and referrers.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-[var(--border-light)] bg-[var(--background-white)] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-[var(--primary-color)] size-8">
                <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M208,88H152a8,8,0,0,1-8-8V24a8,8,0,0,0-13.66-5.66L26.34,122.34A8,8,0,0,0,32,136H88a8,8,0,0,1,8,8v56a8,8,0,0,0,13.66,5.66L213.66,93.66A8,8,0,0,0,208,88Zm-56,36.49V160L42.34,136H88v-3.51L112,108.83v-24L201.66,88H152Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] text-lg font-bold leading-tight">Easy Sharing</h3>
                <p className="mt-2 text-[var(--text-secondary)] text-sm font-normal leading-relaxed">
                  Effortlessly copy and share your shortened links across social media, emails, messages, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-[var(--background-white)]">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-[var(--text-primary)] text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">Join thousands of users who trust NexLink for their link management needs. Sign up today and start shortening!</p>
            <div className="mt-8">
              <button className="min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[var(--primary-color)] text-white text-base sm:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <Link href="/Login" className="truncate">Create Your Free Account</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </main>

  );
}
