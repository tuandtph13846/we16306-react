
import React from 'react'
import { ProductType } from '../types/product'

type ShowInfoProps = {
  name: string,
  children: JSX.Element
}

const ShowInfo = (props: ShowInfoProps) => {
  return (
    <div>
        Abcd...{props.children}
    </div>
  )
}

export default ShowInfo