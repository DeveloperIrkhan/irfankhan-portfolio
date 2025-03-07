interface ITitleProps {
  title: string;
}
const Title = ({ title }: ITitleProps) => {
  return (
    <h2  data-aos="fade-down-right" className="md:text-3xl text-xl font-bold mb-5 bg-gradient-to-r from-amber-500 to-amber-300 text-center bg-clip-text text-transparent">
      {title}
    </h2>
  );
};

export default Title;
