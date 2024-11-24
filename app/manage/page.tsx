"use client"

import { TableColumns, TableManageGuests } from "@/components/TableManageGuests";
import { useAttendeeCounts } from "@/hooks/useAttendeesCount";
import { getAllGuestRSVP } from "@/lib/model/useGuestAPI";
import React from "react";

export default function Manage() {
    const [data, setData] = React.useState<TableColumns[]>([])
    // const [guestsAttending, setGuestsAttending] = React.useState<number>(0);
    // const [guestsNotAttending, setGuestsNotAttending] = React.useState<number>(0);
    const [isFetching, setIsFetching] = React.useState<boolean>(false);
    const { guestsAttending, guestsNotAttending } = useAttendeeCounts(data);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true); // Start fetching
            try {
                const res = await getAllGuestRSVP();
                setData(res.data);
            } catch (error) {
                console.error("Error fetching RSVP data:", error);
            } finally {
                setIsFetching(false); // Done fetching
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-1 flex-col gap-4 p-8" style={{ maxWidth: '100vw' }}>
            <div className="text-2xl font-bold text-primary">
                Manage Guests
            </div>
            <div>
                <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                    <div className="text-lg">Total Respondents: {data.length}</div>
                    <div className="text-lg">Total Attending: {guestsAttending}</div>
                    <div className="text-lg">Total Not Attending: {guestsNotAttending}</div>
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