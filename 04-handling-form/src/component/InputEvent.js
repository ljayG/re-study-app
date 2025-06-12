export default function InputEvent() {
    function handleChange(e) {
        console.log(e.target.value);
    }

    function handleClick() {
        console.log('handleClick');
    }

    const handleFoucs = () => {
        console.log('input handleFocus');
    }

    const handleBlur = () => {
        console.log('input handleBlur');
    }

    function handleMouseOver() {
        console.log('handleMouseOver');
    }

    function handleMouseOut() {
        console.log('handleMouseOut');
    }

    return (
        <div>
            <input
                type="text"
                onChange={handleChange}
                onFocus={handleFoucs}
                onBlur={handleBlur}
            />
            <button
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                클릭
            </button>
        </div>
    )
}