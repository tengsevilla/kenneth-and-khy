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
import { RadioGroup, RadioGroupItem } from "./ui/radio-group-inverted";
import { DialogConfirmed } from "./DialogConfirmed";
import { createGuestRSVP, IGuest } from "@/lib/model/useGuestAPI";

const formSchema = z.object({
    rsvpAttending: z.string().min(1, "This field is required"),
    rsvpGuest: z.string().min(1, "Please enter your name"),
    rsvpNumOfAttendees: z
        .string()
        .regex(/^\d+$/, "Please enter a valid number")
        .max(2, "Max of 2 digits allowed")
        .optional(),
});

export default function FormRSVP() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            rsvpAttending: "",
            rsvpGuest: "",
            rsvpNumOfAttendees: "1",
        },
    });
    const isAttending = form.watch("rsvpAttending");
    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            const payload: IGuest = {
                rsvpGuest: values.rsvpGuest,
                rsvpContact: '',
                rsvpAttending: values.rsvpAttending,
                rsvpNumOfAttendees: (isAttending === "yes") ? values.rsvpNumOfAttendees ?? "0" : "0",
            };
            createGuestRSVP(payload).then((response) => {
                if (response.status === 200) {
                    setIsOpen(true);
                }
            });
        } catch (error) {
            console.error("Error submitting data:", error);
        } finally {
            setIsLoading(false);
        }

    }

    const closeConfirmDialog = () => {
        setIsOpen(false);
        form.reset();
        window.location.href = "/";
    };

    return (
        <div className="max-w-lg mx-auto">
            <div className="font-script text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                Please Response
            </div>
            <div className="my-8 text-center">
                <div className="text-xs md:text-sm lg:text-md xl:text-md mb-2">
                    If you happen to recieve this invite.
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md mb-2">
                    We have reserved seat/s for you.
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md">
                    A favor of response is requested
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md">
                    on or before (DATE)
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* RSVP Confirmation */}
                    <FormField
                        control={form.control}
                        name="rsvpAttending"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Will you be attending the wedding?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex space-x-4" // Horizontal layout
                                    >
                                        <RadioGroupItem value="yes" id="yes" />
                                        <label htmlFor="yes" className="text-sm">
                                            Yes
                                        </label>
                                        <RadioGroupItem value="no" id="no" />
                                        <label htmlFor="no" className="text-sm">
                                            No
                                        </label>
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
                            <FormItem>
                                <FormLabel>Name:</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Number of Attendees */}
                    {
                        isAttending === "yes" && (
                            <FormField
                                control={form.control}
                                name="rsvpNumOfAttendees"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Number of Attendees:</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )
                    }

                    {/* Additional Information */}
                    <FormItem>
                        <FormLabel>
                            If you any inquiries, kindly contact:
                            Kobe Bryant
                        </FormLabel>
                    </FormItem>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full" isLoading={isLoading}>
                        Submit
                    </Button>
                </form>
            </Form>
            <DialogConfirmed
                name={form.getValues('rsvpGuest')}
                isOpen={isOpen}
                onClose={closeConfirmDialog}
            />
        </div>
    );
}
