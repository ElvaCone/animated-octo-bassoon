type Props = {
    className: string,
    children: React.ReactNode
}

function Button(props: Props) {
    const { className, children } = props
    return (
        <button className={className}>{children}</button>
    )
}

const TestChildren = () => {
    return (
        <>
            <Button className='test'>按钮1</Button>
            <Button className='test'>
                <span>Span</span>
            </Button>
        </>
    );
}

export default TestChildren

