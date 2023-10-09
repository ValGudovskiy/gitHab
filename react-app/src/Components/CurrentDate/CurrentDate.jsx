import { useCurrentDate } from "@kundinos/react-hooks";

function CurrentDate(){
    const currentDate = useCurrentDate();

  // Получаем компоненты текущей даты
  // const month = currentDate.getMonth();
  // const date = currentDate.getDate();
  const fullYear = currentDate.getFullYear();
  // const hours = currentDate.getHours();
  // const minutes = currentDate.getMinutes();
  // const seconds = currentDate.getSeconds();

  return (
    <span>
      {`${fullYear}`}
    </span>
  );
}

export default CurrentDate;