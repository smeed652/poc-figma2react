// Molecule: RestaurantInfo
import { PreferenceIndicators } from './PreferenceIndicators';

interface RestaurantInfoProps {
  name: string;
  location?: string;
  description?: string;
  calories?: number;
  match?: boolean;
}


export const RestaurantInfo = ({ name, location, description, calories, match }: RestaurantInfoProps) => (
  <div className="flex flex-col items-start gap-2 w-full">
    <div className="text-lg font-bold text-[#071D3B] text-center w-full leading-tight truncate">{name}</div>
    <PreferenceIndicators calories={calories} match={match} />
    {location && (
      <div className="text-sm text-[#7E8998] text-center w-full leading-snug truncate">{location}</div>
    )}
    {description && (
      <div className="text-xs text-gray-400 leading-snug mt-1 truncate">{description}</div>
    )}
  </div>
);
