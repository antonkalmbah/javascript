import Color from "./Color";

export default function ColorList({ colors = [] }) {
    if(!colors.length) return <div>Нет цвет!</div>
    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    );
}