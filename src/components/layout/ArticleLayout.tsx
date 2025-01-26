import clsx from 'clsx'
import type { FC, ReactNode } from 'react'

type Props = {
    titulo: string
    children: ReactNode
    orientacion?: 'vertical' | 'horizontal'
}

const ArticleLayout: FC<Props> = ({
    titulo,
    children,
    orientacion = 'vertical',
}) => {
    return (
        <article className={clsx('mt-9 w-full pb-10')}>
            <h2
                className={clsx(
                    'text-3xl leading-12 font-semibold text-white',
                    'max-[381px]:text-2xl max-[381px]:leading-10'
                )}
            >
                {titulo}
            </h2>
            <section
                className={clsx('mt-5 w-full', {
                    'flex flex-wrap gap-3': orientacion === 'horizontal',
                })}
            >
                {children}
            </section>
        </article>
    )
}

export default ArticleLayout
