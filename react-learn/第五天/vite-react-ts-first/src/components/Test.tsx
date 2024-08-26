import { useState, useEffect } from 'react';
import { Spinner, Button } from 'react-bootstrap';

const Test = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            // 模拟数据请求
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="text-center">
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Button variant="primary">Data Loaded</Button>
            )}
        </div>
    );
};

export default Test;


