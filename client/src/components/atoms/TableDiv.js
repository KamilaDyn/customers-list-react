function TableDiv({ children, noPrint }) {
  return (
    <td
      className={`p-2 text-md text-gray-700 hover:white min-w-[50px] lg:min-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[150px] 2xl:max-w-[200px] break-words ${
        noPrint && noPrint
      }`}
    >
      {children}
    </td>
  );
}

export default TableDiv;
