export default function SectionWrapper({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: string;
}) {
  let contentWidth = "max-w-6xl";

  if (classes && classes.indexOf("max-w")) {
    contentWidth = "";
  }
  return (
    <section
      className={`section py-8 lg:py-16 px-4 2xl:px-0 mx-auto ${contentWidth} ${
        classes && classes
      }`}
    >
      {children}
    </section>
  );
}
