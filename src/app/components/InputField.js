'use client'

const InputField = ({className,name,value,onChange,type='text',required=true,errorMessage=''}) => {
    return ( 
        <div className={`${className} flex flex-col gap-2`}>
            <label >{name}</label>
            <input className="p-2 bg-gray-200" value={value} onChange={onChange} type={type} required={required} />
            <p>{errorMessage}</p>
        </div>
     );
}
 
export default InputField;