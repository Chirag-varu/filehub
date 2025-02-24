"use client";

import Link from "next/link";
import { Button } from "@/Components/ui/button";
// import { useEffect } from "react";
// import toast from "react-hot-toast";
import FuzzyText from '@/Components/FuzzyText';

export default function page_not_found() {
    const enableHover = true; // Define enableHover variable
    const hoverIntensity = 0.5; // Define hoverIntensity variable

    return (
        <>
            <div className="md:flex flex-col items-center justify-center h-screen text-center hidden">
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={hoverIntensity}
                    enableHover={enableHover}
                >
                    404
                </FuzzyText>
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={hoverIntensity}
                    enableHover={enableHover}
                    fontSize={'clamp(1rem, 5vw, 5rem)'}
                >
                    Page Not Found
                </FuzzyText>
                <Link href="/">
                    <Button className="px-8 py-2 rounded-lg form-submit-button mt-4">
                        <FuzzyText
                            baseIntensity={0.2}
                            hoverIntensity={hoverIntensity}
                            enableHover={enableHover}
                            fontSize={'clamp(0.8rem, 2vw, 2rem)'}
                        >
                            Go Home
                        </FuzzyText>
                    </Button>
                </Link>
            </div>
            <div className="flex md:hidden flex-col items-center justify-center min-h-screen px-4 text-center">
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover={true}
                    fontSize="clamp(4rem, 12vw, 10rem)"
                    fontWeight={900}
                >
                    404
                </FuzzyText>

                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover={true}
                    fontSize="clamp(1.5rem, 6vw, 3rem)"
                    fontWeight={700}
                >
                    Page Not Found
                </FuzzyText>

                <Link href="/">
                    <Button className="px-6 py-3 rounded-lg form-submit-button mt-3">
                        <FuzzyText
                            baseIntensity={0.1}
                            hoverIntensity={hoverIntensity}
                            enableHover={enableHover}
                            fontSize={'clamp(0.8rem, 2vw, 2rem)'}
                        >
                            Go Home
                        </FuzzyText>
                    </Button>
                </Link>
            </div>
        </>
    );
}
