import Circle from './Circle';

const colors = ['#ff0000', '#00ff00', '#0000ff', '#FFFF00'];

const Palette = () => {
  return (
    <div className="flex justify-center space-x-4">
      {colors.map((color, index) => (
        <Circle key={index} color={color} />
      ))}
    </div>
  );
};

export default Palette;
