import { forwardRef } from 'react'
import { Form } from 'react-bootstrap'

export const InputWithError = forwardRef(function InputWithError(
  { id, errors, name, className, ...props },
  ref
) {
  return (
    <div className="flex flex-col">
      <Form.Control
        data-error={Boolean(errors[name])}
        ref={ref}
        id={id}
        name={name}
        className={`data-[error=true]:!border-red-500 ${className ?? ''}`}
        {...props}
      />
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  )
})
