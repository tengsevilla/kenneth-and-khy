import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"


interface Props {
    isOpen: boolean;
    onClose: () => void;
    name: string;
}
export function DialogConfirmed(props: Props) {

    return (
        <AlertDialog open={props.isOpen} onOpenChange={props.onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Your response is confirmed</AlertDialogTitle>
                    <AlertDialogDescription>
                        Thank you, {props.name}, for taking the time in answering the invitation
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={props.onClose}
                    >
                        Done
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
