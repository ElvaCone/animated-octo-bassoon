import DatePicker from '@/components/DatePicker';
import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';



const Month = () => {

    const [date, setDate] = useState(null);

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        console.log(selectedDate);
    };

    return (
        <div>
            我是Month.

            <Container className="mt-5">
                <Form>
                    <Form.Group controlId="datePicker">
                        <Form.Label>Select Date</Form.Label>
                        <DatePicker
                            onChange={handleDateChange}
                            placeholder="Select a date"
                        />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        Selected Date: {date ? date.toLocaleDateString() : 'None'}
                    </Form.Text>
                </Form>
            </Container>
        </div>
    )
}

export default Month
