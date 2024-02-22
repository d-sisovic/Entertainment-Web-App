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

    return <nav className={`h-[3.5rem] p-4 bg-semi-dark-blue-c flex justify-between items-center mb-6
    tablet:mt-[1.438rem] tablet:mx-[1.531rem] tablet:mb-[2.125rem] tablet:h-[4.5rem] tablet:p-6 tablet:rounded-[0.625rem]
    desktop:min-w-24 desktop:max-h-[60rem] desktop:flex-col desktop:py-8 desktop:px-7 desktop:rounded-[1.25rem]
    desktop:m-0 desktop:mt-8 desktop:ml-8 ${styles.navbar}`}>
        <img src={logo} alt="logo" className="w-[1.563rem] tablet:w-8" />

        <div className={`${styles.icons} flex gap-6 justify-between h-4 tablet:h-5 tablet:gap-8 desktop:flex-col desktop:mb-auto desktop:mt-[4.688rem] desktop:gap-10`}>
            <img src={imageHome} alt="home" className={category === Category.ALL ? styles["icons--active"] : ""} onClick={() => onSelectCategory(Category.ALL)} />

            <img src={imageMovie} alt="movie" className={category === Category.MOVIE ? styles["icons--active"] : ""} onClick={() => onSelectCategory(Category.MOVIE)} />

            <img src={imageTvSeries} alt="tv series" className={category === Category.TV_SERIES ? styles["icons--active"] : ""} onClick={() => onSelectCategory(Category.TV_SERIES)} />

            <img src={imageBookmark} alt="bookmark" className={category === Category.BOOKMARK ? styles["icons--active"] : ""} onClick={() => onSelectCategory(Category.BOOKMARK)} />
        </div>

        <img src={imageAvatar} alt="image-avatar" className="w-6 h-6 border-2 border-solid border-white rounded-full tablet:h-8 tablet:w-8 desktop:w-10 desktop:h-10" />
    </nav>;
};

export default Header;
