import './Pagination.css'

const Pagination = ({page, pages, changePage}) => {
    let middlePagination;
    console.log(pages)

    if (pages <= 5){
        middlePagination = [...Array(pages)].map((_, ind)=>(
            <button 
                key={ind + 1}
                onclick={()=>changePage(ind + 1 )}
                disabled={page === ind + 1}
            >
                {ind + 1}
            </button>
        ))
    }else{
        const startValue = Math.floor((page - 1) / 5) * 5;
        console.log("start value", startValue)

        middlePagination = (
            <>
                {[...Array(5)].map((_,ind)=>(
                    <button
                        key={startValue + ind + 1}
                        disabled={page === startValue + ind + 1}
                        onClick={()=> changePage(startValue + ind + 1)}
                    >
                        {startValue + ind + 1}
                    </button>
                ))}
                <button>...</button>
                <button onClick={()=>changePage(pages)}>{pages}</button>
            </>
        )

        if(page > 5){
            if(pages - page >= 5){
                middlePagination = (
                    <>
                        <button onClick={()=>changePage(1)}>1</button>
                        <button>...</button>
                        <button onClick={()=> changePage(startValue)}>{startValue}</button>
                        {[...Array(5)].map((_,ind)=>(
                            <button
                                key={startValue + ind + 1}
                                disabled={page === startValue + ind + 1}
                                onClick={()=> changePage(startValue + ind + 1)}
                            >
                                {startValue + ind + 1}
                            </button>
                        ))}
                        <button>...</button>
                        <button onClick={()=>changePage(pages)}>{pages}</button>
                    </>
                )
            }else{
               middlePagination = (
                <>
                    <button onClick={()=>changePage(1)}>1</button>
                    <button>...</button>
                    <button onClick={()=> changePage(startValue)}>{startValue}</button>
                    {[...Array(5)].map((_,ind)=>(
                        <button
                            key={startValue + ind + 1}
                            disabled={page === startValue + ind + 1}
                            onClick={()=> changePage(startValue + ind + 1)}
                            style={
                                pages < startValue + ind + 1 ? {display: "none"} : null
                            }
                        >
                            {startValue + ind + 1}
                        </button>
                    ))}
                </>
               )
            }
        }
    }
    return (
        pages > 1 && (
            <div className="pagination">
                <button className="previous" 
                onClick={()=>changePage(page=> page - 1)} 
                disabled={page === 1}
                >&#171;</button>
                {middlePagination}
                <button className="next" 
                onClick={()=>changePage(page=> page + 1)}
                disabled={page === pages}
                >&#187;</button>
            </div>
        )
    )
}

export default Pagination
