import axiosInstance from "@src/api/config/AxiosInstance";
import { createRequestURL } from "@src/api/config/requestConfig";
import { getDataAllResponse, getDataImageResponse, getDataLogResponse } from "@src/types/api/bus/get.type";

import { AxiosResponse } from "axios";


export async function getDataAll() {
    const url = createRequestURL(`/data/all`);
    const data: AxiosResponse<getDataAllResponse> =
        await axiosInstance.get(url);
    return data.data
}
export async function getDataLog() {
    const url = createRequestURL(`/data/log`);
    const data: AxiosResponse<getDataLogResponse> =
        await axiosInstance.get(url);
    return data.data
}

export async function getImages() {
    const url = createRequestURL(`/data/images`);
    const data: AxiosResponse<getDataImageResponse> =
        await axiosInstance.get(url);
    return data.data
}
export async function getImagesById(id: string) {
    const url = createRequestURL(`/data/images/${id}`);
    const data: AxiosResponse<File> =
        await axiosInstance.get(url);
    return data.data
}

