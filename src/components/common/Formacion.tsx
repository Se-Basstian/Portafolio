import clsx from 'clsx'
import type { FC, ReactNode } from 'react'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { MdOutlineSafetyCheck } from 'react-icons/md'

type Props = {
    estado: 'finalizado' | 'en progreso'
    titulo: string
    institucion: string
    seAprendio: string
    duracion: string
    leftIcon?: ReactNode
}

const Formacion: FC<Props> = ({
    estado,
    titulo,
    institucion,
    seAprendio,
    duracion,
    leftIcon,
}) => {
    let iconEstado = (
        <IoShieldCheckmarkOutline className="h-6 w-6 text-zinc-800" />
    )

    if (estado === 'en progreso') {
        iconEstado = <MdOutlineSafetyCheck className="h-6 w-6 text-zinc-800" />
    }

    return (
        <div className={clsx('flex w-full justify-between text-white')}>
            {leftIcon}
            <article className={clsx('ml-3 grow')}>
                <h2 className={clsx('text-2xl font-[560] max-[521px]:text-xl')}>
                    {titulo}
                </h2>
                <h3
                    className={clsx(
                        'mb-2 text-[1.1rem] font-[550] max-[521px]:mt-2 max-[521px]:text-[1rem]'
                    )}
                >
                    {institucion}
                </h3>
                <p className="text-lg max-[521px]:text-[1.1rem]">
                    {seAprendio}
                </p>
            </article>
            <div className="flex flex-col items-end gap-1 max-[521px]:hidden">
                <i className="text-lg">{duracion}</i>
                <div className="rounded-2xl bg-zinc-300 px-3 py-1">
                    {iconEstado}
                </div>
            </div>
        </div>
    )
}

export default Formacion
