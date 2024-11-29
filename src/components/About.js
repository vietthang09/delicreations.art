import PropTypes from "prop-types";
import { STACKS } from "../mock/services";
export default function About() {
  return (
    <div className="flex justify-between py-40">
      {STACKS.map((stack) => (
        <StackItem {...stack} />
      ))}
    </div>
  );
}

StackItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
function StackItem(props) {
  const { title, image } = props;
  return <img src={image} alt={title} className="size-24 filter" />;
}
