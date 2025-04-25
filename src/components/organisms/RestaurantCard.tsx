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
  // RestaurantCard component styled per RestaurantCardLayout.tsx reference
  return (
    <div style={{ width: 411, height: 242, position: 'relative' }} className="font-jakarta">
      <div
        style={{
          width: 411,
          padding: 20,
          left: 0,
          top: 1,
          position: 'absolute',
          background: 'white',
          borderRadius: 10,
          outline: '1px #DDDFE2 solid',
          outlineOffset: '-1px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 14,
          display: 'inline-flex',
        }}
      >
        {/* Logo area */}
        <div style={{ width: 70, height: 70, position: 'relative', overflow: 'hidden' }}>
          <div style={{ width: 70, height: 70, left: 0, top: 0, position: 'absolute' }}>
            <div style={{ width: 70, height: 70, left: 0, top: 0, position: 'absolute' }}>
              <div
                style={{
                  width: 70,
                  height: 70,
                  left: 70,
                  top: 0,
                  position: 'absolute',
                  transform: 'rotate(90deg)',
                  transformOrigin: 'top left',
                  background: '#F1F1F1',
                  borderRadius: 9999,
                }}
              />
              <div style={{ left: 14.5, top: 15, position: 'absolute' }}>
                {/* SVG icon placeholder */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.421 24.1707C30.021 24.1707 28.621 23.7764 27.621 22.9877C26.621 23.7764 25.221 24.1707 23.821 24.1707C22.421 24.1707 21.021 23.7764 20.021 22.9877C19.021 23.7764 17.621 24.1707 16.221 24.1707C14.821 24.1707 13.421 23.7764 12.421 22.9877C11.421 23.7764 10.021 24.1707 8.621 24.1707H8.021V34.0284C8.021 35.2114 8.821 36 10.021 36H14.021C15.221 36 16.021 35.2114 16.021 34.0284V30.0853C16.021 28.9024 16.821 28.1138 18.021 28.1138H22.021C23.221 28.1138 24.021 28.9024 24.021 30.0853V34.0284C24.021 35.2114 24.821 36 26.021 36H30.021C31.221 36 32.021 35.2114 32.021 34.0284V24.1707H31.421Z" fill="#7E8998"/>
                  <path d="M35.5984 15.8293C34.9193 13.9076 33.2815 11.2385 29.8262 4.89681C29.5466 4.34164 28.9873 4 28.3881 4H11.6107C11.0115 4 10.4722 4.34164 10.1726 4.89681C6.73725 11.2599 5.09945 13.9076 4.40039 15.8293H35.5984Z" fill="#7E8998"/>
                  <path d="M4.00095 17.5715C3.96101 19.6557 5.17937 21.5613 7.19665 22.1369C9.33378 22.7523 11.3311 21.8789 12.3897 20.3108C13.2086 21.5216 14.6067 22.3354 16.2045 22.3354C17.8024 22.3354 19.1805 21.5414 19.9994 20.3306C20.8183 21.5414 22.2165 22.3354 23.7943 22.3354C25.3722 22.3354 26.7903 21.5414 27.6092 20.3108C28.6678 21.8789 30.6651 22.7523 32.8022 22.1369C34.8195 21.5414 36.0578 19.6557 35.9979 17.5715H4.00095Z" fill="#7E8998"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div
          style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 18,
            display: 'flex',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 8,
              display: 'flex',
            }}
          >
            <div
              style={{
                alignSelf: 'stretch',
                height: 24,
                textAlign: 'center',
                color: '#071D3B',
                fontSize: 18,
                
                fontWeight: 700,
                wordWrap: 'break-word',
              }}
            >
              Restaurant Name
            </div>
            <div
              style={{
                alignSelf: 'stretch',
                paddingTop: 3,
                paddingBottom: 3,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 11,
                display: 'flex',
              }}
            >
              <div
                style={{
                  width: 341.18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                  display: 'inline-flex',
                }}
              >
                <div
                  style={{
                    height: 9,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 4,
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      color: '#071D3B',
                      fontSize: 14,
                      
                      fontWeight: 500,
                      wordWrap: 'break-word',
                    }}
                  >
                    Vietnamese
                  </div>
                </div>
                <div
                  style={{
                    height: 9,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 4,
                    display: 'flex',
                  }}
                >
                  <div>
                    <svg width="4" height="9" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="path-1-inside-1_237_2023" fill="white">
                        <path d="M0.5 0H3.5V9H0.5V0Z" />
                      </mask>
                      <path d="M0.5 9H1.5V0H0.5H-0.5V9H0.5Z" fill="#071D3B" mask="url(#path-1-inside-1_237_2023)" />
                    </svg>
                  </div>
                  <div
                    style={{
                      color: '#071D3B',
                      fontSize: 14,
                      
                      fontWeight: 500,
                      wordWrap: 'break-word',
                    }}
                  >
                    Lunch + Dinner
                  </div>
                </div>
              </div>
              <div
                style={{
                  alignSelf: 'stretch',
                  textAlign: 'center',
                  color: '#7E8998',
                  fontSize: 14,
                  
                  fontWeight: 500,
                  wordWrap: 'break-word',
                }}
              >
                San Francisco, CA, USA
              </div>
            </div>
          </div>
          {/* Actions Row */}
          <div className="self-stretch inline-flex justify-between items-center mt-4">
            <div className="flex justify-start items-center gap-3">
              <div className="px-[5px] py-px flex justify-start items-end gap-2">
                <div className="w-3.5 h-3.5 relative flex items-center">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.11857 1.8093C1.86482 0.937569 2.87022 0.5 3.87693 0.5C4.88364 0.5 5.88903 0.937587 6.63529 1.8093L6.9996 2.23636L7.35871 1.81493C8.85122 0.0714198 11.3881 0.0714558 12.8806 1.81493C14.3731 3.55838 14.3731 6.309 12.8806 8.0524L7.60852 14.2112C7.53055 14.3023 7.43597 14.3749 7.33073 14.4246C7.22549 14.4743 7.11186 14.5 6.997 14.5C6.88213 14.5 6.76851 14.4743 6.66327 14.4246C6.55803 14.3749 6.46345 14.3023 6.38547 14.2112L1.11857 8.04677C-0.371766 6.3025 -0.373946 3.55269 1.11857 1.8093Z" fill="#FF7373" />
                  </svg>
                </div>
                <div className="justify-start text-slate-600 text-xs font-semibold font-['Plus_Jakarta_Sans']">Unsave</div>
              </div>
              <div>
                <svg width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0V16" stroke="#DDDFE2" />
                </svg>
              </div>
              <div className="justify-start text-slate-600 text-xs font-medium font-sans leading-tight">Dishes Saved (2)</div>
            </div>
            <div className="w-24 h-7 px-2.5 py-1.5 rounded shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-700 flex justify-center items-center gap-2 overflow-hidden">
              <div className="justify-start text-indigo-700 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-none">See Details</div>
              <div>
                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L2.14569e-07 6L4.76837e-07 -2.18557e-07L5 3Z" fill="#4338CA" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
