import { useTheme } from '@mui/material/styles';

interface Props {
  height?: number;
  width?: number;
}

const LogoText: React.FC<Props> = ({ height = 32, width = 97 }) => {
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? '#fff' : '#323232';

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 97 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.36752 12.6561V8.18932L6.44237 12.6561H10.1402L6.88451 8.20926C8.67316 7.77056 9.73831 6.59406 9.73831 4.50027C9.73831 2.24695 8.05014 0.691564 5.45762 0.691564H0.413239V12.6561H3.36752ZM5.73897 5.87618H3.36752V3.18417H5.65859C6.32179 3.18417 6.84432 3.80234 6.84432 4.50027C6.84432 5.1982 6.40218 5.87618 5.73897 5.87618ZM19.672 12.6561V10.1435H14.4267V7.98991H19.0691V5.43749H14.4267V3.28387H19.451V0.691564H11.4724V12.6561H19.672ZM23.9183 12.6561L24.5011 11.4197H29.2641L29.867 12.6561H33.0424L27.1338 0.292747H26.6113L20.7429 12.6561H23.9183ZM28.2592 9.32595H25.4255L26.8323 6.29494H26.8725L28.2592 9.32595ZM39.4591 13.0549C41.6899 13.0549 43.3579 12.1177 44.5637 10.8614L42.5942 8.94707C41.7501 9.76465 40.6649 10.2831 39.4591 10.2831C37.3087 10.2831 35.922 8.68784 35.922 6.67382C35.922 4.65979 37.3087 3.06452 39.4591 3.06452C40.6649 3.06452 41.7501 3.58299 42.5942 4.40056L44.624 2.48624C43.3378 1.1502 41.7501 0.292747 39.4591 0.292747C35.6406 0.292747 32.9275 3.10441 32.9275 6.67382C32.9275 10.2432 35.6406 13.0549 39.4591 13.0549ZM51.4427 12.6561V3.28387H54.1759V0.691564H45.7753V3.28387H48.4683V12.6561H51.4427ZM58.7839 12.6561V0.691564H55.8296V12.6561H58.7839ZM65.9241 13.0549L71.2498 0.691564H68.175L65.7432 6.45447L63.3115 0.691564H60.2366L65.5624 13.0549H65.9241ZM80.9022 12.6561V10.1435H75.6569V7.98991H80.2993V5.43749H75.6569V3.28387H80.6811V0.691564H72.7026V12.6561H80.9022Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.599 31.3084L4.18373 30.0721H8.96237L9.56726 31.3084H12.753L6.82508 18.9451H6.30085L0.413239 31.3084H3.599ZM7.95422 27.9783H5.11123L6.52264 24.9473H6.56297L7.95422 27.9783ZM17.2955 31.3084V24.1896L22.0136 31.3084H25.0986V19.3439H22.1548V26.4429L17.4568 19.3439H14.3315V31.3084H17.2955ZM29.8628 31.3084L30.4475 30.0721H35.2262L35.8311 31.3084H39.0168L33.0889 18.9451H32.5647L26.677 31.3084H29.8628ZM34.218 27.9783H31.375L32.7864 24.9473H32.8268L34.218 27.9783ZM48.8218 31.3084V28.7959H43.5593V19.3439H40.5953V31.3084H48.8218ZM54.7354 31.3084V25.5256L59.0301 19.3439H55.7032L53.2635 22.9333L50.8439 19.3439H47.4968L51.7916 25.5256V31.3084H54.7354ZM65.8711 31.3084V21.9362H68.6133V19.3439H60.1852V21.9362H62.887V31.3084H65.8711ZM73.2364 31.3084V19.3439H70.2724V31.3084H73.2364ZM82.1341 31.7073C84.3722 31.7073 86.0457 30.77 87.2555 29.5138L85.2795 27.5994C84.4327 28.417 83.3438 28.9355 82.1341 28.9355C79.9766 28.9355 78.5854 27.3402 78.5854 25.3262C78.5854 23.3122 79.9766 21.7169 82.1341 21.7169C83.3438 21.7169 84.4327 22.2354 85.2795 23.0529L87.316 21.1386C86.0255 19.8026 84.4327 18.9451 82.1341 18.9451C78.3031 18.9451 75.5811 21.7568 75.5811 25.3262C75.5811 28.8956 78.3031 31.7073 82.1341 31.7073ZM92.9069 31.7073C95.1853 31.7073 97 29.9525 97 27.8387C97 25.9643 95.9919 24.7678 93.8344 24.1297C92.8061 23.8306 91.6971 23.6711 91.6971 22.7738C91.6971 21.9961 92.3222 21.6172 92.9674 21.6172C93.7941 21.6172 94.2175 22.1755 94.2175 22.8535H97C96.8387 20.6401 95.5684 18.9451 92.8867 18.9451C90.6083 18.9451 88.7735 20.6999 88.7735 22.8136C88.7735 24.8675 89.9026 25.8048 91.9391 26.5226C92.9271 26.8616 94.1167 27.1209 94.1167 28.0182C94.1167 28.6364 93.6529 29.0551 92.9069 29.0551C92.2214 29.0551 91.6568 28.4968 91.6568 27.7988H88.7735C88.7735 29.9525 90.2655 31.7073 92.9069 31.7073Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoText;
