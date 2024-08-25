import { Container, Tabs, Tab } from 'react-bootstrap';
import useTabs from './useTabs';
// import HomeList from './HomeList'
import { lazy } from "react"
const HomeList = lazy(() => import('@/pages/Home/HomeList'))

function Home() {
    const { channels } = useTabs()

    return (
        <Container className="my-4">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                {channels.map(item => (<Tab key={item.id} eventKey={item.id} title={item.name}>
                    <div className="listContainer">
                        <HomeList channelId={'' + item.id} />
                    </div>
                </Tab>))}
            </Tabs>
        </Container>
    );
}

export default Home

