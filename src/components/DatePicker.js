import React,{useState} from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css';
import "../css/react-date.css";
import { ko } from 'date-fns/esm/locale';

export default function DatePicker() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    
    return (
      <div>
        <ReactDatePicker
        locale={ko}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
      />
      </div>
      
    );
}
