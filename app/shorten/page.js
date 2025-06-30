"use client"
import React, { useState, useEffect } from 'react';

const Shortenpage = () => {
    const [url, setUrl] = useState("");
    const [shorturl, setShorturl] = useState("");
    const [generated, setGenerated] = useState(false);
    const [history, setHistory] = useState([]);

    // Fetch history on mount and after changes
    const fetchHistory = () => {
        fetch("/api/history")
            .then(res => res.json())
            .then(data => setHistory(data));
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    const handlechange = (e) => setUrl(e.target.value);

    const generate = (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({ url });

        fetch("/api/generate", {
            method: "POST",
            headers: myHeaders,
            body: raw,
        })
            .then((response) => response.json())
            .then((result) => {
                setGenerated(true);
                setShorturl(result.shorturl || "");
                setUrl("");
                alert("Short URL generated successfully!");
                fetchHistory(); // <-- Add this
                console.log(result)
            })
            .catch((error) => console.error(error));
    };

    const copyToClipboard = () => {
        if (shorturl) {
            navigator.clipboard.writeText(shorturl);
            alert("Short URL copied to clipboard!");
        }
    };

    const deleteUrl = (id) => {
        fetch(`/api/history/${id}`, { method: "DELETE" })
            .then(() => fetchHistory());
    };

    return (
        <div>
            <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <main className="flex  flex-1 justify-center pt-24 pb-10 px-4 sm:px-6 lg:px-8">
                        <div className="layout-content-container flex flex-col w-full max-w-3xl flex-1">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter text-[var(--text-primary)] mb-4">
                                    Shorten Your Links, Amplify Your Reach
                                </h1>
                                <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
                                    Create concise, shareable links in seconds. Perfect for social media, emails, and anywhere you need to save space and track clicks.
                                </p>
                            </div>
                            <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 md:p-10 @container">
                                <form className="flex flex-col gap-6" onSubmit={generate}>
                                    <label className="flex flex-col w-full">
                                        <span className="text-sm font-medium text-[var(--text-secondary)] mb-2">Enter your long URL</span>
                                        <div className="flex w-full flex-1 items-stretch rounded-lg border border-[#dbe1e6] focus-within:ring-2 focus-within:ring-[var(--primary-color)] focus-within:border-[var(--primary-color)] transition-all">
                                            <div className="text-[var(--text-secondary)] flex items-center justify-center pl-4 pr-2">
                                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M136.28,184.28a12,12,0,0,1,0,17l-17,17a12,12,0,0,1-17-17L119,184.24A52,52,0,0,0,46.34,111.66l-17-17a12,12,0,0,1,17-17l17,17A52.18,52.18,0,0,0,115.76,72a12,12,0,0,1,17-17,76.09,76.09,0,0,1,3.52,129.28ZM209.66,46.34a76.09,76.09,0,0,0-107.54,0l-28.28,28.28A76,76,0,0,0,181.38,182.16l17,17a12,12,0,1,0,17-17l-17-17a52.18,52.18,0,0,1-52.42-22.72,12,12,0,0,0-20.48-10.24,11.93,11.93,0,0,0-3.22,8.48,52,52,0,0,1,72.62,72.62l17,17a12,12,0,1,0,17-17l-17-17A76.08,76.08,0,0,0,209.66,46.34Z"></path>
                                                </svg>
                                            </div>
                                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[var(--text-primary)] focus:outline-none focus:ring-0 border-0 bg-transparent h-12 placeholder:text-[var(--text-secondary)] px-0 text-base font-normal leading-normal" placeholder="e.g., https://www.verylonglink.com/with/many/parameters" type="url" value={url} onChange={handlechange} />
                                        </div>
                                    </label>
                                    <button className="flex w-full sm:w-auto sm:self-end min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors" type="submit">
                                        <span className="truncate">Shorten URL</span>
                                    </button>
                                </form>

                                {generated && shorturl && (
                                    <div className="mt-8 pt-8 border-t border-[var(--secondary-color)]" id="result-section">
                                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">Your Shortened Link:</h3>
                                        <div className="flex items-center gap-3 p-4 bg-[var(--secondary-color)] rounded-lg text-black">
                                            <a className="text-[var(--primary-color)] font-medium break-all" href={shorturl} target="_blank" rel="noopener noreferrer">
                                                {shorturl}
                                            </a>
                                            <button className="ml-auto p-2 rounded-md hover:bg-gray-200 transition-colors" onClick={copyToClipboard} id="copy-button" title="Copy to clipboard">
                                                <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="text-xs text-[var(--text-secondary)] mt-2">This link will expire in 30 days.</p>
                                    </div>
                                )}
                            </div>
                            <div className="mt-12">
                                <div className="flex flex-wrap justify-between items-center gap-4 py-4 mb-6">
                                    <h1 className="text-[var(--text-primary)] tracking-tight text-3xl font-bold leading-tight">Link History</h1>
                                </div>
                                <div className="overflow-x-auto @container bg-white rounded-lg shadow-md border border-[var(--border-color)]">
                                    <table className="w-full min-w-[800px]">
                                        <thead className="bg-slate-50">
                                            <tr className="border-b border-[var(--border-color)]">
                                                <th className="px-6 py-4 text-left text-[var(--text-secondary)] text-xs font-medium uppercase tracking-wider">Original Link</th>
                                                <th className="px-6 py-4 text-left text-[var(--text-secondary)] text-xs font-medium uppercase tracking-wider">Shortened Link</th>
                                                <th className="px-6 py-4 text-left text-[var(--text-secondary)] text-xs font-medium uppercase tracking-wider">Date & Time </th>
                                                <th className="px-6 py-4 text-left text-[var(--text-secondary)] text-xs font-medium uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-[var(--border-color)]">
                                            {history.map((item) => (
                                                <tr key={item._id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-[var(--text-primary)] text-sm font-normal max-w-xs truncate hover:underline cursor-pointer" title={item.url}>
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                        <a className="text-[var(--primary-color)] hover:underline cursor-pointer" href={item.shorturl} target="_blank" rel="noopener noreferrer">{item.shorturl}</a>
                                                        <button
                                                            className="p-1 rounded hover:bg-gray-200 transition-colors cursor-pointer"
                                                            title="Copy to clipboard"
                                                            type="button"
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(item.shorturl);
                                                                alert("Short URL copied to clipboard!");
                                                            }}
                                                        >
                                                            <svg fill="currentColor" height="16" viewBox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                                                            </svg>
                                                        </button>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">
                                                        {item.createdAt ? new Date(item.createdAt).toLocaleString() : ""}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                        <button className="text-red-500 hover:text-red-700 transition-colors cursor-pointer" onClick={() => deleteUrl(item._id)}>
                                                            <svg fill="currentColor" height="18" viewBox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors cursor-pointer"
                                        onClick={async () => {
                                            if (window.confirm("Are you sure you want to clear all history?")) {
                                                await fetch("/api/history", { method: "DELETE" });
                                                fetchHistory();
                                            }
                                        }}
                                    >
                                        Clear History
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                    <section className='mb-6 m-2'>
                        <div className="bg-green-100 border-l-4 border-green-400 text-green-800 p-4 rounded-lg max-w-2xl mx-auto text-center">
                             The <span className="font-semibold">Short URL Generator</span> is fully functional! You can shorten links, view your link history, copy short URLs, and delete them as needed. 
                        </div>
                    </section>
            </div>
        </div >
    )
}

export default Shortenpage
