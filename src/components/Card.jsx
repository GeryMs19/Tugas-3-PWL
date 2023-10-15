// eslint-disable-next-line react/prop-types
const Card = ({ name, email, message }) => {
  return (
    <div className="card bg-gray-200 px-4 py-2 rounded-md">
      <h2 className="text-lg font-bold">{name}</h2>
      <p>{email}</p>
      <p>{message}</p>
    </div>
  );
};

export default Card;
