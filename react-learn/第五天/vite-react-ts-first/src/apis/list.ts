import { axiosService } from '@/utils'
import type { ResType } from './shared'

type ChannelItem = {
    id: number,
    name: string
}

type ChannelRes = {
    channels: ChannelItem[]
}

function fetchChannelList() {
    return axiosService.request<ResType<ChannelRes>>({
        url: '/channels'
    })
}

export { fetchChannelList }

