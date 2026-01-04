import { AppAxios } from "@/lib/axios.config";



export const handleLoginUser = async (email: string, password: string) => {

    try {
        const response = await AppAxios.instance.post('/v1/yeshtery/token', {
            email,
            password,
            orgId: 2,
            isEmployee: true
        })

        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        return null;
    }

}

export const getUserInfo = async () => {
    try {
        const response = await AppAxios.instance.get('/v1/user/info');
        return response.data;
    } catch (error) {
        console.error("Fetching user info failed:", error);
        return null;
    }
}