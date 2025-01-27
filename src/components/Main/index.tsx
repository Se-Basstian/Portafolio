import type { FC } from 'react'
import ArticleLayout from '../layout/ArticleLayout'
import Tecnologia from '../common/Tecnologia'
import Proyecto from '../common/Proyecto'
import Formacion from '../common/Formacion'
import imgEncriptador from '../../assets/images/proyectos/Encriptador.png'
import imgOrg from '../../assets/images/proyectos/Organizador.png'
import imgAluraFlix from '../../assets/images/proyectos/AluraFlix.png'
import clsx from 'clsx'
import { IoSchoolSharp } from 'react-icons/io5'
import { PiCertificateBold } from 'react-icons/pi'

const Main: FC = () => {
    return (
        <main
            className={clsx('mx-auto mt-8 max-w-[950px] px-8 max-[381px]:px-3')}
        >
            <ArticleLayout titulo="Tecnologías">
                <section className="flex flex-wrap gap-5">
                    <Tecnologia opc="html" />
                    <Tecnologia opc="css" />
                    <Tecnologia opc="js" />
                    <Tecnologia opc="ts" />
                    <Tecnologia opc="react" />
                </section>
            </ArticleLayout>

            <ArticleLayout titulo="Proyectos">
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

            <ArticleLayout titulo="Formación">
                <section className="flex w-full flex-col gap-11">
                    <Formacion
                        titulo="Front End"
                        institucion="Programa Oracle Next Education"
                        duracion="Junio 2024-Enero 2025"
                        estado="finalizado"
                        seAprendio="Enseñanza en tecnologias web como HTML, CSS, Javascript, Typescript y React"
                        leftIcon={
                            <PiCertificateBold className="mt-1 min-h-8 min-w-8" />
                        }
                    />
                    <Formacion
                        titulo="Tec. Soporte y Mantenimiento de Equipos de Computación"
                        institucion="SENATI"
                        duracion="2021-2024"
                        estado="finalizado"
                        seAprendio="Formación técnica en los conceptos generales de la infomartica (Hardware y Sotfware)"
                        leftIcon={
                            <IoSchoolSharp className="mt-1 min-h-8 min-w-8" />
                        }
                    />
                </section>
            </ArticleLayout>
        </main>
    )
}

export default Main
