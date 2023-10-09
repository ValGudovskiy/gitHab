import "./MainTableBlock.css";

function MainTableBlock() {
  return (
    <section className="table-block">
      <input
        className="table-block__input"
        type="checkbox"
        id="table"
        name="table"
        value="yes"
      />

      <label className="table-block__lable" htmlFor="table">
        <b className="table-block__label-h3">Сравнение моделей</b>
      </label>

      <h3 className="table-block__title-h3">Сравнение моделей</h3>

      <table className="table-block__table">
        <thead className="table-block__">
          <tr className="table-block__tr">
            <th className="table-block__th">Модель</th>
            <th className="table-block__th">Вес</th>
            <th className="table-block__th">Высота</th>
            <th className="table-block__th">Ширина</th>
            <th className="table-block__th">Толщина</th>
            <th className="table-block__th">Чип</th>
            <th className="table-block__th">Объем памяти</th>
            <th className="table-block__th">Аккумулятор</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-block__tr">
            <td className="table-block__td">iPhon 11</td>
            <td className="table-block__td">194 грамма</td>
            <td className="table-block__td">150,9 мм</td>
            <td className="table-block__td">75,7 мм</td>
            <td className="table-block__td">8,3 мм</td>
            <td className="table-block__td">A13 Bionic chip</td>
            <td className="table-block__td">До 128 Gb</td>
            <td className="table-block__td">До 17 часов</td>
          </tr>
          <tr className="table-block__tr">
            <td className="table-block__td">iPhon 12</td>
            <td className="table-block__td">164 грамма</td>
            <td className="table-block__td">146,7 мм</td>
            <td className="table-block__td">71,5 мм</td>
            <td className="table-block__td">7,4 мм</td>
            <td className="table-block__td">A14 Bionic chip</td>
            <td className="table-block__td">До 256 Gb</td>
            <td className="table-block__td">До 19 часов</td>
          </tr>
          <tr className="table-block__tr">
            <td className="table-block__td table-block__td_bottom">iPhon 13</td>
            <td className="table-block__td table-block__td_bottom">
              174 грамма
            </td>
            <td className="table-block__td table-block__td_bottom">146,7 мм</td>
            <td className="table-block__td table-block__td_bottom">71,5 мм</td>
            <td className="table-block__td table-block__td_bottom">7,65 мм</td>
            <td className="table-block__td table-block__td_bottom">
              A15 Bionic chip
            </td>
            <td className="table-block__td table-block__td_bottom">
              До 512 Gb
            </td>
            <td className="table-block__td table-block__td_bottom">
              До 19 часов
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default MainTableBlock;
