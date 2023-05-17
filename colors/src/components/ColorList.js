import Color from "./Color";

export default function ColorList({ colors = [], onColorRemove = f => f }) {
    if(!colors.length) return <div>Нет цвет!</div>
    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color} onRemove={onColorRemove} />)
            }
        </div>
    );
}