import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  return (
    <div className="bg-slate-200 py-4 flex justify-items-center	 justify-center	">
      <header className="bg-slate-200" onClick={() => navigation("/")}>
        <h1 className="text-sky-800 font-bold">Customer Management in React</h1>
        <p className="text-center">React app connected with MongoDB</p>
      </header>
    </div>
  );
};

export default Header;
