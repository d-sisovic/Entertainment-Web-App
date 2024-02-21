import TrendingCard from "./TrendingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelectTrendingMovies } from "../../store";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

const Trending = () => {
    const trendingItems = useSelectTrendingMovies();

    return <>
        <h1 className="text-[1.25rem]/[1.563rem] text-white-c mb-4">Trending</h1>

        <Swiper modules={[Autoplay, EffectCoverflow, Navigation]} autoplay={{ delay: 3000 }} spaceBetween={-88}>
            {trendingItems.map(movie => (
                <SwiperSlide key={movie.title}>
                    <TrendingCard movie={movie} />
                </SwiperSlide>
            ))}
        </Swiper>
    </>;
};

export default Trending;