import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Discord } from '@transferto/shared/src/atoms/icons';
import { useSettings } from '@transferto/shared/src/hooks';
import { openInNewTab } from '@transferto/shared/src/utils/';
import { useMemo } from 'react';
import { getInitialProps, useTranslation } from 'react-i18next';
import { useMenu } from '../../../providers/MenuProvider';
import { MenuListItem } from '../../../types';

const MainMenuItems = () => {
  const { t: translate } = useTranslation();
  const i18Path = 'navbar.';
  const settings = useSettings();
  const theme = useTheme();
  const activeLanguage = useMemo(
    () => getInitialProps().initialLanguage,
    [getInitialProps().initialLanguage],
  );
  const menu = useMenu();

  const _MainMenuItems: MenuListItem[] = [
    {
      label: `${translate(`${i18Path}navbarMenu.theme`)}`,
      listIcon: <LightModeOutlinedIcon />,
      url: 'https://github.com/lifinance/',
      triggerSubMenu: 'themes',
    },
    {
      label: `${translate(`${i18Path}language.key`)}`,
      listIcon: <LanguageIcon />,
      checkIcon: settings.themeMode === 'light',
      extraIcon: (
        <Typography variant="lifiBodyMedium" textTransform={'uppercase'}>
          {activeLanguage}
        </Typography>
      ),
      triggerSubMenu: 'language',
    },
    {
      label: `${translate(`${i18Path}navbarMenu.developers`)}`,
      listIcon: <DeveloperModeIcon />,
      triggerSubMenu: 'devs',
    },
    {
      label: `${translate(`${i18Path}navbarMenu.aboutLIFI`)}`,
      listIcon: <InfoOutlinedIcon />,
      onClick: () => {
        openInNewTab('https://li.fi');
      },
    },
    {
      label: `${translate(`${i18Path}navbarMenu.support`)}`,
      listIcon: <Discord color={theme.palette.white.main} />,
      onClick: () => {
        menu.toggleSupportModal(true);
      },
      showButton: true,
    },
  ];

  return _MainMenuItems;
};

export default MainMenuItems;
