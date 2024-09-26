export default function Form() {
    return <form className="space-y-4">
        <div>
            <input
                type="text"
                placeholder="Your Name"
                className="bg-[#FAFAFA] lg:w-[520px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[100%]"
            />
        </div>
        <div>
            <input
                type="email"
                placeholder="Your Email"
                className="bg-[#FAFAFA] lg:w-[520px] px-6 py-4 h-25  focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[100%]"
            />
        </div>
        <button onClick={(e) => {
            e.preventDefault()
            alert('')
        }} className=" bg-[rgba(0,181,116,1)] text-[#FFFFFF] font-bold hover:bg-blue-500 transition duration-300 w-38 px-9 py-2.5 h-14">
            Submit
        </button>
    </form>
}