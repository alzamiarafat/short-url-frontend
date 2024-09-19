import { useState } from 'react'
import { generator } from '../services/api.service';

const Home = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    async function handleShorten() {
        const data = { original_url: originalUrl };
        const url = await generator(data);
        setShortUrl(url.data.short_url)
    }

    function copy() {
        navigator.clipboard.writeText(shortUrl)
    }

    return (
        <div>
            {/* <h1>Short URL</h1>
            <h1>Paste the URL to be shortened</h1> */}
            <input value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)}></input>
            <button onClick={handleShorten}>SUBMIT</button>

            <button onClick={() => copy()}>
                copy
            </button>
        </div>
    );
};

export default Home;