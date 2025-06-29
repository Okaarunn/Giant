import img from "/giant.png";

export default function Company() {
  return (
    <div className="flex items-center justify-center ">
      <img
        src={img}
        alt="Company Logo"
        className="w-40 object-contain drop-shadow-sm"
      />
    </div>
  );
}
