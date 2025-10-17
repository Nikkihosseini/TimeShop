import type  { ButtonProps } from './types/types'


export default function Btn({text}: ButtonProps){
    return(
        <>
            <div className='flex items-center justify-center h-[2.7rem] w-40 rounded-[2.5rem] border-2 border-amber-400 p-2 text-amber-400 font-semibold uppercase text-sm cursor-pointer'>
                { text }
            </div>
        </>
    )
}