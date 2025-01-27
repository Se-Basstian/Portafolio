import type { FC } from 'react'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { LuGithub } from 'react-icons/lu'
import { TiSocialLinkedin } from 'react-icons/ti'
import clsx from 'clsx'

const Navbar: FC = () => {
    return (
        <nav className="mt-5 h-fit">
            <ul
                className={clsx(
                    'flex flex-wrap gap-3 text-white max-[416px]:justify-center'
                )}
            >
                <li
                    className={clsx(
                        'rounded-2xl bg-blue-600 px-4 py-1 hover:bg-blue-500',
                        'h-8'
                    )}
                >
                    <a
                        href="mailto:p.sebastian.23.11.99@gmail.com"
                        className={clsx('flex items-center gap-2')}
                    >
                        <SlEnvolopeLetter />
                        p.sebastian.23.11.99@gmail.com
                    </a>
                </li>
                <li className={clsx('h-8 rounded-2xl border border-blue-600')}>
                    <a
                        href="/One-CV.pdf"
                        download
                        className={clsx('flex h-full items-center px-3')}
                    >
                        <IoDocumentTextOutline className="h-6 w-6 text-blue-600" />
                    </a>
                </li>
                <li className={clsx('h-8 rounded-2xl border border-blue-600')}>
                    <a
                        href="https://github.com/Se-Basstian/Se-Basstian"
                        target="_blank"
                        rel="noreferrer"
                        className={clsx('flex h-full items-center px-3')}
                    >
                        <LuGithub className="h-6 w-6 text-blue-600" />
                    </a>
                </li>
                <li className={clsx('h-8 rounded-2xl border border-blue-600')}>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/p-sebastian-l-m-015413261/"
                        rel="noreferrer"
                        className={clsx('flex h-full items-center px-3')}
                    >
                        <TiSocialLinkedin className="h-6 w-6 text-blue-600" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
