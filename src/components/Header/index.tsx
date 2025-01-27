import clsx from 'clsx'
import type { FC } from 'react'
import Banner from './Banner'

const Header: FC = () => {
    return (
        <header
            className={clsx(
                'w-full border-b-[1px] border-stone-700 pt-12 pb-8'
            )}
        >
            <Banner />

            <article className="mx-auto mt-8 max-w-[950px] px-8 max-[381px]:px-3">
                <h2
                    className={clsx(
                        'text-3xl leading-12 font-semibold text-white',
                        'max-[381px]:text-2xl max-[381px]:leading-10'
                    )}
                >
                    Sobre mí
                </h2>
                <p className="text-xl leading-8 text-white">
                    Soy un programador Front End apasionado por las tecnologías{' '}
                    <i>Open Source</i>, como linux. Me gradué en la carrera
                    técnica de «Soporte y Mantenimiento de Equipos de
                    Computación» en SENATI y también tuve la suerte de
                    participar en el programa de AluraOne donde aprendí todo lo
                    necesario para iniciar en el mundo fel Front End
                </p>
            </article>
        </header>
    )
}

export default Header
