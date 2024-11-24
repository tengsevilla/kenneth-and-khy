import { create } from "zustand";

type NavigationState = {
    activeUrl: string; // Store the currently active URL
    setActiveUrl: (url: string) => void; // Function to update the active URL
};

const useNavigationStore = create<NavigationState>((set) => ({
    activeUrl: "#", // Default to the base URL or a default value
    setActiveUrl: (url) => set({ activeUrl: url }), // Update the active URL
}));

export default useNavigationStore;