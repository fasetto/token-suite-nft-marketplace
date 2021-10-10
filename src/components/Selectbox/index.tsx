import { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  items?: string[];
}

const Selectbox = ({ items, ...rest }: Props) => {
  return (
    <select className="selectbox" {...rest}>
      <option value="category">Category</option>

      {items?.map(name => (
        <option key={name} className="selectbox__option" value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Selectbox;
