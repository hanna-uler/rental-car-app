export default function MileageInput({field, form, prefix, ...props}) {
    const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    form.setFieldValue(field.name, rawValue);
  };

  const displayValue = field.value
    ? `${prefix} ${Number(field.value).toLocaleString("en")}`
    : "";

  return (
    <input
      {...field}        // name, onBlur, etc.
      {...props}        // className, placeholder, etc.
      value={displayValue}
      onChange={handleChange}
    />
  );
}