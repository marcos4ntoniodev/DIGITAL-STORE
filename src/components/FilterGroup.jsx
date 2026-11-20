
import './FilterGroup.css';

function FilterGroup({
  title,
  inputType = 'checkbox',
  options = [],
  selectedValues = [],
  onChange,
}) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>

      <div className="filter-group-options">
        {options.map((option, index) => {
          const value = option.value ?? option.text;

          return (
            <label
              className="filter-option"
              key={`${value}-${index}`}
            >
              <input
                type={inputType}
                name={title}
                value={value}
                checked={selectedValues.includes(value)}
                onChange={(event) =>
                  onChange?.(value, event.target.checked)
                }
              />

              <span>{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default FilterGroup;
