interface Props {
  title: string;
  image?: string;
}

export default function PageTitle(props: Props) {
  const { title = "Page Title", image = "/page-title.jpg" } = props;

  return (
    <div
      className="px-12 py-12 lg:py-20 xl:py-24 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <section className="p-0 text-center">
        <h1 className="text-white font-semibold text-2xl md:text-4xl">
          {title}
        </h1>
      </section>
    </div>
  );
}
