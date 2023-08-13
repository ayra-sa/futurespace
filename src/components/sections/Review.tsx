import React, { FC, MouseEventHandler, useRef } from "react";
import Container from "../Container";
import Label from "../Label";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviewData } from "../../data/data";
import Section from "../Section";
import clsx from "clsx";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface CustomArrowProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const buttonNavClass = clsx(
  "w-14 h-14 rounded-full border-2 border-primary",
  "flex justify-center items-center",
  "bg-transparent text-primary transition duration-300",
  "hover:bg-primary hover:text-white"
);

const arrowClass = "h-8 w-8";

const ButtonPrev: FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button className={buttonNavClass} onClick={onClick}>
      <ArrowLeftIcon className={arrowClass} />
    </button>
  );
};

const ButtonNext: FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button className={buttonNavClass} onClick={onClick}>
      <ArrowRightIcon className={arrowClass} />
    </button>
  );
};

const Review: FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Section>
      <Container>
        <div className="flex justify-between">
          <div>
            <Label text={reviewData.label} />
            <h1>{reviewData.title}</h1>
          </div>

          <div className="hidden lg:flex items-center gap-x-5">
            <ButtonPrev onClick={handlePrev} />
            <ButtonNext onClick={handleNext} />
          </div>
        </div>
      </Container>

      <div className="overflow-x-hidden">
        <Slider ref={sliderRef} {...settings}>
          {reviewData.reviews.map((review, id) => (
            <div
              key={id}
              className="py-11 mt-16 px-12 rounded-3xl bg-white shadow-2xl slick-slide space-y-6"
            >
              <img src="icons/icon-stars.svg" alt="icon stars" />
              <p className="text-secondaryText text-base">{review.review}</p>

              <div className="flex items-center gap-5">
                <img src={review.photo} alt={review.name} />
                <div>
                  <b>{review.name}</b>
                  <p className="text-base font-normal leading-7">
                    {review.work}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Review;
