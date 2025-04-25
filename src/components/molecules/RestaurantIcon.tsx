// Molecule: RestaurantIcon
interface RestaurantIconProps {
  src?: string;
  alt?: string;
  size?: number; // px
}

export const RestaurantIcon = ({ src, alt = 'Restaurant Icon', size = 40 }: RestaurantIconProps) => {
  return (
    <div
      className="bg-gray-100 rounded-full flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
        />
      ) : (
        <span className="text-gray-400 text-xl font-bold">?</span>
      )}
    </div>
  );
};
