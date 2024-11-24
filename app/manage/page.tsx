import { TableManageGuests } from "@/components/TableManageGuests";

export default function Manage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-8" style={{ maxWidth: '100vw' }}>
            <div className="text-2xl font-bold text-primary">
                Manage Guests
            </div>

            <TableManageGuests />
        </div>

    )
}