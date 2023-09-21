import React,{useEffect, useState} from 'react'
import "../css/reserve.css"
import DatePicker from './DatePicker'
import Select from 'react-select'

export default function Reservecom() {
    const [adult, setadult] = useState(0)
    const [child, setchild] = useState(0)
    const handleupadult = (e) => {
        e.preventDefault();
        setadult(adult+1);
    }
    const handledownadult = (e) => {
        e.preventDefault();
        if(adult === 0){
            setadult(adult)
        }else{
            setadult(adult-1);
        }
    }
    const handleupchild = (e) => {
        e.preventDefault();
        setchild(child+1);
    }
    const handledownchild = (e) => {
        e.preventDefault();
        if(child === 0){
            setchild(child)
        }else{
            setchild(child-1);
        }
    }
    const getTotalNum = () => setTotalNum(adult + child);
    const [totalNum, setTotalNum] = useState(0);

    useEffect(() => {
        getTotalNum();
    }, [adult, child]);

    const adultOptions = [
        { value : 0, label: 0},
        { value : 1, label: 1},
        { value : 2, label: 2},
        { value : 3, label: 3},
        { value : 4, label: 4},
        { value : 5, label: 5}
    ]
    const handleAdultChange = (e) => {
        const selectAdultes = parseInt(e.target.value, 10)
    }

  return (
    <div>
        <h2>&nbsp;reserve&nbsp;</h2>
        <form className='re-bar' id = 're-content'>
            <div className='datepicker' >
                <p>체크인 / 체크아웃</p>
                <DatePicker/>
            </div>
            <div className='re-adult' >
                <p>성인</p>
                <form>
                <button onClick={handleupadult}>+</button>
                        
                    <button onClick={handledownadult}>-</button>
                </form>
                    
            </div>
            <div className='re-child' >
                <p>아이</p>
                <form>
                    <button onClick={handleupchild}>+</button>
                        <input type='numder' value={child} min={0}/>
                    <button onClick={handledownchild}>-</button>
                </form>     
            </div>
            <div className='re-num' >
                <p>총 인원</p>
                <input type='numder' value={totalNum}/>
            </div>
            <div className='re-bt' >
                <button type='submit'>예약하기</button>
            </div>
        </form>
        {/* <div className='m-reserve'>

        </div> */}
    </div>
  )
 
}
