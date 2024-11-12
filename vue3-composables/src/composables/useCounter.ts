import {ref} from 'vue'
export function useCounter(initvalue =0){
    //响应式变量 number,初值为入参 initvalue
    const count=ref<number>(initvalue)

    const increament=()=>{
        count.value++
    }
    const decreament=()=>{
        count.value--
    }
    return {count,increament,decreament}
}