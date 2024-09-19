import { useState } from 'react'
import { generator } from '../services/api.service';
import { toast, Toaster, ToastBar } from 'react-hot-toast';

const Home = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [isShowShortUrl, setIsShowShortUrl] = useState(false);

    async function handleShorten() {
        const data = { original_url: originalUrl };
        const url = await generator(data);
        setShortUrl(url.data.short_url);
        setIsShowShortUrl(true);
    }

    function copy() {
        navigator.clipboard.writeText(shortUrl);
        toast.success('URl Copied!')
    }

    return (
        <div className='bg-indigo-900 h-screen'>
            <h1 className="text-5xl text-center font-medium pt-14 text-white dark:text-white">URL Shortener</h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h1 className="text-3xl text-center font-medium text-gray-900 dark:text-white">Paste the URL to be shortened</h1>
                    <form className="max-w-2xl mt-5 mx-auto">
                        <div className="relative">
                            <input type="text" name='original_url' className="block w-full p-4 ps-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} placeholder="Enter link here... " required />
                            <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={handleShorten}>Shorten URL</button>
                        </div>
                    </form>
                </div>
            </div>
            {isShowShortUrl ? <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-5 text-blue-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                        <div class="flex justify-around">
                            <span class="font-medium">{shortUrl}</span>
                            <button class="font-medium" onClick={() => copy()}>Copy</button>
                            <button type="button" data-dismiss-target="#toast-success" aria-label="Close" onClick={() => setIsShowShortUrl(false)}>
                                <span class="sr-only">Close</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div> : ''}

            <Toaster />
        </div>
    );
};

export default Home;