import { cln } from "./cln";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cln("flex flex-col gap-2", className)}>
      <span className="font-mono text-sm text-black">{`.../${subtitle}`}</span>
      <h2>{title}</h2>
    </div>
  );
};
