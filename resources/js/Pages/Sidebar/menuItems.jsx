import { routes } from '../config/routes.jsx';
import { DUMMY_ID } from '../config/constants.jsx';
import {
    PiShoppingCartDuotone,
    PiHeadsetDuotone,
    PiPackageDuotone,
    PiChartBarDuotone,
    PiCurrencyDollarDuotone,
    PiSquaresFourDuotone,
    PiGridFourDuotone,
    PiFeatherDuotone,
    PiChartLineUpDuotone,
    PiMapPinLineDuotone,
    PiUserGearDuotone,
    PiBellSimpleRingingDuotone,
    PiUserDuotone,
    PiEnvelopeSimpleOpenDuotone,
    PiStepsDuotone,
    PiCreditCardDuotone,
    PiTableDuotone,
    PiBrowserDuotone,
    PiHourglassSimpleDuotone,
    PiUserCircleDuotone,
    PiShootingStarDuotone,
    PiRocketLaunchDuotone,
    PiFolderLockDuotone,
    PiBinocularsDuotone,
    PiHammerDuotone,
    PiNoteBlankDuotone,
    PiUserPlusDuotone,
    PiShieldCheckDuotone,
    PiLockKeyDuotone,
    PiChatCenteredDotsDuotone,
    PiCalendarPlusDuotone,
    PiEnvelopeDuotone,
    PiCurrencyCircleDollarDuotone,
    PiBriefcaseDuotone,
    PiHouseLineDuotone,
    PiAirplaneTiltDuotone,
    PiFolder,
    PiCaretCircleUpDownDuotone,
    PiListNumbersDuotone,
    PiCoinDuotone,
    PiCalendarDuotone,
    PiShapesDuotone,
    PiNewspaperClippingDuotone,
    PiCodesandboxLogoDuotone,
    PiSparkleDuotone,
} from 'react-icons/pi';
import ProjectWriteIcon from '../Icons/projectwriteIcon.jsx';
import CrmDashIcon from '../Icons/crmIcon.jsx';

// // Note: do not add href in the label object, it is rendering as label
export const menuItems = [
    // label start
    {
        name: 'Overview',
    },
    // label end
    {
        name: 'File Manager',
        href: '/',
        icon: <PiFolder />,
    },


    // label start
    {
        name: 'Apps Kiteee',
    },
    // label end
    {
        name: 'E-Commerce',
        href: '#',
        icon: <PiShoppingCartDuotone />,
        dropdownItems: [
            {
                name: 'Products',
                href: routes.eCommerce.products,
                badge: '',
            },
        ],
    },

];
