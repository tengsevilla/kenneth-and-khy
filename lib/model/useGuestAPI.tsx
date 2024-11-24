import { generateGUIDV7 } from '../utils';
import { fetchApi, config, EVENT_ID } from './index';

export interface IGuest {
    rsvpGuest: string,
    rsvpContact?: string
    rsvpAttending: string,
    rsvpNumOfAttendees: string | undefined,
}

export const getAllGuestRSVP = async () => {
    return await fetchApi(`${config.url}/rsvp/${EVENT_ID}`, 'GET');
};

export const createGuestRSVP = async (data: IGuest) => {
    return await fetchApi(`${config.url}/rsvp`, 'POST', { eventId: EVENT_ID, rsvpId: generateGUIDV7(), ...data });
};

export const updateGuestRSVP = async (data: IGuest) => {
    return await fetchApi(`${config.url}/rsvp`, 'PUT', { ...data });
};