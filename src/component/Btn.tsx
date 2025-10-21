import type  { ButtonProps } from './types/types'


export default function Btn({ text , style}: ButtonProps){
    return(
        <>
            <div style={style} className='flex items-center justify-center h-[2.7rem] w-48 rounded-[2.5rem] border-2 border-amber-500 p-2 text-amber-500 font-semibold uppercase text-sm cursor-pointer'>
                { text }
            </div>
        </>
    )
}