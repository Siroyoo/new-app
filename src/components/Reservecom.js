import React,{useEffect, useState} from 'react'
import "../css/reserve.css"

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
    
    const [checkInDate, setCheckInDate] = useState('')
    console.log(checkInDate)
    const [checkOutDate, setCheckOutDate] = useState('')
    console.log(checkOutDate)
  return (
    <div>
        <h2>&nbsp;reserve&nbsp;</h2>
        <form className='re-bar'>
            <div className='startdate' id='re-con'>
                <p>체크인</p>
                <input type='date' onChange={(e)=>{
                    setCheckInDate(e.target.value)
                }} value={checkInDate}/>
            </div>
            <div className='enddate' id='re-con'>
                <p>체크아웃</p>
                <input type='date' onChange={(e)=>{
                    setCheckOutDate(e.target.value)
                }} value={checkOutDate}/>
            </div>
            <div className='re-adult' id='re-con'>
                <p>성인</p>
                <form>
                <button onClick={handleupadult}>+</button>
                        <input type='numder' value={adult} min={0}/>
                    <button onClick={handledownadult}>-</button>
                </form>
                    
            </div>
            <div className='re-child' id='re-con'>
                <p>아이</p>
                <form>
                    <button onClick={handleupchild}>+</button>
                        <input type='numder' value={child} min={0}/>
                    <button onClick={handledownchild}>-</button>
                </form>     
            </div>
            <div className='re-num' id='re-con'>
                <p>총 인원</p>
                <input type='numder' value={totalNum}/>
            </div>
            <div className='re-bt' id='re-con'>
                <button type='submit'>예약하기</button>
            </div>
        </form>
    </div>
  )
 
}
