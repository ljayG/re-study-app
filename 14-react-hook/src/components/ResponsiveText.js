import useWindowWidth from "../hooks/useWindowWidth";

export default function ResponsiveText() {
    const width = useWindowWidth();
    return <p>현재 창 너비: { width }px</p>;
}