import { TableColumns } from "@/components/TableManageGuests";
import { useMemo } from "react";


export function useAttendeeCounts(data: TableColumns[]) {
    const { guestsAttending, guestsNotAttending } = useMemo(() => {
        let attending = 0;
        let notAttending = 0;

        data.forEach((guest) => {
            if (guest.rsvpAttending === "yes") {
                attending += parseInt(guest.rsvpNumOfAttendees) || 0;
            } else if (guest.rsvpAttending === "no") {
                notAttending += 1 || 0;
            }
        });

        return {
            guestsAttending: attending.toString(),
            guestsNotAttending: notAttending.toString(),
        };
    }, [data]);
    return { guestsAttending, guestsNotAttending };
}
