import { Container, Tabs, Tab } from 'react-bootstrap';
import useTabs from './useTabs';
// import HomeList from './HomeList'
import { lazy, useState } from "react"
const HomeList = lazy(() => import('@/pages/Home/HomeList'))

function Home() {
    const { channels } = useTabs()
    const [activeKey, setActiveKey] = useState<string | null>(null);

    const handleTabSelect = (key: string | null) => {
        setActiveKey(key);
    };

    return (
        <Container className="my-4">
            <Tabs
                defaultActiveKey="0"
                id="uncontrolled-tab-example"
                className="mb-3"
                onSelect={handleTabSelect}
            >
                {channels.map(item => (
                    <Tab key={item.id} eventKey={item.id} title={item.name}>
                        <div className="listContainer">
                            {activeKey === '' + item.id && <HomeList channelId={'' + item.id} />}
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </Container>
    );
}

export default Home

