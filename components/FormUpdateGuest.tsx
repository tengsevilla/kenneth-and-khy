"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TableColumns } from "./TableManageGuests";
import { updateGuestRSVP } from "@/lib/model/useGuestAPI";

const formSchema = z.object({
    rsvpGuest: z.string().min(1, "Name is required"),
    rsvpAttending: z.string().min(1, "Attending status is required"),
    rsvpNumOfAttendees: z
        .string()
        .regex(/^\d+$/, "Please enter a valid number")
        .optional(),
});

export function FormUpdateGuest({ guest, onSubmitted }: { guest: TableColumns, onSubmitted: (updatedData: TableColumns) => void }) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            rsvpGuest: guest.rsvpGuest || "",
            rsvpAttending: guest.rsvpAttending || "",
            rsvpNumOfAttendees: guest.rsvpNumOfAttendees || "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        const payload: TableColumns = { ...values, rsvpId: guest.rsvpId, rsvpNumOfAttendees: values.rsvpNumOfAttendees ?? "0" };
        await updateGuestRSVP({ ...payload, rsvpContact: "" }).then(() => {
            onSubmitted(payload);
        });
        setIsLoading(false);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4 p-2 border rounded-md"
            >
                {/* Title */}
                <div className="space-y-2">
                    <div className="font-medium text-lg leading-none">Update Guest</div>
                </div>

                {/* Form Fields */}
                <div className="grid gap-2">
                    {/* Attending Field */}
                    <FormField
                        control={form.control}
                        name="rsvpAttending"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-3 items-center gap-4">
                                <FormLabel>Attending</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex gap-4"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id="yes" />
                                            <label htmlFor="yes" className="text-sm">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id="no" />
                                            <label htmlFor="no" className="text-sm">
                                                No
                                            </label>
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Name Field */}
                    <FormField
                        control={form.control}
                        name="rsvpGuest"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-3 items-center gap-4">
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <FormControl>
                                    <Input id="name" {...field} className="col-span-2 h-8 bg-muted" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Num of Attendees Field */}
                    <FormField
                        control={form.control}
                        name="rsvpNumOfAttendees"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-3 items-center gap-4">
                                <FormLabel htmlFor="numOfAttendees">Num of Attendees (including guest)</FormLabel>
                                <FormControl>
                                    <Input
                                        id="numOfAttendees"
                                        {...field}
                                        className="col-span-2 h-8 bg-muted"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full" isLoading={isLoading}>
                    Submit
                </Button>
            </form>
        </Form>
    );
}
