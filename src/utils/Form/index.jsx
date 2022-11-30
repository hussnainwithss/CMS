export const generateOptionsFromList = (
    optionList,
    optionLabelField,
    optionValueField,
) =>
    optionList.map((option) => (
        <option value={option[optionValueField]} key={option[optionValueField]}>
            {option[optionLabelField]}
        </option>
    ));
