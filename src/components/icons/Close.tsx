const Close: React.FC = ({...props}) => {
    return (
        <svg width="32" height="32" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M3 21.32L21 3.32001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 3.32001L21 21.32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Close;