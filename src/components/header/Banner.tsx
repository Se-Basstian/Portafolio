import type { FC } from 'react'
import perfil from '../../assets/images/perfil.png'
import { IoLocationOutline } from 'react-icons/io5'
import clsx from 'clsx'
import Navbar from '../common/Navbar'

const Banner: FC = () => {
    return (
        <article
            className={clsx(
                'flex w-full gap-5 max-[554px]:flex-wrap max-[554px]:justify-center'
            )}
        >
            <img
                className={clsx('h-[194px] w-36 rounded-xl')}
                src={perfil}
                alt="Un hombre guapo"
            />
            <section className="min-h-48">
                <h1
                    className={clsx(
                        'text-4xl leading-12 font-bold text-white',
                        'max-[381px]:text-2xl max-[381px]:leading-7'
                    )}
                >
                    Percy Sebastian López Mallqui
                </h1>
                <h2
                    className={clsx(
                        'text-3xl leading-12 text-white',
                        'max-[381px]:text-2xl max-[381px]:leading-10'
                    )}
                >
                    Programador Front End
                </h2>
                <p
                    className={clsx(
                        'flex items-center text-xl leading-9 text-white'
                    )}
                >
                    <IoLocationOutline />
                    Chancay, Lima, Perú
                </p>
                <Navbar />
            </section>
        </article>
    )
}

export default Banner
