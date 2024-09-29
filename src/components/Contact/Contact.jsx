import css from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.text}>
          <AiOutlineUser />
          {name}
        </p>
        <p className={css.text}>
          <AiOutlinePhone />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
