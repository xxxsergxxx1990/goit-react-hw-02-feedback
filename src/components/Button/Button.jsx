




export const Button = ({options,fnButton}) =>(


    <div>{Object.keys(options).map(option =>(
     <button
     key={option}
     type="button"
     name={option}
     onClick={fnButton}
     >{option}</button>
))}
   
</div>
)




