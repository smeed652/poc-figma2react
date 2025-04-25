// Organism: RestaurantCard
import { RestaurantLogo } from '../molecules/RestaurantLogo';
import { RestaurantNameText } from '../atoms/RestaurantNameText';
import { RestaurantLocationText } from '../atoms/RestaurantLocationText';
import { PreferenceIndicators } from '../molecules/PreferenceIndicators';
import { DishesSavedText } from '../atoms/DishesSavedText';
import { RestaurantCuisineText } from '../atoms/RestaurantCuisineText';
import { RestaurantMenusText } from '../atoms/RestaurantMenusText';
import { RestaurantActions } from '../molecules/RestaurantActions';
import { ActionLink } from '../atoms/ActionLink';
import { Button } from '../atoms/Button';
import { ButtonText } from '../atoms/ButtonText';
import { Icon } from '../atoms/Icon';
import { RestaurantIcon } from '../molecules/RestaurantIcon';

export const RestaurantCard = () => {
  console.log('Rendering RestaurantCard');
  return (
    <div className="w-[411px] h-[242px] bg-white border border-[#DDDFE2] rounded-[10px] shadow-sm flex flex-col justify-between items-center p-5 gap-[14px]">
      <div className="flex flex-col items-center w-full gap-2">
        <RestaurantLogo src="/RestaurantLogo.png" alt="Restaurant Logo" size={70} />
        <RestaurantNameText>EveryBite Bistro</RestaurantNameText>
        <RestaurantLocationText>San Francisco, CA, USA</RestaurantLocationText>
        <RestaurantCuisineText>Vietnamese</RestaurantCuisineText>
        <RestaurantMenusText>Lunch + Dinner</RestaurantMenusText>
        <DishesSavedText>Dishes Saved (2)</DishesSavedText>
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <RestaurantActions />
        <Button>
          <ButtonText>See Details</ButtonText>
          {/* Inline chevron icon (right) */}
          <span className="ml-1 inline-block align-middle">
            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Button>

      </div>
    </div>
  );
};
