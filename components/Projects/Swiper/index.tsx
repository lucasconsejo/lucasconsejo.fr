import { Pagination, Autoplay } from "swiper";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import Project from "../Project";
import { ProjectType } from "../types";

type SwiperProps = {
    projects: Array<ProjectType>;
    content: Array<any>;
};

export default function Swiper({ projects, content }: SwiperProps) {
    return (
        <div className="flex mt-5 mb-5 md:hidden">
            <ReactSwiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="swiper-projects z-0"
            >
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Project project={project} description={content[index].description} />
                        </SwiperSlide>
                    );
                })}
            </ReactSwiper>
        </div>
    );
};
