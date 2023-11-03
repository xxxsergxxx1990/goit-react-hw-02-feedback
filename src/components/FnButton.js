export const FnButton = ({ options, updateClicks }) => (
  <>
    {Object.keys(options).map(option => (
      <button key={option} type="button" name={option} onClick={updateClicks}>
        {option}
      </button>
    ))}
  </>
)
