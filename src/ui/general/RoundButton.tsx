
//size: small, medium, large, xl
export default function RoundButton({text, size, onClick}: {text: string, icon?: JSX.Element, size: string, onClick?: () => void | undefined}) {
        return(
            <button onClick={onClick} className={`RoundButton bg-[var(--theme-brown)] rounded-full py-2  ${size == 'xl' ? 'w-96' : size == 'large' ? 'w-80' : size == "medium" ? 'w-56' : 'w-56'} text-gray-200`}>
                <span className={'text-md bg-transparent'}>{text}</span>
            </button>
        )
}