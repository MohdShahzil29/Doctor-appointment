import React from "react";
import Image from "next/image";
import test1 from "@/assets/Testimonial/1.png";
import test2 from "@/assets/Testimonial/2.png";
import test3 from "@/assets/Testimonial/3.png";
import { StaticImageData } from "next/image";

type TestimonialProps = {
  image: StaticImageData;
  text: string;
  name: string;
  title: string;
};

const testimonials: TestimonialProps[] = [
  {
    image: test1,
    text: "Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.",
    name: "John Carter",
    title: "CEO at Google",
  },
  {
    image: test2,
    text: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit.",
    name: "Sophie Moore",
    title: "MD at Facebook",
  },
  {
    image: test3,
    text: "Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant.",
    name: "Andy Smith",
    title: "CEO Dot Austere",
  },
];

const TestimonialCard: React.FC<TestimonialProps> = ({
  image,
  text,
  name,
  title,
}) => (
  <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center max-w-xs mx-auto">
    <Image src={image} alt={name} className="w-16 h-16 rounded-full mb-4" />
    <p className="italic mb-4">"{text}"</p>
    <p className="font-bold text-teal-600">{name}</p>
    <p className="text-gray-600">{title}</p>
  </div>
);

const Testimonial: React.FC = () => (
  <section className="py-12 flex flex-col items-center">
    <div className="w-full max-w-6xl px-6">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">
        Testimonial
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
        elementum tempus hac tellus libero accumsan.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            text={testimonial.text}
            name={testimonial.name}
            title={testimonial.title}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;
