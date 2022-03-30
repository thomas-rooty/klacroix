const playlistId = "PLxciBEPqAP_wxq-FH02Cgz5X9qYH_h_2u";
const YOUTUBE_PLAYLIST_ITEMS_API = "https://youtube.googleapis.com/youtube/v3/playlistItems";
const YOUTUBE_API_KEY= 'AIzaSyBDvR7rkf6CQFV_AsQ-4aB3r2iFeYbvsgM';

export const getPlaylistItems = async () => {
    const response = await fetch(
        `${YOUTUBE_PLAYLIST_ITEMS_API}?playlistId=${playlistId}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails&maxResults=50`
    );
    const data = await response.json();
    return {
        props: {
            data
        }
    }
};

export const getVideoThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};