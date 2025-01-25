import clsx from 'clsx'
import type { FC, ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

const Header: FC<Props> = ({ children }) => {
    return <header className={clsx('w-full')}>{children}</header>
}

export default Header
