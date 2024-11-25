import ColorPalette from "./ColorPallete"


export const DivWedding = () => {
    return (
        <div className="rounded-2xl bg-muted text-center text-primary py-8 md:py-16">
            <div className="font-script2">
                <div className="text-8xl md:text-[10rem] lg:text-9xl xl:text-[10rem]">Kenneth</div>
                <div className="text-8xl md:text-[10rem] lg:text-9xl xl:text-[10rem] -mt-10 md:-mt-12 lg:-mt-16">
                    & Khy
                </div>
            </div>
            <div className="mt-8 md:mt-10">
                <div className="text-xs md:text-sm lg:text-md xl:text-md">
                    REQUEST THE HONOR OF YOUR PRESENCE
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md">
                    AS WE UNITE AS ONE IN OUR MARRIAGE
                </div>
            </div>
            <div className="mt-8 md:mt-10">
                <div className="text-lg md:text-md lg:text-4xl xl:text-2xl">
                    SUNDAY | DECEMBER 22, 2024
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md">
                    FOUR O&apos;SCLOCK IN THE EVENING | 4:00 PM
                </div>
                <div className="mt-8 md:mt-10">
                    <div className="text-sm md:text-md lg:text-lg xl:text-lg">NATURE&apos;S VILLAGE RESORT</div>
                    <div className="text-sm md:text-md lg:text-lg xl:text-lg">TALISAY CITY</div>
                </div>

                <div className="mt-8 md:mt-10 font-script text-2xl md:text-2xl lg:text-4xl xl:text-4xl">
                    reception to follow at
                </div>
                <div className="mt-8 md:mt-10">
                    PADRE PIO HALL
                </div>
            </div>
        </div>
    )
}
export const DivEntourage = () => {
    return (
        <div className="rounded-2xl bg-secondary text-center text-white py-8 md:py-16 flex flex-col items-center gap-8 font-base">
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
                    <p className="text-xs md:text-sm lg:text-md xl:text-md uppercase">Mrs. Viven B. Almaqbali</p>
                </div>
            </div>

            {/* Principal Sponsors */}
            <div className="text-center uppercase">
                <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Principal Sponsors</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-12">
                    {/* Male Sponsors */}
                    <div className="text-xs md:text-sm lg:text-md xl:text-md">
                        <p>Mr. Francisco B. Inocentes</p>
                        <p>Engr. Dave R. Abaño</p>
                        <p>Mr. Randolph G. Aleman</p>
                        <p>Mr. Dondy A. Depositario</p>
                        <p>Mr. Julio T. Feliciano</p>
                        <p>Engr. Danilo M. Condino</p>
                        <p>Mr. Julio Lozada</p>
                        <p>Dr. Marc Andrei Palma</p>
                        <p>Mr. Oclys G. Toong</p>
                        <p>Mr. Erwin E. Negosa</p>
                        <p>Mr. Alexis A. Inocentes</p>
                        <p>Mr. Cipriano Remo</p>
                        <p>Dr. Alejandro D. Araneta</p>
                        <p>Mr. Leo Nalagon</p>
                        <p>Mr. Leonardo Acha</p>
                        <p>Mr. Demosthenes Toledo</p>
                    </div>
                    {/* Female Sponsors */}
                    <div className="text-xs md:text-sm lg:text-md xl:text-md">
                        <p>Mrs. Edith E. Negosa</p>
                        <p>Mrs. Cecelia T. Abaño</p>
                        <p>Mrs. Arlene G. Bermejo</p>
                        <p>Mrs. Sufia C. Depositario</p>
                        <p>Mrs. Tressa G. Elbanbuena</p>
                        <p>Mrs. Gina C. Condino</p>
                        <p>Ms. Lorlinie M. Ortillo</p>
                        <p>Mrs. Jonalie P. Pabiana</p>
                        <p>Mrs. Eugene Delight O. Magbanua</p>
                        <p>Mrs. Jean G. Negosa</p>
                        <p>Mrs. Chery J. Tan</p>
                        <p>Mrs. Lily Remo</p>
                        <p>Dr. Cynthia D. Araneta</p>
                        <p>Mrs. Leticia Nalagon</p>
                        <p>Mrs. Theresa G. Garrido</p>
                        <p>Mrs. Daphne P. Capulan</p>
                    </div>
                </div>
            </div>

            {/* Best Man and Maid of Honor */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-center uppercase">
                <div>
                    <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Best Man</div>
                    <p className="text-xs md:text-sm lg:text-md xl:text-md">Engr. Jhedan C. Condino</p>
                </div>
                <div>
                    <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Maid of Honor</div>
                    <p className="text-xs md:text-sm lg:text-md xl:text-md">Sychelle Love D. Descallar</p>
                </div>
            </div>

            {/* Groomsmen and Bridesmaids */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-center uppercase">
                <div>
                    <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Groomsmen</div>
                    <div className="text-xs md:text-sm lg:text-md xl:text-md">
                        <p>Dr. Edeson D. Bernasol</p>
                        <p>Dr. Francis Dominic A. Sevilla</p>
                        <p>Dr. Vicente G. Bitoliamivsa VI</p>
                        <p>Dr. Gerson P. Margarse</p>
                        <p>Engr. Dave Nicole T. Abaño</p>
                        <p>Cirilo B. Descallar II</p>
                        <p>Stefano Johannes R. Abrantes</p>
                        <p>Dr. Jaeson A. Bulan</p>
                    </div>
                </div>
                <div>
                    <div className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Bridesmaids</div>
                    <div className="text-xs md:text-sm lg:text-md xl:text-md">
                        <p>Kate M. Ballesteros</p>
                        <p>Vanice T. Bitoliamivsa</p>
                        <p>Dr. Kirsten Flor L. Inocentes</p>
                        <p>Zainah Hilal B. Almaqbali</p>
                        <p>Jezereth Hannah E. Germo</p>
                        <p>Johnniebeth Hannalet L. Inocentes</p>
                        <p>Shioppy A. Bitoliamivsa</p>
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
                            <p>Erwin Jay G. Negosa</p>
                            <p>Leiyen Faye M. Negosa</p>
                        </div>

                    </div>

                    {/* Candle */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Candle</h2>
                        <div className="text-xs md:text-sm lg:text-md xl:text-md">
                            <p>Ramil Martinez Jr.</p>
                            <p>Krystelle Joy B. Dioneza</p>
                        </div>

                    </div>

                    {/* Cord */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Cord</h2>
                        <div className="text-xs md:text-sm lg:text-md xl:text-md">
                            <p>Jerek Jae B. Areglo</p>
                            <p>Rhea Rose R. Areglo</p>
                        </div>

                    </div>
                </div>

                {/* Ring and Coin Bearers */}
                <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                    {/* Ring Bearer */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Ring Bearer</h2>
                        <p className="text-xs md:text-sm lg:text-md xl:text-md">Mahmood Hilal B. Almaqbali</p>
                    </div>

                    {/* Bible Bearer */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Bible Bearer</h2>
                        <p className="text-xs md:text-sm lg:text-md xl:text-md">Aethan Jeeg M. Negosa</p>
                    </div>

                    {/* Coin Bearer */}
                    <div>
                        <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Coin Bearer</h2>
                        <p className="text-xs md:text-sm lg:text-md xl:text-md">Kent Harvey A. Pio</p>
                    </div>
                </div>

                {/* Flower Girls */}
                <div className="text-center">
                    <h2 className="text-sm md:text-sm lg:text-md xl:text-md font-bold mb-2">Flower Girls</h2>
                    <div className="text-xs md:text-sm lg:text-md xl:text-md">
                        <p>Athena Zea S. Areglo</p>
                        <p>Amber Shiloh L. Areglo</p>
                        <p>Sofia Alexcys A. Bernil</p>
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
                Ladies: Long gown
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
        <div className="rounded-2xl bg-secondary text-center text-white py-8 md:py-16 flex flex-col items-center font-base">
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
                <div className="text-md md:text-md lg:text-lg xl:text-lg">
                    #aLifetimeKHYmmitmentWithKENNETH
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
        <div className="rounded-2xl bg-secondary text-center text-white py-8 md:py-16 flex flex-col items-center font-base">
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
                    IF YOU RECEIVED A PLUS ONE, YOUR GUEST&apos;S NAME IS LISTED ON YOUR INVITATION AND WILL APPEAR UNDER YOUR NAME WHEN YOU RSVP.
                </div>
                <div className="text-xs md:text-sm lg:text-md xl:text-md uppercase">
                    OTHERWISE, WE WOULD LOVE TO KEEP THE WEDDING AS AN INTIMATE EVENT WITH CLOSE FRIENDS AND FAMILY.
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