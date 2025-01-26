import type { FC } from 'react'
import ArticleLayout from '../layout/ArticleLayout'
import Tecnologia from '../common/Tecnologia'
import clsx from 'clsx'

const Main: FC = () => {
    return (
        <main className={clsx('w-full')}>
            <ArticleLayout orientacion="horizontal" titulo="Tecnologías">
                <Tecnologia opc="html" />
                <Tecnologia opc="css" />
                <Tecnologia opc="js" />
                <Tecnologia opc="ts" />
                <Tecnologia opc="react" />
            </ArticleLayout>
        </main>
    )
}

export default Main
