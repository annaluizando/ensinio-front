import { EmptyBtn } from '@/app/components/Buttons/EmptyBtn'
import { FullBtn } from '@/app/components/Buttons/FullBtn'
import { Text } from '@/app/components/Elements/text'
import NavBar from '@/app/components/NavBar'
import ResourcesCard from '@/app/components/ResourcesCard'
import LowerSection from '../app/components/Sections/LowerSection'
import { MainContainer } from '@/app/styles/GlobalStyles'
import UpperSection from '@/app/components/Sections/UpperSection'


export default function Home() {
  return (
    <MainContainer>
      <NavBar />
      <UpperSection />
      <LowerSection />
    </ MainContainer>
  )
}
