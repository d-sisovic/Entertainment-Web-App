import logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";
import { useAppStore } from "../../store";
import imageHome from "../../assets/icon-nav-home.svg";
import { Category } from "../../ts/enums/category.enum";
import imageAvatar from "../../assets/image-avatar.png";
import imageMovie from "../../assets/icon-nav-movies.svg";
import imageBookmark from "../../assets/icon-nav-bookmark.svg";
import imageTvSeries from "../../assets/icon-nav-tv-series.svg";

const Header = () => {
    const { category, setCategory } = useAppStore().movies;

    const onSelectCategory = (category: Category) => setCategory(category);

    return <div className="h-[3.5rem] p-4 bg-semi-dark-blue-c flex justify-between items-center">
        <img src={logo} alt="logo" className="w-[1.563rem] h-[1.25rem]" />

        <div className={`${styles.icons} flex gap-6 justify-between h-4 `}>
            <img src={imageHome} alt="home" className={category === Category.ALL ? styles["icons--active"] : ""} onClick={() => onSelectCategory(Category.ALL)} />

            <img src={imageMovie} alt="movie" className={category === Category.MOVIE ? styles["icons--active"] : ""} onClick={() => onSelectCategory(Category.MOVIE)} />

            <img src={imageTvSeries} alt="tv series" className={category === Category.TV_SERIES ? styles["icons--active"] : ""} onClick={() => onSelectCategory(Category.TV_SERIES)} />

            <img src={imageBookmark} alt="bookmark" className={category === Category.BOOKMARK ? styles["icons--active"] : ""} onClick={() => onSelectCategory(Category.BOOKMARK)} />
        </div>

        <img src={imageAvatar} alt="image-avatar" className="w-[1.5rem] h-[1.5rem] border-2 border-solid border-white rounded-full" />
    </div>;
};

export default Header;
