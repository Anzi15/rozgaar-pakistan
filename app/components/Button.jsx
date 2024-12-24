"use cleint"

export const themeRoundedBtn = ({text,href}) => {
  return (
    <Link href={`${href}`} className='bg-blue-800 text-white font-bold p-4'>
        {text}
    </Link>
  )
}


