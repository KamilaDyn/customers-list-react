function SecondThead({ children, noPrint }) {
  return (
    <th
      className={`px-2 py-3 text-xs  font-bold text-left text-white text-gray-500 uppercase border-r border-b text-center ${
        noPrint && noPrint
      }`}
    >
      {children}
    </th>
  );
}

export default SecondThead;
