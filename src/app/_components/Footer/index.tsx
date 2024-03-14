import React from 'react'
import Link from 'next/link'

import { Footer as FooterType} from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'


import classes from './index.module.scss'
import FooterComponent from './FooterComponent'

export async function Footer() {
  let footer: FooterType | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
     console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
    <FooterComponent footer={footer}/>
    </>
  )
}
