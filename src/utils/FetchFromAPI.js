import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';

const options = {
    params: {
        /* part: 'snippet',
        videoId: 'M7FIvfx5J10', */
        maxResults: '50'
    },
    headers: {
        /* 'X-RapidAPI-Key': 'c8a42e4734mshd8a3fa3018a4094p1ff31cjsndf003e485402', */
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

    try {
        const response = await axios.request(options);
        console.log(response.data);
} catch (error) {
        console.error(error);
}

export const fetchFromApi = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}