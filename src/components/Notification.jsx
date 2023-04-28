export default function Notification({type, msg}) {
    if(type === null) return null
    return (
        <>
            <p className="text-[#5F6D7E] font-normal text-[0.875rem]">{msg}</p>
        </>
    )
}
