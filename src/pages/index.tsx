import NavBar from '@/components/NavBar'
import LowerSection from '@/components/Sections/LowerSection'
import { MainContainer } from '@/app/styles/GlobalStyles'
import UpperSection from '@/components/Sections/UpperSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

type Props = {

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