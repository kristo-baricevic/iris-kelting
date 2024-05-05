import Circle from './Circle';

const colors = ['#ff0000', '#00ff00', '#0000ff', '#FFFF00', '#FFA500' ];

const Palette = () => {
  return (
    <div className="flex flex-col justify-center gap-6 py-2">
      {colors.map((color, index) => (
        <Circle key={index} color={color} />
      ))}
    </div>
  );
};

export default Palette;
