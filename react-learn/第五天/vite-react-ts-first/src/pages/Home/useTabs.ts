import { useEffect, useState } from 'react';
import type { ChannelItem } from '@/apis/list';
import { fetchChannelListAPI } from '@/apis/list';

function useTabs() {
    const [channels, setChannels] = useState<ChannelItem[]>([])

    useEffect(() => {
        const getChannelList = async () => {
            const res = await fetchChannelListAPI()
            console.log(res);
            // console.log(res.data.data.channels);
            setChannels(res.data.channels)
        }
        getChannelList()
    }, [])

    return {
        channels
    }
}

export default useTabs

