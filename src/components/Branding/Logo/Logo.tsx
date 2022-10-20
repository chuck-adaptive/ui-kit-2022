import { useTheme } from '@mui/material/styles';

import { LogoLarge, LogoMaximized, LogoSmall } from '../';

interface Props {
  variant?: string;
}

const Logo: React.FC<Props> = (svgProps) => {
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? theme.palette.common.white : '#323232';

  switch (svgProps.variant) {
    case 'maximized':
      return <LogoMaximized sx={{ color: color, height: 53, width: 154 }} />;
      break;
    case 'large':
      return <LogoLarge sx={{ color: color, height: 53, width: 56 }} />;
    default:
      return <LogoSmall sx={{ color: color, height: 32, width: 32 }} />;
  }
};

export default Logo;
