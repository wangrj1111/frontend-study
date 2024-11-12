// 封装了对知乎热榜数据的各种请求操作
import api from "./axiosInstance";

import type { HotItem } from "../types/zhihu";


export const FetchHotList = () => api.get<{ data: HotItem[] }>('/hot');

export const addHotItem = (item: Partial<HotItem>) => api.post("/hot",item);

export const updateHotItem = (id:number , updatedItem:Partial<HotItem>) => 
    api.put(`/hot/${id}` , updatedItem);

export const deleteHotItem = (id:number) => api.delete(`/hot/${id}`);