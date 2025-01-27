import type { FC } from 'react'
import { LuGithub } from 'react-icons/lu'
import clsx from 'clsx'
import { FaLink } from 'react-icons/fa6'

type Props = {
    iconSrc: string
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
    iconSrc,
    imageSrc,
    imageAlt,
    demoSrc,
    repoSrc,
}) => {
    return (
        <section
            className={clsx(
                'flex w-full justify-between gap-2',
                'max-[661px]:flex-wrap max-[661px]:justify-center'
            )}
        >
            <div className={clsx('flex gap-1 max-[661px]:w-full')}>
                <img
                    className={clsx('mt-2 h-[32px] w-[32px]')}
                    src={iconSrc}
                    alt="icon"
                />
                <article className={clsx('text-white')}>
                    <h3 className={clsx('text-2xl font-[560]')}>{titulo}</h3>
                    <h4 className={clsx('mb-2 text-xl font-[550]')}>
                        {subtitulo}
                    </h4>
                    <p className={clsx('text-sm')}>{descripcion}</p>
                    <section className={clsx('mt-3')}>
                        <nav>
                            <ul className={clsx('flex gap-2')}>
                                <li
                                    className={clsx(
                                        'h-8 w-fit rounded-2xl border border-blue-600'
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
                                        <FaLink className="h-6 w-6 text-blue-600" />
                                    </a>
                                </li>

                                <li
                                    className={clsx(
                                        'h-8 w-fit rounded-2xl border border-blue-600'
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
                                        <LuGithub className="h-6 w-6 text-blue-600" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </article>
            </div>
            <img
                className={clsx('h-[200px] w-[300px] max-[661px]:mt-4')}
                src={imageSrc}
                alt={imageAlt}
            />
        </section>
    )
}

export default Proyecto
