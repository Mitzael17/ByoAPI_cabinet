import Link from 'next/link'

interface InternalLinkProps {
    href: string
    children: React.ReactNode
}

const InternalLink = ({ href, children }: InternalLinkProps) => {
    return (
        <Link
            className="text-blue-500 hover:text-blue-700 transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:duration-500 after:transition-transform after:w-full after:scale-x-[0] after:h-0.5 after:bg-blue-700 hover:after:scale-x-[1]"
            href={href}
        >
            {children}
        </Link>
    )
}

export default InternalLink
