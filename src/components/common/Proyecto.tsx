import type { FC } from 'react'
import { LuGithub } from 'react-icons/lu'
import clsx from 'clsx'
import { FaLink } from 'react-icons/fa6'

type Props = {
    imageSrc: string
    imageAlt: string
    titulo: string
    subtitulo: string
    descripcion: string
    demoSrc: string
    repoSrc: string
}

const Proyecto: FC<Props> = ({
    titulo,
    subtitulo,
    descripcion,
    imageSrc,
    imageAlt,
    demoSrc,
    repoSrc,
}) => {
    return (
        <section
            className={clsx(
                'p-3',
                'flex w-full justify-between gap-2 shadow-sm shadow-zinc-500/55',
                'rounded-2xl max-[661px]:flex-wrap max-[661px]:justify-center'
            )}
        >
            <article className={clsx('text-white')}>
                <h3 className={clsx('text-2xl font-[560]')}>{titulo}</h3>
                <h4 className={clsx('mb-2 text-xl font-[550]')}>{subtitulo}</h4>
                <p className={clsx('text-sm')}>{descripcion}</p>
                <section className={clsx('mt-3')}>
                    <nav>
                        <ul className={clsx('flex gap-2')}>
                            <li
                                className={clsx(
                                    'h-8 w-fit rounded-2xl border border-zinc-400'
                                )}
                            >
                                <a
                                    href={demoSrc}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        'flex h-full items-center px-3'
                                    )}
                                >
                                    <FaLink className="h-6 w-6 text-zinc-400" />
                                </a>
                            </li>

                            <li
                                className={clsx(
                                    'h-8 w-fit rounded-2xl border border-zinc-400'
                                )}
                            >
                                <a
                                    href={repoSrc}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        'flex h-full items-center px-3'
                                    )}
                                >
                                    <LuGithub className="h-6 w-6 text-zinc-400" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </article>
            <img
                className={clsx(
                    'h-[200px] w-[300px] rounded-xl max-[661px]:mt-4'
                )}
                src={imageSrc}
                alt={imageAlt}
            />
        </section>
    )
}

export default Proyecto
