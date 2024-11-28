"use client"
import { DivAttire, DivEntourage, DivFAQs, DivGiftGuide, DivImages, DivLocation, DivSnapAndShare, DivWedding } from "@/components/DivSections";
import FormRSVP from "@/components/FormRSVP";
import { ECookies, EVENT_ID } from "@/lib/model";
import { fetchEvent } from "@/lib/model/useEventAPI";
import useNavigationStore from "@/lib/store/useStoreNavigation";
import { getCookie, setCookie } from "@/lib/utils";
import { useEffect, useRef } from "react";

type SectionRefs = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

export default function Home() {
  const { activeUrl } = useNavigationStore();
  const accessToken = getCookie(ECookies.ACCESS_TOKEN);
  // Refs for each section
  // Define refs with type safety for each section
  const refs: SectionRefs = {
    "#our-wedding": useRef<HTMLDivElement>(null),
    "#entourage": useRef<HTMLDivElement>(null),
    "#attire": useRef<HTMLDivElement>(null),
    "#gift-guide": useRef<HTMLDivElement>(null),
    "#snap-and-share": useRef<HTMLDivElement>(null),
    "#rsvp": useRef<HTMLDivElement>(null),
    "#location": useRef<HTMLDivElement>(null),
    "#faqs": useRef<HTMLDivElement>(null),
  };

  // Scroll to the active section when `activeUrl` changes
  useEffect(() => {
    const ref = refs[activeUrl];
    if (ref?.current) {
      const element = ref.current;
      const yOffset = -80; // Optional offset to fine-tune positioning
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth", // Smooth scrolling
      });
    }
  }, [activeUrl, refs]);

  useEffect(() => {
    if (!accessToken) {
      try {
        fetchEvent(EVENT_ID)
          .then((response) => setCookie(ECookies.ACCESS_TOKEN, response.access_token, response.expiresIn));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

  }, [accessToken]);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4" style={{ maxWidth: '100vw' }}>
      <div className="grid auto-rows-min gap-4 md:grid-cols-1">

        {/* #our-wedding */}
        <div ref={refs["#our-wedding"]}>
          <DivWedding />
        </div>

        <div>
          <DivImages />
        </div>

        {/* #entourage */}
        <div ref={refs["#entourage"]}>
          <DivEntourage />
        </div>

        {/* #attire */}
        <div ref={refs["#attire"]}>
          <DivAttire />
        </div>

        {/* #gift-guide */}
        <div ref={refs["#gift-guide"]}>
          <DivGiftGuide />
        </div>

        {/* #snap-and-share */}
        <div ref={refs["#snap-and-share"]}>
          <DivSnapAndShare />
        </div>

        {/* #rsvp */}
        <div ref={refs["#rsvp"]} className="rounded-2xl bg-primary text-white py-8 md:py-16 px-8 md:py-0 flex flex-col items-center gap-8 font-base">
          <FormRSVP />
        </div>

        {/* #location */}
        <div ref={refs["#location"]}>
          <DivLocation />
        </div>

        {/* #faqs */}
        <div ref={refs["#faqs"]}>
          <DivFAQs />
        </div>
      </div>
    </div>
  );
}

