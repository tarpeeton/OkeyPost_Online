import { FC } from "react";
import style from "./sections.module.css";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Slider: FC = (): JSX.Element => {
  return (
    <section className={style.Section}>
      <div className={style.Content}>
        <div className={style.maincontent}>
          <div className={style.Title}>
            <h2>Насколько выгодно покупать?</h2>
          </div>
          <div className={style.SliderContent}>
            <div className={style.ButtonNext}>
              <button className={style.PrevButton}>
                {" "}
                <ArrowLeftOutlined />
              </button>
            </div>
            <div style={{ width: "90%" }}>
              <div className={style.ItemsContent}>
                <div className={style.Items}>
                  <div className={style.ItemInfo}>
                    <span>
                      <LazyLoadImage
                        src="https://ucarecdn.com/d26c7eda-ed65-48e6-8256-bb384f85273f/-/scale_crop/300x300/-/rasterize/"
                        width="52px"
                        height="52px"
                        effect="blur"
                      />
                    </span>
                    <p>Электроника</p>
                  </div>
                  <div className={style.ItemInfo}>
                    <span>
                      <LazyLoadImage
                        src="https://ucarecdn.com/2fe5c239-2238-42c2-ad95-6737b2e71b9a/-/scale_crop/300x300/-/rasterize/"
                        width="52px"
                        height="52px"
                        effect="blur"
                      />
                    </span>
                    <p>Аксессуары</p>
                  </div>
                  <div className={style.ItemInfo}>
                    <span>
                      <LazyLoadImage
                        src="https://ucarecdn.com/c570525f-27ca-425d-8d03-38f7c800899e/-/scale_crop/300x300/-/rasterize/"
                        width="52px"
                        height="52px"
                        effect="blur"
                      />
                    </span>
                    <p>Одежда</p>
                  </div>
                  <div className={style.ItemInfo}>
                    <span>
                      <LazyLoadImage
                        src="https://ucarecdn.com/3f6803a9-4d10-419e-9e85-61f8f3d9523f/-/scale_crop/300x300/-/rasterize/"
                        width="52px"
                        height="52px"
                        effect="blur"
                      />
                    </span>
                    <p>Для детей</p>
                  </div>
                  <div className={style.ItemInfo}>
                    <span>
                      <LazyLoadImage
                        src="https://ucarecdn.com/705477ab-7d34-4cf2-8482-052ddd6c86af/-/scale_crop/300x300/-/rasterize/"
                        width="52px"
                        height="52px"
                        effect="blur"
                      />
                    </span>
                    <p>Для спорта</p>
                  </div>
                  <div className={style.ItemInfo}>
                    <span>
                      <LazyLoadImage
                        src="https://ucarecdn.com/f40ab437-46e0-4c9d-ba45-c43626bd1176/-/scale_crop/300x300/-/rasterize/"
                        width="52px"
                        height="52px"
                        effect="blur"
                      />
                    </span>
                    <p>Косметика</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.ButtonNext}>
              <button className={style.PrevButton}>
                {" "}
                <ArrowRightOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
