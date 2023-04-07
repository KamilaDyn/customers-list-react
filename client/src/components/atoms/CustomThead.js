function CustomeThead({ children, colSpan }) {
  return (
    <th
      colSpan={colSpan}
      className="px-3 py-3 text-xs font-semibold tracking-wide text-center text-white	 font-bold text-left text-gray-500 uppercase border-r border-b"
    >
      {children}
    </th>
  );
}
export default CustomeThead;
