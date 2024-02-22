import playIcon from "../../../assets/icon-play.svg";

const PlayMovie = () => {
    return <div className="absolute top-0 bottom-0 left-0 bg-black bg-opacity-50 z-10 w-full h-full rounded-[0.5rem] flex items-center justify-center">
        <div className="bg-white-c bg-opacity-25 inline-flex items-center justify-center p-[0.563rem] pr-6 gap-x-[1.188rem] cursor-pointer rounded-[1.781rem]">
            <img src={playIcon} alt="play" />

            <span className="text-[1.125rem]/[1.438rem] text-white-c">Play</span>
        </div>
    </div>
};

export default PlayMovie;
