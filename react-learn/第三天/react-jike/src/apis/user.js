import { axiosService } from "@/utils";

function loginApi(data) {
    return axiosService({
        url: '/authorizations',
        method: 'POST',
        data: data
    })
}

function getProfileApi() {
    return axiosService({
        url: '/authorizations',
        method: 'GET'
    })
}

export { loginApi, getProfileApi }

