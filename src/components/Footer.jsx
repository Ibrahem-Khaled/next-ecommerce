import Link from 'next/link';

export default function Footer() {
    const COMPANY_NAME = "Your Company";
    const SITE_NAME = "Your Site";

    const currentYear = new Date().getFullYear();
    const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
    const copyrightName = COMPANY_NAME || SITE_NAME || '';

    return (
        <footer className="text-sm text-neutral-500 dark:text-neutral-400">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
                <div>
                    <Link href={''}>
                        <div className="flex items-center gap-2 text-black md:pt-1 dark:text-white uppercase">{SITE_NAME}</div>
                    </Link>
                </div>

                <div className="md:ml-auto">
                    <Link href={''}>
                        <div className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white" aria-label="Deploy on Vercel">
                            <span className="px-3">▲</span>
                            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
                            <span className="px-3">Deploy</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
                    <p>
                        &copy; {copyrightDate} {copyrightName}.
                        All rights reserved.
                    </p>
                    <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
                    <p>coding</p>
                    <p className="md:ml-auto">
                        <Link href="https://vercel.com" className="text-black dark:text-white">
                            Crafted by ▲ Vercel
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
