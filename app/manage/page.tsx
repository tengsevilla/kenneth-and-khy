"use client"

import { TableColumns, TableManageGuests } from "@/components/TableManageGuests";
import { useAttendeeCounts } from "@/hooks/useAttendeesCount";
import { ECookies, /*EVENT_ID*/ } from "@/lib/model";
// import { fetchEvent } from "@/lib/model/useEventAPI";
// import { getAllGuestRSVP } from "@/lib/model/useGuestAPI";
import { getCookie, /*setCookie*/ } from "@/lib/utils";
import React from "react";

export default function Manage() {
    const [data, setData] = React.useState<TableColumns[]>([])
    // const [guestsAttending, setGuestsAttending] = React.useState<number>(0);
    // const [guestsNotAttending, setGuestsNotAttending] = React.useState<number>(0);
    const [isFetching, setIsFetching] = React.useState<boolean>(false);
    const { guestsAttending, guestsNotAttending } = useAttendeeCounts(data);
    // const accessToken = getCookie(ECookies.ACCESS_TOKEN);
    const [accessToken, setAccessToken] = React.useState<string | undefined>(getCookie(ECookies.ACCESS_TOKEN));

    React.useEffect(() => {

        // @Note: disabled.
        // const fetchData = async () => {
        //     setIsFetching(true); // Start fetching
        //     try {
        //         const res = await getAllGuestRSVP();
        //         setData(res.data);
        //     } catch (error) {
        //         console.error("Error fetching RSVP data:", error);
        //     } finally {
        //         setIsFetching(false); // Done fetching
        //     }
        // };

        // if (!accessToken) {
        //     try {
        //         fetchEvent(EVENT_ID)
        //             .then((response) => {
        //                 setCookie(ECookies.ACCESS_TOKEN, response.access_token, response.expiresIn);
        //                 setAccessToken(response.access_token);
        //             });
        //         console.info("Fetching cookies...");
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // } else {
        //     fetchData();
        //     console.info("App is ready! Cookies are set.");
        // }
        setAccessToken("1234567890");
        setIsFetching(false);
    }, [accessToken]);

    return (
        <div className="flex flex-1 flex-col gap-4 p-8" style={{ maxWidth: '100vw' }}>
            <div className="text-2xl font-bold text-primary">
                Manage Guests
            </div>
            <div>
                <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                    <div className="text-lg">Total Respondents: {data.length}</div>
                    <div className="text-lg">Attending: {guestsAttending}</div>
                    <div className="text-lg">Not Attending: {guestsNotAttending}</div>
                </div>
            </div>

            <TableManageGuests
                data={data}
                isFetching={isFetching}
                onUpdate={(updatedGuest) => {
                    setData((prevData: TableColumns[]) =>
                        prevData.map((item) =>
                            item.rsvpId === updatedGuest.rsvpId ? updatedGuest : item
                        )
                    );
                }}
            />
        </div>

    )
}