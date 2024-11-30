import { getCookie } from "../utils";

// @TODO Update the event ID
// Test ID: 17974dca-ceff-49a6-a987-d77418dedbec
// Event ID: 78d8a2a8-3422-47e9-aa5d-97426010340e
export const EVENT_ID = "78d8a2a8-3422-47e9-aa5d-97426010340e";
export const VALID_GUESTS_LIST = [];

export enum ECookies {
    ACCESS_TOKEN = 'access_token',
}
/*
    @TOUPDATE
    DEV URL: http://localhost:3030
    PROD URL: https://w3invitations-api-25cf4001559e.herokuapp.com
*/
export const config = {
    url: 'https://w3invitations-api-25cf4001559e.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchApi = async (url: string, method: string, payload?: any): Promise<any> => {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                ...config.headers,
                'Authorization': `Bearer ${getCookie(ECookies.ACCESS_TOKEN) ?? ''}`,
            },
            body: payload ? JSON.stringify(payload) : undefined,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch API error:', error);
        throw error;
    }
};
