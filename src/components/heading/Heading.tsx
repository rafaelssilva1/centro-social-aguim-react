import { BaseHeading } from "./Heading.styles";
import { PropTypes } from "./Heading.types";

const Heading: React.FC<PropTypes> = ({ children, level, ...props }) => {
  return (
    <BaseHeading
      role="heading"
      as={`h${level}`}
      level={level}
      {...props}
    >
      {children}
    </BaseHeading>
  );
};

export default Heading;
