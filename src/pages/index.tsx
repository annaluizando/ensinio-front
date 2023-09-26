import { EmptyBtn } from '@/app/components/Buttons/EmptyBtn'
import { FullBtn } from '@/app/components/Buttons/FullBtn'
import { Text } from '@/app/components/Elements/text'
import NavBar from '@/app/components/NavBar'
import ResourcesCard from '@/app/components/ResourcesCard'
import UpperSection from './UpperSection'
import LowerSection from './LowerSection'


export default function Home() {
  return (
    <>
      <NavBar />
      <UpperSection />
      <LowerSection />
      <Text $family='secondary' color="white" $size="x_large" $weight="medium">Queremos</Text>
    </>
  )
}
