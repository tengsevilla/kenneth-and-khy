import { CarouselImages } from "./CarouselImages";
import ColorPalette from "./ColorPallete"
import heroImage from "/lib/assets/hero-min.jpg"; // Ensure correct import path

export const DivWedding = () => {
    return (
        <div
            className="text-center text-primary"
        >
            <div
                className="relative h-[850px] md:h-[980px] text-muted pt-24 rounded-2xl"
                style={{
                    backgroundImage: `url(${heroImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay to ensure text is legible */}
                <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 font-script3">
                    {/* Upper content of the hero image */}
                    <div className="text-8xl md:text-9xl lg:text-9xl">
                        Kenneth
                    </div>
                    <div className="text-8xl md:text-9xl lg:text-9xl -mt-2 md:-mt-4 lg:-mt-6">
                        & Khy
                    </div>
                </div>

                <div className="relative z-10 mt-64">
                    <div className="text-xs md:text-sm lg:text-md xl:text-lg">
                        REQUEST THE HONOR OF YOUR PRESENCE
                    </div>
                    <div className="text-xs md:text-sm lg:text-md xl:text-lg">
                        AS WE UNITE AS ONE IN OUR MARRIAGE
                    </div>
                </div>

                {/* Lower content */}
                <div className="relative z-10 mt-6 md:mt-8">
                    <div className="text-sm md:text-lg lg:text-2xl xl:text-3xl">
                        SUNDAY | DECEMBER 22, 2024
                    </div>
                    <div className="text-xs md:text-sm lg:text-md xl:text-lg">
                        FOUR O&apos;CLOCK IN THE AFTERNOON | 4:00 PM
                    </div>
                    <div className="mt-4 md:mt-6">
                        <div className="text-sm md:text-md lg:text-lg xl:text-xl">
                            NATURE&apos;S VILLAGE RESORT
                        </div>
                        <div className="text-sm md:text-md lg:text-lg xl:text-xl">
                            TALISAY CITY
                        </div>
                    </div>

                    <div className="mt-4 md:mt-6 font-script text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        reception to follow at
                    </div>
                    <div className="mt-2 md:mt-4 text-sm md:text-md lg:text-lg xl:text-xl">
                        PADRE PIO HALL
                    </div>
                </div>

            </div>

            {/* <div className="rounded-2xl bg-muted mt-4 flex justify-center p-8 w-full overflow-hidden">

            </div> */}


        </div>

    )
}

export const DivImages = () => {
    return (
        <div className="rounded-2xl bg-muted text-center text-primary py-4 md:py-8 flex justify-center items-center w-full">
            <CarouselImages />
        </div>
    );
};

export const DivEntourage = () => {
    return (
        <div className="rounded-2xl bg-primary text-center text-white py-8 md:py-16 flex flex-col items-center gap-8 font-base">
            <div className="font-script text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                The Entourage
            </div>
            {/* Groom's and Bride's Parents */}
            <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 uppercase">
                <div>
                    <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Groom&apos;s Parents</div>
                    <p className="text-xs md:text-sm lg:text-md xl:text-md uppercase">Dr. John B. Inocentes</p>
                    <p className="text-xs md:text-sm lg:text-md xl:text-md uppercase">Nilda L. Inocentes</p>
                </div>
                <div>
                    <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Bride&apos;s Parent</div>
                    <p className="text-xs md:text-sm lg:text-md xl:text-md uppercase">MRS. VIVEN B. ALMAQBALI</p>
                </div>
            </div>

            {/* Principal Sponsors */}
            <div className="text-center uppercase">
                <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Principal Sponsors</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-12">
                    {/* Male Sponsors */}
                    <div className="text-xs md:text-sm lg:text-md xl:text-md">
                        <p>MR. FRANCIS B. INOCENTES</p>
                        <p>ENGR. DAVE ABAÑO</p>
                        <p>MR. RANDOLPH G. ALEMAN</p>
                        <p>MR. DONDY Depositario</p>
                        <p>MR. JULITO L. Felicano</p>
                        <p>ENGR. DANILO M. CONDINO</p>
                        <p>MR. JULIO LOZADA</p>
                        <p>DR. MARC ANDREI PALMA</p>
                        <p>MR. OCLYS G. TOONG</p>
                        <p>MR. Erwin E. Negosa</p>
                        <p>MR. ALEXIS A. INOCENTES</p>
                        <p>MR. CIPRIANO REMO</p>
                        <p>DR. ALEJANDRO ARANETA</p>
                        <p>MR. LEO NALAGON</p>
                        <p>MR. LEONARDO ACHA</p>
                        <p>MR. DEMOSTHENES TOLEDO</p>
                    </div>

                    {/* Female Sponsors */}
                    <div className="text-xs md:text-sm lg:text-md xl:text-md">
                        <p>MRS. EDITHA E. NEGOSA</p>
                        <p>MRS. CECELIA ABAÑO</p>
                        <p>MRS. ARLENE G. BERMEJO</p>
                        <p>MRS.MA. SUFIA C. Depositario</p>
                        <p>MRS. MA. TRESSA G. ELBANBUENA</p>
                        <p>MRS. GINA C. CONDINO</p>
                        <p>MS. LORLINIE M. ORTILLO</p>
                        <p>MRS. JONALIE G. PABIANIA</p>
                        <p>MRS. EUGENE DELIGHT O. MAGBANUA</p>
                        <p>MRS. JEAN G. NEGOSA</p>
                        <p>MS. CHERY TAN</p>
                        <p>MRS. LILY REMO</p>
                        <p>DR. CYNTHIA D. ARANETA</p>
                        <p>MRS LETICIA NALAGON</p>
                        <p>MRS. THERESA G. GABRIDO</p>
                        <p>MRS. DAPHNE CAPULAN</p>
                    </div>
                </div>
            </div>

            {/* Best Man and Maid of Honor */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-center uppercase">
                <div>
                    <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Best Man</div>
                    <p className="text-xs md:text-sm lg:text-md xl:text-md">ENGR. JHEDAN C. CONDINO</p>
                </div>
                <div>
                    <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Maid of Honor</div>
                    <p className="text-xs md:text-sm lg:text-md xl:text-md">SYCHELLE LOVE B. DESCALLAR</p>
                </div>
            </div>

            {/* Groomsmen and Bridesmaids */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-center uppercase">
                <div>
                    <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Groomsmen</div>
                    <div className="text-xs md:text-sm lg:text-md xl:text-md">
                        <p>DR. EDESON D. BERNASOL</p>
                        <p>DR. FRANCIS DOMINIC A. SEVILLA</p>
                        <p>DR. VICENTE G. BITOLINAMISA VI</p>
                        <p>DR. GERSON P. MARGARSE</p>
                        <p>Engr. Dave Nicole T. Abaño</p>
                        <p>CIRILO B. DESCALLAR II</p>
                        <p>STEFANO JOHANNES BARRIENTOS</p>
                        <p>DR. JAESON A. BULAN</p>
                    </div>
                </div>
                <div>
                    <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Bridesmaids</div>
                    <div className="text-xs md:text-sm lg:text-md xl:text-md">
                        <p>KATE M. BALLESTEROS</p>
                        <p>VANICE T. BITOLINAMISA</p>
                        <p>DR. KIRSTEN FLOR L. INOCENTES</p>
                        <p>ZAIANAH HILAL B. ALMAQBALI</p>
                        <p>AIAH T. BITOLINAMISA</p>
                        <p>JEZERENE HANNAH  J. GERMO</p>
                        <p>JOHNIL BERNADETTE L. INOCENTES</p>
                        <p>SHIOPPY A. BITOLINAMISA</p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col items-center gap-8 uppercase">
                {/* Section Title */}
                <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2 tracking-wide text-center">
                    Secondary Sponsors
                </div>

                {/* Sponsors and Participants */}
                <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                    {/* Veil */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Veil</h2>
                        <div className="text-xs md:text-sm lg:text-md xl:text-md">
                            <p>ERWIN JAY G. NEGOSA</p>
                            <p>LEIYEN FAYE M. NEGOSA</p>
                        </div>

                    </div>

                    {/* Candle */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Candle</h2>
                        <div className="text-xs md:text-sm lg:text-md xl:text-md">
                            <p>RAMIL MARTINEZ JR..</p>
                            <p>KRYSTELLE JOY DIONEZA</p>
                        </div>

                    </div>

                    {/* Cord */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Cord</h2>
                        <div className="text-xs md:text-sm lg:text-md xl:text-md">
                            <p>JEREK JAE B. AREGLO</p>
                            <p>RHEA GRACE R. AREGLO</p>
                        </div>

                    </div>
                </div>

                {/* Ring and Coin Bearers */}
                <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                    {/* Ring Bearer */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Ring Bearer</h2>
                        <p className="text-xs md:text-sm lg:text-md xl:text-md">MAHMOOD HILAL B. ALMAQBALI</p>
                    </div>

                    {/* Bible Bearer */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Bible Bearer</h2>
                        <p className="text-xs md:text-sm lg:text-md xl:text-md">AETHAN JEEG M. NEGOSA</p>
                    </div>

                    {/* Coin Bearer */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Coin Bearer</h2>
                        <p className="text-xs md:text-sm lg:text-md xl:text-md">KENT HARVEY A. PIO</p>
                    </div>
                </div>

                {/* Flower Girls */}
                <div className="text-center">
                    <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Flower Girls</h2>
                    <div className="text-xs md:text-sm lg:text-md xl:text-md">
                        <p>ATHENA ZEA S. AREGLO</p>
                        <p>AMBER SHILOH L. AREGLO</p>
                        <p>SOFIA ALEXCYS A. BERNIL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const DivAttire = () => {
    return (
        <div className="rounded-2xl bg-muted text-center text-primary py-8 md:py-16 flex flex-col items-center font-base ">
            <div className="font-script text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                Attire
            </div>
            <div className="text-xs md:text-xs lg:text-sm xl:text-sm font-bold mb-2 uppercase mt-8">Principal Sponsors</div>
            <div className="text-sm md:text-sm lg:text-md xl:text-md uppercase">
                Gentlemen: Barong Tagalog & slack
            </div>
            <div className="text-sm md:text-sm lg:text-md xl:text-md uppercase">
                Ladies: Long gown. BEIGE OR CHAMPANGE COLOR
            </div>

            <div className="text-xs md:text-xs lg:text-sm xl:text-sm font-bold mb-2 uppercase mt-8">Guests</div>
            <div className="text-sm md:text-sm lg:text-md xl:text-md uppercase">
                Gentlemen: Long sleeve polo & long pants
            </div>
            <div className="text-sm md:text-sm lg:text-md xl:text-md uppercase">
                Ladies: Long dress & midi dress
            </div>

            <div className="text-sm md:text-md lg:text-lg xl:text-lg mb-2 uppercase mt-8">We would love to see you in these colors:</div>
            <ColorPalette />
        </div>
    )
}

export const DivGiftGuide = () => {
    return (
        <div className="rounded-2xl bg-primary text-center text-white py-8 px-4 md:py-16 flex flex-col items-center font-base">
            <div className="font-script text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                Gift Guide
            </div>
            <div className="flex flex-col gap-2">
                <div className="mt-8 text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    AS LOVE IS WHAT THIS WEDDING IS ALL ABOUT,
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    YOUR PRESENCE IS WHAT WE CAN&apos;T CELEBRATE WITHOUT.
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    BUT IF YOU THINK THAT GIFT IS WORTH GIVING,
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    A SMALL ENVELOPE FOR OUR FUTURE IS A DELIGHTFUL BLESSING.
                </div>
            </div>
        </div>

    )
}

export const DivSnapAndShare = () => {

    return (
        <div className="rounded-2xl bg-muted text-center text-primary py-8 md:py-16 flex flex-col items-center font-base">
            <div className="font-script text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                Snap &apos;n Share!
            </div>
            <div className="flex flex-col gap-2">
                <div className="mt-8 text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    HELP US SHARE THE LOVE!
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    PLEASE TAG US IN YOUR PHOTOS TO HELP US REMEMBER
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    OUR BEST DAY WITH YOU.
                </div>
                <div className="text-md md:text-md lg:text-lg xl:text-lg mt-2">
                    #aLifetimeKHYmmitmentWithKENNETH
                </div>
                <div className="text-md md:text-md lg:text-lg xl:text-lg mt-0">
                    #DreamKHYmeTrueofKENNETH
                </div>
            </div>
        </div>
    )
}

export const DivLocation = () => {
    return (
        <div className="rounded-2xl bg-muted text-primary py-8 md:py-16 px-8 md:py-0 flex flex-col items-center font-base">
            <div className="font-script text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                Location Map
            </div>
            <div className="my-8 text-center">
                <div className="text-xs md:text-sm lg:text-md xl:text-md mb-2">
                    Ceremony & Reception
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md mb-2">
                    At Nature&apos;s Village Resort
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md">
                    Talisay City
                </div>
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-video">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.1088788292745!2d122.9615157116833!3d10.726084989375467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aed6c84a5dd153%3A0x177631c61f787610!2sNature&#39;s%20Village%20Resort!5e0!3m2!1sen!2sph!4v1732279454393!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export const DivFAQs = () => {

    return (
        <div className="rounded-2xl bg-primary text-center text-white py-8 md:py-16 px-4 flex flex-col items-center font-base">
            <div className="font-script text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                FAQs
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xs md:text-xs lg:text-sm xl:text-sm font-bold uppercase mt-8">WHEN SHOULD I RSVP?</div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    PLEASE RSVP NO LATER THAN DEC 10, 2024, YOU MAY SEND US PERSONAL MESSAGE ON FACEBOOK.
                </div>

                <div className="text-xs md:text-xs lg:text-sm xl:text-sm font-bold uppercase mt-8">WHAT TIME SHOULD I ARRIVE?</div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    CEREMONY BEGINS AT 4:00 PM, WE RECOMMEND YOU AIM TO ARRIVE BY 3:30 PM TO ENSURE YOU ARE SEATED ON TIME
                </div>


                <div className="text-xs md:text-xs lg:text-sm xl:text-sm font-bold uppercase mt-8"> CAN I BRING A GUEST?</div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    We would love to keep the wedding an intimate event with close friends and family.
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    However, if you would like to bring a guest, please let us know in advance.
                </div>

                <div className="text-xs md:text-xs lg:text-sm xl:text-sm font-bold uppercase mt-8">CAN I BRING MY KIDS?</div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    AS MUCH AS WE WOULD LOVE TO ACCOMMODATE YOUR DEAR CHILDREN, THIS IS AN ADULT ONLY EVENT.
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    THE KIDS IN OUR WEDDING ARE LIMITED ONLY FOR THE LITTLE ONES WHO ARE PART OF THE ENTOURAGE.
                </div>
            </div>
        </div>
    )
}