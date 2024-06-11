import { FormEvent } from "react";

export const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
}


/**
 * 디바운스
 * @param func 디바운스를 적용할 함수
 * @param wait 지연시간
 */
export function debounce(func:Function, wait:number=0) {
    let timeout:NodeJS.Timeout;
    
    return function(arg:any) {
      
      clearTimeout(timeout);
      
      timeout = setTimeout(() => {
        func(arg);
      }, wait);
    };
  }
  