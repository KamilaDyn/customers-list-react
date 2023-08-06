import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Button = ({ handleClick, bgColor, children }) => {
  return (
    <button
      className={`rounded border border-sky-800 p-2 m-1 ${
        bgColor ? bgColor : "bg-blue-700"
      } text-white	`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

function AcceptModal() {
  const { modalData } = useContext(AppContext);
  if (!modalData) {
    return null;
  }
  const { title, description, button1, button2 } = modalData;
  return (
    <div className="absolute top-2/4 left-2/4  -translate-x-1/2 -translate-y-1/2  bg-slate-100 w-7/12 border border-neutral-400 shadow-neutral-700 rounded ">
      <header className="bg-slate-400 p-2  text-sky-800 font-bold	uppercase">
        {title}
      </header>
      <div className="p-3.5">
        <p>{description}</p>
        <div className="flex justify-center mt-1.5">
          <Button handleClick={button1.fn} bgColor={button1.color}>
            {button1.text}
          </Button>
          <Button handleClick={button2.fn}>{button2.text}</Button>
        </div>
      </div>
    </div>
  );
}

export default AcceptModal;
