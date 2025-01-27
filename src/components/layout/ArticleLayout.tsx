import clsx from 'clsx'
import type { FC, ReactNode } from 'react'

type Props = {
    titulo: string
    children?: ReactNode
}

const ArticleLayout: FC<Props> = ({ titulo, children }) => {
    return (
        <article className={clsx('mt-16 mb-5 w-full')}>
            <h2
                className={clsx(
                    'text-3xl leading-12 font-semibold text-white uppercase',
                    'mb-5 max-[381px]:text-2xl max-[381px]:leading-10'
                )}
            >
                {titulo}
            </h2>
            {children}
        </article>
    )
}

export default ArticleLayout
