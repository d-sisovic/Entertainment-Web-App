import { IBookmarkProps } from "./ts/models/bookmark-props.model";
import emptyBookmarkIcon from "../../../assets/icon-bookmark-empty.svg";
import filledBookmarkIcon from "../../../assets/icon-bookmark-full.svg";

const Bookmark = ({ isBookmarked, handleBookmarkClick }: IBookmarkProps) => <span className="absolute h-8 w-8 top-[0.5rem] right-[0.5rem] bg-dark-blue-c rounded-full bg-opacity-50 flex justify-center items-center"
    onClick={handleBookmarkClick}>
    {!isBookmarked && <img src={emptyBookmarkIcon} alt="bookmark-empty" />}

    {isBookmarked && <img src={filledBookmarkIcon} alt="bookmark-filled" />}
</span>

export default Bookmark;
