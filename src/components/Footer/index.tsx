import type { FC } from 'react'
import Navbar from '../common/Navbar'
import clsx from 'clsx'

type Props = {
    nombre: string
}
const Footer: FC<Props> = ({ nombre }) => {
    return (
        <footer
            className={clsx(
                'mt-16 h-36 w-full text-white',
                'bg-linear-to-b from-sky-800 to-gray-500'
            )}
        >
            <article
                className={clsx(
                    'mx-auto h-full max-w-[950px] px-8 max-[381px]:px-3',
                    'flex flex-col justify-center max-[401px]:items-center'
                )}
            >
                <h2 className="w-fit text-2xl font-semibold max-[401px]:text-xl">
                    {nombre}
                </h2>
                <Navbar />
            </article>
        </footer>
    )
}

export default Footer
