import { Player as LottiePlayer } from '@lottiefiles/react-lottie-player';

const MyLottieAnimation = () => (
    <LottiePlayer
        src="https://assets10.lottiefiles.com/packages/lf20_yr6zz3wz.json"
        background="transparent"
        speed={1}
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
    />
);

export default MyLottieAnimation;
