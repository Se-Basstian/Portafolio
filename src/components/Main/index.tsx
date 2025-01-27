import type { FC } from 'react'
import ArticleLayout from '../layout/ArticleLayout'
import Tecnologia from '../common/Tecnologia'
import Proyecto from '../common/Proyecto'
import imgEncriptador from '../../assets/images/proyectos/Encriptador.png'
import imgOrg from '../../assets/images/proyectos/Organizador.png'
import imgAluraFlix from '../../assets/images/proyectos/AluraFlix.png'
import clsx from 'clsx'

const Main: FC = () => {
    return (
        <main
            className={clsx('mx-auto mt-8 max-w-[950px] px-8 max-[381px]:px-3')}
        >
            <ArticleLayout orientacion="horizontal" titulo="Tecnologías">
                <section className="flex flex-wrap gap-5">
                    <Tecnologia opc="html" />
                    <Tecnologia opc="css" />
                    <Tecnologia opc="js" />
                    <Tecnologia opc="ts" />
                    <Tecnologia opc="react" />
                </section>
            </ArticleLayout>

            <ArticleLayout orientacion="vertical" titulo="Proyectos">
                <section className="flex flex-col gap-6">
                    <Proyecto
                        titulo="Encriptador de Texto"
                        subtitulo="Proyecto de Aprendizaje"
                        descripcion="Una página donde puedes ingresar texto y se encriptará o desencriptará"
                        imageSrc={imgEncriptador}
                        imageAlt="Una págian web con fondo negreo"
                        demoSrc="https://encriptador-nine-psi.vercel.app/"
                        repoSrc="https://github.com/Se-Basstian/Encriptador"
                    />

                    <Proyecto
                        titulo="Organizador"
                        subtitulo="Proyecto de Aprendizaje"
                        descripcion="Un lugar donde puedes organizar a tus equipos como desees"
                        imageSrc={imgOrg}
                        imageAlt="Una página web con colores azules y blanco"
                        demoSrc="https://org-jet-three.vercel.app/"
                        repoSrc="https://github.com/Se-Basstian/Org"
                    />

                    <Proyecto
                        titulo="AluraFlix"
                        subtitulo="Challege"
                        descripcion="Como Netfix pero sin ser netflix. Aqui podras agregar y quitrar los videos de programación de desees."
                        imageSrc={imgAluraFlix}
                        imageAlt="Página con fondo oscuro y Card"
                        demoSrc="https://alura-flix-seven-sooty.vercel.app/"
                        repoSrc="https://github.com/Se-Basstian/AluraFlix"
                    />
                </section>
            </ArticleLayout>
        </main>
    )
}

export default Main
