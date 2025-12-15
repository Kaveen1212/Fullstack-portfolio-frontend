import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../navigation/Navigation';

gsap.registerPlugin(ScrollTrigger);

function AI_Projects_Details() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // State for accordion sections - Agronomics
    const [openSection1, setOpenSection1] = useState<string | null>(null);
    // State for accordion sections - Research Agent
    const [openSection2, setOpenSection2] = useState<string | null>(null);

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) return;

        // Only apply horizontal scroll on desktop (lg and above)
        const mediaQuery = window.matchMedia('(min-width: 1024px)');

        if (!mediaQuery.matches) return; // Exit early on mobile

        const section = sectionRef.current;
        const container = containerRef.current;
        const slides = container.querySelectorAll('.section-slide');

        // Calculate total width
        const totalWidth = slides.length * window.innerWidth;

        // Create horizontal scroll animation (desktop only)
        const scrollTween = gsap.to(container, {
            x: () => -(totalWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        });

        return () => {
            scrollTween.scrollTrigger?.kill();
            scrollTween.kill();
        };
    }, []);

    return (
        <div ref={sectionRef} className="horizontal-scroll-section w-full lg:h-screen lg:overflow-hidden">
            <div
                ref={containerRef}
                className="horizontal-container lg:flex h-full"
                style={{ width: 'fit-content' }}
            >
                <Navigation/>

            {/* Agronomics agent */}
                <div className="section-slide w-screen lg:h-screen flex flex-col bg-[#F8FBF8] text-[#1b1b1b] px-12 py-8 relative lg:overflow-hidden min-h-screen">
                    {/* Title */}
                    <div className="flex flex-col 0 items-center text-center mb-4 lg:mb-80 mt-20 tracking-wide z-10 space-y-5">
                        <h1 className="text-xl lg:text-4xl xl:text-5xl">ACRONOMICS AI PROJECT</h1>
                        <p className="text-sm md:text-2xl text-center md:text-left ml-0 md:ml-15 w-sm md:w-4xl">Intelligent farm assistant providing crop disease diagnosis, weather forecasts, document search, expert advice.</p>
                    </div>
                    {/* Positioned Images - Desktop Only */}

                    {/* Tech Stack Section - Top Left */}
                    <div className="hidden lg:block absolute top-24 left-12 group">
                        <img src="glass 3.png" alt="Glass" className="w-78 h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105" />
                        <p className="text-sm font-semibold uppercase tracking-wide font-['Lamora'] text-left">Tech Stack</p>

                        {/* Tech Stack Details - Shows on Hover */}
                        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#1b1b1b]/10 max-w-sm z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['Lamora'] text-center border-b border-[#1b1b1b]/20 pb-2">Tech Stack</h4>
                            <ul className="space-y-2 text-xs leading-relaxed">
                                <li>• FRONTEND: REACT 19, VITE, TAILWIND, FIREBASE, REACT ROUTER</li>
                                <li>• BACKEND: FASTAPI, LANGGRAPH, LANGCHAIN, OPENAI GPT-4O-MINI</li>
                                <li>• DATA: QDRANT (VECTORS), FIRESTORE (CHATS)</li>
                                <li>• APIS: OPENWEATHERMAP, AGROMONITORING, OPENAI VISION</li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Scenarios Section - Top Right */}
                    <div className="hidden lg:block absolute top-12 right-56 group">
                        <img src="simulation.png" alt="Graph" className="w-64 h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105" />
                        <p className="text-sm font-semibold uppercase tracking-wide font-['Lamora'] text-left">Key Scenarios</p>

                        {/* Key Scenarios Details - Shows on Hover */}
                        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#1b1b1b]/10 z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['Lamora'] text-center border-b border-[#1b1b1b]/20 pb-2">Key Scenarios</h4>
                            <ul className="space-y-2 text-xs leading-relaxed">
                                <li>• "WILL IT RAIN FOR PADDY SOWING?" → WEATHER TOOL</li>
                                <li>• LEAF PHOTO UPLOAD → VISION DIAGNOSIS + REMEDY</li>
                                <li>• "FIND DOSAGE IN MY PDF" → RAG OVER UPLOADED DOCS</li>
                                <li>• "LATEST RUST CONTROL METHODS" → WEB SEARCH + CITATIONS</li>
                            </ul>
                        </div>
                    </div>

                    {/* Core Features Section - Center */}
                    <div className="hidden lg:flex flex-col items-left absolute left-220 top-72 transform -translate-x-1/4 group">
                            <img src="STROBERY.png" alt="Acronomics Agent" className="max-w-sm w-60 lg:w-full lg:max-w-120 mb-2 cursor-pointer transition-transform hover:scale-105"/>
                            <p className="text-sm font-semibold uppercase tracking-wide font-['Lamora'] text-left mb-4">Core Features</p>

                            {/* Core Features Details - Shows on Hover */}
                            <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#1b1b1b]/10 max-w-2xl z-10">
                                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['Lamora'] text-left border-b border-[#1b1b1b]/20 pb-2">Core Features</h4>
                                <ul className="space-y-2 text-xs leading-relaxed">
                                    <li>• AI CHAT: EXPERT AGRONOMY Q&A WITH SAVED HISTORY</li>
                                    <li>• PLANT DISEASE DETECTION: IMAGE UPLOADS → DIAGNOSIS + TREATMENT</li>
                                    <li>• DOC INTELLIGENCE (RAG): UPLOAD PDFS/XLSX, SEMANTIC SEARCH</li>
                                    <li>• WEATHER: LOCATION-AWARE FORECASTS FOR FARMING DECISIONS</li>
                                    <li>• LIVE WEB SEARCH: FRESH AGRONOMY INFO RETRIEVAL</li>
                                    <li>• AUTH & MULTI-USER: GOOGLE/GITHUB OAUTH, ISOLATED DATA</li>
                                </ul>
                            </div>
                    </div>

                    {/* How It Works Section - Bottom Left */}
                    <div className="hidden lg:block absolute bottom-30 left-80 group">
                        <img src="ai_grow 1.png" alt="Tomato" className="w-76 h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105" />
                        <p className="text-sm font-semibold uppercase tracking-wide font-['Lamora'] text-left">How It Works</p>

                        {/* How It Works Details - Shows on Hover */}
                        <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#1b1b1b]/10 max-w-md z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['Lamora'] text-left border-b border-[#1b1b1b]/20 pb-2">How It Works (Flow)</h4>
                            <div className="text-xs leading-relaxed space-y-1">
                                <p>• USER MESSAGE → FASTAPI → LANGGRAPH ROUTES TOOLS (WEATHER/</p>
                                <p className="pl-4">SEARCH/RAG/VISION) → LANGCHAIN + GPT GENERATE ANSWER →</p>
                                <p className="pl-4">STREAM TO REACT UI → PERSIST TO FIRESTORE.</p>
                            </div>
                        </div>
                    </div>

                    {/* Soundcore Section - Bottom Right */}
                    <div className="hidden lg:block absolute bottom-36 space-y-10 right-32">
                        <img src="soundcore.png" alt="Soundcore" className="w-86 h-auto object-contain" />
                        <div className="">
                            <svg width="200" height="auto" viewBox="0 0 4679 773" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M392.516 0H1152C1368.5 0 1544.58 173.25 1544.58 386.145C1544.58 599.039 1368.5 772.289 1152.06 772.289H392.58C176.082 772.289 0 599.039 0 386.145C0 173.25 176.082 0 392.516 0ZM741.269 598.524C750.794 608.435 764.888 607.92 777.374 605.346L777.502 605.41C783.294 600.777 775.057 594.92 767.205 589.321C762.443 585.974 757.873 582.757 756.522 579.861C760.898 574.712 747.962 562.806 737.922 553.603C734.488 550.655 731.263 547.472 728.269 544.078C721.19 536.419 718.293 526.83 715.397 517.176C713.467 510.741 711.536 504.305 708.318 498.384C688.753 453.72 666.293 409.378 634.757 371.6C614.485 346.5 591.381 323.975 568.276 301.45C553.257 287.06 538.601 272.296 524.32 257.172C509.775 242.435 501.023 224.286 492.206 206.073C484.869 190.884 477.532 175.631 466.72 162.309C434.091 115.007 331.119 102.071 315.995 169.003C315.995 171.062 315.351 172.349 313.485 173.701C305.119 179.75 297.718 186.572 291.475 194.746C276.158 215.726 273.841 251.187 292.891 270.044L292.955 268.821C293.599 259.361 294.242 250.415 301.901 243.657C316.574 256.078 338.971 260.519 356.025 251.187C376.62 280.148 383.184 315.223 389.813 350.298C395.283 379.645 400.754 408.992 414.398 434.992L415.299 436.408C423.279 449.472 431.388 462.794 441.685 474.186C445.482 479.913 453.141 486.027 460.799 492.141C470.903 500.186 481.008 508.231 481.973 515.246V524.449C481.909 542.791 481.844 561.776 493.815 576.771C500.443 589.965 484.161 603.158 471.161 601.549C463.953 602.514 456.166 600.648 448.378 598.846C437.759 596.272 427.205 593.826 418.645 598.653C416.2 601.227 412.789 601.227 409.313 601.356C405.194 601.485 401.011 601.613 398.566 605.861C398.051 607.084 396.892 608.435 395.67 609.916C392.967 613.133 390.07 616.673 393.546 619.312L394.511 618.668C399.788 614.678 404.808 610.945 411.888 613.262C410.987 618.411 414.398 619.827 417.809 621.178L419.546 621.95C419.474 623.164 419.302 624.369 419.031 625.554C418.452 628.45 417.937 631.218 420.19 633.728C421.244 632.629 422.233 631.468 423.15 630.252C425.531 627.292 427.848 624.332 432.096 623.173C441.363 635.401 450.695 630.317 462.408 624.01C475.666 616.866 491.948 608.049 514.538 620.47C505.85 620.084 498.127 621.114 492.334 628.193C490.854 629.738 489.631 631.54 492.206 633.599C505.528 625.104 511.127 628.129 516.34 631.025C520.201 633.084 523.741 635.079 529.984 632.569L534.489 630.252C544.464 624.911 554.697 619.569 566.603 621.435C557.657 623.945 554.504 629.48 551.028 635.465C549.355 638.49 547.553 641.579 544.979 644.475C543.627 645.827 543.048 647.436 544.528 649.624C563.192 648.144 570.271 643.51 579.796 637.267C584.301 634.307 589.45 630.896 596.594 627.356C604.574 622.53 612.554 625.619 620.277 628.643C628.643 631.861 636.688 634.951 644.154 627.742C646.535 625.619 649.495 625.554 652.456 625.554C653.485 625.554 654.58 625.554 655.674 625.426C653.292 613.198 640.228 613.326 626.841 613.455C611.396 613.648 595.757 613.841 596.272 594.856C610.559 585.267 610.688 568.662 610.817 552.959C610.817 549.098 610.817 545.429 611.138 541.825C621.629 547.617 632.762 552.122 643.832 556.563C654.258 560.746 664.619 564.93 674.337 570.078C684.506 586.168 700.338 607.406 721.447 605.99C721.962 604.316 722.477 602.965 723.12 601.292C724.343 601.549 725.63 601.807 726.917 602.193C732.452 603.48 738.373 604.96 741.269 598.524ZM1155.02 416.457C1167.25 428.427 1183.79 435.121 1201.1 435.121C1218.42 435.121 1234.95 428.427 1247.18 416.457C1253.21 410.6 1258.01 403.598 1261.29 395.861C1264.57 388.125 1266.27 379.811 1266.3 371.407C1266.27 363.003 1264.57 354.689 1261.29 346.952C1258.01 339.216 1253.21 332.214 1247.18 326.357C1238.18 317.571 1226.85 311.545 1214.54 308.991C1202.22 306.436 1189.43 307.46 1177.68 311.941L1140.35 258.459L1114.28 275.965L1151.81 329.703C1141.1 341.812 1135.46 357.573 1136.06 373.724C1136.66 389.874 1143.45 405.175 1155.02 416.457ZM1038.09 243.336C1048.9 248.574 1060.94 250.772 1072.91 249.695C1084.88 248.618 1096.34 244.306 1106.05 237.222C1117.14 229.142 1125.34 217.699 1129.41 204.592C1133.44 191.537 1133.08 177.52 1128.38 164.691C1123.61 151.797 1114.8 140.784 1103.28 133.284C1090.47 124.88 1075.13 121.183 1059.9 122.826C1044.66 124.47 1030.47 131.351 1019.74 142.294C1012.78 149.492 1007.61 158.235 1004.67 167.809C1001.73 177.383 1001.1 187.518 1002.82 197.384C1004.63 207.221 1008.75 216.486 1014.85 224.414C1020.97 232.459 1028.95 238.895 1038.09 243.336ZM1038.09 613.52C1048.91 618.744 1060.94 620.934 1072.91 619.858C1084.88 618.781 1096.33 614.477 1106.05 607.406C1117.14 599.326 1125.34 587.883 1129.41 574.776C1133.44 561.721 1133.08 547.704 1128.38 534.875C1123.61 521.981 1114.8 510.968 1103.28 503.468C1090.47 495.051 1075.13 491.348 1059.9 492.992C1044.66 494.635 1030.46 501.524 1019.74 512.478C1012.77 519.673 1007.61 528.416 1004.67 537.991C1001.72 547.566 1001.09 557.702 1002.82 567.568C1004.63 577.405 1008.75 586.67 1014.85 594.598C1020.97 602.643 1028.95 609.079 1038.09 613.52ZM1097.94 387.239V355.575H998.184C995.658 345.923 990.871 337.011 984.218 329.574L1021.8 275.064L994.451 257.301L956.931 311.812C945.429 307.805 933.042 307.067 921.146 309.68C909.25 312.294 898.312 318.156 889.549 326.614C883.544 332.431 878.765 339.391 875.493 347.084C872.222 354.777 870.523 363.047 870.499 371.407C870.499 388.204 877.385 404.358 889.549 416.2C898.312 424.658 909.25 430.52 921.146 433.133C933.042 435.746 945.429 435.009 956.931 431.002L994.451 485.513L1021.48 467.75L984.218 413.239C990.871 405.803 995.658 396.891 998.184 387.239H1097.94Z" fill="black"/>
                            <g clip-path="url(#clip0_310_583)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3473.74 198.595C3446.88 178.894 3409.81 168.926 3363.63 168.926C3330.33 168.926 3300.01 176.176 3273.53 190.439C3247.1 204.657 3225.28 226.134 3210.65 252.339C3195.36 279.152 3187.64 311.915 3187.64 349.741C3187.64 378.603 3192.21 404.568 3201.25 426.909C3210.26 449.191 3222.98 468.281 3238.98 483.628C3255.1 499.008 3274.19 510.928 3295.09 518.656C3317.06 526.697 3340.29 530.727 3363.69 530.556C3399.94 530.556 3431.48 523.266 3457.46 508.904C3482.83 495.141 3503.7 474.38 3517.61 449.092C3531.56 423.737 3538.63 394.324 3538.63 361.66C3538.63 360.714 3538.53 357.72 3538.37 352.696C3538.28 349.427 3538.09 346.162 3537.8 342.905H3406.71V385.498H3474.03L3473.74 387.448C3470.54 407.681 3464.24 424.821 3455.02 438.375C3446.04 451.695 3433.54 462.265 3418.91 468.912C3404.27 475.57 3386.87 478.861 3367.69 478.683C3341.92 478.368 3320.11 472.793 3302.91 462.115C3285.7 451.427 3272.16 435.743 3264.1 417.157C3255.59 398.126 3251.29 375.431 3251.29 349.701C3251.29 323.972 3255.65 301.139 3264.2 281.871C3272.86 262.525 3285.87 247.257 3303.01 236.559C3320.15 225.881 3341.96 220.621 3367.67 220.936C3393.3 220.936 3414.75 227.319 3431.34 239.928C3447.55 252.202 3459.43 268.731 3466.8 289.082L3528.17 280.118C3518.52 245.365 3500.21 217.902 3473.74 198.517V198.595ZM4270.3 272.947C4250.5 260.85 4227.18 254.822 4200.25 254.822C4173.33 254.822 4150.44 260.85 4132.06 272.947C4128.35 275.406 4124.79 278.084 4121.4 280.965V262.131H4065.2V641.748H4129.3V511.584C4130.45 512.391 4131.57 513.219 4132.75 513.987C4151.57 526.162 4174.85 532.25 4202.65 532.25C4228.85 532.25 4251.74 526.162 4271.25 513.987C4290.65 501.921 4306.36 484.744 4316.64 464.341C4327.36 443.399 4332.75 419.797 4332.75 393.516C4332.75 367.235 4327.3 343.18 4316.4 322.337C4305.91 301.94 4289.97 284.845 4270.36 272.947H4270.3ZM4257.64 437.252C4252.43 450.275 4244.47 460.657 4233.76 468.261C4223.04 475.886 4209.39 479.688 4192.84 479.688C4176.27 479.688 4161.99 476.063 4151.51 468.852C4141.04 461.662 4133.38 451.555 4128.57 438.552C4123.71 425.589 4121.3 410.557 4121.3 393.516C4121.3 376.475 4123.71 361.246 4128.57 348.401C4133.38 335.477 4140.95 325.41 4151.13 318.219C4161.34 311.009 4174.52 307.384 4190.71 307.384C4207.77 307.384 4221.88 311.225 4232.93 318.929C4244.02 326.632 4252.18 337.014 4257.5 350.115C4262.74 363.157 4265.4 377.657 4265.4 393.556C4265.4 409.454 4262.8 424.21 4257.64 437.252ZM4627.78 353.504C4626.46 342.506 4623.94 331.685 4620.27 321.234C4616.2 309.566 4610.13 298.698 4602.32 289.121C4594.23 279.074 4583.31 270.78 4569.62 264.298C4555.91 257.797 4538.45 254.546 4517.39 254.546C4490.66 254.546 4468.1 259.944 4449.84 270.72C4440.01 276.532 4431.52 283.408 4424.23 291.347V174.501H4367.49V524.902H4431.91V389.832C4431.91 373.796 4433.82 360.616 4437.7 350.292C4441.58 340.009 4446.68 331.892 4453.13 325.962C4459.26 320.213 4466.62 315.923 4474.64 313.412C4482.42 310.981 4490.52 309.739 4498.68 309.728C4513.81 309.728 4525.78 312.723 4534.67 318.751C4543.57 324.78 4550.25 332.443 4554.72 341.762C4559.2 351.1 4562.03 360.793 4563.31 370.86C4564.56 380.908 4565.19 390.069 4565.19 398.363V524.902H4629.59V378.149C4629.59 371.806 4629 363.61 4627.87 353.464L4627.78 353.504ZM3727.09 264.436C3718.34 264.968 3709.75 266.524 3701.44 268.967C3693.45 271.289 3685.8 274.668 3678.7 279.014C3670.79 283.477 3663.77 289.377 3658.02 296.41C3655.43 299.6 3653.07 302.964 3650.95 306.478L3648.58 310.319V265.519H3595.59V522.774H3656.15V391.96C3656.15 382.011 3657.47 372.535 3660.09 363.886C3662.73 355.218 3666.86 347.337 3672.4 340.54C3677.96 333.704 3685.22 328.05 3694.07 323.657C3703.27 318.67 3713.45 315.746 3723.9 315.087C3734.16 314.299 3743.44 314.949 3751.56 316.899V265.342C3743.45 264.196 3735.26 263.892 3727.09 264.436ZM2018.96 173.851V523.483H2280.08V470.665H2078.26V173.851H2018.96ZM2419.32 256.831C2362.43 256.831 2319.83 281.418 2302.54 324.327L2298.1 335.339L2346.9 364.418L2353.52 348.46C2364.83 321.293 2385.75 308.664 2419.32 308.664C2452.87 308.664 2472.08 323.637 2471.73 353.228C2471.73 354.449 2471.63 358.074 2471.63 358.074C2471.63 358.074 2427.22 364.733 2408.94 368.279C2330.89 383.508 2298.16 410.951 2298.16 455.948C2298.16 479.905 2312.6 505.831 2338.94 520.37C2354.76 529.118 2375.39 532.388 2398.14 532.388C2413.12 532.388 2427.66 530.339 2441.17 526.537C2471.83 517.159 2480.34 498.719 2480.34 498.719V522.813H2531.09V350.371C2531.09 291.761 2489.32 256.792 2419.38 256.792L2419.32 256.831ZM2471.88 440.857C2471.88 458.982 2450.47 484.495 2400.59 484.495C2386.54 484.495 2376.53 481.047 2369.89 475.925C2366.01 473.04 2362.97 469.161 2361.1 464.696C2359.23 460.23 2358.6 455.344 2359.27 450.55C2359.83 446.807 2362.27 438.631 2371.47 431.578C2380.85 424.328 2397.4 419.206 2423.01 414.045C2439.25 410.876 2455.54 407.914 2471.87 405.159L2471.88 440.857ZM3904.69 256.831C3847.8 256.831 3805.2 281.418 3787.91 324.327L3783.49 335.339L3832.27 364.418L3838.91 348.46C3850.2 321.293 3871.14 308.664 3904.71 308.664C3938.24 308.664 3957.45 323.637 3957.12 353.228C3957.12 354.449 3957.02 358.074 3957.02 358.074C3957.02 358.074 3912.59 364.733 3894.33 368.279C3816.26 383.508 3783.53 410.951 3783.53 455.948C3783.53 479.905 3797.97 505.831 3824.31 520.37C3840.13 529.118 3860.76 532.388 3883.51 532.388C3898.51 532.388 3913.07 530.339 3926.54 526.537C3957.22 517.159 3965.71 498.719 3965.71 498.719V522.813H4016.46V350.371C4016.46 291.761 3974.69 256.792 3904.75 256.792L3904.69 256.831ZM3957.26 440.857C3957.26 458.982 3935.84 484.495 3885.98 484.495C3871.91 484.495 3861.9 481.047 3855.26 475.925C3851.38 473.039 3848.34 469.159 3846.47 464.694C3844.6 460.229 3843.97 455.344 3844.64 450.55C3845.2 446.807 3847.66 438.631 3856.86 431.578C3866.22 424.328 3882.79 419.206 3908.38 414.045C3929.46 409.829 3957.26 405.159 3957.26 405.159V440.857ZM2718.56 256.831C2711.49 256.831 2704.61 257.265 2697.97 258.132C2652.52 264.436 2639.22 285.713 2639.22 285.713V264.436H2582.37V522.951H2641.67V379.568C2641.67 330.848 2680.18 308.645 2716 308.645C2754.71 308.645 2773.55 327.853 2773.55 367.314V522.912H2832.85V359.788C2832.85 296.233 2789.07 256.772 2718.58 256.772L2718.56 256.831ZM3080.25 264.258V290.874C3080.25 290.874 3065.71 256.792 2999.63 256.792C2917.54 256.792 2866.49 309.078 2866.49 393.181C2866.49 440.66 2882.94 478.033 2912 501.635C2934.54 519.996 2964.7 529.413 3000.66 530.044C3025.62 530.497 3041.83 524.192 3051.9 518.262C3071.3 506.895 3078.5 496.059 3078.5 496.059C3078.5 496.059 3077.65 504.531 3076.17 515.997C3075.09 524.291 3073.08 530.142 3073.08 530.142C3064.04 559.772 3037.66 576.892 2999.14 576.892C2960.63 576.892 2937.28 565.21 2932.67 542.179L2875.04 558.038C2885.01 602.306 2930.07 628.765 2995.55 628.765C3040.08 628.765 3074.99 617.614 3099.32 595.569C3123.83 573.366 3136.3 541.332 3136.3 500.374V264.258H3080.25ZM3076.53 395.585C3076.53 447.339 3049.1 478.23 3003.24 478.23C2954.05 478.23 2925.83 447.241 2925.83 393.24C2925.83 339.24 2954.05 308.704 3003.22 308.704C3048.02 308.704 3076.13 339.457 3076.53 388.985V395.585Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_310_583">
                            <rect width="2699.02" height="472.822" fill="white" transform="translate(1979.59 168.926)"/>
                            </clipPath>
                            </defs>
                            </svg>

                        </div>
                    </div>

                    {/* Mobile Image - Shows only on mobile */}
                    <div className="flex justify-center items-center mt-6 lg:hidden">
                        <img src="acronomics.png" alt="Acronomics Agent" className="w-54 max-w-xs"/>
                    </div>

                    {/* Mobile Accordion Sections - Shows only on mobile */}
                    <div className="lg:hidden space-y-4 px-4 overflow-y-auto flex-1 mt-6">
                        {/* Core Features Accordion */}
                        <div className="border-b border-[#1b1b1b]">
                            <button
                                onClick={() => setOpenSection1(openSection1 === 'features' ? null : 'features')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['Lamora']">CORE FEATURES:</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection1 === 'features' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection1 === 'features' && (
                                <ul className="pb-4 space-y-2 text-sm leading-relaxed">
                                    <li>• AI CHAT: EXPERT AGRONOMY Q&A WITH SAVED HISTORY</li>
                                    <li>• PLANT DISEASE DETECTION: IMAGE UPLOADS → DIAGNOSIS + TREATMENT</li>
                                    <li>• DOC INTELLIGENCE (RAG): UPLOAD PDFS/XLSX, SEMANTIC SEARCH</li>
                                    <li>• WEATHER: LOCATION-AWARE FORECASTS FOR FARMING DECISIONS</li>
                                    <li>• LIVE WEB SEARCH: FRESH AGRONOMY INFO RETRIEVAL</li>
                                    <li>• AUTH & MULTI-USER: GOOGLE/GITHUB OAUTH, ISOLATED DATA</li>
                                </ul>
                            )}
                        </div>

                        {/* How It Works Accordion */}
                        <div className="border-b border-[#1b1b1b]">
                            <button
                                onClick={() => setOpenSection1(openSection1 === 'flow' ? null : 'flow')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['Lamora']">HOW IT WORKS (FLOW):</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection1 === 'flow' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection1 === 'flow' && (
                                <div className="pb-4 text-sm leading-relaxed space-y-1">
                                    <p>• USER MESSAGE → FASTAPI → LANGGRAPH ROUTES TOOLS (WEATHER/</p>
                                    <p className="pl-4">SEARCH/RAG/VISION) → LANGCHAIN + GPT GENERATE ANSWER →</p>
                                    <p className="pl-4">STREAM TO REACT UI → PERSIST TO FIRESTORE.</p>
                                </div>
                            )}
                        </div>

                        {/* Tech Stack Accordion */}
                        <div className="border-b border-[#1b1b1b]">
                            <button
                                onClick={() => setOpenSection1(openSection1 === 'tech' ? null : 'tech')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['Lamora']">TECH STACK:</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection1 === 'tech' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection1 === 'tech' && (
                                <ul className="pb-4 space-y-2 text-sm leading-relaxed">
                                    <li>• FRONTEND: REACT 19, VITE, TAILWIND, FIREBASE, REACT ROUTER</li>
                                    <li>• BACKEND: FASTAPI, LANGGRAPH, LANGCHAIN, OPENAI GPT-4O-MINI</li>
                                    <li>• DATA: QDRANT (VECTORS), FIRESTORE (CHATS)</li>
                                    <li>• APIS: OPENWEATHERMAP, AGROMONITORING, OPENAI VISION</li>
                                </ul>
                            )}
                        </div>

                        {/* Key Scenarios Accordion */}
                        <div className="border-b border-[#1b1b1b]">
                            <button
                                onClick={() => setOpenSection1(openSection1 === 'scenarios' ? null : 'scenarios')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['Lamora']">KEY SCENARIOS:</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection1 === 'scenarios' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection1 === 'scenarios' && (
                                <ul className="pb-4 space-y-2 text-sm leading-relaxed">
                                    <li>• "WILL IT RAIN FOR PADDY SOWING?" → WEATHER TOOL</li>
                                    <li>• LEAF PHOTO UPLOAD → VISION DIAGNOSIS + REMEDY</li>
                                    <li>• "FIND DOSAGE IN MY PDF" → RAG OVER UPLOADED DOCS</li>
                                    <li>• "LATEST RUST CONTROL METHODS" → WEB SEARCH + CITATIONS</li>
                                </ul>
                            )}
                        </div>
                    </div>

                </div>


            {/* AutoCare Voice */}
                <div className="section-slide w-screen lg:h-screen flex flex-col bg-[#1b1b1b] text-[#F8FBF8] px-12 py-8 relative lg:overflow-hidden min-h-screen">
                    {/* Title */}
                    <div className="flex flex-col items-center text-center mb-4 lg:mb-80 mt-20 tracking-wide z-10 space-y-5">
                        <h1 className="text-xl lg:text-4xl xl:text-5xl text-center">AUTOCARE VOICE AI PROJECT</h1>
                        <p className="text-sm md:text-2xl text-center md:text-left ml-0 md:ml-15 w-sm md:w-4xl">Voice-powered automotive assistant for vehicle diagnostics,maintenance scheduling, parts lookup, and repair guidance.</p>
                    </div>

                    {/* Positioned Images - Desktop Only */}

                    {/* Tech Stack Section - Top Left */}
                    <div className="hidden lg:block absolute top-24 left-12 group">
                        <img src="autocare/autocare 3.png" alt="Tech Stack" className="w-78 h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105" />
                        <p className="text-sm font-semibold uppercase tracking-wide font-['tiempos'] text-left">Tech Stack</p>

                        {/* Tech Stack Details - Shows on Hover */}
                        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6 bg-[#F8FBF8]/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#F8FBF8]/10 max-w-sm z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['tiempos'] text-center border-b border-[#1b1b1b]/20 pb-2 text-[#1b1b1b]">Tech Stack</h4>
                            <ul className="space-y-2 text-xs leading-relaxed text-[#1b1b1b]">
                                <li>• FRONTEND: REACT 19, VITE, TAILWIND, WEB SPEECH API</li>
                                <li>• BACKEND: NODE.JS, EXPRESS, SOCKET.IO, OPENAI WHISPER</li>
                                <li>• AI: GPT-4, WHISPER (SPEECH-TO-TEXT), TTS (TEXT-TO-SPEECH)</li>
                                <li>• DATA: MONGODB, REDIS CACHE, VEHICLE DATABASE API</li>
                                <li>• APIS: VIN DECODER, PARTS CATALOG, DIAGNOSTIC CODES</li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Scenarios Section - Top Right */}
                    <div className="hidden lg:block absolute top-12 right-56 group">
                        <img src="/autocare/autocare 4.png" alt="Scenarios" className="w-64 h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105" />
                        <p className="text-sm font-semibold uppercase tracking-wide font-['tiempos'] text-left">Key Scenarios</p>

                        {/* Key Scenarios Details - Shows on Hover */}
                        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6 bg-[#F8FBF8]/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#F8FBF8]/10 z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['tiempos'] text-center border-b border-[#1b1b1b]/20 pb-2 text-[#1b1b1b]">Key Scenarios</h4>
                            <ul className="space-y-2 text-xs leading-relaxed text-[#1b1b1b]">
                                <li>• "CHECK ENGINE LIGHT P0420" → DIAGNOSTIC CODE LOOKUP + FIX</li>
                                <li>• "SCHEDULE OIL CHANGE FOR MY CIVIC" → MAINTENANCE BOOKING</li>
                                <li>• "FIND BRAKE PADS FOR 2020 TOYOTA CAMRY" → PARTS SEARCH</li>
                                <li>• "HOW TO REPLACE CABIN AIR FILTER" → REPAIR GUIDE + VIDEO</li>
                            </ul>
                        </div>
                    </div>

                    {/* Core Features Section - Center */}
                    <div className="hidden lg:flex flex-col items-left absolute left-220 top-72 transform -translate-x-1/4 group">
                        <img src="/autocare/stive.png" alt="AutoCare Voice" className="max-w-sm w-60 lg:w-full lg:max-w-120 mb-2 cursor-pointer transition-transform hover:scale-105"/>
                        <p className="text-sm font-semibold uppercase tracking-wide font-['tiempos'] text-left mb-4">Core Features</p>

                        {/* Core Features Details - Shows on Hover */}
                        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6 bg-[#F8FBF8]/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#F8FBF8]/10 max-w-2xl z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['tiempos'] text-left border-b border-[#1b1b1b]/20 pb-2 text-[#1b1b1b]">Core Features</h4>
                            <ul className="space-y-2 text-xs leading-relaxed text-[#1b1b1b]">
                                <li>• VOICE INTERACTION: HANDS-FREE VEHICLE DIAGNOSTICS & QUERIES</li>
                                <li>• DIAGNOSTIC CODES: OBD-II CODE LOOKUP WITH REPAIR SOLUTIONS</li>
                                <li>• MAINTENANCE SCHEDULER: AUTOMATED SERVICE REMINDERS & BOOKING</li>
                                <li>• PARTS FINDER: VIN-BASED PARTS SEARCH WITH PRICING</li>
                                <li>• REPAIR GUIDES: STEP-BY-STEP INSTRUCTIONS WITH VIDEOS</li>
                                <li>• VEHICLE PROFILE: MULTI-VEHICLE MANAGEMENT & HISTORY TRACKING</li>
                            </ul>
                        </div>
                    </div>

                    {/* How It Works Section - Bottom Left */}
                    <div className="hidden lg:block absolute bottom-30 left-80 group">
                        <img src="autocare/autocare 2.png" alt="Workflow" className="w-76 h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105" />
                        <p className="text-sm font-semibold uppercase tracking-wide font-['tiempos'] text-left">How It Works</p>

                        {/* How It Works Details - Shows on Hover */}
                        <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6 bg-[#F8FBF8]/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#F8FBF8]/10 max-w-md z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['tiempos'] text-left border-b border-[#1b1b1b]/20 pb-2 text-[#1b1b1b]">How It Works (Flow)</h4>
                            <div className="text-xs leading-relaxed space-y-1 text-[#1b1b1b]">
                                <p>• VOICE INPUT → WHISPER SPEECH-TO-TEXT → EXPRESS API →</p>
                                <p className="pl-4">INTENT CLASSIFICATION → ROUTE TO SERVICE (DIAGNOSTIC/PARTS/</p>
                                <p className="pl-4">MAINTENANCE) → GPT-4 GENERATES RESPONSE → TTS →</p>
                                <p className="pl-4">VOICE OUTPUT + UI UPDATE → SAVE TO MONGODB.</p>
                            </div>
                        </div>
                    </div>

                    {/* Logo/Branding Section - Bottom Right */}
                    <div className="hidden lg:block absolute bottom-36 space-y-10 right-32">
                        <img src="autocare/autocare5.png" alt="AutoCare Logo" className="w-86 h-auto object-contain" />
                    </div>

                    {/* Mobile Image - Shows only on mobile */}
                    <div className="flex justify-center items-center mt-6 lg:hidden">
                        <img src="autocare/stive.png" alt="AutoCare Voice" className="w-54 max-w-xs"/>
                    </div>

                    {/* Mobile Accordion Sections - Shows only on mobile */}
                    <div className="lg:hidden space-y-4 px-4 overflow-y-auto flex-1 mt-6">
                        {/* Core Features Accordion */}
                        <div className="border-b border-[#F8FBF8]">
                            <button
                                onClick={() => setOpenSection2(openSection2 === 'features' ? null : 'features')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['tiempos']">CORE FEATURES:</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection2 === 'features' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection2 === 'features' && (
                                <ul className="pb-4 space-y-2 text-sm leading-relaxed">
                                    <li>• VOICE INTERACTION: HANDS-FREE VEHICLE DIAGNOSTICS & QUERIES</li>
                                    <li>• DIAGNOSTIC CODES: OBD-II CODE LOOKUP WITH REPAIR SOLUTIONS</li>
                                    <li>• MAINTENANCE SCHEDULER: AUTOMATED SERVICE REMINDERS & BOOKING</li>
                                    <li>• PARTS FINDER: VIN-BASED PARTS SEARCH WITH PRICING</li>
                                    <li>• REPAIR GUIDES: STEP-BY-STEP INSTRUCTIONS WITH VIDEOS</li>
                                    <li>• VEHICLE PROFILE: MULTI-VEHICLE MANAGEMENT & HISTORY TRACKING</li>
                                </ul>
                            )}
                        </div>

                        {/* How It Works Accordion */}
                        <div className="border-b border-[#F8FBF8]">
                            <button
                                onClick={() => setOpenSection2(openSection2 === 'flow' ? null : 'flow')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['tiempos']">HOW IT WORKS (FLOW):</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection2 === 'flow' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection2 === 'flow' && (
                                <div className="pb-4 text-sm leading-relaxed space-y-1">
                                    <p>• VOICE INPUT → WHISPER SPEECH-TO-TEXT → EXPRESS API →</p>
                                    <p className="pl-4">INTENT CLASSIFICATION → ROUTE TO SERVICE (DIAGNOSTIC/PARTS/</p>
                                    <p className="pl-4">MAINTENANCE) → GPT-4 GENERATES RESPONSE → TTS →</p>
                                    <p className="pl-4">VOICE OUTPUT + UI UPDATE → SAVE TO MONGODB.</p>
                                </div>
                            )}
                        </div>

                        {/* Tech Stack Accordion */}
                        <div className="border-b border-[#F8FBF8]">
                            <button
                                onClick={() => setOpenSection2(openSection2 === 'tech' ? null : 'tech')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['tiempos']">TECH STACK:</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection2 === 'tech' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection2 === 'tech' && (
                                <ul className="pb-4 space-y-2 text-sm leading-relaxed">
                                    <li>• FRONTEND: REACT 19, VITE, TAILWIND, WEB SPEECH API</li>
                                    <li>• BACKEND: NODE.JS, EXPRESS, SOCKET.IO, OPENAI WHISPER</li>
                                    <li>• AI: GPT-4, WHISPER (SPEECH-TO-TEXT), TTS (TEXT-TO-SPEECH)</li>
                                    <li>• DATA: MONGODB, REDIS CACHE, VEHICLE DATABASE API</li>
                                    <li>• APIS: VIN DECODER, PARTS CATALOG, DIAGNOSTIC CODES</li>
                                </ul>
                            )}
                        </div>

                        {/* Key Scenarios Accordion */}
                        <div className="border-b border-[#F8FBF8]">
                            <button
                                onClick={() => setOpenSection2(openSection2 === 'scenarios' ? null : 'scenarios')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['tiempos']">KEY SCENARIOS:</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection2 === 'scenarios' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection2 === 'scenarios' && (
                                <ul className="pb-4 space-y-2 text-sm leading-relaxed">
                                    <li>• "CHECK ENGINE LIGHT P0420" → DIAGNOSTIC CODE LOOKUP + FIX</li>
                                    <li>• "SCHEDULE OIL CHANGE FOR MY CIVIC" → MAINTENANCE BOOKING</li>
                                    <li>• "FIND BRAKE PADS FOR 2020 TOYOTA CAMRY" → PARTS SEARCH</li>
                                    <li>• "HOW TO REPLACE CABIN AIR FILTER" → REPAIR GUIDE + VIDEO</li>
                                </ul>
                            )}
                        </div>
                    </div>

                </div>

            {/* Research Agent */}
                <div className="section-slide w-screen lg:h-screen flex flex-col bg-[#F8FBF8] text-[#1b1b1b] px-12 py-8 relative lg:overflow-hidden min-h-screen">
                    {/* Title */}
                    <div className="flex flex-col items-center text-center mb-4 lg:mb-80 mt-20 tracking-wide z-10 space-y-5">
                        <h1 className="text-xl lg:text-4xl xl:text-5xl">ADVANCED MULTI-DOMAIN RESEARCH AGENT</h1>
                        <p className="text-sm md:text-2xl text-center md:text-left ml-0 md:ml-15 w-sm md:w-4xl">AI-powered research assistant with deep web search across 5 specialized domains with intelligent content analysis.</p>
                    </div>

                    {/* Positioned Images - Desktop Only */}

                    {/* Tech Stack Section - Top Left */}
                    <div className="hidden lg:block absolute top-24 left-12 group">
                        <img src="research/reserch1.png" alt="Tech Stack" className="w-78 h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105" />
                        <p className="text-sm font-semibold uppercase tracking-wide font-['Lamora'] text-left">Tech Stack</p>

                        {/* Tech Stack Details - Shows on Hover */}
                        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#1b1b1b]/10 max-w-sm z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['Lamora'] text-center border-b border-[#1b1b1b]/20 pb-2">Tech Stack</h4>
                            <ul className="space-y-2 text-xs leading-relaxed">
                                <li>• FRONTEND: REACT 19, VITE 7, TAILWIND CSS, REACT MARKDOWN</li>
                                <li>• BACKEND: PYTHON 3.13, FASTAPI, UVICORN, LANGCHAIN, LANGGRAPH</li>
                                <li>• AI: OPENAI GPT-4O-MINI, TEXT-EMBEDDING-3-SMALL</li>
                                <li>• DATA: MARKDOWN KB + OPENAI EMBEDDINGS</li>
                                <li>• APIS: FIRECRAWL (SEARCH + SCRAPE), OPENAI SDK</li>
                                <li>• TOOLS: TYPER CLI, RICH CONSOLE, UV PACKAGE MANAGER</li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Scenarios Section - Top Right */}
                    <div className="hidden lg:block absolute top-12 right-56 group">
                        <img src="research/reserch2.png" alt="Scenarios" className="w-64 h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105" />
                        <p className="text-sm font-semibold uppercase tracking-wide font-['Lamora'] text-left">Key Scenarios</p>

                        {/* Key Scenarios Details - Shows on Hover */}
                        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#1b1b1b]/10 z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['Lamora'] text-center border-b border-[#1b1b1b]/20 pb-2">Key Scenarios</h4>
                            <ul className="space-y-2 text-xs leading-relaxed">
                                <li>• "BEST PYTHON TESTING FRAMEWORKS" → SEARCHES → ANALYZES</li>
                                <li>• "TOP AI DIAGNOSTIC TOOLS FOR CARDIOLOGY" → MEDICAL DOMAIN</li>
                                <li>• "COMPARE EV CHARGING STANDARDS" → AUTOMOTIVE PIPELINE</li>
                                <li>• "CBT TOOLS WITH HIPAA COMPLIANCE" → PSYCHOLOGY DOMAIN</li>
                                <li>• "ECO-FRIENDLY FASHION BRANDS" → FASHION INSIGHTS</li>
                            </ul>
                        </div>
                    </div>

                    {/* Core Features Section - Center */}
                    <div className="hidden lg:flex flex-col items-left absolute left-220 top-72 transform -translate-x-1/4 group">
                        <img src="research/RESEARCH AGENT.png" alt="Research Agent" className="max-w-sm w-60 lg:w-full lg:max-w-120 mb-2 cursor-pointer transition-transform hover:scale-105"/>
                        <p className="text-sm font-semibold uppercase tracking-wide font-['Lamora'] text-left mb-4">Core Features</p>

                        {/* Core Features Details - Shows on Hover */}
                        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#1b1b1b]/10 max-w-2xl z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['Lamora'] text-left border-b border-[#1b1b1b]/20 pb-2">Core Features</h4>
                            <ul className="space-y-2 text-xs leading-relaxed">
                                <li>• AI RESEARCH ASSISTANT: DEEP WEB RESEARCH ACROSS 5 DOMAINS</li>
                                <li>• MULTI-DOMAIN INTELLIGENCE: DEVELOPER, MEDICAL, AUTO, PSYCH, FASHION</li>
                                <li>• SMART WEB SCRAPING: AUTOMATED CONTENT DISCOVERY WITH FIRECRAWL</li>
                                <li>• KNOWLEDGE BASE (RAG): MARKDOWN + OPENAI EMBEDDINGS</li>
                                <li>• LANGGRAPH WORKFLOW: PARALLEL ENTITY ANALYSIS, FAULT-TOLERANT</li>
                                <li>• CHAT INTERFACE: REAL-TIME CONVERSATION WITH MARKDOWN RENDERING</li>
                            </ul>
                        </div>
                    </div>

                    {/* How It Works Section - Bottom Left */}
                    <div className="hidden lg:block absolute bottom-30 left-80 group">
                        <img src="research/reserch3.png" alt="Workflow" className="w-76 h-auto object-contain mb-2 cursor-pointer transition-transform hover:scale-105" />
                        <p className="text-sm font-semibold uppercase tracking-wide font-['Lamora'] text-left">How It Works</p>

                        {/* How It Works Details - Shows on Hover */}
                        <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#1b1b1b]/10 max-w-md z-10">
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide font-['Lamora'] text-left border-b border-[#1b1b1b]/20 pb-2">How It Works (Flow)</h4>
                            <div className="text-xs leading-relaxed space-y-1">
                                <p>• USER QUERY → FASTAPI ENDPOINT (/API/CHAT) → LANGGRAPH ENGINE</p>
                                <p className="pl-4">→ DETECT SMALL TALK / EXTRACT ENTITIES → FIRECRAWL SEARCH +</p>
                                <p className="pl-4">SCRAPE → ANALYZE RESULTS USING OPENAI GPT-4O-MINI →</p>
                                <p className="pl-4">STREAM RESPONSE → REACT UI → PERSIST TO LOCAL KB.</p>
                            </div>
                        </div>
                    </div>

                    {/* Logo/Branding Section - Bottom Right */}
                    <div className="hidden lg:block absolute bottom-36 space-y-10 right-32">
                        <img src="research/reserch4.png" alt="Research Agent Logo" className="w-86 h-auto object-contain" />
                    </div>

                    {/* Mobile Image - Shows only on mobile */}
                    <div className="flex justify-center items-center mt-6 lg:hidden">
                        <img src="research/RESEARCH AGENT.png" alt="Research Agent" className="w-54 max-w-xs"/>
                    </div>

                    {/* Mobile Accordion Sections - Shows only on mobile */}
                    <div className="lg:hidden space-y-4 px-4 overflow-y-auto flex-1 mt-6">
                        {/* Core Features Accordion */}
                        <div className="border-b border-[#1b1b1b]">
                            <button
                                onClick={() => setOpenSection2(openSection2 === 'features' ? null : 'features')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['Lamora']">CORE FEATURES:</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection2 === 'features' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection2 === 'features' && (
                                <ul className="pb-4 space-y-2 text-sm leading-relaxed">
                                    <li>• AI RESEARCH ASSISTANT: DEEP WEB RESEARCH ACROSS 5 DOMAINS</li>
                                    <li>• MULTI-DOMAIN INTELLIGENCE: DEVELOPER, MEDICAL, AUTO, PSYCH, FASHION</li>
                                    <li>• SMART WEB SCRAPING: AUTOMATED CONTENT DISCOVERY WITH FIRECRAWL</li>
                                    <li>• KNOWLEDGE BASE (RAG): MARKDOWN + OPENAI EMBEDDINGS</li>
                                    <li>• LANGGRAPH WORKFLOW: PARALLEL ENTITY ANALYSIS, FAULT-TOLERANT</li>
                                    <li>• CHAT INTERFACE: REAL-TIME CONVERSATION WITH MARKDOWN RENDERING</li>
                                </ul>
                            )}
                        </div>

                        {/* How It Works Accordion */}
                        <div className="border-b border-[#1b1b1b]">
                            <button
                                onClick={() => setOpenSection2(openSection2 === 'flow' ? null : 'flow')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['Lamora']">HOW IT WORKS (FLOW):</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection2 === 'flow' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection2 === 'flow' && (
                                <div className="pb-4 text-sm leading-relaxed space-y-1">
                                    <p>• USER QUERY → FASTAPI ENDPOINT (/API/CHAT) → LANGGRAPH ENGINE</p>
                                    <p className="pl-4">→ DETECT SMALL TALK / EXTRACT ENTITIES → FIRECRAWL SEARCH +</p>
                                    <p className="pl-4">SCRAPE → ANALYZE RESULTS USING OPENAI GPT-4O-MINI →</p>
                                    <p className="pl-4">STREAM RESPONSE → REACT UI → PERSIST TO LOCAL KB.</p>
                                </div>
                            )}
                        </div>

                        {/* Tech Stack Accordion */}
                        <div className="border-b border-[#1b1b1b]">
                            <button
                                onClick={() => setOpenSection2(openSection2 === 'tech' ? null : 'tech')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['Lamora']">TECH STACK:</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection2 === 'tech' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection2 === 'tech' && (
                                <ul className="pb-4 space-y-2 text-sm leading-relaxed">
                                    <li>• FRONTEND: REACT 19, VITE 7, TAILWIND CSS, REACT MARKDOWN</li>
                                    <li>• BACKEND: PYTHON 3.13, FASTAPI, UVICORN, LANGCHAIN, LANGGRAPH</li>
                                    <li>• AI: OPENAI GPT-4O-MINI, TEXT-EMBEDDING-3-SMALL</li>
                                    <li>• DATA: MARKDOWN KB + OPENAI EMBEDDINGS</li>
                                    <li>• APIS: FIRECRAWL (SEARCH + SCRAPE), OPENAI SDK</li>
                                    <li>• TOOLS: TYPER CLI, RICH CONSOLE, UV PACKAGE MANAGER</li>
                                </ul>
                            )}
                        </div>

                        {/* Key Scenarios Accordion */}
                        <div className="border-b border-[#1b1b1b]">
                            <button
                                onClick={() => setOpenSection2(openSection2 === 'scenarios' ? null : 'scenarios')}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <h3 className="text-lg font-semibold uppercase tracking-wide font-['Lamora']">KEY SCENARIOS:</h3>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openSection2 === 'scenarios' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openSection2 === 'scenarios' && (
                                <ul className="pb-4 space-y-2 text-sm leading-relaxed">
                                    <li>• "BEST PYTHON TESTING FRAMEWORKS" → SEARCHES → ANALYZES</li>
                                    <li>• "TOP AI DIAGNOSTIC TOOLS FOR CARDIOLOGY" → MEDICAL DOMAIN</li>
                                    <li>• "COMPARE EV CHARGING STANDARDS" → AUTOMOTIVE PIPELINE</li>
                                    <li>• "CBT TOOLS WITH HIPAA COMPLIANCE" → PSYCHOLOGY DOMAIN</li>
                                    <li>• "ECO-FRIENDLY FASHION BRANDS" → FASHION INSIGHTS</li>
                                </ul>
                            )}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AI_Projects_Details;