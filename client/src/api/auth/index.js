import useApi from "@/hooks/useApi.js";

async function login(payload) {
    try {
        const { data } = await useApi.post("/login", payload);
        return data;
    } catch (error) {
        return error.response;
    }
}

async function register(payload) {
    try {
        const { data } = await useApi.post("/register", payload);
        return data;
    } catch (error) {
        return error.response;
    }
}

async function forgotPassword(payload) {
    try {
        const { data } = await useApi.post("/forgot-password", payload);
        return data;
    } catch (error) {
        return error.response;
    }
}

async function resetPassword(payload) {
    try {
        const { data } = await useApi.post("/reset-password", payload);
        return data;
    } catch (error) {
        return error.response;
    }
}

const authApi = {
    login,
    register,
    forgotPassword,
    resetPassword,
};

export default authApi;