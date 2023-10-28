'use client'
type MenuIconProps = React.HTMLAttributes<HTMLDivElement>;

export default function MenuIcon(
    {
        className,
    }: MenuIconProps
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-6 w-6 fill-current ${className}`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
            />
        </svg>
    )
}
