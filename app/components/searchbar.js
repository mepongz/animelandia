export default function Searchbar(){

    return (
        <>
        <div id="search-bar" className="container mx-auto p-4">
            <div className="flex flex-row">
                <div className="basis-1/12 p-1">
                    <p>ANIME TITLE</p>
                </div>
                <div className="basis-10/12 p-1">
                    <div className="relative mb-3">
                        <input
                            type="text" 
                            className="w-full"
                            id="search-box"
                            placeholder="Type here..."
                        />
                    </div>
                </div>
                <div className="basis-1/12 p-1">
                    <button
                        type="button"
                        id="search-button">
                        SEARCH
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}