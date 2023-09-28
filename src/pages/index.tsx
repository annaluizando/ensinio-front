import NavBar from '@/app/components/NavBar'
import LowerSection from '../app/components/Sections/LowerSection'
import { MainContainer } from '@/app/styles/GlobalStyles'
import UpperSection from '@/app/components/Sections/UpperSection'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

type Props = {
  // Add custom props here
}

export default function Home(_props: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <MainContainer>
      <NavBar />
      <UpperSection />
      <LowerSection />
    </ MainContainer>
  )


}


export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common'
    ])),
  },
})