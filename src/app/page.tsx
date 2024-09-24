import TypeWriter from "@/components/typewriter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen grid place-items-center">
            <div className="text-center">
                <TypeWriter duration={1} text="Emirhan Pişgin" className="text-2xl tracking-wider mx-auto" />
                <div className="text-lg animate-slide-in [--slide-in-delay:1200ms] duration-500 opacity-0">
                    Self-Study Web Developer from Turkey
                </div>
                <div className="flex flex-col items-center animate-slide-in [--slide-in-delay:1400ms] duration-500 opacity-0">
                    Socials
                    <div className="flex flex-col *:flex *:items-center *:gap-2">
                        <SocialLink href="https://www.youtube.com/@emirhanpisgin" src="youtube.svg">
                            @emirhanpisgin
                        </SocialLink>
                        <SocialLink href="https://github.com/emirhanpisgin" src="github.svg">
                            @emirhanpisgin
                        </SocialLink>
                        <SocialLink href="https://twitch.tv/kryparnold" src="twitch.svg">
                            @kryparnold
                        </SocialLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SocialLink({ src, href, children }: { src: string, href: string, children: React.ReactNode }) {
    return (
        <div>
            <div className="size-8 relative">
                <Image src={src} className="!text-white object-contain" fill alt={src.split(".")[0]} />
            </div>
            <Link href={href} target="_blank" className="hover:underline">
                {children}
            </Link>
        </div>
    );
}
