import type { FC } from 'react'
import iconHtml from '../../assets/images/tecnologias/html-5.png'
import iconCss from '../../assets/images/tecnologias/css.png'
import iconJs from '../../assets/images/tecnologias/js.png'
import iconTs from '../../assets/images/tecnologias/ts.png'
import iconReact from '../../assets/images/tecnologias/react.png'
import clsx from 'clsx'

const listTecnologia = {
    html: {
        nombre: 'html',
        src: iconHtml,
    },
    css: {
        nombre: 'css',
        src: iconCss,
    },
    js: {
        nombre: 'javascript',
        src: iconJs,
    },
    ts: {
        nombre: 'typescript',
        src: iconTs,
    },
    react: {
        nombre: 'react',
        src: iconReact,
    },
}

type Props = {
    opc: 'html' | 'css' | 'js' | 'ts' | 'react'
}

const Tecnologia: FC<Props> = ({ opc }) => {
    return (
        <div
            className={clsx(
                'flex w-fit px-3 py-2 text-white',
                'gap-2 rounded-lg text-xl font-semibold uppercase',
                {
                    'bg-orange-400/55': opc === 'html',
                    'bg-purple-400/55': opc === 'css',
                    'bg-yellow-300/55': opc === 'js',
                    'bg-blue-500/55': opc === 'ts',
                    'bg-blue-300/55': opc === 'react',
                }
            )}
        >
            <img
                className={clsx('h-y w-6', {
                    'h-7 w-12': opc === 'css',
                })}
                src={listTecnologia[opc].src}
                alt={listTecnologia[opc].nombre}
            />
            {listTecnologia[opc].nombre}
        </div>
    )
}

export default Tecnologia
