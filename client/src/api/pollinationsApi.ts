import axios, { AxiosInstance } from "axios"

const pollinationsBaseUrl = "https://enter.pollinations.ai"

const instance: AxiosInstance = axios.create({
    baseURL: pollinationsBaseUrl,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "sk_9jsxzXcPVPjHYZAI8cC8NUCApWZzGmFJ"
    },
})

export default instance


