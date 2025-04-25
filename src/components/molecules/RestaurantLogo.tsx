// Molecule: RestaurantLogo
interface RestaurantLogoProps {
  src?: string;
  alt?: string;
  size?: number;
}

export const RestaurantLogo = ({ src, alt = 'Restaurant Logo', size = 70 }: RestaurantLogoProps) => {
  return src ? (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover border border-gray-200"
      style={{ width: size, height: size }}
    />
  ) : (
    <div
      className="bg-gray-200 rounded-full flex items-center justify-center text-gray-400 border border-gray-200"
      style={{ width: size, height: size }}
      aria-label={alt}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#F1F1F1" />
        <path d="M20 12C17.2386 12 15 14.2386 15 17C15 19.7614 17.2386 22 20 22C22.7614 22 25 19.7614 25 17C25 14.2386 22.7614 12 20 12ZM20 24C16.134 24 12.5 25.7909 12.5 28V30H27.5V28C27.5 25.7909 23.866 24 20 24Z" fill="#C5CAD0"/>
      </svg>
    </div>
  );
};
