function EventButton() {
    const handleClick = () => {
        console.log('버튼이 클릭되었습니다.');
    } 

    return (
        <button onClick={handleClick}>클릭해보세요.</button>
    )
}

export default EventButton;