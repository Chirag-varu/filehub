import Image from "next/image";
import logo from "../favicon_io/android-chrome-512x512.png";
import file from "../../public/assets/images/files.png";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            {/* Left Section - Hidden on small screens */}
            <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
                <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
                    {/* Logo & Title */}
                    <div className="flex items-center space-x-3">
                        <Image src={logo} alt="FileHub Logo" width={80} height={82} />
                        <h1 className="h1 text-white">FileHub</h1>
                    </div>

                    {/* Intro Text */}
                    <div className="space-y-5 text-white">
                        <h1 className="h1">Manage your files the best way</h1>
                        <p className="body-1">
                            A secure place to store, organize, and share all your documents effortlessly.
                        </p>
                    </div>

                    {/* File Illustration */}
                    <Image
                        src={file}
                        alt="Files Illustration"
                        width={342}
                        height={342}
                        className="transition-transform duration-300 hover:rotate-2 hover:scale-105"
                    />
                </div>
            </section>

            {/* Right Section - Form or Content */}
            <section className="flex flex-1 flex-col items-center bg-white p-6 py-10 lg:justify-center lg:p-10">
                {/* Mobile Logo */}
                <div className="mb-6 flex items-center lg:hidden">
                    <Image
                        src={logo}
                        alt="FileHub Logo"
                        width={80}
                        height={80}
                        className="h-auto w-[180px] md:w-[200px]"
                    />
                    <h1 className="text-brand text-2xl font-semibold">FileHub</h1>
                </div>

                {children}
            </section>
        </div>
    );
};

export default Layout;
