type ChildrnInput = {
    placeholder: string,
    id: string
}

export default function InputComponentReact ({placeholder, id}:ChildrnInput) {
    return(
        <input
            type="text"
            id={id}
            className="block text-left w-56 h-2 p-4 text-sm text-slate-50 font-Roboto font-light border border-gray-300 rounded-lg bg-zinc-800 focus:ring-cyan-900 focus:border-cyan-900 dark:bg-gray-700 dark:border-cyan-900 dark:placeholder-cyan-900 dark:text-white dark:focus:ring-cyan-900 dark:focus:border-cyan-900"
            placeholder={placeholder}
            required
        />
    )
}