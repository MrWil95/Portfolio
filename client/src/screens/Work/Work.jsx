import './Work.css'
import Layout from '../../components/Layout/Layout'
import FullStack from '../../components/FullStack/FullStack'
import Graphics from '../../components/Graphics/Graphics'

export default function Work() {
  return (
    <Layout>
      <div className='WorkContainer'>
        <FullStack />
        <Graphics />
      </div>
    </Layout>
  )
}
