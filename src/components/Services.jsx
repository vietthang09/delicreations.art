import { SERVICES } from "../mock/services";
import PropTypes from "prop-types";

export default function Services() {
  return (
    <div className="container mx-auto space-y-16">
      <h2 className="text-[72px] text-center">
        Collaborate with brands and agencies <br /> to create impactful results.
      </h2>

      <div className="relative border">
        <hr />
        <div className="-rotate-6 absolute -top-2 right-0 left-0 text-center">
          <span className="bg-light text-sm font-semibold py-3 px-8 shadow rounded-3xl">
            Services
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-16">
        {SERVICES.map((serviceItem) => (
          <div className="col-span-3">
            <ServiceItem {...serviceItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

ServiceItem.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};
function ServiceItem(props) {
  const { icon, title, description } = props;
  return (
    <div className="space-y-8">
      <p className="w-12 opacity-80">{icon}</p>
      <h3 className="font-semibold">{title}</h3>
      <p className="opacity-80 ">{description}</p>
    </div>
  );
}
