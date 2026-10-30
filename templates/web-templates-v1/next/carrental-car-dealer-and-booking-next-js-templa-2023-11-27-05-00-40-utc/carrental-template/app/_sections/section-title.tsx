import { ImMinus } from "react-icons/im";
import { heading_font } from "../fonts";

interface Props {
  title: string;
  subtitle?: string;
  align?: string;
  dashColor?: string;
}

export default function SectionTitle(props: Props) {
  const {
    title = "Section Title",
    subtitle = "List of Our Cars",
    align = "center",
    dashColor = "fill-orange-500",
  } = props;

  return (
    <div className={`section-title mb-4 text-${align}`}>
      <h2 className={`${heading_font.className} text-3xl`}>{title}</h2>
      <p className={`text-md`}>{subtitle}</p>
      <ImMinus size={20} className={`${dashColor} inline`} />
    </div>
  );
}
