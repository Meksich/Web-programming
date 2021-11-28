const BASE_URL = "http://localhost:8081";
const RESOURSE_URL = `${BASE_URL}/ship`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getAllShips = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};

export const postShip = (body) => baseRequest({ method: "POST", body });

export const updateShip = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteShip = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });