

interface PropsType {
    setValue:(p:string)=>void
}
const SearchForm =({setValue}:PropsType)=>{

    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <label htmlFor="nutrition_search">검색</label>
            <input type="search" onKeyDown={(e)=>{
                const value = e.currentTarget.value

                if(e.code==="Enter")
                setValue(value)

            }}/>
            <button>조회</button>
        </form>
    )
}

export default SearchForm