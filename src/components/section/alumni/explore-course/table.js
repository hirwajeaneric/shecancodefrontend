import React, { useState } from 'react';
import './table.css';

const TableTextEditor = () => {
  const [tableData, setTableData] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const handleCellChange = (rowIndex, colIndex, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][colIndex] = value;
    setTableData(updatedTableData);
  };

  const runCode = () => {
    // Code execution logic here
    console.log('Running code...');
    console.log(tableData);
  };

  return (
    <div className="table-container">
      <table>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  contentEditable={true}
                  onInput={(e) =>
                    handleCellChange(rowIndex, colIndex, e.target.textContent)
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={runCode}>Run Code</button>
    </div>
  );
};

export default TableTextEditor;
