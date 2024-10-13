import { FaPlus, FaMinus } from "react-icons/fa6";

export default function QuantityAdjuster() {
    return(
        <div style={{fontFamily: 'Playfair'}}  className={'text-xl flex justify-center items-center gap-8'}>
            <button><span className={'text-2xl md:text-3xl text-gray-800'}><FaMinus /></span></button>
            <span className={'text-xl md:text-2xl font-semibold text-gray-800'}>1</span>
            <button><span className={'text-xl md:text-2xl font-semibold text-gray-800'}><FaPlus /></span></button>
        </div>
    )
}