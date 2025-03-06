
import { BadgeIndianRupee } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Logo() {
    return <Link href="/" className="flex items-center gap-1 ">
        <BadgeIndianRupee  className="stroke h-7 w-7 stroke-teal-500 stroke-[1.5]" />
        <p className='bg-gradient-to-r text-lg from-teal-400 to-teal-500 bg-clip-text lg:text-3xl font-bold leading-tight tracking-tighter text-transparent'> MoneyMap</p>
    </Link>

}

export default Logo
